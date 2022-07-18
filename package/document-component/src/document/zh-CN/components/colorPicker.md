::: anchor
:::

::: title 基础使用
:::

::: demo 使用 `lay-color-picker` 标签, 创建颜色选择器。

<template>
  <lay-color-picker v-model="color"></lay-color-picker>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const color = ref("#009688");

    return {
      color
    }
  }
}
</script>

:::

::: title 预设颜色
:::

::: demo 通过 `preset` 属性, 预设可选的颜色列表。

<template>
  <lay-color-picker v-model="color" :preset="preset"></lay-color-picker>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const color = ref("#009688");

    const preset = ref(["#009688", "#1e9fff", "#ffb800", "#ff5722", "#5fb878"])

    return {
      color,
      preset
    }
  }
}
</script>

:::

::: title 取色器
:::

::: demo

<template>
  <lay-color-picker v-model="color" eyeDropper></lay-color-picker>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const color = ref("#009688");

    return {
      color
    }
  }
}
</script>

:::

::: title Icon Picker 属性
:::

::: table

|            |          |     |
| ---------- | -------- | --- |
| v-model    | 选中色   | --  |
| preset | 预设颜色 | --  |
| eyeDropper | 取色器 | Boolean  |

:::

::: contributor colorPicker
:::

::: previousNext colorPicker
:::