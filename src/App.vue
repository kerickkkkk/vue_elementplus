<script setup>
const baseModalVisible = ref(false);
const formValidateModalVisible = ref(false);

const toggleBaseModal = () => {
  baseModalVisible.value = !baseModalVisible.value;
};

const toggleFormValidateModal = () => {
  formValidateModalVisible.value = !formValidateModalVisible.value;
};
// const color = ref("#888888");
// const size = ref(20);
</script>

<template>
  <CustomBar></CustomBar>
  <button @click="toggleBaseModal">Open Modal</button>
  <ElButton type="primary" @click="toggleFormValidateModal">
    Open Form Veelidate Modal
  </ElButton>
  <RouterView />

  <BaseModal v-model:visible="baseModalVisible" />
  <FormValidateModal v-model:visible="formValidateModalVisible" />
  <!-- <IBaseTest style="font-size: 20px; color: pink"></IBaseTest>
  <IBaseLogo color="blue"></IBaseLogo> -->
  <!-- 基本使用 -->
  <!-- <SvgIcon name="test" /> -->

  設置顏色
  <SvgIcon name="test" color="pink" width="100" height="100" />
  <SvgIcon name="logo" color="blue" size="50" />
</template>

<style scoped></style>
