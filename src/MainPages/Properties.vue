<template>
  <div class="container mx-auto py-8">
    <div class="flex justify-between items-center mb-4">
      <button class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300 ease-in-out">Prev</button>
      <h2 class="text-lg font-semibold">April 2024</h2>
      <button class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300 ease-in-out">Next</button>
    </div>
    <div class="grid grid-cols-7 gap-4">
      <div v-for="day in daysOfWeek" :key="day" class="text-center font-semibold text-gray-700">{{ day }}</div>
      <div v-for="date in dates" :key="date" class="text-center">
        <span :class="{'text-gray-400': isPastDate(date)}">{{ date }}</span>
        <span v-if="date === 12 || date === 13" class="block mt-1 text-sm font-normal text-blue-500">Job Interview</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const dates = Array.from({ length: 30 }, (_, i) => i + 1);

const isPastDate = (date) => {
  const currentDate = new Date();
  return date < currentDate.getDate();
}
</script>

<style>
.container {
  max-width: 800px;
}

button {
  cursor: pointer;
}

button:hover {
  transform: translateY(-1px);
}

.grid {
  margin-top: 20px;
}

.text-blue-500 {
  color: #3B82F6;
}

.text-blue-500:hover {
  color: #2563EB;
}

.text-gray-400 {
  color: #9CA3AF;
}
</style>
