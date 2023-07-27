<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <recipes msg="Welcome to Your Vue.js + TypeScript App" />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Recipes from "./components/Recipes.vue";

@Options({
  components: {
    Recipes,
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  background: black;
  background-image: url('data:image/svg+xml,%3Csvg width="42" height="44" viewBox="0 0 42 44" xmlns="http://www.w3.org/2000/svg"%3E%3Cg id="Page-1" fill="none" fill-rule="evenodd"%3E%3Cg id="brick-wall" fill="%239C92AC" fill-opacity="0.4"%3E%3Cpath d="M0 0h42v44H0V0zm1 1h40v20H1V1zM0 23h20v20H0V23zm22 0h20v20H22V23z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E');
}
</style>
