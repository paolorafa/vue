<template>
  <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 mx-2 mb-3">
            <Card
                v-for="element in meals"
                :key="element.idMeal"
                :strMealThumb="element.strMealThumb"
                :strMeal="element.strMeal"
                
            />
        </div>

</template>

<script setup>
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import store from "../store";
import Card from "../components/Card.vue";

const meals = computed(() => store.state.mealsByIngredient);
const route = useRoute();

onMounted(() => {
  if (route.params.ingredient) {
    store.dispatch("SearchByIngredient", route.params.ingredient);
  }
});
</script>
