<template>
  <div
    class="flex flex-col items-center w-[900px] mx-auto bg-white border border-gray-200 rounded-lg shadow  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
  >
    
    <div class="flex flex-col justify-center ">  
      <img
        class=" rounded mx-2 my-2"
        :src="meal.strMealThumb"
        alt="Meal image"
      />
      <div class="flex flex-col justify-between p-4 leading-normal w-30">
        <h5
          class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          {{ meal.strMeal }}
        </h5>
        <div class="dark:text-white">{{ meal.idMeal }}</div>
        <div class="mb-3 font-normal text-gray-700 dark:text-gray-400 flex justify-between">
            <p class="font-bold  text-white">Food typical: {{ meal.strArea }}</p>
            <p class="font-bold text-white">Categoria: {{ meal.strCategory }}</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 ">
          <div>
            <h3 class=" text-white text-2xl font-semibold mb-3">Ingredienti:</h3>
             <ul>
                <template v-for="(element, index) of Ingredienti" :key="index">
                 <li class="text-white" v-if="element && element.trim() !=''">{{index+1}}: {{ element }} </li>
                </template>
            </ul>
          </div>
          
            <div>
              <h3 class=" text-white text-2xl font-semibold mb-3">Meausers:</h3>

              <ul>
                <template v-for="(element, index) of Istruzioni" :key="index">
                 <li class="text-white" v-if="element && element.trim() !=''">{{index+1}}: {{ element }} </li>
                </template>
            </ul>
            </div>
            
          </div>
      </div>
    </div>

    <a
      :href="meal.strSource"
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
    let mealData = data.data.meals[0];

    // Funzione per trasformare tutte le stringhe in maiuscolo
    const convertToUpperCase = (obj) => {
      Object.keys(obj).forEach((key) => {
        if (typeof obj[key] === 'string') {
          obj[key] = obj[key].toUpperCase();
        }
      });
    };

    convertToUpperCase(mealData);

    meal.value = mealData;
      
   
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
    
  
  }
  return arrayIngredienti;
})


const Istruzioni = computed(()=>{
  const arrayIstruzioni = [];
  for (let i=1; i<=20 ; i++){
    const istruzione = meal.value[`strMeasure${i}`];
    console.log(istruzione);
    if (istruzione && istruzione != ""){
      arrayIstruzioni.push(istruzione)
    }
   
  }
  console.log(arrayIstruzioni);
  
  return arrayIstruzioni;
})



</script>


