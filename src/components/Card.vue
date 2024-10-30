<template>
  <div
    class="flex flex-col justify-center flex-wrap bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
  >
    <!-- Router link per navigare ai dettagli del pasto -->
    <router-link
      :to="{ name: 'meals-detail', params: { id: idMeal } }"
      class="flex flex-col md:flex-row w-full md:flex-wrap"
    >
      <img
        class="object-cover w-full rounded-t-lg h-96   md:rounded-none md:rounded-s-lg"
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

   
    <button :href="strSource" target="_blank" type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">YouTube</button>

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
