<template>
  <div v-for="(item, key) in recipes" :key="key">
    <recipe-item :item="item"></recipe-item>
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
    const { recipes } = storeToRefs(store);
    return {
      data,
      recipes,
    };
  },
});
</script>
