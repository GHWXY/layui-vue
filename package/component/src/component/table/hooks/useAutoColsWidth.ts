import { Recordable } from "../../..//types";
import { TableColumn } from "../typing";
import { Ref, watchEffect, ComputedRef } from "vue";

/**
 * 表格列自动设置宽度
 * 据内容宽度大小:
 * ( 宽度 < minWidth ) ==> minWidth
 * ( minWidth < 宽度 < 300px )  ==> 宽度
 * ( 宽度 > 300px ) ==> 300px
 * @param columns 表格列
 * @param sourceData 表格数据
 */
export default function useAutoColsWidth(
  columns: ComputedRef<Recordable[]>,
  sourceData: Ref<any[]>
): void {
  watchEffect(() => {
    if (columns.value.length === 0 || sourceData.value.length === 0) return;

    const colsMap: Map<string, TableColumn> = new Map();

    // 时间复杂度 n
    columns.value.forEach((item) => {
      colsMap.set(item.key, item as TableColumn);
    });

    // 记录数据中最长的字段
    const longestMap: Map<string, string> = handleLongest(
      sourceData.value,
      colsMap
    );
    // 单元格内距
    const padding = 16;
    // 时间复杂度 n
    longestMap.forEach((value, key) => {
      const width = getTextWidth(value) + padding;
      const colsItem = colsMap.get(key);

      if (width < 300 && width > 50) {
        colsItem && (colsItem.width = `${width}px`);
      } else if (width > 300) {
        colsItem && (colsItem.width = `300px`);
      } else {
        colsItem && (colsItem.width = `50px`);
      }
    });
    // 总时间复杂度 2n + 100n
  });
}

function handleLongest(data: any[], colsMap: Map<string, TableColumn>) {
  const longestMap: Map<string, string> = new Map();
  // 最大时间复杂度 100n
  for (let i = 0; i < data.length && i < 100; i++) {
    const sourceItem = data[i];
    colsMap.forEach((value, key) => {
      // 有width配置不处理
      if (value.width) return;
      // 非字符串不处理
      if (typeof sourceItem[key] !== "string") return;
      const longestKey = longestMap.get(key);
      if (longestKey) {
        if (longestKey.length < sourceItem[key].length) {
          longestMap.set(key, sourceItem[key]);
        }
      } else {
        longestMap.set(key, sourceItem[key]);
      }
    });
  }
  return longestMap;
}

/**
 * 获取文本宽度
 * @param text 文本
 * @returns number
 */
function getTextWidth(text: string): number {
  let result = 0;

  // 源站字体大小
  const bodyStyles = window.getComputedStyle(document.body);

  // 创建canvas元素
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");

  // 设置字体和文本内容
  if (context) {
    context.font = bodyStyles.font;
    const metrics = context.measureText(text);
    result = metrics.width;
  }

  // 返回文本的宽度
  return result;
}