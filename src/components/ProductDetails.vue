<template>
  <div
    class="custom-sm:w-[95%] sm:w-[100%] md:w-[60%] lg:w-[55%] lg:ml-[1%] bg-white custom-sm:m-2 p-5 border-2 rounded-md shadow-xl"
  >
<<<<<<< HEAD
    <div class="text-center font-bold text-xl">
      {{ name }}
    </div>
    <div>
      <div
        id="animation-carousel"
        class="relative w-full"
        data-carousel="static"
      >
        <!-- Carousel wrapper -->
        <div class="w-[100%]">
          <div
            class="relative h-56 overflow-hidden rounded-lg md:h-96 w-full z-0 mt-5"
          >
            <!-- Item 1 -->
            <div class="hidden duration-200 ease-linear" data-carousel-item>
              <div class="absolute inset-0">
                <img
                  :src="main_image"
                  class="object-cover h-full w-full"
                  alt="..."
                />
              </div>
            </div>
            <!-- Item 2 -->
            <div class="hidden duration-200 ease-linear" data-carousel-item>
              <div class="absolute inset-0">
                <img
                  :src="extra1"
                  class="lg:object-cover h-full w-full"
                  alt="..."
                />
              </div>
            </div>
            <!-- Item 3 -->
            <div
              class="hidden duration-200 ease-linear"
              data-carousel-item="active"
            >
              <div class="absolute inset-0">
                <img
                  :src="extra2"
                  class="lg:object-cover h-full w-full"
                  alt="..."
                />
              </div>
            </div>
            <!-- Item 4 -->
            <div class="hidden duration-200 ease-linear" data-carousel-item>
              <div class="absolute inset-0">
                <img
                  :src="extra3"
                  class="w-full h-full lg:object-cover"
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Images Below the Carousel -->
        <div>
          <div class="grid gap-4 mx-auto w-[90%]">
            <div class="flex flex-row gap-5 mx-auto my-[5%] items-center">
              <div class="">
                <img
                  class="h-[90%] max-w-full rounded-lg"
                  :src="main_image"
                  alt=""
                />
              </div>
              <div>
                <img
                  class="h-[90%] max-w-full rounded-lg"
                  :src="extra1"
                  alt=""
                />
              </div>
              <div>
                <img
                  class="h-[90%] max-w-full rounded-lg"
                  :src="extra2"
                  alt=""
                />
              </div>
              <div>
                <img
                  class="h-[90%] max-w-full rounded-lg"
                  :src="extra3"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <!-- Slider controls -->
        <button
          type="button"
          class="absolute z-0 lg:left-[-2%] cs:left-[-7%] md:left-[-3%] top-[-13%] start-0 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span
            class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:group-hover:bg-[#e77e22] group-focus:ring-white"
          >
            <svg
              class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span class="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          class="absolute lg:right-[-2%] cs:right-[-7%] md:right-[-3%] top-[-13%] end-0 z-0 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span
            class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:group-hover:bg-[#e77e22] group-focus:ring-white"
          >
            <svg
              class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span class="sr-only">Next</span>
          </span>
        </button>
      </div>
    </div>
    <!-- <div class="flex justify-center items-center p-5">
        <img :src="property.dataURL" alt="" />
      </div> -->
    <div class="text-center font-bold text-xl">
      Price:
      <span class="text-[#2a2d57] text-xl ml-3 font-bold">
        ₱
        {{ property_price ? property_price.toLocaleString("en-US") : "N/A" }}
      </span>
    </div>
  </div>
  <!-- Property Description -->
  <div
    class="font-poppins font-400 border-2 p-2 shadow-xl rounded-md shadow-[0_4px_4px_0px_rgba(0,0,0,0.70) mb-5"
  >
    <div
      class="font-bold cs:my-[3%] sm:my-[3%] lg:ml-5 border-b-2 border-dashed font-poppins"
    >
      Property Description:
    </div>
    <!-- Location Fetching -->
    <div
      class="font-poppins font-bold lg:text-md md:text-md cs:text-sm sm:text-xs lg:ml-5"
    >
      Location:
      <!-- Location Needs to be Fetched -->
      <span class="lg:text-md md:text-md cs:text-sm sm:text-xs font-500">
        <!-- {{ property.property_location }} -->
        {{ local_area }}
      </span>
    </div>

    <div class="">
      <!-- Description Fetching -->
      <div
        class="font-poppins font-bold lg:text-md md:text-md cs:text-sm sm:text-xs lg:mx-5 my-5 text-justify"
      >
        Description:
        <!-- Description Needs to be Fetched -->

        <span
          class="lg:text-md md:text-md cs:text-sm sm:text-xs font-500 text-justify"
        >
          <!-- {{ property.property_description }} -->
          {{ description }}
        </span>
      </div>
    </div>
  </div>
  <!-- Property Address -->
  <div
    class="md:font-poppins border-2 p-2 shadow-xl rounded-md shadow-[0_4px_4px_0px_rgba(0,0,0,0.70) mb-5 h-[360px]"
  >
    <div
      class="font-bold cs:my-[3%] sm:my-[3%] lg:ml-5 border-b-2 border-dashed font-poppins"
    >
      Property Description:
    </div>
    <div class="md:p-2">
      <div class="flex">
        <div class="w-[95%] mx-auto flex flex-wrap items-center justify-center">
          <div
            class="font-poppins font-bold lg:text-md md:text-md cs:text-sm sm:text-xs lg:mx-5 my-5 text-justify border-2 lg:w-[40%] lg:h-[25%] flex items-center"
          >
            <div class="ml-2">
              <!-- Address Needs to be Fetched -->
              Address:
              <span
                class="lg:text-md md:text-md cs:text-sm sm:text-xs font-500 text-justify"
              >
                <!-- {{ property.property_city }} -->

                {{ local_area }}
              </span>
            </div>

            <span
              class="lg:text-md md:text-md font-400 cs:text-sm sm:text-sm"
            >
            </span>
          </div>
          <!-- City needs to be Fetched Here -->

          <div
            class="font-poppins font-bold lg:text-md md:text-md cs:text-sm sm:text-xs lg:mx-5 my-5 text-justify border-2 lg:w-[40%] lg:h-[25%] flex items-center"
          >
            <div class="ml-2">
              <!-- City Needs to be Fetched -->
              City:
              <span
                class="lg:text-md md:text-md cs:text-sm sm:text-xs font-500 text-justify"
              >
                <!-- {{ property.property_city }} -->

                {{ city }}
              </span>
            </div>

            <span
              class="lg:text-md md:text-md font-400 cs:text-sm sm:text-sm"
            >
            </span>
          </div>

          <!-- State and Country Needs to be Fetched Here -->
          <div
            class="font-poppins font-bold lg:text-md md:text-md cs:text-sm sm:text-xs lg:mx-5 my-5 text-justify border-2 lg:w-[40%] lg:h-[25%] flex items-center"
          >
            <div class="ml-2">
              <!-- State and Country Needs to be Fetched -->
              State and Country:
              <span
                class="lg:text-md md:text-md cs:text-sm sm:text-xs font-500 text-justify"
              >
                <!-- {{ property.property_city }} -->

                {{ country }}
              </span>
            </div>

            <span
              class="lg:text-md md:text-md font-400 cs:text-sm sm:text-sm"
            >
            </span>
          </div>
          <!-- Zip Needs to be Fetched Here -->
          <div
            class="font-poppins font-bold lg:text-md md:text-md cs:text-sm sm:text-xs lg:mx-5 my-5 text-justify border-2 lg:w-[40%] lg:h-[25%] flex items-center"
          >
            <div class="ml-2">
              <!-- Zip Code Needs to be Fetched -->
              Zip Code:
              <span
                class="lg:text-md md:text-md cs:text-sm sm:text-xs font-500 text-justify"
              >
                <!-- {{ property.property_city }} -->

                {{ zipcode }}
              </span>
            </div>

            <span
              class="lg:text-md md:text-md font-400 cs:text-sm sm:text-sm"
            >
            </span>
          </div>
          <!-- Neighborhood Needs to be Fetched Here -->
          <div
            class="font-poppins font-bold lg:text-md md:text-md cs:text-sm sm:text-xs lg:mx-5 my-5 text-justify border-2 lg:w-[40%] lg:h-[25%] flex items-center"
          >
            <div class="ml-2">
              <!-- Neighborhood Needs to be Fetched -->
              Neighborhood:
              <span
                class="lg:text-md md:text-md cs:text-sm sm:text-xs font-500 text-justify"
              >
                <!-- {{ property.property_city }} -->

                {{ local_area }}, {{ city }}
              </span>
            </div>

            <span
              class="lg:text-md md:text-md font-400 cs:text-sm sm:text-sm"
            >
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Details -->
  <div
    class="md:font-poppins border-2 p-2 shadow-xl rounded-md shadow-[0_4px_4px_0px_rgba(0,0,0,0.70) mb-5 h-[370px]"
  >
    <div
      class="font-bold cs:my-[3%] sm:my-[3%] lg:ml-5 border-b-2 border-dashed font-poppins"
    >
      Details:
    </div>
    <div class="md:p-2">
      <div class="flex">
        <div class="w-[95%] mx-auto flex flex-wrap items-center justify-center">
          <div
            class="font-poppins font-bold lg:text-md md:text-md cs:text-sm sm:text-xs lg:mx-5 my-5 text-justify border-2 lg:w-[40%] lg:h-[25%] flex items-center"
          >
            <div class="ml-2 flex flex-row gap-3 items-center">
              <!-- Bedroom Count Needs to be Fetched -->
              Bedrooms:
              <span
                class="lg:text-md md:text-md cs:text-sm sm:text-xs font-500 text-justify"
              >
                <!-- {{ property.bedroom }} -->
=======
    <div class="">
      <div class="flex flex-col justify-center md:items-center mt-3">
        <div
          class="custom-sm:mb-5 custom-sm:mx-auto custom-sm:w-[300px] sm:mb-5 sm:w-[330px] md:w-[100%] lg:w-[100%] mx-auto lg:ml-[-9%]"
        >
          <div class="iframe-container">
            <div><img :src="image" alt="" /></div>
          </div>
        </div>
>>>>>>> 6b1544400f3478b94cb572e81bcb978b7cdaea51

        <div class="flex-col w-[90%]">
          <div class="font-sans lg:ml-[-3%] md:ml-[-5%]">
            <strong class="font-bold font-poppins lg:text-2xl lg:text-center"
              >{{ job_title }} </strong
            ><br /><br />

            <strong class="font-bold font-poppins">Position Overview: </strong>
         {{ job_description }}<br /><br />

            <strong class="font-bold font-poppins">Location: </strong>
            {{ location }}<br /><br />

            <strong class="font-bold font-poppins">Salary</strong>
            ₱{{ salary }} / month<br /><br />
            <div class="whitespace-break-spaces font-poppins">
              <strong>Skills Required</strong> {{ skills }}<br /><br />
            </div>

<<<<<<< HEAD
          <div
            class="font-poppins font-bold lg:text-md md:text-md cs:text-sm sm:text-xs lg:mx-5 my-5 text-justify border-2 lg:w-[40%] lg:h-[25%] flex items-center"
          >
            <div class="ml-2 flex flex-row gap-3 items-center">
              <!-- Bathroom Count Needs to be Fetched -->
              Bathroom:
              <span
                class="lg:text-md md:text-md cs:text-sm sm:text-xs font-500 text-justify"
              >
                <!-- {{ property.bathroom}} -->

                {{ bathroom }}
              </span>
              <mdicon
                name="Shower"
                :width="30"
                :height="30"
                class="mr-5 text-gray-700"
              />
=======
            <div class="flex justify-center">
              <ul class="steps steps-vertical lg:steps-horizontal">
                <li @click="currenTab = 0" class="step step-warning">
                  Submit Requirement
                </li>
                <li @click="currenTab = 1" class="step">Primary Interview</li>
                <li @click="currenTab = 2" class="step">Online Assesments</li>
                <li @click="currenTab = 3" class="step">
                  Technical Interviews
                </li>
                <li @click="currenTab = 4" class="step">Confirmation</li>
              </ul>
>>>>>>> 6b1544400f3478b94cb572e81bcb978b7cdaea51
            </div>

<<<<<<< HEAD
          <!-- Land Area Needs to be Fetched Here -->
          <div
            class="font-poppins font-bold lg:text-md md:text-md cs:text-sm sm:text-xs lg:mx-5 my-5 text-justify border-2 lg:w-[40%] lg:h-[25%] flex items-center"
          >
            <div class="ml-2 flex flex-row gap-3 items-center">
              <!-- Land Area Needs to be Fetched -->
              Land Area:
              <span
                class="lg:text-md md:text-md cs:text-sm sm:text-xs font-500 text-justify"
              >
                <!-- {{ property.andarea }} -->

                {{ property_area }}sqm
              </span>
            </div>
          </div>
          <!-- Zip Needs to be Fetched Here -->
          <div
            class="font-poppins font-bold lg:text-md md:text-md cs:text-sm sm:text-xs lg:mx-5 my-5 text-justify border-2 lg:w-[40%] lg:h-[25%] flex items-center"
          >
            <div class="ml-2 flex flex-row gap-3 items-center">
              <!-- Bedroom Count Needs to be Fetched -->
              Parking Space:
              <span
                class="lg:text-md md:text-md cs:text-sm sm:text-xs font-500 text-justify"
              >
                <!-- {{ property.bedroom }} -->
=======
            <div
              v-if="currenTab === 0"
              class="w-full h-[600px] mt-5 shadow-xl border-gray-400 border-2 rounded-lg p-5 mb-2"
            >
              {{ step1 }}
            </div>
>>>>>>> 6b1544400f3478b94cb572e81bcb978b7cdaea51

            <div
              v-if="currenTab === 1"
              class="w-full h-[600px] mt-5 shadow-xl border-gray-400 border-2 rounded-lg p-5 mb-2"
            >
              {{ step2 }}
            </div>
<<<<<<< HEAD
          </div>
          <!-- Neighborhood Needs to be Fetched Here -->
          <div
            class="font-poppins font-bold lg:text-md md:text-md cs:text-sm sm:text-xs lg:mx-5 my-5 text-justify border-2 lg:w-[40%] lg:h-[25%] flex items-center"
          >
            <div class="ml-2 flex flex-row gap-3 items-center">
              <!-- Bedroom Count Needs to be Fetched -->
              Built In:
              <span
                class="lg:text-md md:text-md cs:text-sm sm:text-xs font-500 text-justify"
              >
                <!-- {{ property.bedroom }} -->
=======
>>>>>>> 6b1544400f3478b94cb572e81bcb978b7cdaea51

            <div
              v-if="currenTab === 2"
              class="w-full h-[600px] mt-5 shadow-xl border-gray-400 border-2 rounded-lg p-5 mb-2"
            >
              {{step3}}
            </div>
<<<<<<< HEAD
          </div>
          <div
            class="font-poppins font-bold lg:text-md md:text-md cs:text-sm sm:text-xs lg:mx-5 my-5 text-justify border-2 lg:w-[40%] lg:h-[25%] flex items-center"
          >
            <div class="ml-2 flex flex-row gap-3 items-center">
              <!-- Bedroom Count Needs to be Fetched -->
              Property Status:
              <span
                class="lg:text-md md:text-md cs:text-sm sm:text-xs font-500 text-justify"
              >
                <!-- {{ property.bedroom }} -->
=======
>>>>>>> 6b1544400f3478b94cb572e81bcb978b7cdaea51

            <div
              v-if="currenTab === 3"
              class="w-full h-[600px] mt-5 shadow-xl border-gray-400 border-2 rounded-lg p-5 mb-2"
            >
              {{ step4 }}
            </div>
<<<<<<< HEAD
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Amenities -->
  <div
    class="md:font-poppins border-2 p-2 shadow-xl rounded-md shadow-[0_4px_4px_0px_rgba(0,0,0,0.70) mb-5 h-[360px]"
  >
    <div
      class="font-bold cs:my-[3%] sm:my-[3%] lg:ml-5 border-b-2 border-dashed font-poppins"
    >
      Amenities:
    </div>
    <div class="md:p-2">
      <div class="flex">
        <div class="w-[95%] mx-auto flex flex-wrap items-center justify-center">
          <div
            class="lg:text-md md:text-md cs:text-sm sm:text-xs text-justify flex gap-2 justify-center items-center font-semibold w-[33.3%] my-[5%]"
            v-if="attic != 0"
          >
            <mdicon
              name="Sprinkler"
              :width="30"
              :height="30"
              class="text-gray-700"
            />
            Attic
          </div>
          <!-- ----- -->
          <div
            class="lg:text-md md:text-md cs:text-sm sm:text-xs text-justify flex gap-2 justify-center items-center font-semibold w-[33.3%] my-[5%]"
            v-if="balcony != 0"
          >
            <mdicon
              name="Sprinkler"
              :width="30"
              :height="30"
              class="text-gray-700"
            />
            Balcony
          </div>
          <!-- ----- -->
          <!-- ----- -->
          <div
            class="lg:text-md md:text-md cs:text-sm sm:text-xs text-justify flex gap-2 justify-center items-center font-semibold w-[33.3%] my-[5%]"
            v-if="deck != 0"
          >
            <mdicon
              name="Sprinkler"
              :width="30"
              :height="30"
              class="text-gray-700"
            />
            Deck
          </div>
          <!-- ----- -->
          <!-- ----- -->
          <div
            class="lg:text-md md:text-md cs:text-sm sm:text-xs text-justify flex gap-2 justify-center items-center font-semibold w-[33.3%] my-[5%]"
            v-if="fenced_yard != 0"
          >
            <mdicon
              name="Sprinkler"
              :width="30"
              :height="30"
              class="text-gray-700"
            />
            Fenced Yard
          </div>
          <!-- ----- -->
          <!-- ----- -->
          <div
            class="lg:text-md md:text-md cs:text-sm sm:text-xs text-justify flex gap-2 justify-center items-center font-semibold w-[33.3%] my-[5%]"
            v-if="frontyard != 0"
          >
            <mdicon
              name="Sprinkler"
              :width="30"
              :height="30"
              class="text-gray-700"
            />
            Front Yard
          </div>
          <!-- ----- -->
          <!-- ----- -->
          <div
            class="lg:text-md md:text-md cs:text-sm sm:text-xs text-justify flex gap-2 justify-center items-center font-semibold w-[33.3%] my-[5%]"
            v-if="gasheat != 0"
          >
            <mdicon
              name="Sprinkler"
              :width="30"
              :height="30"
              class="text-gray-700"
            />
            Gas Heat
          </div>
          <!-- ----- -->
          <!-- ----- -->
          <div
            class="lg:text-md md:text-md cs:text-sm sm:text-xs text-justify flex gap-2 justify-center items-center font-semibold w-[33.3%] my-[5%]"
            v-if="gym != 0"
          >
            <mdicon
              name="Sprinkler"
              :width="30"
              :height="30"
              class="text-gray-700"
            />
            Gym
          </div>
          <!-- ----- -->
          <!-- ----- -->
          <div
            class="lg:text-md md:text-md cs:text-sm sm:text-xs text-justify flex gap-2 justify-center items-center font-semibold w-[33.3%] my-[5%]"
            v-if="lake_view != 0"
          >
            <mdicon
              name="Sprinkler"
              :width="30"
              :height="30"
              class="text-gray-700"
            />
            Lake View
          </div>
          <!-- ----- -->
          <!-- ----- -->
          <div
            class="lg:text-md md:text-md cs:text-sm sm:text-xs text-justify flex gap-2 justify-center items-center font-semibold w-[33.3%] my-[5%]"
            v-if="pond != 0"
          >
            <mdicon
              name="Sprinkler"
              :width="30"
              :height="30"
              class="text-gray-700"
            />
            Pond
          </div>
          <!-- ----- -->
          <!-- ----- -->
          <div
            class="lg:text-md md:text-md cs:text-sm sm:text-xs text-justify flex gap-2 justify-center items-center font-semibold w-[33.3%] my-[5%]"
            v-if="pool != 0"
          >
            <mdicon
              name="Sprinkler"
              :width="30"
              :height="30"
              class="text-gray-700"
            />
            Pool
          </div>
          <!-- ----- -->
          <!-- ----- -->
          <div
            class="lg:text-md md:text-md cs:text-sm sm:text-xs text-justify flex gap-2 justify-center items-center font-semibold w-[33.3%] my-[5%]"
            v-if="recreation != 0"
          >
            <mdicon
              name="Sprinkler"
              :width="30"
              :height="30"
              class="text-gray-700"
            />
            Recreation
          </div>
          <!-- ----- -->
          <!-- ----- -->
          <div
            class="lg:text-md md:text-md cs:text-sm sm:text-xs text-justify flex gap-2 justify-center items-center font-semibold w-[33.3%] my-[5%]"
            v-if="sprinklers != 0"
          >
            <mdicon
              name="Sprinkler"
              :width="30"
              :height="30"
              class="text-gray-700"
            />
            Sprinklers
          </div>
          <!-- ----- -->
          <!-- ----- -->
          <div
            class="lg:text-md md:text-md cs:text-sm sm:text-xs text-justify flex gap-2 justify-center items-center font-semibold w-[33.3%] my-[5%]"
            v-if="storage != 0"
          >
            <mdicon
              name="Sprinkler"
              :width="30"
              :height="30"
              class="text-gray-700"
            />
            Storage
          </div>
          <!-- ----- -->
          <!-- ----- -->
          <div
            class="lg:text-md md:text-md cs:text-sm sm:text-xs text-justify flex gap-2 justify-center items-center font-semibold w-[33.3%] my-[5%]"
            v-if="washer != 0"
          >
            <mdicon
              name="Sprinkler"
              :width="30"
              :height="30"
              class="text-gray-700"
            />
            Washer
          </div>
          <!-- ----- -->
          <!-- ----- -->
          <div
            class="lg:text-md md:text-md cs:text-sm sm:text-xs text-justify flex gap-2 justify-center items-center font-semibold w-[33.3%] my-[5%]"
            v-if="wine_cellar != 0"
          >
            <mdicon
              name="Sprinkler"
              :width="30"
              :height="30"
              class="text-gray-700"
            />
            Wine Cellar
          </div>
          <!-- ----- -->
        </div>
      </div>
    </div>
  </div>
  <!-- Nearest Places -->
  <div
    class="md:font-poppins border-2 p-2 shadow-xl rounded-md shadow-[0_4px_4px_0px_rgba(0,0,0,0.70) mb-5 h-[360px]"
  >
    <div
      class="font-bold cs:my-[3%] sm:my-[3%] lg:ml-5 border-b-2 border-dashed font-poppins"
    >
      Nearest Places:
    </div>
    <div class="md:p-2">
      <div class="flex">
        <div class="w-[95%] mx-auto flex flex-wrap items-center justify-center">
          <!-- ----- -->
          <div
            v-if="airport != 'undefined'"
            class="lg:text-md md:text-md cs:text-sm sm:text-xs text-justify flex gap-2 justify-center items-center font-semibold w-[50%] my-[5%]"
          >
            <!-- {{ property.amenities-logo }} -->
=======
>>>>>>> 6b1544400f3478b94cb572e81bcb978b7cdaea51

            <div
              v-if="currenTab === 4"
              class="w-full h-[600px] mt-5 shadow-xl border-gray-400 border-2 rounded-lg p-5 mb-2"
            >
              {{ step5 }}
            </div>
            <div
              class="flex lg:w-full text-[#2a2d57] lg:ml-3 lg:mb-2 md:ml-1 md:mb-1"
            >
              <div class="flex text-lg font-semibold pl-3 custom-sm:my-4">
                Comments:
                <ChatBubbleLeftIcon
                  class="h-[26px] w-[26px] ml-1 text-[#2a2d57]"
                />
              </div>
            </div>

            <div
              class="flex lg:w-full md:w-[96%] overflow-auto bg-white rounded-md shadow-xl lg:p-3 lg:ml-5 lg:mb-6 md:p-3 md:ml-3 md:my-6 cursor-pointer hover:shadow-[0_4px_4px_0px_rgba(0,0,0,0.70)]"
            >
              <div class="flex ml-2 w-full">
                <input
                  type="text"
                  placeholder="Leave a comment..."
                  class="w-full border-b-2 pl-2 p3-1 focus:outline-none"
                />
                <a
                  href=""
                  class="flex items-center justify-center my-auto ml-1.5"
                  ><PaperAirplaneIcon
                    class="ml-1 mr-1 w-[25px] h-[25px] text-[#2a2d57] hover:scale-110"
                /></a>
              </div>
            </div>
            <Comment
              name="@Mikilabsyu143"
              description="I held her close to me
            'Cause I know she breaks so easily
            And then I told her."
            />
<<<<<<< HEAD
            <!-- {{ property.amenities-name }} -->
            {{ airport }}
          </div>
          <!-- ----- -->
          <!-- ----- -->
          <div
            v-if="bus_stand != 'undefined'"
            class="lg:text-md md:text-md cs:text-sm sm:text-xs text-justify flex gap-2 justify-center items-center font-semibold w-[50%] my-[5%]"
          >
            <!-- {{ property.amenities-logo }} -->

            <mdicon
              name="Sprinkler"
              :width="30"
              :height="30"
              class="text-gray-700"
            />
            <!-- {{ property.amenities-name }} -->
            {{ bus_stand }}
          </div>
          <!-- ----- -->
          <div
            v-if="hospital != 'undefined'"
            class="lg:text-md md:text-md cs:text-sm sm:text-xs text-justify flex gap-2 justify-center items-center font-semibold w-[50%] my-[5%]"
          >
            <!-- {{ property.amenities-logo }} -->

            <mdicon
              name="Sprinkler"
              :width="30"
              :height="30"
              class="text-gray-700"
=======
            <Comment
              name="@Mikilabsyu143"
              description="But I knew no matter how I tried to console her
            She'd just do the best she could
            But there are times the best is no damn good"
            />
            <Comment
              name="@Mikilabsyu143"
              description="And no matter how you try to be kind
            There's always still a part of you you leave behind
            When it falls apart
            There's no easy way to break somebody's heart"
>>>>>>> 6b1544400f3478b94cb572e81bcb978b7cdaea51
            />
          </div>
<<<<<<< HEAD
          <!-- ----- -->
          <div
            v-if="patroltank != 'undefined'"
            class="lg:text-md md:text-md cs:text-sm sm:text-xs text-justify flex gap-2 justify-center items-center font-semibold w-[50%] my-[5%]"
          >
            <!-- {{ property.amenities-logo }} -->

            <mdicon
              name="Sprinkler"
              :width="30"
              :height="30"
              class="text-gray-700"
            />
            <!-- {{ property.amenities-name }} -->
            {{ patroltank }}
          </div>
          <!-- ----- -->
          <div
            v-if="railway != 'undefined'"
            class="lg:text-md md:text-md cs:text-sm sm:text-xs text-justify flex gap-2 justify-center items-center font-semibold w-[50%] my-[5%]"
          >
            <!-- {{ property.amenities-logo }} -->

            <mdicon
              name="Sprinkler"
              :width="30"
              :height="30"
              class="text-gray-700"
            />
            <!-- {{ property.amenities-name }} -->
            {{ railway }}
          </div>
          <!-- ----- -->
          <div
            v-if="shopping != 'undefined'"
            class="lg:text-md md:text-md cs:text-sm sm:text-xs text-justify flex gap-2 justify-center items-center font-semibold w-[50%] my-[5%]"
          >
            <!-- {{ property.amenities-logo }} -->

            <mdicon
              name="Sprinkler"
              :width="30"
              :height="30"
              class="text-gray-700"
            />
            <!-- {{ property.amenities-name }} -->
            {{ shopping }}
          </div>
          <!-- ----- -->
          <div
            v-if="universities != 'undefined'"
            class="lg:text-md md:text-md cs:text-sm sm:text-xs text-justify flex gap-2 justify-center items-center font-semibold w-[50%] my-[5%]"
          >
            <!-- {{ property.amenities-logo }} -->

            <mdicon
              name="Sprinkler"
              :width="30"
              :height="30"
              class="text-gray-700"
            />
            <!-- {{ property.amenities-name }} -->
            {{ universities }}
          </div>
          <!-- ----- -->

          <div
            v-if="others != 'undefined'"
            class="lg:text-md md:text-md cs:text-sm sm:text-xs text-justify flex gap-2 justify-center items-center font-semibold w-[50%] my-[5%]"
          >
            <!-- {{ property.amenities-logo }} -->

            <mdicon
              name="Sprinkler"
              :width="30"
              :height="30"
              class="text-gray-700"
            />
            <!-- {{ property.amenities-name }} -->
            Notable Land Mark: {{ others }}
          </div>
          <!-- ----- -->

          <!-- Neighborhood Needs to be Fetched Here -->
=======
>>>>>>> 6b1544400f3478b94cb572e81bcb978b7cdaea51
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import Comment from "../components/Comment.vue";

const currenTab = ref(0);

defineProps({
image:String,
job_title:String,
job_description:String,
location:String,
salary:String,
skills:String,

step1:String,
step2:String,
step3:String,
step4:String,
step5:String,

});
</script>

<style>
@media (min-width: 300px) and (max-width: 400px) {
  /* CSS styles for extra custom-small screens */
  .iframe-container {
    width: 100%; /* Customize as needed */
    height: 100%;
    margin-left: -4px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .iframe-container iframe {
    width: 300px;
    height: 280px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

@media (min-width: 400px) and (max-width: 640px) {
  /* CSS styles for custom-small screens */
  .iframe-container {
    width: 100%; /* Customize as needed */
    height: 100%;
    margin-left: -1px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .iframe-container iframe {
    width: 330px;
    height: 280px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

@media (min-width: 640px) and (max-width: 767px) {
  /* CSS styles for small screens */
  .iframe-container {
    width: 100%; /* Customize as needed */
    height: 100%;
    margin-left: -1px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .iframe-container iframe {
    width: 350px;
    height: 300px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  /* CSS styles for medium screens */
  .iframe-container {
    width: 100%; /* Customize as needed */
    height: 100%;
    margin-left: -1px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .iframe-container iframe {
    width: 400px;
    height: 350px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

@media (min-width: 1024px) and (max-width: 1279px) {
  /* CSS styles for large screens */
  .iframe-container {
    width: 100%; /* Customize as needed */
    height: 100%;
    margin-left: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .iframe-container iframe {
    width: 500px;
    height: 400px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

/* Extra-large screens */
@media (min-width: 1280px) and (max-width: 1535px) {
  /* CSS styles for extra-large screens */
  .iframe-container {
    width: 100%; /* Customize as needed */
    height: 100%;
    margin-left: 55px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .iframe-container iframe {
    width: 620px;
    height: 450px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

@media (min-width: 1536px) {
  /* CSS styles for extra-large screens */
  .iframe-container {
    width: 100%; /* Customize as needed */
    height: 100%;
    margin-left: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .iframe-container iframe {
    width: 760px;
    height: 500px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
