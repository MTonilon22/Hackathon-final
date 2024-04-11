<template>
  <Transition name="modal-outer">
    <div
      v-show="modalActive"
      class="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-opacity-30 bg-black z-[9999]"
    >
      <div class="relative p-4 w-full max-w-md max-h-full">
        <Transition name="modal-inner">
          <!--CONTENT-->
          <div v-if="modalActive" class="relative bg-white rounded-lg shadow">
            <!-- HEADER -->
            <div
              class="flex flex-col items-center justify-between p-4 md:p-5 rounded-t"
            >
              <!-- CALLER INFO -->
              <div class="text-center">
                <img :src="callerImage" alt="Caller's Image" class="w-20 h-20 rounded-full mx-auto mb-3">
                <h1 class="my-3 text-4xl font-bold">{{ callerName }}</h1>
                <p class="text-sm text-coolGray-600">
                  is calling you from XYZ Company
                </p>
              </div>
              <!-- CAMERA -->
              <div class="flex justify-center mt-4">
                <video ref="videoElement" class="w-64 h-48" autoplay></video>
              </div>
              <!-- BUTTONS -->
              <div class="flex justify-center space-x-4 mt-4">
                <button
                  class="px-6 py-3 text-white bg-[#2a2d57] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm"
                  @click="acceptCall"
                >
                  Accept Call
                </button>
                <button
                  class="px-6 py-3 text-white bg-red-500 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm"
                  @click="declineCall"
                >
                  Decline Call
                </button>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref, defineProps, defineEmits, onMounted } from "vue";

const { modalActive, callerName, callerImage } = defineProps(["modalActive", "callerName", "callerImage"]);

const acceptCall = () => {
  // Handle accepting call
  emit("close-modal");
};

const declineCall = () => {
  // Handle declining call
  emit("close-modal");
};

const emit = defineEmits(["close-modal"]);

let videoElement = ref(null);

onMounted(() => {
  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        videoElement.value.srcObject = stream;
        videoElement.value.play();
      })
      .catch(error => {
        console.error('Error accessing camera:', error);
      });
  }
});
</script>

<style scoped>
.modal-outer-enter-active,
.modal-outer-leave-active {
  transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-outer-enter-from,
.modal-outer-leave-to {
  opacity: 0;
}

.modal-inner-enter-active {
  transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02),
    transform 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.15s;
}

.modal-inner-leave-active {
  transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02),
    transform 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-inner-enter-from {
  opacity: 0;
  transform: scale(0.8);
}

.modal-inner-leave-to {
  opacity: 0;
  transform: scale(0.8);
}
</style>
