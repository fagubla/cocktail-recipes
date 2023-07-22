<template>
  <div v-for="(items, index) in recipes" :key="index">
    <recipe-item :items="items"></recipe-item>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import RecipeItem from "./recipe/RecipeItem.vue";
import { useCounterStore } from "@/store/counter";
import { storeToRefs } from "pinia";

export default defineComponent({
  name: "recipes-main",
  components: { RecipeItem },
  setup() {
    const data = ref(0);
    const store = useCounterStore();
    const { count, recipes } = storeToRefs(store);
    return {
      data,
      count,
      recipes,
      total: 2,
    };
  },
});
</script>
