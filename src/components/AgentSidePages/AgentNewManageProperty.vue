<template>
  <div class="h-full cs:w-[100%] sm:w-[100%] md:w-[100%] lg:w-[80%]">
    <div class="lg:block w-[100%] h-[100%] sticky top-0 bg-[#e9d8c5]">
      <div class="flex flex-row row-span-2">
        <div
          class="cs:w-[90%] cs:h-[830px] md:w-[90%] mx-auto lg:w-[80%] md:h-[900px] md:mt-[10%] lg:mt-[5%] bg-[#e9d8c5]"
        >
          <div
            class="cs:w-[100%] md:w-[100%] lg:w-[90%] mt-[5%] border-2 rounded-lg px-5 py-5 bg-white mx-auto"
          >
            <div class="flex justify-start items-center">
              <mdicon
                name="AccountPlusOutline"
                :width="35"
                :height="35"
                class="hover:text-white text-[#111929] mr-2"
              />
              <span class="font-semibold text-md"> Property List Table</span>
            </div>
            <div class="md:flex md:flex-row md:row-span-3 md:gap-6">
              <div
                class="flex justify-start items-start flex-col mt-5 md:w-[30%]"
              >
                <label class="block mb-2 text-sm font-medium" for="agentname"
                  >Property Name:</label
                >
                <input
                  id="agentname"
                  type="text"
                  class="block w-full px-4 py-2 rounded-md text-gray-950 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 focus:outline-none"
                />
              </div>
              <div
                class="flex justify-start items-start flex-col mt-5 md:w-[30%]"
              >
                <label class="block mb-2 text-sm font-medium" for="agentemail"
                  >Email</label
                >
                <input
                  id="agentemail"
                  type="email"
                  class="block w-full px-4 py-2 rounded-md text-gray-950 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 focus:outline-none"
                />
              </div>

              <div
                class="flex justify-start items-start flex-col mt-5 md:w-[30%]"
              >
                <label
                  class="block mb-2 text-sm font-medium"
                  for="propertystatus"
                  >Status</label
                >
                <select
                  v-model="property_enable"
                  id="propertystatus"
                  class="block w-full px-4 py-2 rounded-md text-gray-950 shadow-sm ring-1 ring-inset ring-primary placeholder:text-gray-400 cs:text-sm cs:leading-6 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 focus:outline-none"
                >
                  <option class="block mb-2 text-sm font-medium" value="Enable">
                    Enable
                  </option>
                  <option class="block mb-2 text-sm font-medium" value="D">
                    Disable
                  </option>
                </select>
              </div>
            </div>
            <div class="flex justify-start items-start flex-col mt-6">
              <button
                @click="submitAgent"
                class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-[#7F1D1D] rounded-md hover:bg-pink-700 focus:outline-none focus:bg-[#7F1D1D] mr-4"
                id="saveAgent"
              >
                Filter
              </button>
            </div>
          </div>

          <div
            class="rounded-lg mx-auto lg:w-[100%] lg:h-[450px] cs:w-[100%] cs:h-[330px] md:h-[500px] md:w-[100%] lg:mt-20 md:mt-20 cs:mt-10"
          >
            <div
              class="relative overflow-x-auto my-[5%] lg:w-[90%] lg:h-[100%] lg:mx-auto lg:my-[8%] cs:w-[100%] cs:h-[110%] md:w-[100%] md:h-[100%] md:my-[0%] mx-auto rounded-lg cs:mt-[8%]"
            >
              <table class="text-left rtl:text-right overflow-y-auto">
                <thead
                  class="text-[8.5px] uppercase bg-gray-200 sticky top-0 z-10"
                >
                  <tr class="lg:text-lg md:text-sm">
                    <th scope="col" class="py-3"></th>
                    <th scope="col" class="px-6 py-3">Images</th>
                    <th scope="col" class="px-12 py-3">Name</th>
                    <th scope="col" class="px-6 py-3">Property Status</th>
                    <th scope="col" class="px-6 py-3">Price</th>

                    <th scope="col" class="px-6 py-3">Action</th>
                  </tr>
                </thead>
                <tbody class="font-semibold text-sm">
                  <tr class="bg-white border-b">
                    <th
                      scope="row"
                      class="px-2 py-6 font-medium text-gray-900 whitespace-nowrap flex justify-center items-center"
                    >
                      <div class="flex items-center justify-center">
                        <input
                          id="default-checkbox"
                          type="checkbox"
                          value=""
                          class="w-5 h-5 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary"
                        />
                      </div>
                    </th>
                    <td class="cs:w-[20%] cs:h-[20%] md:w-[10%]">
                      <img
                        class="md:w-[80%] lg:w-[80%] cs:w-[80%] mx-auto my-2"
                        src="src/assets/images/Youtube-Images/image1.png"
                      />
                    </td>
                    <td class="px-6">DANARRA SOUTH</td>

                    <td class="px-6 py-4">Buy</td>
                    <td class="px-6 py-4">7094018</td>
                    <td
                      class="px-6 py-4 text-blue-600 font bold cursor-pointer"
                    >
                      Edit
                    </td>
                  </tr>

                  <tr class="bg-white border-b">
                    <th
                      scope="row"
                      class="px-2 py-6 font-medium text-gray-900 whitespace-nowrap flex justify-center items-center"
                    >
                      <div class="flex items-center justify-center">
                        <input
                          id="default-checkbox"
                          type="checkbox"
                          value=""
                          class="w-5 h-5 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary"
                        />
                      </div>
                    </th>
                    <td class="cs:w-[20%] cs:h-[20%] md:w-[10%]">
                      <img
                        class="md:w-[80%] lg:w-[80%] cs:w-[80%] mx-auto my-2"
                        src="src/assets/images/Youtube-Images/image1.png"
                      />
                    </td>
                    <td class="px-6">PASEO JULIO</td>

                    <td class="px-6 py-4">Buy</td>
                    <td class="px-6 py-4">7094018</td>
                    <td
                      class="px-6 py-4 text-blue-600 font bold cursor-pointer"
                    >
                      Edit
                    </td>
                  </tr>
                  <tr class="bg-white border-b">
                    <th
                      scope="row"
                      class="px-2 py-6 font-medium text-gray-900 whitespace-nowrap flex justify-center items-center"
                    >
                      <div class="flex items-center justify-center">
                        <input
                          id="default-checkbox"
                          type="checkbox"
                          value=""
                          class="w-5 h-5 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary"
                        />
                      </div>
                    </th>
                    <td class="cs:w-[20%] cs:h-[20%] md:w-[10%]">
                      <img
                        class="md:w-[80%] lg:w-[80%] cs:w-[80%] mx-auto my-2"
                        src="src/assets/images/Youtube-Images/image1.png"
                      />
                    </td>
                    <td class="px-6">PARKVILLE BACOLOD BY SMDC</td>

                    <td class="px-6 py-4">Buy</td>
                    <td class="px-6 py-4">7094018</td>
                    <td
                      class="px-6 py-4 text-blue-600 font bold cursor-pointer"
                    >
                      Edit
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import SideBarAgentNew from "../AgentSidePages/SideBarAgentNew.vue";
import { ref } from "vue";
const active = ref(0);
const isSidebarVisible = ref(false);
const toggleSidebar = () => {
  isSidebarVisible.value = !isSidebarVisible.value;
};
import { ref } from "vue";
import router from "../router";
import { useRoute } from "vue-router";
</script>
../../router
