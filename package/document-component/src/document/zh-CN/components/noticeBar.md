::: anchor
:::

::: title 基本介绍
:::

::: describe 全局展示操作反馈信息。
:::

::: title 基础使用
:::

::: demo

<template>
    <lay-notice-bar text="以写作为工具，为道途，先帮助自己一程，再以自己的领悟帮助他人一程, 这是一种服务 。" mode="link"></lay-notice-bar>
</template>

<script>
export default {
  setup() {

    return {
    }
  }
}
</script>

:::

::: title 使用图标
:::

::: demo

<template>
    <lay-notice-bar leftIcon="layui-icon-mute" text="最好的爱是两个人彼此做个伴，不要束缚，不要缠绕，不要占有，不渴望从对方那里得到，只是并肩站在一起，看看这个世界。"></lay-notice-bar>
</template>

<script>
export default {
  setup() {

    return {
    }
  }
}
</script>

:::

::: title 允许关闭
:::

::: demo

<template>
    <lay-notice-bar leftIcon="layui-icon-mute" rightIcon="layui-icon-close" text="所有发生过的都是既定的。是应该发生。只能发生。" mode="closeable" background="#ecf5ff"	></lay-notice-bar>
</template>

<script>
import { ref } from "vue"

export default {
  setup() {

    const visible = ref(true);

    return {
        visible
    }
  }
}
</script>

:::

::: title 垂直滚动
:::

::: demo
<template>
    <lay-notice-bar :scrollable="true" leftIcon="layui-icon-mute" :textlist="list">
    </lay-notice-bar>
</template>

<script>
import { reactive } from "vue"

export default {
  setup() {

    const list = reactive([
      { id: '1', text: '条目一' },
      { id: '2', text: '条目二' },
      { id: '3', text: '条目三' },
      { id: '4', text: '条目四' },
    ])
    return {
        list,
    }
  }
}
</script>

:::

::: title Notice Bar 属性
:::

::: table

| 事件 | 描述     | 参数                  |
| ---- | -------- | --------------------- |
| mode | 模式 | 'link' 'closeable' |
| text | 内容 | 滚动内容 |
| leftIcon | 左侧图标 | -- |
| rightIcon | 右侧图标 | -- |
| scrollable | 是否开启垂直滚动|true,false|
|  textlist  | 垂直滚动内容| Array|
:::

::: contributor noticeBar
:::  

::: previousNext noticeBar
:::
