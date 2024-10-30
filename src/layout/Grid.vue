<template>
  <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 mx-2 mb-3">
    <Card
      v-for="element of meal"
      :key="element.idMeal"
      :strMealThumb="element.strMealThumb"
      :strMeal="element.strMeal"
      :strSource="element.strSource"
      :idMeal="element.idMeal"
    ></Card>
  </div>
</template>

<script setup>
import Card from "../components/Card.vue";
import store from "../store";
import { computed } from "vue";

const meal = computed(() => store.state.searchMeal);

</script>
