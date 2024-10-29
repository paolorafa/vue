<template>
    
    <a :href= "href"
        target="_blank"
        class="flex flex-col py-2 px-4 border-2 w-24 border-red-600 rounded text-white hover:bg-red-600 relative z-auto mt-2 md:mt-0"
    >
    <slot></slot>
    </a>


</template>

<script setup>
    const props = defineProps({
        href: String
    })

</script>