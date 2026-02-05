---
trigger: model_decision
description: This rule be used for tailwind-css UI develop.
---

# 在tailwind-css UI前端UI开发的规则

1. **样式代码分行**：编写组件样式时，不要将所有的样式类都写在同一行，而是应该将不同类型的样式代码分行编写,例如：

```javascript
<div className="
    glass-panel // custome
    border border-primary/10 // border
    rounded-xl
    px-6 py-3
    flex items-center justify-between
    shadow-[0_0_20px_rgba(0,0,0,0.5)]
      ">
<div>

```
