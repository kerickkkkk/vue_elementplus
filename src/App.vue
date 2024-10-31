<script setup>
// const color = ref("#888888");
// const size = ref(20);

const routerMap = ref([
  {
    name: "下拉選單",
    path: "/select",
  },
  {
    path: "/bar-chart",
    name: "客製化柱狀圖",
  },
  {
    path: "/icon",
    name: "icon",
  },
  {
    path: "/form-validate",
    name: "form-validate",
  },
]);
// const currentRoute = routerMap.value.find((item) => item.path === currentPath);
</script>

<template>
  <!-- <CustomBar></CustomBar> -->
  <div class="homeNav">
    <RouterLink
      class="homeNav-btn"
      v-for="item of routerMap"
      :key="item.path"
      :to="item.path"
      >{{ item.name }}
    </RouterLink>
  </div>
  <RouterView />
</template>

<style lang="scss">
.homeNav {
  display: flex;
  margin-bottom: 10px;
  &-btn {
    display: inline-block;
    padding: 10px;
    text-decoration: none;
  }
}

.active {
  color: #fff;
  background-color: #155999;
}
</style>
