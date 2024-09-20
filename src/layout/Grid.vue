<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 mx-2">
    <Card
      v-for="element of meal"
      :key="element.idMeal"
      :strMealThumb="element.strMealThumb"
      :strMeal="element.strMeal"
      :strSource="element.strSource"
    ></Card>
  </div>
</template>

<script setup>
import Card from "../components/Card.vue";
import store from "../store";
import { computed } from "vue";

const meal = computed(() => store.state.searchMeal);
</script>
