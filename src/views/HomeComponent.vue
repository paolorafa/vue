<template>
  <div class="flex flex-col p-8">
    
    <div class="flex gap-1 justify-center m-2 z-10 relative">
      <router-link
        :to="{ name: 'byLetter', params: { letter } }"
        v-for="letter of letters"
        :key="letter"
      >
        {{ letter }}
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"; // Importa ref
import store from "../store/";
import axiosClient from "../axiosClient.js";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""); // Correggi la lista delle lettere
const ingredients = ref([]); // Definisci ingredients come ref

onMounted(async () => {
  const response = await axiosClient.get("/list.php?i=list");
  console.log(response.data);
  ingredients.value = response.data.ingredients || response.data; 
});
</script>
