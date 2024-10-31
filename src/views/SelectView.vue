<script setup>
// import { CaretBottom } from "@element-plus/icons-vue";
const value = ref("");

const options = ref([
  {
    value: "Option1",
    label: "Option1",
  },
  {
    value: "Option2",
    label: "Option2",
  },
  {
    value: "Option3",
    label: "Option3",
  },
  {
    value: "Option4",
    label: "Option4",
  },
  {
    value: "Option5",
    label: "Option5",
  },
]);
</script>
<template>
  <h1>Element Plus 客製化 icon 與下拉選單</h1>
  <SelectBase
    v-model="value"
    placeholder="Select"
    :style="{ width: '240px' }"
    customClass="customSelect"
  >
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    >
    </el-option>
    <template #prefix> prefix </template>
    <template #footer> footer </template>
  </SelectBase>
  <!-- 
    :suffix-icon 可以傳入 vue 檔案 
    無法直接傳入引入的 svg 元件
    要包成 vue 檔案才能傳入
    至少要有 template > svg 才可以
    或者這邊使用的是 element plus 附的 icon
  -->
  <!-- <el-select
    :suffix-icon="CaretBottom"
    v-model="value"
    placeholder="Select"
    style="width: 240px"
    popper-class="customSelect"
  >
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    >
    </el-option>
    <template v-slot:prefix> prefix </template>
  </el-select> -->
</template>

<style lang="scss">
// // 調整下拉箭頭樣式
// .el-icon {
//   &.el-select__caret {
//     color: #000;
//     font-size: 20px;
//   }
// }

// // customSelect 是自定義的 class
// // 限制下拉框高度 並寫產生滾動條
// .customSelect {
//   &.el-select__popper {
//     // 如果需要須改 可以強制開啟下拉
//     // display: block !important;
//     border-radius: 20px;
//   }
//   .el-select {
//     &-dropdown {
//       padding: {
//         top: 20px;
//         bottom: 20px;
//       }
//     }
//     &-dropdown__wrap {
//       max-height: 100px;
//       overflow: scroll;
//     }
//     &-dropdown__item {
//       &.is-selected {
//         color: #000;
//         background-color: pink;
//       }
//     }
//   }

//   // 調整箭頭樣式
//   .el-popper__arrow.el-popper__arrow.el-popper__arrow::before {
//     background-color: blue;
//   }
// }
</style>
