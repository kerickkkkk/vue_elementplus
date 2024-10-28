<script setup>
import IBaseTest from "~icons/base/test";
import IBaseLogo from "~icons/base/logo";

const items = {
  test: IBaseTest,
  logo: IBaseLogo,
};

const props = defineProps({
  // 圖標名稱（必填）
  name: {
    type: String,
    required: true,
  },
  // 圖標前綴（可選，預設為 IBase）
  prefix: {
    type: String,
    default: "i-base",
  },
  // 顏色（可選）
  color: {
    type: String,
    default: "currentColor",
  },
  // 尺寸（可選，會同時設置寬高）
  size: {
    type: [String, Number],
    default: "1em",
  },
  // 寬度（可選，優先級高於 size）
  width: {
    type: [String, Number],
    default: "",
  },
  // 高度（可選，優先級高於 size）
  height: {
    type: [String, Number],
    default: "",
  },
});

// 計算組件名稱
// const componentName = computed(() => `${props.prefix}-${props.name}`);

// 計算樣式
const styles = computed(() => {
  const style = {
    color: props.color,
  };

  // 如果設置了具體的寬度或高度，優先使用
  if (props.width) {
    style.width = typeof props.width === "number" ? `${props.width}px` : props.width;
  } else {
    style.width = typeof props.size === "number" ? `${props.size}px` : props.size;
  }

  if (props.height) {
    style.height = typeof props.height === "number" ? `${props.height}px` : props.height;
  } else {
    style.height = typeof props.size === "number" ? `${props.size}px` : props.size;
  }

  return style;
});
</script>

<template>
  <Component :is="items[props.name]" :style="styles" />
</template>
