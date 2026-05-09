## 项目开发文档

### 1. 项目介绍

这是Wiki Truth 项目的Marketing 页面，主要用于展示项目的核心价值和功能。

### 2. 项目技术栈

- React
- TailwindCSS
- TypeScript
- Vite
- motion (动画库)

### 3. 项目结构

```
src/
├── assets/           # 图片、字体等静态资源
├── components/       # 组件
│   ├── base/         # 基础组件
│   ├── layout/       # 布局组件
│   ├── sections/     # 页面模块
│   └── utils/        # 工具组件
├── content/          # 内容（英文）
├── hooks/            # 自定义hooks
├── styles/           # 样式
│   ├── index.css     # 主样式入口
│   ├── custom.css    # 自定义样式
│   ├── animate.css   # 动画样式
│   └── shadow.css    # 阴影样式
├── pages/            # 页面
├── App.tsx           # 主页面
└── main.tsx          # 主入口
```

### 4. 样式开发约束

1. 不要在集成组件中编写太多的样式代码，尽量复用基础组件，或者是新建一个基础组件。因为太多的样式代码容易导致样式混乱，难以维护。

2. 在`layout`布局组件中: `section.tsx`用于包裹页面模块它定义了通用的section样式，`Container.tsx`用于包裹页面模块中的内容。它定义了通用的容器宽度等等。

### 5. 需求分析

1. 可复用的基础组件的开发：如 `src/components/base/button.tsx`, 按照此格式开发基础组件。
2. 样式风格，保持一致的样式风格，由`src/styles`统一管理，并且每种类型的样式要拆分独立的文件进行管理，比如：与动画相关的，就放在`src/styles/animate.css`中，与阴影相关的，就放在`src/styles/shadow.css`中。

### 6. 重要提示（必须遵守）

1. 不要在`src/styles/`中定义过多重复的样式代码，要经常审查styles目录下的文件，确保样式的复用性和简洁性。
