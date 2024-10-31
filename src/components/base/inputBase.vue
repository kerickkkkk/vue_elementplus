<template>
  <el-input placeholder="請輸入"> </el-input>
</template>

<script setup></script>

<style lang="scss">
$input-color: lighten(lightgray, 10%);
$input-border-color: darken($input-color, 50%);

.el-input {
  &__wrapper {
    background-color: $input-color;
    border: 1px solid $input-border-color;
    border-radius: 20px;
    &.is-focused {
      // 處理的看起來都是 box-shadow
      box-shadow: 0 0 10px $input-border-color;
    }
  }

  &__inner {
    height: auto;
    padding: {
      top: 10px;
      bottom: 10px;
    }
  }
}
</style>
