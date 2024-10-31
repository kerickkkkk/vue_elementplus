<!-- CustomSelect.vue -->
<script setup>
import { CaretBottom } from "@element-plus/icons-vue";

// 定義 props
defineProps({
  // modelValue: {
  //   type: [String, Number],
  //   default: "",
  // },
  placeholder: {
    type: String,
    default: "請選擇",
  },
  customClass: {
    type: String,
    default: "customSelect",
  },
  style: {
    type: Object,
    default: () => ({
      width: "240px",
    }),
  },
});

const modelValue = defineModel();
// 定義 emits
// const emit = defineEmits(["update:modelValue"]);

// 處理值的變化
// const handleChange = (val) => {
//   emit("update:modelValue", val);
// };
</script>

<template>
  <!-- :model-value="modelValue"
      @update:modelValue="handleChange" -->
  <el-select
    :suffix-icon="CaretBottom"
    v-model="modelValue"
    :placeholder="placeholder"
    :style="{ ...style }"
    :popper-class="customClass"
  >
    <slot></slot>
    <template #prefix>
      <slot name="prefix"></slot>
    </template>
    <template #footer>
      <slot name="footer"></slot>
    </template>
  </el-select>
</template>

<style lang="scss">
// 調整下拉箭頭樣式
.el-icon {
  &.el-select__caret {
    color: #000;
    font-size: 20px;
  }
}

// customSelect 是自定義的 class
.customSelect {
  &.el-select__popper {
    // display: block !important;
    border-radius: 20px;
  }
  .el-select {
    &-dropdown {
      padding: {
        top: 20px;
        bottom: 20px;
      }
    }
    &-dropdown__wrap {
      max-height: 100px;
      overflow: scroll;
    }
    &-dropdown__item {
      &.is-selected {
        color: #000;
        background-color: pink;
      }
    }
  }

  // 調整箭頭樣式
  .el-popper__arrow.el-popper__arrow.el-popper__arrow::before {
    background-color: blue;
  }
}
</style>
