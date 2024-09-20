<template>
  <a
    href="#"
    class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
  >
    <img
      class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg mx-2"
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
        iusto nam rerum quis ipsam iure nisi impedit, excepturi rem perspiciatis
        molestias voluptate voluptatem maiores, labore amet et soluta culpa.
      </p>
      <a :href="strSource" target="_blanck" class="py-2 px-4 border-2 w-24 border-red-600 rounded text-white hover:bg-red-600">Youtube</a>
    </div>
  </a>
</template>

<script setup>
const props = defineProps({
  strMealThumb: String, 
  strMeal: String, 
  strSource: String, 
});
</script>
