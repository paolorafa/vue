<template>
  <div class="flex flex-wrap justify-center gap-2 m-3 p-3">
    <router-link
      :to="{
        name: 'meals-by-ingredients',
        params: { ingredient: meal.strIngredient },
      }"
      class="flex justify-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      v-for="meal in mealData"
      :key="meal.idIngredient"
    >
      <div class="p-4 leading-normal">
        <h5
          class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          {{ meal.strIngredient }}
        </h5>
        <p class="dark:text-white">{{ meal.strDescription }}</p>
      </div>
    </router-link>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axiosClient from "../axiosClient";

const mealData = ref([]);

onMounted(() => {
  axiosClient.get(`list.php?i=list`).then(({ data }) => {
    mealData.value = data.meals;
  });
});
</script>
