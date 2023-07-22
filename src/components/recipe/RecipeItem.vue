<template>
  <div id="recipe" v-for="(item, key) in items" :key="key">
    <v-card class="mx-auto" :title="item.name" variant="outlined" width="565">
      <v-card-text>
        <v-row align="start" no-gutters>
          <v-col cols="6">
            <v-img cover height="250" :src="getImage(item.img)"></v-img>
          </v-col>
          <v-col cols="6">
            <h3>Ingredientes</h3>
            <div class="mb-4">
              <template
                v-for="(ingredient, drink) in item.ingredients"
                :key="drink"
              >
                <p class="d-flex align-start ml-4">
                  <b>{{ drink }}:</b>
                  <span> {{ ingredient.oz }} oz | {{ ingredient.ml }} ml </span>
                </p>
              </template>
            </div>
            <h3>Método de Elaboración</h3>
            <div class="mb-4">
              <p class="d-flex align-start ml-4">
                <span>{{ item.elaboration }}</span>
              </p>
            </div>
            <h3>Cristalería</h3>
            <div class="mb-4">
              <p class="d-flex align-start ml-4">
                <span>{{ item.glass }}</span>
              </p>
            </div>
            <h3>Decoración</h3>
            <div class="mb-4">
              <p class="d-flex align-start ml-4">
                <span>{{ item.decoration }}</span>
              </p>
            </div>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import destornillador from "./../../images/destornillador.jpg";
import images from "./../utils/images";

export default defineComponent({
  name: "recipe-item",
  props: ["items"],
  setup() {
    const getImage = (itemImg: string) => {
      let url = images.filter((elem: any) => {
        return elem.includes(itemImg);
      });
      return url[0];
    };
    return {
      images,
      destornillador,
      getImage,
    };
  },
});
</script>

<style scoped>
p {
  font-size: 15px;
}
</style>
