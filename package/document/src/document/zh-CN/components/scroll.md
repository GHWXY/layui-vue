::: anchor
:::

::: title 基本介绍
:::

::: describe 虚拟滚动, 常用于美化浏览器原生滚动条。
:::

::: title 基础使用
:::

::: demo 使用 `lay-scroll` 标签, 创建一个虚拟滚动容器

<template>
  <lay-scroll height="200px" style="background-color:whitesmoke;">
    <lay-panel v-for="(n,index) in 50" :key="n" style="margin:10px;padding:10px;">内容</lay-panel>
  </lay-scroll>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {

    return {
    }
  }
}
</script>

:::

::: title Scroll 属性
:::

::: table

| 属性        | 描述     | 可选值 |
| ----------- | -------- | ------ |
| height      |   高度   | --     |
| scrollWidth |   滑块宽度   | --     |
| scrollColor |   滑块颜色   | --     |
| slotColor   |   滑槽颜色   | --     |

:::

 

::: previousNext field
:::