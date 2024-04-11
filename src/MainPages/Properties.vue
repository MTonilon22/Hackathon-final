<template>
  <div class="container mx-auto py-8">
    <div class="flex justify-between items-center mb-4">
      <button class="px-4 py-2 bg-blue-500 text-white rounded-md">Prev</button>
      <h2 class="text-lg font-semibold">April 2024</h2>
      <button class="px-4 py-2 bg-blue-500 text-white rounded-md">Next</button>
    </div>
    <div class="grid grid-cols-7 gap-4">
      <div v-for="day in daysOfWeek" :key="day" class="text-center font-semibold">{{ day }}</div>
      <div v-for="date in dates" :key="date" class="text-center">{{ date }}</div>
    </div>
  </div>
</template>

<script setup>
const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const dates = Array.from({ length: 30 }, (_, i) => i + 1);
</script>

<style>
.container {
  max-width: 800px;
}
</style>
