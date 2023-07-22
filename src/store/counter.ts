import { defineStore } from "pinia";
import defaultRecipes from "./defaultRecipes.json";

export const useCounterStore = defineStore("counter", {
  state: () => {
    return {
      count: 0,
      recipes: defaultRecipes,
    };
  },
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++;
    },
  },
});
