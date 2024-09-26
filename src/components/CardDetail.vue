<template>
  <div
    class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
  >
    
    <div class="flex flex-col justify-center h-50">  
      <img
        class="object-cover w-30 h-96 rounded mx-2 my-2"
        :src="meal.strMealThumb"
        alt="Meal image"
      />
      <div class="flex flex-col justify-between p-4 leading-normal w-30">
        <h5
          class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          {{ meal.strMeal }}
        </h5>
        <p class="dark:text-white">{{ meal.idMeal }}</p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            <span>{{ meal.strArea }}</span>
            <span>Categoria: {{ meal.strCategory }}</span>
        </p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Ingedienti:
            <ul>
              <li v-for="element in Ingredienti" :key="element">
              {{ element }} 
            </li>
            </ul>
        </p>
      </div>
    </div>

    <a
      :href="strSource"
      target="_blank"
      class="flex flex-col py-2 px-4 border-2 w-24 border-red-600 rounded text-white hover:bg-red-600 relative z-auto mt-2 md:mt-0"
    >
      YouTube
    </a>
  </div>
</template>

<script setup>

import {computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import axiosClient from "../axiosClient";

const route = useRoute();
const meal = ref({});

onMounted(() => {
  axiosClient.get(`lookup.php?i=${route.params.id}`).then((data) => {
    meal.value = data.data.meals[0];
    console.log(data.data.meals[0]);
  });
});

const Ingredienti = computed(()=>{
  const arrayIngredienti = [];
  for (let i=1; i<=20 ; i++){
    const ingrediente = meal.value[`strIngredient${i}`];
    console.log(ingrediente);
    if (ingrediente && ingrediente != ""){
      arrayIngredienti.push(ingrediente)
    }
    
  console.log(arrayIngredienti);
  
  }
  return arrayIngredienti;
})


</script>


