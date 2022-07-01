::: anchor
:::

::: title 基本介绍
:::

::: describe 提供极致的分页逻辑，既可轻松胜任异步分页，也可作为页面刷新式分页。
:::

::: title 基础使用
:::

::: demo 使用 `lay-page` 标签, 创建分页

<template>
  <lay-page v-model="currentPage" :limit="limit" 	@limit="limit = $event" :total="total" :show-page="showPage"></lay-page>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {

    const limit = ref(20)
    const total = ref(100)
    const showPage = ref(true)
    const currentPage = ref(2);

    return {
      limit,
      total,
      showPage,
      currentPage
    }
  }
}
</script>

:::

::: title 简单模式
:::

::: demo

<template>
  <lay-page :limit="limit"	@limit="limit = $event" :total="total"></lay-page>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {

    const limit = ref(20)
    const total = ref(100)

    return {
      limit,
      total
    }
  }
}
</script>

:::

::: title 插槽使用
:::

::: demo

<template>
  <lay-page :limit="limit"	@limit="limit = $event" :total="total">
    <template v-slot:prev>上</template>
    <template v-slot:next>下</template>
  </lay-page>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {

    const limit = ref(20)
    const total = ref(100)

    return {
      limit,
      total
    }
  }
}
</script>

:::

::: title 不同主题
:::

::: demo

<template>
  <lay-page :limit="limit"	@limit="limit = $event" :total="total" :show-page="showPage" theme="red"></lay-page>
  <br>
  <lay-page :limit="limit"	@limit="limit = $event" :total="total" :show-page="showPage" theme="blue"></lay-page>
  <br>
  <lay-page :limit="limit"	@limit="limit = $event" :total="total" :show-page="showPage" theme="orange"></lay-page>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {

    const limit = ref(20)
    const total = ref(100)
    const showPage = ref(true)

    return {
      limit,
      total,
      showPage
    }
  }
}
</script>

:::

::: title 指定分页容量
:::

::: demo

<template>
  <lay-page :limit="limit" :total="total" showCount showPage :limits="[10,50,100,200]" @limit="limit=$event"></lay-page>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {

    const limit = ref(20)
    const total = ref(100)

    return {
      limit,
      total
    }
  }
}
</script>

:::

::: title 每页数量切换事件(limit)
:::

::: demo

<template>
  <lay-page :limit="limit" showPage showCount :total="total" @limit="limit=$event" :show-limit="showLimit" ></lay-page>
  <div>每页数量:{{limit}}</div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {

    const limit = ref(5)
    const total = ref(9999)
    const showLimit = ref(true)

    return {
      limit,
      total,
      showLimit,
    }
  }
}
</script>

:::

::: title 完整分页
:::

::: demo

<template>
  <lay-page :limit="limit1" :pages="pages1" :total="total1" :show-count="showCount1" @limit="limit1=$event" :show-page="showPage1" :show-limit="showLimit1" :show-refresh="showRefresh1" :showSkip="showSkip1"></lay-page>
  每页数量:{{limit1}}
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {

    const limit1 = ref(5)
    const total1 = ref(99)
    const showCount1 = ref(true)
    const showPage1 = ref(true)
    const showLimit1 = ref(true)
    const showRefresh1 = ref(true)
    const showSkip1 = ref(true)
    const pages1 = ref(6);

    return {
      limit1,
      total1,
      pages1,
      showCount1,
      showPage1,
      showLimit1,
      showRefresh1,
      showSkip1
    }
  }
}
</script>

:::

::: title 页码切换事件(jump)
:::

::: demo

<template>
  <lay-page :limit="limit" :total="total" @jump="jump" 	@limit="limit = $event" :show-page="showSkip"></lay-page>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {

    const limit = ref(20)
    const total = ref(100)
    const showPage = ref(true)
    const showSkip = ref(true)
    const jump = function({ current }) {
      console.log("当前页:" + current)
    }

    return {
      limit,
      total,
      jump,
      showPage,
      showSkip
    }
  }
}
</script>

:::

::: title Page 属性
:::

::: table

| 属性        | 描述         | 默认值  |
| ----------- | ------------ | ------- |
| v-model     | 当前页       | --      |
| limit       | 每页数量     | --      |
| total       | 总条数       | --      |
| showCount   | 显示总数     | `false` |
| showPage    | 显示每页     | `false` |
| showLimit   | 显示每页数量 | `false` |
| showRefresh | 显示刷新按钮 | `false` |
| showSkip    | 显示跳转     | `false` |
| pages       | 显示切页按钮数量     | `10` |
| limits       | 切换每页数量的选择项     | `[10,20,30,40,50]` |
| theme       | 主题色        |`green`|

:::

::: title Page 事件
:::

::: table

| 事件 | 描述     | 参数                  |
| ---- | -------- | --------------------- |
| jump | 切换回调 | { current: 当前页面 } |
| limit | 每页数量变化 | 变化后的值 |

:::

::: title Page 插槽
:::

::: table

| 插槽 | 描述   | 默认值 |
| ---- | ------ | ------ |
| prev | 上一页 | 上一页 |
| next | 下一页 | 下一页 |

:::

::: contributor page
:::  

::: previousNext page
:::