<template>
  <div id="recipe" class="mb-3">
    <v-card class="mx-auto card-recipe" variant="outlined">
      <div class="block">
        <v-card-title class="text-uppercase">
          <h1>{{ item.name }}</h1>
        </v-card-title>
        <v-card-text>
          <v-row align="start" no-gutters>
            <v-col cols="6">
              <v-img cover :src="getImage(item.img)"></v-img>
            </v-col>
            <v-col cols="6">
              <h3>Ingredientes</h3>
              <div class="mb-4">
                <template
                  v-for="(ingredient, drink) in item.ingredients"
                  :key="drink"
                >
                  <p class="d-flex align-start ml-4">
                    <b>{{ drink }}: </b>
                    <span v-if="hasUnit(ingredient)">
                      {{ ingredient.oz }} oz | {{ ingredient.ml }} ml
                    </span>
                    <span v-else> {{ ingredient }}</span>
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
      </div>
    </v-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import destornillador from "./../../images/destornillador.jpg";
import images from "./../utils/images";
import { Ingredient } from "./../types/interface";

export default defineComponent({
  name: "recipe-item",
  props: ["item"],
  setup() {
    const getImage = (itemImg: string) => {
      let url = images.filter((elem: any) => {
        return elem.includes(itemImg);
      });
      return url[0];
    };
    const hasUnit = (value: Ingredient) => {
      return value.oz && value.ml;
    };
    return {
      images,
      destornillador,
      getImage,
      hasUnit,
    };
  },
});
</script>

<style lang="scss" scoped>
p {
  font-size: 15px;
}
.card-recipe {
  width: auto;
  max-width: 650px;
}
.v-card-title h1 {
  font-size: 30px;
  text-align: center;
  font-weight: bold;
  -webkit-animation: glow 3s ease-in-out infinite alternate;
  -moz-animation: glow 3s ease-in-out infinite alternate;
  animation: glow 3s ease-in-out infinite alternate;
}
.v-card-text {
  color: whitesmoke;
}

@keyframes glow {
  from {
    color: #fff;
    text-shadow: 0 0 5px #00fff2, 0 0 15px #00fff2, 0 0 25px #00fff2,
      0 0 35px #00fff2, 0 0 45px #00fff2, 0 0 55px #00fff2, 0 0 65px #00fff2,
      0 0 85px #00fff2;
  }

  to {
    color: gray;
    text-shadow: 0 0 15px #00fff2, 0 0 25px #00fff2, 0 0 35px #00fff2,
      0 0 45px #00fff2, 0 0 55px #00fff2, 0 0 65px #00fff2, 0 0 75px #00fff2,
      0 1 85px #00fff2;
  }
}

@keyframes rotate {
  100% {
    transform: rotate(1turn);
  }
}

.block {
  position: relative;
  margin: 1%;
  background: linear-gradient(0deg, #000, #272727);
}

.block:before,
.block:after {
  content: "";
  position: absolute;
  left: -2px;
  top: -2px;
  background: linear-gradient(
    90deg,
    #fb0094,
    #0000ff,
    #00ff00,
    #ffff00,
    #ff0000,
    #fb0094,
    #0000ff,
    #00ff00,
    #ffff00,
    #ff0000
  );
  background-size: 400%;
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  z-index: -1;
  animation: steam 30s linear infinite;
}

@keyframes steam {
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 400% 0;
  }
  100% {
    background-position: 0 0;
  }
}

.block:after {
  filter: blur(10px);
}
</style>
