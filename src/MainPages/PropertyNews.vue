<template>
  <div class="p-3">
    <div class="flex text-[#2a2d57] mb-2 md:">
      <div
        class="flex w-[16%] text-lg pl-3 font-poppins font-bold md:text-md lg:text-lg cs:hidden sm:hidden md:hidden lg:block"
      >
        Search Filter
      </div>
      <div
        class="flex w-[56%] cs:ml-[2%] text-lg lg:ml-[2%] lg:pl-5 font-poppins font-bold"
      >
        Blog <NewspaperIcon class="h-[26px] w-[26px] ml-1" />
      </div>
      <div
        class="cs:hidden flex w-[30%] text-lg font-poppins font-bold md:ml-9 lg:ml-[10%]"
      >
        All <mdicon class="ml-2" name="post-outline" :width="26" :height="26" />
      </div>
    </div>
    <div class="flex cs:flex cs:flex-col">
      <div
        class="md:hidden sm:hidden cs:hidden xl:block lg:block lg:h-[700px] cs:h-[700px] lg:w-[16%] flex-col overflow-auto ml-6"
      >
        <div class="h-[700px] flex-col overflow-auto">
          <BlogOwner
            :profile_picture="agent_profile"
            :name="agent_name"
            :property_number="agent_numberOfProperty"
          />
        </div>
      </div>

      <BlogDetails
        :iframe="iframe"
        :developer="developer"
        :title="title"
        :description="description"
        :location="location"
        :details="details"
        :broker="broker"
        :contact_phone="contact_phone"
        :contact_telephone="contact_telephone"
        :email_address="email"
        :key_tags="key_tags"
        :amenities="amenities"
        :landmarks="landmarks"
        :highlights="highlights"
      />

      <div
        class="lg:w-[25%] md:w-[100%] lg:mr-6 cs:flex cs:flex-col"
      >
        <div
          class="cs:block md:hidden lg:hidden flex w-[30%] text-lg flex-row font-poppins font-bold md:ml-9 lg:ml-[10%] text-orange-500"
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
          class="cs:flex cs:flex-col cs:h-[300px] cs:w-[95%] cs:mx-auto lg:w-full lg:h-[480px] overflow-auto bg-white border-2 cs:hover:border-orange-500 rounded-md shadow-xl lg:p-5 md:p-2 md:ml-2 lg:ml-5 mb-5"
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
import BlogDetails from "../components/BlogDetails.vue";
import { ref, onMounted, computed } from "vue";

onMounted(() => {
  recommendedBlogs();
});

const iframe = ref();
const name = ref();
const title = ref();
const developer = ref();
const details = ref();
const location = ref();
const description = ref();
const broker = ref();
const contact_phone = ref();
const contact_telephone = ref();
const email = ref();
const key_tags = ref();
const amenities = ref([]);
const landmarks = ref([]);
const highlights = ref([]);

const currentBlog = async (id) => {
  const blog = await getBlog(id);
  iframe.value = blog.iframe;
  title.value = blog.name;
  developer.value = blog.developer;
  location.value = blog.location;
  details.value = blog.details;
  description.value = blog.description;
  broker.value = blog.broker;
  contact_phone.value = blog.contact_phone;
  contact_telephone.value = blog.contact_telephone;
  email.value = blog.email_address;
  key_tags.value = blog.key_tags;

  amenities.value = await getAmenities(id);
  landmarks.value = await getLandmarks(id);
  highlights.value = await getHighlights(id);
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const nuller = () => {
  iframe.value = null;
  title.value = null;
  developer.value = null;
  location.value = null;
  details.value = null;
  description.value = null;
  broker.value = null;
  contact_phone.value = null;
  contact_telephone.value = null;
  email.value = null;
  key_tags.value = null;
  amenities.value = null;
  landmarks.value = null;
  highlights.value = null;
};

const allBlogs = ref([]);

const recommendedBlogs = async () => {
  const blogs = await getBlogs(); // all blogs
  for (var i = 0; i < blogs.length; i++) {
    const blogID = blogs[i].blog_id;
    const blog = await getBlog(blogID);
    const image = await getBlogImage(blogID);
    if (i == 0) {
      currentBlog(blogID);
    }
    allBlogs.value.push({
      id: blogID,
      thumbnail: await convertBlob(image),
      name: blog.name,
      broker: blog.broker,
    });
  }
};

const getBlogs = async () => {
  const response = await fetch("http://localhost:8080/getBlogs");
  const data = await response.json();
  return data;
};

const getBlog = async (id) => {
  const response = await fetch(`http://localhost:8080/getBlogByID/${id}`);
  const data = await response.json();
  return data[0];
};

const getBlogImage = async (id) => {
  const response = await fetch(`http://localhost:8080/getBlogImageByID/${id}`);
  const data = await response.json();
  return data[0].thumbnail.data;
};

const getAmenities = async (id) => {
  const response = await fetch(
    `http://localhost:8080/getAmenitiesByBlogID/${id}`
  );
  const data = await response.json();
  return data[0];
};

const getHighlights = async (id) => {
  const response = await fetch(
    `http://localhost:8080/getHighlightsByBlogID/${id}`
  );
  const data = await response.json();
  return data[0];
};

const getLandmarks = async (id) => {
  const response = await fetch(
    `http://localhost:8080/getLandmarksByBlogID/${id}`
  );
  const data = await response.json();
  return data[0];
};

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
