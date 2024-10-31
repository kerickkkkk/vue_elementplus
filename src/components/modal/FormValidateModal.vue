<script setup>
// 使用 defineModel，第一個參數是 prop 名稱，第二個參數是配置項
const visible = defineModel("visible", {
  type: Boolean,
  // 設定 default 要注意和父層相同，不然會有資料不同步
  default: false,
});
</script>

<template>
  <el-dialog clss="border" v-model="visible" title="Modal Title" align-center>
    <p>Modal Content</p>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="visible = false">Cancel</el-button>
        <el-button type="primary">Confirm</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<style lang="scss" scoped></style>
