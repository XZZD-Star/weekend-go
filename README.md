# 周末去哪儿 · 落地页 (int-landing-page)

为城市青年找到更合心意的周末活动。告别选择困难，把时间留给体验。

## 技术栈

- **Next.js 14** App Router + RSC
- **TypeScript** 严格模式
- **Tailwind CSS v4** (CSS-first 配置)
- **next/font** 自动加载 Noto Sans SC + Inter
- **零运行时 UI 库依赖** — 所有图标为内联 SVG，全部动效用 CSS 实现

## 设计依据

| 准则 | 来源 | 体现 |
| --- | --- | --- |
| 单一 Action Blue 强调色 | Apple 风格模板 00002 | `#0066CC` 用于所有 CTA、链接、check |
| 字体梯级：17 / 21 / 30 / 36 / 44 | Apple SF Pro 替代方案 | Noto Sans SC + Inter |
| Bento 不对称网格 | design-taste-frontend-v1 | Features 第 1 行 1 大 + 2 小 |
| 按钮 press 反馈 | emil-design-eng | `.btn:active { transform: scale(0.97) }` |
| Stagger 入场动画 | design-taste + emil | `.stagger > *:nth-child(n)` + 60ms 递增 |
| `prefers-reduced-motion` | emil-design-eng | 减少动效保护前庭敏感用户 |
| `min-h-[100dvh]` | design-taste viewport stability | 移动端避免地址栏跳动 |
| 移动优先响应式 | design-taste | 所有 section 内部用 `max-w-[1440px]` 容器 |

## 动效清单

| 元素 | 动效 | 时长 | 缓动 |
| --- | --- | --- | --- |
| 区块入场 | `translateY(12px) + opacity 0 → 0` | 600ms | `cubic-bezier(0.23, 1, 0.32, 1)` |
| Stagger 序列 | 每项递增 60ms | — | — |
| 按钮按下 | `scale(0.97)` | 160ms | `cubic-bezier(0.16, 1, 0.3, 1)` |
| 卡片悬停 | `translateY(-2px)` + 阴影 | 240ms | `cubic-bezier(0.16, 1, 0.3, 1)` |
| 图片悬停 | `scale(1.04)` | 600ms | `cubic-bezier(0.23, 1, 0.32, 1)` |
| FAQ 展开 | `+` 旋转 45° | 200ms | ease |
| 减少动效 | 全部转为 fade-only | 200ms | ease |

## 启动

```bash
# 1. 安装依赖
cd int-landing-page
npm install

# 2. 启动开发服务器
npm run dev

# 3. 浏览器打开
# http://localhost:3000
```

## 构建生产版本

```bash
npm run build
npm run start
```

## 目录结构

```
int-landing-page/
├── app/
│   ├── globals.css        # Tailwind v4 + 设计 token + 动效
│   ├── icons.tsx          # 17 个内联 SVG 图标
│   ├── layout.tsx         # 字体加载 + metadata
│   └── page.tsx           # 10 个 section 主页面
├── lib/
│   └── data.ts            # 真实感活动 / 用户 / 价格数据
├── package.json
├── postcss.config.mjs     # Tailwind v4 PostCSS 插件
├── next.config.mjs
├── tsconfig.json
└── README.md
```

## 后续可优化

- 把 `app/page.tsx` 中的各 section 拆为独立组件文件
- 引入 `framer-motion` 处理复杂 stagger 与 layout 动画
- 接入真实活动数据 API（替换 `lib/data.ts` 的静态数据）
- 头像 / 活动封面图替换为业务 CDN
