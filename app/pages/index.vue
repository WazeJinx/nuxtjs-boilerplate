<template>
  <div
    class="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-darkBg text-black dark:text-darkText px-6 text-center"
  >
    <!-- Content -->
    <div class="relative z-10 max-w-md">
      <h1 class="text-3xl md:text-4xl font-bold mb-2 pl-5">
        jynxx boilerplate .
      </h1>

      <p class="text-sm md:text-base text-gray-600 dark:text-darkSubText mb-4">
        NuxtJS + SPA Ready
      </p>

      <div class="flex flex-col justify-center text-center gap-1">
        <span class="text-xs md:text-base text-gray-600 dark:text-darkSubText">
          Tailwind, Icon, Dark Mode, Responsive Sidebar
        </span>
      </div>

      <div class="py-6">
        <NuxtLink
          @click="fetchItems"
          class="flex flex-row border dark:border-darkBorder rounded-lg bg-gray-300 dark:bg-darkSurface min-w-[100px] hover:cursor-pointer text-center justify-center text-md font-medium py-2"
        >
          Click me
        </NuxtLink>
      </div>

      <div class="">
        <ul v-if="items.length" class="list-disc list-inside">
          <li class="mb-2">Proxied response from /server/api/items.get.ts</li>
          <li v-for="item in items" :key="item.id">{{ item.name }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
definePageMeta({
  title: "Dashboard",
  layout: "default",
});

const items = ref([]);

const fetchItems = async () => {
  const data = await $fetch("/api/items");
  items.value = data;
};
</script>
