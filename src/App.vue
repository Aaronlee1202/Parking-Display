<template>
  <!-- <keep-alive> -->
  <NavBar />
  <!-- </keep-alive> -->
  <router-view />
</template>

<script>
// @ is an alias to /src
import NavBar from "@/views/NavBar.vue";
export default {
  components: {
    NavBar,
  },
};
</script>

<style lang="scss">
:root {
  --header-height: 4rem;
  --navbar-weight: 12rem;
}

#app {
  height: 100vh;
  font-family: "Noto Sans TC", "Microsoft Yahei", "微軟雅黑", sans-serif;
  color: var(--bs-dark-grey);
  position: relative;
  padding: var(--header-height) 0 0 var(--navbar-weight);
  overflow: hidden;
  background-color: rgba(139, 152, 172, 0.1);
  a {
    text-decoration: none;
  }
}
</style>
