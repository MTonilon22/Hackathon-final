<!-- src/components/MobileView.vue -->
<template>
    <div class="h-screen bg-gray-800 flex flex-col justify-between">
      <div class="flex items-center justify-center h-full">
        <div class="bg-gray-900 rounded-full h-96 w-60 flex flex-col justify-between relative">
          <div class="flex items-center justify-center h-16 bg-gray-800 rounded-t-full">
            <!-- Header (optional) -->
          </div>
          <div class="flex-1 flex flex-col justify-center p-6">
            <!-- Call screen -->
            <div class="flex items-center justify-center mb-4">
            </div>
            <div class="flex items-center justify-center">
              <button @click="updateValue" class="bg-green-500 text-white px-6 py-3 rounded-full">Call</button>
            </div>
          </div>
          <div class="h-16 bg-gray-800 rounded-b-full flex items-center justify-around">
            <!-- Footer (optional) -->
          </div>
        </div>
      </div>
      <div class="bg-gray-900 p-4">
        <p class="text-gray-500 text-center">Mobile Status: {{ mobileStatus }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const phoneNumber = ref('');
  const mobileStatus = ref('');
  
  import axios from 'axios';
  
  // Function to update value by ID
  const updateValueById = async (userId, incrementBy) => {
    try {
    await axios.put(`http://192.168.76.225:8080/updateValueById/${userId}`, { incrementBy });
    } catch (error) {
      console.error('Error updating value:', error);
    }
  };
  
  const updateValue = () => {
    const userId = 1; 
    const incrementBy = 1; 
    updateValueById(userId, incrementBy);
  };
  </script>
  
  <style scoped>
  /* Add any scoped styles here if needed */
  </style>
  