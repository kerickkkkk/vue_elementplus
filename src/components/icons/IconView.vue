<script setup></script>

<template>
  <h2>集中處理</h2>
  <p>可以直接傳入 name 與 color 屬性 比用 style 在方便一點</p>
  <SvgIcon name="logo" color="pink" width="100" height="100" />
  <SvgIcon name="logo" color="blue" size="50" />

  <br />
  <h2>直接引入</h2>
  <p>直接引入 IBaseLogo 並設置 style，或者外面再包一層設定</p>
  <IBaseLogo style="color: aquamarine; font-size: 20px"></IBaseLogo>
</template>

<style lang="scss" scoped></style>
