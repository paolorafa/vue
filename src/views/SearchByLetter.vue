<template>
    <div class="flex flex-col p-8">
    
        <div class="flex gap-1 justify-center m-2 z-10 relative mb-10 flex-wrap md:flex-nowrap">
            <router-link
                :to="{ name: 'byLetter', params: { letter } }"
                v-for="letter in letters"
                :key="letter"
                class="text-2xl"
            >
                {{ letter }} /
            </router-link>
        </div>

        <div v-if="meals && meals.length" class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 mx-2 mb-3">
            <Card
                v-for="element in meals"
                :key="element.idMeal"
                :strMealThumb="element.strMealThumb"
                :strMeal="element.strMeal"
                :strSource="element.strSource"
                :idMeal="element.idMeal"
            />
        </div>
    </div>
</template>

<script setup>
import { computed, onMounted, watch } from "vue";
import store from "../store/";
import { useRoute } from "vue-router";
import Card from "../components/Card.vue";

// Lista delle lettere per il filtro
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

// Accesso al parametro della rotta
const route = useRoute();

// Recupera i dati da Vuex in modo reattivo
const meals = computed(() => store.state.searchByLetter);

// Esegui il dispatch iniziale su mount
onMounted(() => {
    if (route.params.letter) {
        store.dispatch('SearchByLetter', route.params.letter);
    }
});

// Aggiungi un watcher per monitorare i cambiamenti di lettera
watch(
    () => route.params.letter,
    (newLetter) => {
        if (newLetter) {
            store.dispatch('SearchByLetter', newLetter);
        }
    }
);
</script>
