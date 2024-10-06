<script setup>
const userName = ref('')
const password = ref('')
</script>

<template>
  {{ userName }}
  {{ password }}
  <input type="text" v-model="userName" />
  <input type="password" v-model="password" />
</template>

<style></style>
