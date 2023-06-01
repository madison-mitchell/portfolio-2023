<template>
  <div class="container h-screen grid grid-cols-4 grid-gap-4">
    <div class="left sticky top-0 col-span-1">
      <NavBar class="" />
    </div>
    <div class="right">
      <router-view />
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';

export default {
  name: 'App',
  components: {
    NavBar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/* .container {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
} */
</style>
