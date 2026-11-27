# assets/photos — 圣诞树页面照片素材

> **现在的维护方式**：双击「管理照片」（`管理照片.bat`）打开本机管理页，加/换/删照片、改说明、挑精选、排序，改完点「发布上线」。管理页会自己生成 `manifest.json` / `manifest.js` / `manifest-file.js` 并压缩图片（最长边 1200px、JPEG 0.86、32px 模糊占位），**不需要手工改本文件**。
>
> 下面这些参数和记录，是最初那 18 张照片一次性批量处理时的说明，留作参考；换了照片后数量 / 体积 / 精选表都会变，以管理页显示的为准。

由 `raw/` 的 18 张原图一次性批量处理生成（处理脚本 `tools/_photo.py` 已按约定删除）。
目录内只有本页素材：18 张 `*.jpg` + `manifest.json` + `favicon.png` + 本说明。

## 处理参数

- **方向**：`ImageOps.exif_transpose` 自动转正。原始文件本身没有 EXIF Orientation，全部已是正确朝向。
- **色彩**：统一转 RGB / sRGB。原图均无 ICC profile（按 sRGB 处理）；`songyang1.png` 实际是 WEBP 内容且为 RGBA（alpha ≈ 255），按白底合成后转 RGB。
- **尺寸**：最长边缩放到 **1200px**（不放大），LANCZOS 重采样。
- **局部增强**：只对明显偏暗的两张做 `ImageOps.autocontrast(cutoff=1)`：`disney2`（烟花夜景）、`disney6`（玩偶货架）；其余保持原片色调。
- **锐化**：全部叠加轻微 `UnsharpMask(radius=1.0, percent=55, threshold=3)`，阈值较高以避免放大噪点、不动肤色。
- **编码**：JPEG `quality=86, optimize=True, progressive=True, subsampling=4:2:2`，去除 EXIF / ICC。
- **命名**：统一小写、无空格；`songyang1.png` → `songyang1.jpg`。

## 附带产物

- `manifest.json`：照片清单（UTF-8，无 BOM）。
- `favicon.png`：64×64 PNG，从 `disney3.jpg` 特写人像裁切。
- 每张照片另生成 32px 宽模糊占位图（JPEG quality=50，base64 data URI），内嵌在 manifest 的 `blur` 字段，用于加载时先显示模糊底图。

## manifest.json 字段

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| `version` | int | 清单版本，当前为 `1` |
| `photos` | array | 18 个照片对象，按 `order` 排列 |
| `id` | string | `p01`…`p18`，与 `order` 对应，唯一 |
| `file` | string | 文件名，如 `disney1.jpg` |
| `src` | string | 相对站点根目录的路径，如 `assets/photos/disney1.jpg` |
| `w` / `h` | int | 输出像素宽高（最长边 1200） |
| `aspect` | number | `w / h`，保留 3 位小数（约 0.567–0.75，全部竖幅） |
| `place` | string | 拍摄地：`澳门` / `迪士尼` / `公园` / `松阳` |
| `caption` | string | 一句温柔的中文说明（8–16 字，含地点） |
| `dominant` | [r,g,b] | 中心区域主色调：取画面中心 70% 区域，缩到 64px 后剔除过白/过黑像素再取中位数 |
| `blur` | string | `data:image/jpeg;base64,...` 的 32px 宽模糊占位图 |
| `featured` | bool | 是否选中环绕圣诞树展示（恰好 8 张为 `true`） |
| `order` | int | 1–18，按文件名排序：`disney1-9` → `moon1-6` → `park1-2` → `songyang1` |

## featured 的 8 张

| id | 文件 | 说明 |
| --- | --- | --- |
| p01 | disney1.jpg | 迪士尼 · 城堡前的我们（横竖构图最佳，建议首图） |
| p02 | disney2.jpg | 迪士尼 · 烟花落在肩上（夜景氛围） |
| p03 | disney3.jpg | 迪士尼 · 米奇耳朵靠在一起（贴脸合影特写） |
| p05 | disney5.jpg | 迪士尼 · 镜头里的两个人（合影自拍） |
| p09 | disney9.jpg | 迪士尼 · 一串糖葫芦的甜（明亮单人） |
| p10 | moon1.jpg | 澳门 · 玻璃窗前的我们（合影） |
| p16 | park1.jpg | 公园 · 风吹过的白色裙摆（氛围人像） |
| p18 | songyang1.jpg | 松阳 · 老砖墙与梧桐（氛围人像） |

## 备注 / 已知情况

- **全部 18 张原图都是竖幅**（3:4 或 9:16），没有任何横幅照片，因此 featured 只能做到「合影 + 单人 + 氛围」平衡，无法满足「横竖构图各半」；具体比例可直接读 `w`/`h`/`aspect`，UI 侧请按竖幅设计卡片。
- `disney8.jpg` 画面左下角原片带有白色手绘涂鸦（非处理引入），未做去除，因此未入选 featured。
- `disney2.jpg` 夜景烟花有轻微运动模糊，属原片特性；已做轻度提亮。
- `moon5.jpg` 为 9:16 超高竖图（675×1200）。
- **体积**：18 张照片合计约 **4.21 MB**（目标 < 6 MB）；`manifest.json` 约 23.3 KB；`favicon.png` 约 7.1 KB。
