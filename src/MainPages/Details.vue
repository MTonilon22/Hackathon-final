<template>
  <div class="p-3">
    <div class="flex text-[#2a2d57] mb-2 md:">
      <div
<<<<<<< HEAD
        class="flex w-[16%] font-poppins font-bold text-lg pl-3 cs:hidden sm:hidden md:hidden lg:block"
=======
        class="flex w-[16%] text-lg pl-3 font-poppins font-bold md:text-md lg:text-lg custom-sm:hidden sm:hidden md:hidden lg:block"
>>>>>>> 6b1544400f3478b94cb572e81bcb978b7cdaea51
      >
        Search Filter
      </div>
      <div
<<<<<<< HEAD
        class="lg:ml-[7%] cs:hidden sm:hidden md:block lg:block md:my-[1%] font-poppins font-bold flex md:w-[60%] lg:w-[60%] cs:w-[50%] sm:w-[50%] lg:text-2xl md:text-lg"
=======
        class="flex w-[56%] custom-sm:ml-[2%] text-lg lg:ml-[2%] lg:pl-5 font-poppins font-bold"
>>>>>>> 6b1544400f3478b94cb572e81bcb978b7cdaea51
      >
        Blog <NewspaperIcon class="h-[26px] w-[26px] ml-1" />
      </div>
      <div
<<<<<<< HEAD
        class="lg:ml-[3%] cs:hidden sm:hidden md:hidden lg:block md:my-[1%] cs:my-[2%] font-poppins font-bold flex md:w-[25%] lg:w-[25%] cs:w-[50%] sm:w-[50%] lg:text-2xl md:text-lg"
=======
        class="custom-sm:hidden flex w-[30%] text-lg font-poppins font-bold md:ml-9 lg:ml-[10%]"
>>>>>>> 6b1544400f3478b94cb572e81bcb978b7cdaea51
      >
        All <mdicon class="ml-2" name="post-outline" :width="26" :height="26" />
      </div>
    </div>
    <div class="flex custom-sm:flex custom-sm:flex-col">
      <div
<<<<<<< HEAD
        class="h-[700px] w-[20%] flex-col overflow-auto cs:hidden sm:hidden md:hidden lg:block"
      >
        <Accordion
          title="Property Type"
          :content="[
            { type: 'radio', data: 'Buy' },
            { type: 'radio', data: 'Rent' },
          ]"
        />
        <Accordion
          title="Property Category"
          :content="[
            { type: 'checkbox', data: 'Commercial' },
            { type: 'checkbox', data: 'Condo' },
            { type: 'checkbox', data: 'House' },
            { type: 'checkbox', data: 'Land' },
            { type: 'checkbox', data: 'Townhouse' },
          ]"
        />
        <Accordion
          title="Location"
          :content="[
            { type: 'text', data: 'City' },
            { type: 'text', data: 'Address' },
            { type: 'text', data: 'Neighborhood' },
            { type: 'text', data: 'Zipcode' },
            { type: 'dialog', data: 'Philippines' },
            { type: 'dialog', data: 'Cebu' },
          ]"
        />
        <Accordion
          title="Price"
          :content="[
            { type: 'text', data: '₱ _ _ _ _ _ _ _ _ _ _ _ _ ' },
            { type: 'range', data: 'Cebu' },
          ]"
        />
        <Accordion
          title="Area"
          :content="[
            { type: 'text', data: 'Square Meter ' },
            { type: 'range', data: 'Cebu' },
          ]"
        />
        <Accordion
          title="Rooms"
          :content="[
            { type: 'spinner', data: 'Bedroom' },
            { type: 'spinner', data: 'Bathroom' },
          ]"
        />
      </div>

      <div
        class="lg:w-[60%] md:w-[95%] mx-auto cs:w-[100%] sm:w-[100%] cs:my-[2%] flex-col lg:mt-[-1.8%]"
      >
        <div class="cs:block sm:block md:block lg:hidden">
=======
        class="md:hidden sm:hidden custom-sm:hidden xl:block lg:block lg:h-[700px] custom-sm:h-[700px] lg:w-[16%] flex-col overflow-auto ml-6"
      >
        <div class="h-[700px] flex-col overflow-auto">
>>>>>>> 6b1544400f3478b94cb572e81bcb978b7cdaea51
          <BlogOwner
            :profile_picture="agent_profile"
            :name="agent_name"
            :property_number="agent_numberOfProperty"
<<<<<<< HEAD
            :profile_picture="agent_profile"
            :facebook="agent_fb"
            :instagram="agent_instagram"
            :twitter="agent_x"
          />
        </div>
        <div
          class="lg:w-[90%] md:w-[100%] cs:w-[100%] sm:w-[100%] cs:my-[6%] flex-col lg:ml-6 mt-[3%]"
        ></div>
        <div
          class="lg:w-[90%] md:w-[100%] cs:w-[100%] sm:w-[100%] cs:my-[6%] flex-col lg:ml-6"
        >
          <ProductDetails
            :name="name"
            :property_price="property_price"
            :local_area="local_area"
            :description="description"
            :city="city"
            :country="country"
            :zipcode="zipcode"
            :bedroom="bedroom"
            :bathroom="bathroom"
            :property_area="property_area"
            :parking_space="parking_space"
            :attic="attic"
            :balcony="balcony"
            :deck="deck"
            :fenced_yard="fenced_yard"
            :frontyard="frontyard"
            :gasheat="gasheat"
            :gym="gym"
            :lake_view="lake_view"
            :pond="pond"
            :pool="pool"
            :recreation="recreation"
            :sprinklers="sprinklers"
            :storage="storage"
            :washer="washer"
            :wine_cellar="wine_cellar"
            :airport="airport"
            :bus_stand="bus_stand"
            :hospital="hospital"
            :patroltank="patroltank"
            :railway="railway"
            :shopping="shopping"
            :universities="universities"
            :others="others"
            :main_image="main_image"
            :extra1="extra1"
            :extra2="extra2"
            :extra3="extra3"
=======
>>>>>>> 6b1544400f3478b94cb572e81bcb978b7cdaea51
          />
        </div>
      </div>

      <BlogDetails
        :image="image"
        :job_title="job_title"

        :job_description="job_description"
        :location="location"
        :salary="salary"
        :skills="skills"

        :step1="step1"
        :step2="step2"
        :step3="step3"
        :step4="step4"
        :step5="step5"


  
      />

      <div
<<<<<<< HEAD
        class="cs:hidden sm:hidden md:hidden lg:block lg:h-[900px] lg:w-[20%] md:w-[50%] md:h-[440px] flex-col md:ml-2"
      >
        <!--Blog Owner -->
        <BlogOwner
          :profile_picture="agent_profile"
          :name="agent_name"
          :property_number="agent_numberOfProperty"
        />
      </div>
    </div>
    <div
      class="cs:w-[90%] cs: mx-auto md:mb-5 lg:mb-5 md:mt-10 lg:mt-10 md:mx-1 md:w-[90%] md:h-[50%] lg:mx-auto"
    >
      <div
        class="cs:-ml-3 sm:-ml-3 flex w-[16%] text-xl lg:ml-[5%] text-[#2a2d57] font-poppins font-bold"
      >
        Location <MapIcon class="h-[26px] w-[26px] ml-1" />
      </div>
      <!-- dynamic iframe fetched from db-->
      <div
        class="cs:w-[100%] rounded-md mx-auto flex items-center justify-center"
      >
        <div v-html="iframeSrc"></div>
      </div>
    </div>
    <div>
      <div
        class="font-poppins font-bold lg:text-xl md:text-lg mt-10 lg:ml-[9%] lg:w-[16%] md:w-[50%] pl-3 text-[#2a2d57] flex flex-row my-5"
      >
        Related Property
        <span><ChatBubbleLeftIcon class="h-[26px] w-[26px] ml-1" /></span>
      </div>
      <div
        class="flex flex-wrap mt-2 h-full md:mx-auto md:w-[100%] lg:w-[84%] cs:gap-3 cs:mx-auto gap-y-9 md:gap-y-9 md:gap-5 justify-evenly"
      >
        <Products
          :image="swiper1"
          name="3 LEVEL HOUSE WITH ROOF DECK AND POOL IN VISTA GRANDE TALISAY"
          :price="48000000"
          :size="769"
          :bedroom="7"
          :bathroom="7"
        />
        <Products
          :image="swiper2"
          name="2-Storey House & Lot For Sale White Hills Subdivision-Banawa"
          :price="12500000"
          :size="200"
          :bedroom="6"
          :bathroom="3"
        />
        <Products
          :image="swiper3"
          name="4 Bedrooms House and Lot for Sale at Kishanta Subdivision"
          :price="12500000"
          :size="150"
          :bedroom="4"
          :bathroom="2"
        />
=======
        class="lg:w-[25%] md:w-[100%] lg:mr-6 custom-sm:flex custom-sm:flex-col"
      >
        <div
          class="custom-sm:block md:hidden lg:hidden flex w-[30%] text-lg flex-row font-poppins font-bold md:ml-9 lg:ml-[10%] text-orange-500"
        >
          <span class="flex-row w-[200px] flex my-3 ml-2"
            ><h3 class="flex">
              Related Blogs
              <mdicon
                class="flex absolute ml-[35%] flex-row text-semibold"
                name="post-outline"
                :width="26"
                :height="26"
              />
            </h3>
          </span>
        </div>

        <div
          class="custom-sm:flex custom-sm:flex-col custom-sm:h-[300px] custom-sm:w-[95%] custom-sm:mx-auto lg:w-full lg:h-[480px] overflow-auto bg-white border-2 custom-sm:hover:border-orange-500 rounded-md shadow-xl lg:p-5 md:p-2 md:ml-2 lg:ml-5 mb-5"
        >
          <Blog
            v-for="(blog, index) in allBlogs"
            @click="currentBlog(blog.id)"
            :thumbnailUrl="blog.thumbnail"
            :description="blog.name"
            :name="blog.broker"
          />
        </div>
        <div></div>
        <div>
          <div clas="lg:w-[28%] md:w-[100%]"></div>
        </div>
>>>>>>> 6b1544400f3478b94cb572e81bcb978b7cdaea51
      </div>
    </div>
  </div>
</template>

<script setup>
import BlogOwner from "../components/BlogOwner.vue";
import Accordion from "../components/Accordion.vue";
import {
  NewspaperIcon,
  ChatBubbleLeftIcon,
  PaperAirplaneIcon,
} from "@heroicons/vue/24/outline";
import Blog from "../components/Blog.vue";
import BlogDetails from "../components/ProductDetails.vue";
import { ref, onMounted, computed } from "vue";

import { useRoute } from "vue-router";


onMounted(() => {
  getCurrentJob();
});

const route = useRoute();

const id = route.params.id;

const image = ref(null);
const job_title = ref(null)
const job_description=ref()
const job_location=ref()
const salary=ref()

const step1=ref()
const step2=ref()
const step3=ref()
const step4=ref()
const step5=ref()

const getCurrentJob = async ()=> {
  const response = await fetch(`http://localhost:8080/getJobById/${id}`);
  const data = await response.json();

  image.value = await convertBlob(data[0].image.data);
  job_title.value = data[0].job_title;
  job_description.value = data[0].job_description;
  job_location.value = data[0].location;
  salary.value = data[0].salary;
  step1.value = data[0].step1;
  step2.value = data[0].step2;
  step3.value = data[0].step3;
  step4.value = data[0].step4;
  step5.value = data[0].step5;

}



const convertBlob = (image) => {
      return new Promise((resolve, reject) => {
        if (image) {
          const blob = new Blob([new Uint8Array(image)], { type: "image/jpeg" });
          const reader = new FileReader();
          reader.readAsDataURL(blob);
          reader.onloadend = () => {
            const dataURL = reader.result;
            resolve(dataURL);
          };
        }
      });
    };

</script>

<style>
/* Comment Send Button with Orange Scheme */
.comment-button {
  background-color: #ff6600; /* Orange background color */
  color: #fff; /* Text color (white) */
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
}

/* Hover state for the button */
.comment-button:hover {
  background-color: #e65200; /* Darker orange on hover */
}
</style>
