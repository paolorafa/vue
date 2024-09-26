<template>
  <div
    class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
  >
    <!-- Router link per navigare ai dettagli del pasto -->
    <router-link
      :to="{ name: 'meals-detail', params: { id: idMeal } }"
      class="flex flex-col md:flex-row w-full"
    >
      <img
        class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg mx-2 my-2"
        :src="strMealThumb"
        alt="Meal image"
      />
      <div class="flex flex-col justify-between p-4 leading-normal">
        <h5
          class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          {{ strMeal }}
        </h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste numquam,
          iusto nam rerum quis ipsam iure nisi impedit, excepturi rem
          perspiciatis molestias voluptate voluptatem maiores, labore amet et
          soluta culpa.
        </p>
      </div>
    </router-link>

    <!-- Link separato per YouTube -->
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
const props = defineProps({
  strMealThumb: String,
  strMeal: String,
  strSource: String,
  idMeal: Number,
});
</script>
