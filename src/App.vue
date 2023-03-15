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
#app {
  height: 100vh;
  font-family: "Noto Sans TC", "Microsoft Yahei", "微軟雅黑", sans-serif;
  color: var(--bs-dark-grey);
  position: relative;
  padding: var(--pretso-header-height) 0 0 var(--pretso-navbar-weight);
  overflow: hidden;
  background-color: rgba(139, 152, 172, 0.1);
  a {
    text-decoration: none;
  }
}
</style>
