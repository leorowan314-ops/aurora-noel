# MediaPipe 资源来源与加载约定（assets/mediapipe）

本项目（`aurora-noel`）在浏览器端使用 `@mediapipe/tasks-vision` 的 **HandLandmarker** 做手部关键点识别。
本目录存放运行时所需的 WASM 运行时与官方手部关键点模型，全部**本地自托管**，运行时不访问任何 CDN。

生成/校验时间：2026-11-26（Asia/Shanghai）

## 文件清单

| 文件 | 大小（字节） | SHA256 |
| --- | ---: | --- |
| `assets/mediapipe/hand_landmarker.task` | 7,819,105（约 7.46 MiB） | `fbc2a30080c3c557093b5ddfc334698132eb341044ccee322ccf8bcf3607cde1` |
| `assets/mediapipe/wasm/vision_wasm_internal.wasm` | 14,665,716（约 13.99 MiB） | `225bc06c0f51a9cf31fea0e9e0b0243e9e01fb5ef332cc1a7fa6656dbdfdaabf` |
| `assets/mediapipe/wasm/vision_wasm_internal.js` | 336,624（约 328.7 KiB） | `2aa5fd3fdd3d8208cd7587df0bb19fb6925c4ea16a76dd025aedc1f64d6a6309` |

（WASM 两个文件来自本项目已安装的 `@mediapipe/tasks-vision@1.2.3`，逐字节复制、未做修改；模型直接从 Google 官方 URL 下载。）

## 来源

- **wasm 运行时**：`node_modules/@mediapipe/tasks-vision/wasm/vision_wasm_internal.js` 与
  `node_modules/@mediapipe/tasks-vision/wasm/vision_wasm_internal.wasm`
  - npm 包版本：`@mediapipe/tasks-vision@1.2.3`
  - 复制命令（在项目根目录执行）：
    ```powershell
    New-Item -ItemType Directory -Force assets/mediapipe/wasm | Out-Null
    Copy-Item node_modules/@mediapipe/tasks-vision/wasm/vision_wasm_internal.js  assets/mediapipe/wasm/ -Force
    Copy-Item node_modules/@mediapipe/tasks-vision/wasm/vision_wasm_internal.wasm assets/mediapipe/wasm/ -Force
    ```
- **手部模型**：`hand_landmarker` float16 / 版本 1
  - 官方 URL：<https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task>
  - 下载命令：`curl.exe -L --fail -o assets/mediapipe/hand_landmarker.task <上面的 URL>`
  - 文件为 ZIP 容器（文件头 `00 00 50 4b 03 04`），非 HTML 错误页；被 MediaPipe 成功解析（见冒烟测试）。

## 用途

| 文件 | 用途 |
| --- | --- |
| `hand_landmarker.task` | HandLandmarker 的 TFLite 模型包（检测 + 21 点关键点），`baseOptions.modelAssetPath` 指向它 |
| `vision_wasm_internal.js` | MediaPipe Tasks 的 Emscripten JS 加载器（`FilesetResolver` 生成的 `wasmLoaderPath`），以普通 `<script>` 注入 |
| `vision_wasm_internal.wasm` | 上者的 WASM 二进制（SIMD 版本）；**不是** `vision_wasm_module_internal.*` |

## 加载路径约定（网页代码）

```js
FilesetResolver.forVisionTasks("/assets/mediapipe/wasm")   // 目录 basePath，结尾不要带文件名
baseOptions.modelAssetPath = "/assets/mediapipe/hand_landmarker.task"
```

- `FilesetResolver.forVisionTasks(basePath, useModule = false)` 只是**拼路径**，不会立即发请求：
  它返回 `{ wasmLoaderPath: `${basePath}/vision_wasm_internal.js`,
  wasmBinaryPath: `${basePath}/vision_wasm_internal.wasm` }`。
- 因此 **第二个参数必须保持默认 `false`**。传 `true` 会去找
  `vision_wasm_module_internal.js/.wasm` —— 本目录没有这两个文件，会 404。
- 目录名固定为 `wasm/`，文件名固定为 `vision_wasm_internal.*`、`hand_landmarker.task`，不要改名。
- 模型与 wasm 都通过同源 `fetch` 加载；页面必须由静态 HTTP 服务器提供（`file://` 打开会失败）。
- ES module 运行时入口：`/node_modules/@mediapipe/tasks-vision/vision_bundle.mjs`
  （`import { FilesetResolver, HandLandmarker } from "/node_modules/@mediapipe/tasks-vision/vision_bundle.mjs"`）。

## 静态服务器的 MIME 要求

| 扩展名 | 必须的 `Content-Type` | 原因 |
| --- | --- | --- |
| `.js` / `.mjs` | `text/javascript`（`application/javascript` 也可） | 经典 `<script>` 与 ES module 加载 |
| `.wasm` | `application/wasm` | MediaPipe 加载器优先走 `WebAssembly.instantiateStreaming`；错误 MIME 会退回 ArrayBuffer 解析（能跑但会打警告，且更慢） |
| `.task` | 任意（建议 `application/octet-stream`） | 以 ArrayBuffer 读取，不校验 MIME |

若最终把页面打包到 `dist/` 再服务，构建脚本需要把整个 `assets/mediapipe/` 原样复制过去（含 `wasm/` 子目录）。

## 校验命令

```powershell
# 校验 SHA256（应输出上表中的值）
Get-ChildItem assets/mediapipe -Recurse -File | Get-FileHash -Algorithm SHA256

# 端到端冒烟测试（自启静态服务器 + headless Edge，通过时退出码 0）
node tools/mp-smoke.mjs
```

## 冒烟测试记录（2026-11-26）

环境：Windows / Node v24.21.0 / Microsoft Edge 158.0.4370.33（headless，puppeteer-core 25.x）。

- `FilesetResolver.forVisionTasks("/assets/mediapipe/wasm")` + `HandLandmarker`（`runningMode: "IMAGE"`,
  `numHands: 2`, `delegate: "CPU"`）创建成功，`detect()` 对 640×480 canvas 返回
  `{ hands: 0 }`（空白/几何图形画面无手，符合预期），页面 `ok: true`。
- 首次创建耗时约 0.33 s（含模型 7.8 MB 本地加载），单次 `detect()` 约 70 ms（CPU）。
- headless + SwiftShader 下 WebGL 2.0 可用（`GL version: 3.0 ... WebKit WebGL`），
  另外单独探测 `delegate: "GPU"` **也能创建并推理成功**（约 849 ms/次，明显慢于 CPU，仅用于兼容性确认）。
- 控制台正常日志包含 `Graph successfully started running.` / `Created TensorFlow Lite XNNPACK delegate for CPU.`；
  退出时 `Graph finished closing successfully.`。`NORM_RECT without IMAGE_DIMENSIONS` 等是 MediaPipe 内部提示，不影响。
- 未发现 404/请求失败（favicon 已用 `data:` 图标避免）。
