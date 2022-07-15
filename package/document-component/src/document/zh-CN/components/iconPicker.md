::: anchor
:::

::: title 基本介绍
:::

::: describe 内置 icon 图标选择组件, 常用于权限管理, 菜单定制。
:::

::: title 基础使用
:::

::: demo 使用 lay-icon-picker 标签, 创建图标选择器

<template>
  <lay-icon-picker type="layui-icon-face-smile"></lay-icon-picker>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {

    const icon = ref("layui-icon-home")

    return {
    }
  }
}
</script>

:::

::: title 默认选择
:::

::: demo

<template>
  <lay-icon-picker v-model="icon" type="layui-icon-face-smile"></lay-icon-picker>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {

    const icon = ref("layui-icon-home")

    return {
    }
  }
}
</script>

:::

::: title 开启分页 通过 page 属性开启图标列表的分页展示
:::

::: demo

<template>
  <lay-icon-picker v-model="icon" type="layui-icon-face-smile" page></lay-icon-picker>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {

    const icon = ref("layui-icon-home")

    return {
    }
  }
}
</script>

:::

::: title 开启搜索 通过 showSearch 开启图标列表的搜索功能
:::

::: demo

<template>
  <lay-icon-picker v-model="icon" type="layui-icon-face-smile" page showSearch></lay-icon-picker>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {

    const icon = ref("layui-icon-home")

    return {
    }
  }
}
</script>

:::

::: title 静态面板
:::

::: demo

<template>
  <lay-icon-picker v-model="icon" type="layui-icon-face-smile" page showSearch position="static"></lay-icon-picker>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {

    const icon = ref("layui-icon-home")

    return {
    }
  }
}
</script>

:::

::: title icon-picker 属性
:::

::: table

|            |          |     |
| ---------- | -------- | --- |
| v-model    | 默认值   | --  |
| page       | 开启分页 | --  |
| showSearch | 启用搜索 | --  |

:::

::: contributor iconPicker
:::  

::: previousNext iconPicker
:::