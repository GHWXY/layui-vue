::: anchor
:::

::: title 基本介绍
:::

::: describe 展示行列数据。
:::

::: title 基础使用
:::

::: demo 使用 `lay-table` 标签, 创建表格

<template>
  <lay-table :columns="columns1" :dataSource="dataSource1"></lay-table>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {

    const columns1 = [
      {
        title:"账户",
        width:"200px",
        key:"username"
      },{
        title:"密码",
        width: "180px",
        key:"password"
      },{
        title:"年龄",
        width: "180px",
        key:"age"
      },{
        title:"备注",
        width: "180px",
        key:"remark",
        ellipsisTooltip: true,
      }
    ]

    const dataSource1 = [
      {username:"root", password:"root", age:"18", remark: 'layui - vue（谐音：类 UI) '},
      {username:"root", password:"root", age:"18", remark: 'layui - vue（谐音：类 UI) '},
      {username:"woow", password:"woow", age:"20", remark: 'layui - vue（谐音：类 UI) 是 一 套 Vue 3.0 的 桌 面 端 组 件 库.layui - vue（谐音：类 UI) 是 一 套 Vue 3.0 的 桌 面 端 组 件 库.'}
    ]

    return {
      columns1,
      dataSource1
    }
  }
}
</script>

:::

::: title 不同尺寸
:::

::: demo

<template>
  <lay-form>
    <lay-radio v-model="size2" name="action" value="sm">sm</lay-radio>
    <lay-radio v-model="size2" name="action" value="md">md</lay-radio>
    <lay-radio v-model="size2" name="action" value="lg">lg</lay-radio>
  </lay-form>
  <lay-table :columns="columns2" :dataSource="dataSource2" :size="size2"></lay-table>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {

    const columns2 = [
      {
        title:"账户",
        width:"200px",
        key:"username"
      },{
        title:"密码",
        width: "180px",
        key:"password"
      },{
        title:"年龄",
        width: "180px",
        key:"age"
      }
    ]

    const dataSource2 = [
      {username:"root", password:"root", age:"18"},
      {username:"woow", password:"woow", age:"20"}
    ]
    
    const size2 = ref('md');

    return {
      size2,
      columns2,
      dataSource2
    }
  }
}
</script>

:::

::: title 开启分页
:::

::: demo

<template>
  <lay-table :columns="columns3" :dataSource="dataSource3" :page="page3" @change="change3"></lay-table>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    
    const page3 = {
      total: 100,
      limit: 10,
      current: 2
    }

    const change3 = function({ current }){
      console.log("当前页:" + JSON.stringify(current))
    }

    const columns3 = [
      {
        title:"账户",
        width:"200px",
        slot:"username",
        key:"username"
      },{
        title:"密码",
        width: "180px",
        slot:"password",
        key:"password"
      },{
        title:"年龄",
        width: "180px",
        key:"age"
      }
    ]

    const dataSource3 = [
      {username:"root", password:"root", age:"18"},
      {username:"woow", password:"woow", age:"20"}
    ]

    return {
      page3,
      change3,
      columns3,
      dataSource3
    }
  }
}
</script>

:::

::: title 开启排序
:::

::: demo

<template>
  <lay-table :columns="columns4" :dataSource="dataSource4"></lay-table>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {

    const columns4 = [
      {
        title:"姓名",
        width:"200px",
        key:"name"
      },{
        title:"成绩",
        width: "180px",
        key:"score",
        sort: true
      }
    ]

    const dataSource4 = [
      {name:"张三", score:100},
      {name:"李四", score:80},
      {name:"王二", score:99},
      {name:"麻子", score:92},
      {name:"无名", score:60},
      {name:"有名", score:70},
    ]

    return {
      columns4,
      dataSource4
    }
  }
}
</script>

:::

::: title 开启子表
:::

::: demo 当表格内容较多不能一次性完全展示时。

<template>
  <lay-table :columns="columns6" :dataSource="dataSource6">
      <template v-slot:expand="{ data }"> 
        {{ data }} 
      </template>
  </lay-table>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {

    const columns6 = [
      {
        title:"姓名",
        width:"200px",
        key:"name"
      },{
        title:"成绩",
        width: "180px",
        key:"score"
      }
    ]

    const dataSource6 = [
      {name:"张三", score:100},
      {name:"李四", score:80},
      {name:"王二", score:99},
      {name:"麻子", score:92},
      {name:"无名", score:60},
      {name:"有名", score:70},
    ]

    return {
      columns6,
      dataSource6
    }
  }
}
</script>

:::

::: title 树形表格
:::

::: demo 树形数据的展示，当数据中有 children 字段时会自动展示为树形表格, 通过设置 indentSize 以控制每一层的缩进宽度, 使用 childrenColumnName 替换默认字段

<template>
  <lay-table :columns="columns7" :dataSource="dataSource7">
    <template #score="{ data }">{{ data }}</template>
  </lay-table>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {

    const columns7 = [
      {
        title:"姓名",
        width:"200px",
        key:"name"
      },{
        title:"成绩",
        width: "180px",
        key:"score"
      },
    ]

    const dataSource7 = [
      {name:"系统管理", score:100, children: [{name:"用户管理", score:99, children: [{name:"用户修改", score:98},{name:"用户删除", score:97}]},{name:"角色管理", score:96}]},
      {name:"电商管理", score:100, children: [{name:"商品管理", score:11},{name:"分类管理", score:22}]},
    ]

    return {
      columns7,
      dataSource7
    }
  }
}
</script>

:::

::: title 固定表头
:::

::: demo 设置 `height` 或者 `max-height` 即可实现

<template>
  <lay-table :columns="columns8" :dataSource="dataSource8" size="sm" max-height="300px"></lay-table>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {

    const columns8 = [
      {
        title:"账户",
        minWidth:"200px",
        key:"username"
      },{
        title:"密码",
        minWidth: "180px",
        key:"password"
      },{
        title:"年龄",
        minWidth: "180px",
        key:"age"
      },{
        title:"备注",
        key:"remark",
				minWidth: "180px",
        ellipsisTooltip: true,
      }
    ]

    const dataSource8 = [
      {username:"root", password:"root", age:"18", remark: 'layui - vue（谐音：类 UI) '},
      {username:"root", password:"root", age:"18", remark: 'layui - vue（谐音：类 UI) '},
      {username:"root", password:"root", age:"18", remark: 'layui - vue（谐音：类 UI) '},
      {username:"root", password:"root", age:"18", remark: 'layui - vue（谐音：类 UI) '},
      {username:"root", password:"root", age:"18", remark: 'layui - vue（谐音：类 UI) '},
      {username:"root", password:"root", age:"18", remark: 'layui - vue（谐音：类 UI) '},
      {username:"root", password:"root", age:"18", remark: 'layui - vue（谐音：类 UI) '},
      {username:"woow", password:"woow", age:"20", remark: 'layui - vue（谐音：类 UI) 是 一 套 Vue 3.0 的 桌 面 端 组 件 库.layui - vue（谐音：类 UI) 是 一 套 Vue 3.0 的 桌 面 端 组 件 库.'},
      {username:"woow", password:"woow", age:"20", remark: 'layui - vue（谐音：类 UI) 是 一 套 Vue 3.0 的 桌 面 端 组 件 库.layui - vue（谐音：类 UI) 是 一 套 Vue 3.0 的 桌 面 端 组 件 库.'},
      {username:"woow", password:"woow", age:"20", remark: 'layui - vue（谐音：类 UI) 是 一 套 Vue 3.0 的 桌 面 端 组 件 库.layui - vue（谐音：类 UI) 是 一 套 Vue 3.0 的 桌 面 端 组 件 库.'},
      {username:"woow", password:"woow", age:"20", remark: 'layui - vue（谐音：类 UI) 是 一 套 Vue 3.0 的 桌 面 端 组 件 库.layui - vue（谐音：类 UI) 是 一 套 Vue 3.0 的 桌 面 端 组 件 库.'},
    ]

    return {
      columns8,
      dataSource8
    }
  }
}
</script>

:::

::: title 斑马条纹
:::

::: demo 通过 `even` 属性, 开启斑马条纹, 默认为 false。

<template>
  <lay-table :columns="columns1" :dataSource="dataSource1" even></lay-table>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {

    const columns1 = [
      {
        title:"账户",
        width:"200px",
        key:"username"
      },{
        title:"密码",
        width: "180px",
        key:"password"
      },{
        title:"年龄",
        width: "180px",
        key:"age"
      },{
        title:"备注",
        width: "180px",
        key:"remark",
        ellipsisTooltip: true,
      }
    ]

    const dataSource1 = [
      {username:"root", password:"root", age:"18", remark: 'layui - vue（谐音：类 UI) '},
      {username:"root", password:"root", age:"18", remark: 'layui - vue（谐音：类 UI) '},
      {username:"woow", password:"woow", age:"20", remark: 'layui - vue（谐音：类 UI) '},
      {username:"woow", password:"woow", age:"20", remark: 'layui - vue（谐音：类 UI) '},
      {username:"woow", password:"woow", age:"20", remark: 'layui - vue（谐音：类 UI) '}
    ]

    return {
      columns1,
      dataSource1
    }
  }
}
</script>

:::

::: title 定义样式
:::

::: demo 通过 `cellStyle` `rowStyle` `cellClassName` `rowClassName` 属性, 自定义单元格样式。

<template>
  <lay-table :columns="columns1" :dataSource="dataSource1" :cellStyle="cellStyle" :rowStyle="rowStyle"></lay-table>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {

    const columns1 = [
      {
        title:"账户",
        width:"200px",
        key:"username"
      },{
        title:"密码",
        width: "180px",
        key:"password"
      },{
        title:"年龄",
        width: "180px",
        key:"age"
      },{
        title:"备注",
        width: "180px",
        key:"remark",
        ellipsisTooltip: true,
      }
    ]

    const dataSource1 = [
      {username:"root", password:"root", age:"18", remark: 'layui - vue（谐音：类 UI) '},
      {username:"root", password:"root", age:"18", remark: 'layui - vue（谐音：类 UI) '},
      {username:"woow", password:"woow", age:"20", remark: 'layui - vue（谐音：类 UI) '},
      {username:"woow", password:"woow", age:"20", remark: 'layui - vue（谐音：类 UI) '},
      {username:"woow", password:"woow", age:"20", remark: 'layui - vue（谐音：类 UI) '}
    ]

    const cellStyle = function(row, column, rowIndex, columnIndex) {
      if(columnIndex % 2 == 0) {
        return 'color:red';
      }
    }

    const rowStyle = function(row, rowIndex) {
      if(rowIndex % 2 == 0) {
        return 'color:blue';
      }
    }

    return {
      columns1,
      dataSource1,
      cellStyle,
      rowStyle
    }
  }
}
</script>

:::

::: title 不同风格
:::

::: demo 通过 `skin` 属性, 切换 table 风格。

<template>
  <lay-table :columns="columns1" :dataSource="dataSource1" skin="line"></lay-table>
  <lay-table :columns="columns1" :dataSource="dataSource1" skin="nob" :even="true"></lay-table>
  <lay-table :columns="columns1" :dataSource="dataSource1" skin="row"></lay-table>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {

    const columns1 = [
      {
        title:"账户",
        width:"200px",
        key:"username"
      },{
        title:"密码",
        width: "180px",
        key:"password"
      },{
        title:"年龄",
        width: "180px",
        key:"age"
      },{
        title:"备注",
        width: "180px",
        key:"remark",
        ellipsisTooltip: true
      }
    ]

    const dataSource1 = [
      {username:"root", password:"root", age:"18", remark: 'layui - vue（谐音：类 UI) '},
      {username:"root", password:"root", age:"18", remark: 'layui - vue（谐音：类 UI) '},
      {username:"woow", password:"woow", age:"20", remark: 'layui - vue（谐音：类 UI) '},
      {username:"woow", password:"woow", age:"20", remark: 'layui - vue（谐音：类 UI) '},
      {username:"woow", password:"woow", age:"20", remark: 'layui - vue（谐音：类 UI) '}
    ]

    return {
      columns1,
      dataSource1,
    }
  }
}
</script>

:::

::: title 固定行列
:::

::: demo 通过 `fixed` 属性实现列固定, 可选值为 `left` 与 `right`。

<template>
  <lay-table :columns="columns20" :dataSource="dataSource20"></lay-table>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {

    const columns20 = [
      {
        fixed:"left",
        title:"账户",
        width:"200px",
        key:"username"
      },{
        fixed:"left",
        title:"密码",
        width: "300px",
        key:"password"
      },{
        title:"性别",
        width: "300px",
        key:"sex"
      },{
        title:"年龄",
        width: "300px",
        key:"age"
      },{
        fixed:"right",
        title:"备注",
        width: "180px",
        key:"remark",
        ellipsisTooltip: true
      }
    ]

    const dataSource20 = [
      {username:"root", password:"root",sex:"男", age:"18", remark: 'layui - vue（谐音：类 UI) '},
      {username:"root", password:"root",sex:"男", age:"18", remark: 'layui - vue（谐音：类 UI) '},
      {username:"woow", password:"woow",sex:"男", age:"20", remark: 'layui - vue（谐音：类 UI) '},
      {username:"woow", password:"woow",sex:"男", age:"20", remark: 'layui - vue（谐音：类 UI) '},
      {username:"woow", password:"woow",sex:"男", age:"20", remark: 'layui - vue（谐音：类 UI) '}
    ]

    return {
      columns20,
      dataSource20,
    }
  }
}
</script>

:::

::: title 开启序号
:::

::: demo 通过 `columns` 配置 `type:'number'` 开启序号列。

<template>
  <lay-table :columns="columns21" :dataSource="dataSource21"></lay-table>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {

    const columns21 = [
      {
        type: "number",
      },
      {
        title:"账户",
        width:"200px",
        key:"username"
      },{
        title:"密码",
        width: "300px",
        key:"password"
      },{
        title:"性别",
        key:"sex"
      },{
        title:"年龄",
        width: "300px",
        key:"age"
      },{
        title:"备注",
        width: "180px",
        key:"remark",
        ellipsisTooltip: true
      }
    ]

    const dataSource21 = [
      {username:"root", password:"root",sex:"男", age:"18", remark: 'layui - vue（谐音：类 UI) '},
      {username:"root", password:"root",sex:"男", age:"18", remark: 'layui - vue（谐音：类 UI) '},
      {username:"woow", password:"woow",sex:"男", age:"20", remark: 'layui - vue（谐音：类 UI) '},
      {username:"woow", password:"woow",sex:"男", age:"20", remark: 'layui - vue（谐音：类 UI) '},
      {username:"woow", password:"woow",sex:"男", age:"20", remark: 'layui - vue（谐音：类 UI) '}
    ]

    return {
      columns21,
      dataSource21,
    }
  }
}
</script>

:::

::: title 开启多选
:::

::: demo 通过 `columns` 配置 `type:'checkbox'` 开启单选列。

<template>
  <lay-table :columns="columns23" :dataSource="dataSource23"></lay-table>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {

    const columns23 = [
      {
        type: "checkbox",
      },
      {
        title:"账户",
        width:"200px",
        key:"username"
      },{
        title:"密码",
        width: "300px",
        key:"password"
      },{
        title:"性别",
        key:"sex"
      },{
        title:"年龄",
        width: "300px",
        key:"age"
      },{
        title:"备注",
        width: "180px",
        key:"remark",
        ellipsisTooltip: true
      }
    ]

    const dataSource23 = [
      {id:"1",username:"root", password:"root",sex:"男", age:"18", remark: 'layui - vue（谐音：类 UI) '},
      {id:"2",username:"root", password:"root",sex:"男", age:"18", remark: 'layui - vue（谐音：类 UI) '},
      {id:"3",username:"woow", password:"woow",sex:"男", age:"20", remark: 'layui - vue（谐音：类 UI) '},
      {id:"4",username:"woow", password:"woow",sex:"男", age:"20", remark: 'layui - vue（谐音：类 UI) '},
      {id:"5",username:"woow", password:"woow",sex:"男", age:"20", remark: 'layui - vue（谐音：类 UI) '}
    ]

    return {
      columns23,
      dataSource23,
    }
  }
}
</script>

:::

::: title 开启单选
:::

::: demo 通过 `columns` 配置 `type:'radio'` 开启单选列。

<template>
  <lay-table :columns="columns24" :dataSource="dataSource24" v-model:selectedKey="selectedKey24"></lay-table>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {

    const columns24 = [
      {
        type: "radio"
      },
      {
        title:"账户",
        width:"200px",
        key:"username"
      },{
        title:"密码",
        width: "300px",
        key:"password"
      },{
        title:"性别",
        key:"sex"
      },{
        title:"年龄",
        width: "300px",
        key:"age"
      },{
        title:"备注",
        width: "180px",
        key:"remark",
        ellipsisTooltip: true
      }
    ]
    
    const selectedKey24 = ref("2");

    const dataSource24 = [
      {id:"1",username:"root", password:"root",sex:"男", age:"18", remark: 'layui - vue（谐音：类 UI) '},
      {id:"2",username:"root", password:"root",sex:"男", age:"18", remark: 'layui - vue（谐音：类 UI) '},
      {id:"3",username:"woow", password:"woow",sex:"男", age:"20", remark: 'layui - vue（谐音：类 UI) '},
      {id:"4",username:"woow", password:"woow",sex:"男", age:"20", remark: 'layui - vue（谐音：类 UI) '},
      {id:"5",username:"woow", password:"woow",sex:"男", age:"20", remark: 'layui - vue（谐音：类 UI) '}
    ]

    return {
      columns24,
      dataSource24,
      selectedKey24,
    }
  }
}
</script>

:::

::: title 暂无数据
:::

::: demo 通过 `columns` 配置 `type:'radio'` 开启单选列。

<template>
  <lay-table :columns="columns25" :dataSource="dataSource25"></lay-table>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {

    const columns25 = [
      {
        title:"账户",
        width:"200px",
        key:"username"
      },{
        title:"密码",
        width: "300px",
        key:"password"
      },{
        title:"性别",
        key:"sex"
      },{
        title:"年龄",
        width: "300px",
        key:"age"
      },{
        title:"备注",
        width: "180px",
        key:"remark",
        ellipsisTooltip: true
      }
    ]

    const dataSource25 = [
    ]

    return {
      columns25,
      dataSource25,
    }
  }
}
</script>

:::

::: title 刷新数据
:::

::: demo 通过 `data-source` 的赋值，实现数据的更新

<template>
  <lay-button @click="changeDataSource22">更新数据</lay-button>
  <lay-table :columns="columns22" :dataSource="dataSource22"></lay-table>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {

    const columns22 = [
      {
        title:"账户",
        width:"200px",
        key:"username"
      },{
        title:"密码",
        width: "300px",
        key:"password"
      },{
        title:"性别",
        width: "300px",
        key:"sex"
      },{
        title:"年龄",
        width: "300px",
        key:"age"
      },{
        title:"备注",
        width: "180px",
        key:"remark",
        ellipsisTooltip: true
      }
    ]

    const dataSource22 = ref([
      {username:"root", password:"root",sex:"男", age:"18", remark: 'layui - vue（谐音：类 UI) '},
      {username:"root", password:"root",sex:"男", age:"18", remark: 'layui - vue（谐音：类 UI) '},
      {username:"woow", password:"woow",sex:"男", age:"20", remark: 'layui - vue（谐音：类 UI) '},
      {username:"woow", password:"woow",sex:"男", age:"20", remark: 'layui - vue（谐音：类 UI) '},
      {username:"woow", password:"woow",sex:"男", age:"20", remark: 'layui - vue（谐音：类 UI) '}
    ])
    
    const changeDataSource22 = () => {
      dataSource22.value = [{username:"update", password:"update",sex:"boy", age:"18", remark: '更新数据 '}]
    }

    return {
      columns22,
      dataSource22,
      changeDataSource22
    }
  }
}
</script>

:::

::: title 完整表格
:::

::: demo

<template>
  <lay-table :columns="columns5" id="id" :expandIndex="1" :dataSource="dataSource5" v-model:selectedKeys="selectedKeys5" :checkbox="checkbox5" :default-toolbar="defaultToolbar5" @row="rowClick5">
    <template v-slot:toolbar>
      <lay-button size="sm">新增</lay-button>
      <lay-button size="sm">删除</lay-button>
    </template>
    <template v-slot:name="{ data }"> {{data.name}} </template>
    <template v-slot:name-title>😊</template>
    <template v-slot:birthday="{ data }"> {{data.birthday}} </template>
    <template v-slot:operator="{ data }">
      <lay-button size="xs">修改</lay-button>
      <lay-button size="xs" type="primary">删除</lay-button>
    </template>
    <template v-slot:expand="{ data }"> 
      <div style="height:100px;">
        内容
      </div>
    </template>
  </lay-table>
</template>

<script>
import { ref, watch } from 'vue'

export default {
  setup() {

    const selectedKeys5 = ref(['1'])
    const checkbox5 = ref(true)
    const defaultToolbar5 = ref(true)

    const columns5 = [
      {
        title: "序号",
        fixed: "left",
        type: "number",
        width: "50px",
      },
      {
        title:"姓名",
        fixed:"left",
        width:"200px",
        titleSlot: "name-title",
        customSlot:"name",
        key:"name",
        align: "left"
      },{
        title:"生日",
        customSlot:"birthday",
        width:"200px",
        key:"birthday"
      },
      {
        title:"年龄",
        width: "200px",
        key:"age",
        sort: true,
      },
      {
        title:"隐藏列",
        width: "200px",
        key:"hide",
        sort: true,
        hide: true,
      },
      {
        title:"备注",
        width: "300px",
        key:"remark",
        ellipsisTooltip: true,
      }
      ,{
        title:"操作",
        width:"150px",
        fixed:"right",
        customSlot:"operator",
        key:"operator"
      }
    ]

    const dataSource5 = [
      {id:"1", name:"小明",birthday: '2022-02-09', hide: "你看不见我", age:"18",remark: 'layui - vue（谐音：类 UI) 是 一 套 Vue 3.0 的 桌 面 端 组 件 库.layui - vue（谐音：类 UI) 是 一 套 Vue 3.0 的 桌 面 端 组 件 库.'},
      {id:"2", name:"小红",birthday: '2022-02-09', hide: "你看不见我", age:"20",remark: 'layui - vue（谐音：类 UI) 是 一 套 Vue 3.0 的 桌 面 端 组 件 库.layui - vue（谐音：类 UI) 是 一 套 Vue 3.0 的 桌 面 端 组 件 库.'},
      {id:"3", name:"小刚",birthday: '2022-02-09', hide: "你看不见我", age:"20",remark: 'layui - vue（谐音：类 UI) 是 一 套 Vue 3.0 的 桌 面 端 组 件 库.layui - vue（谐音：类 UI) 是 一 套 Vue 3.0 的 桌 面 端 组 件 库.'},
      {id:"4", name:"小李",birthday: '2022-02-09', hide: "你看不见我", age:"20",remark: 'layui - vue（谐音：类 UI) 是 一 套 Vue 3.0 的 桌 面 端 组 件 库.layui - vue（谐音：类 UI) 是 一 套 Vue 3.0 的 桌 面 端 组 件 库.'},
      {id:"5", name:"小柏",birthday: '2022-02-09', hide: "你看不见我", age:"20",remark: 'layui - vue（谐音：类 UI) 是 一 套 Vue 3.0 的 桌 面 端 组 件 库.layui - vue（谐音：类 UI) 是 一 套 Vue 3.0 的 桌 面 端 组 件 库.'},
      {id:"6", name:"小吉",birthday: '2022-02-09', hide: "你看不见我", age:"20",remark: 'layui - vue（谐音：类 UI) 是 一 套 Vue 3.0 的 桌 面 端 组 件 库.layui - vue（谐音：类 UI) 是 一 套 Vue 3.0 的 桌 面 端 组 件 库.'}
    ]

    const rowClick5 = function(data) {
      console.log(JSON.stringify(data))
    }
    
    const rowDoubleClick5 = function(data) {
      console.log(JSON.stringify(data))
    }

    watch(selectedKeys5, () => {
      console.log("复选框监听:" + selectedKeys5.value);
    })

    return {
      columns5,
      dataSource5,
      selectedKeys5,
      checkbox5,
      defaultToolbar5,
      rowClick5,
      rowDoubleClick5
    }
  }
}
</script>

:::

::: title Table 属性
:::

::: table

| 属性                 | 描述                          | 类型      | 默认值  | 可选值         |
| -------------------- | ----------------------------- | --------- | ------- | -------------- |
| columns              | 列配置 - [更多](#tableColumn) | --        | --      | --             |
| dataSource           | 数据源                        | --        | --      | --             |
| checkbox             | 开启复选框                    | `boolean`  | `false` | `true` `false` |
| id                   | 主键                          | `string`  | --      | --             |
| v-model:selectedKeys | 选中项                        | --        | --      | --             |
| default-toolbar      | 工具栏                        | `boolean` | `false` | `true` `false` |
| size                 | 尺寸                          | `string`  | `md`    | `lg` `md` `sm` |
| children-column-name | 树节点字段                    | `string`   | `children`| --            |
| indent-size          | 树表行级缩进                  | `number`   | `30`    | -- |
| height               | 表格高度                      | `number`   | --   | -- |
| maxHeight            | 表格最大高度                  | `number`   | --   | -- |
| even                 | 斑马条纹                      | `boolean`  | `false`   | `true` `false` |
| cellStyle            | 列样式 function(row, column, rowIndex, columnIndex)                  | `string` `function`   | -- | -- |
| rowStyle             | 行样式 function(row, rowIndex)                  | `string` `function`  | --   | -- |
| cellClassName        | 列类名称 function(row, column, rowIndex, columnIndex)               | `string` `function`   | --    | -- |
| rowClassName         | 行类名称 function(row, rowIndex)                | `string` `function`  | --   | -- |
| skin                 | 风格                | `string` | --   | `line` `row` `nob` |

:::

::: title Table 事件
:::

::: table

| 属性       | 描述   | 参数          |
| ---------- | ------ | ------------- |
| row        | 行单击 | data : 当前行 |
| row-double | 行双击 | data : 当前行 |

:::

::: title Table 插槽
:::

::: table

| 插槽    | 描述         | 参数 |
| ------- | ------------ | ---- |
| toolbar | 自定义工具栏 | --   |

:::

### <div id="tableColumn"></div>

::: title Table 数据
:::

::: table

| 插槽            | 描述                           | 类型      | 默认值  | 可选值                  |
| --------------- | ------------------------------ | --------- | ------- | ----------------------- |
| title           | 列标题                         | --        | --      | --                      |
| key             | 数据字段                       | --        | --      | --                      |
| customSlot      | 自定义插槽                     | --        | --      | --                      |
| width           | 宽度                           | --        | --      | --                      |
| minWidth        | 最小宽度                       | --        | `100px`      | --                      |
| sort            | 排序                           | --        | --      | --                      |
| titleSlot       | 标题插槽                       | --        | --      | --                      |
| align           | 对齐方式                       | `string`  | `left`  | `left` `right` `center` |
| ellipsisTooltip | 当内容过长被隐藏时显示 tooltip | `boolean` | `false` | `true` `false`          |

:::

::: contributor table
:::

::: previousNext table
:::
