<template>
  <div
    class="custom-sm:w-[95%] sm:w-[100%] md:w-[60%] lg:w-[55%] lg:ml-[1%] bg-white custom-sm:m-2 p-5 border-2 rounded-md shadow-xl"
  >
    <div class="">
      <div class="flex flex-col justify-center md:items-center mt-3">
        <div
          class="custom-sm:mb-5 custom-sm:mx-auto custom-sm:w-[300px] sm:mb-5 sm:w-[330px] md:w-[100%] lg:w-[100%] mx-auto lg:ml-[-9%]"
        >
          <div class="iframe-container">
            <div><img :src="image" alt="" /></div>
          </div>
        </div>

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
            </div>

            <div
              v-if="currenTab === 0"
              class="w-full h-[600px] mt-5 shadow-xl border-gray-400 border-2 rounded-lg p-5 mb-2"
            >
              {{ step1 }}
            </div>

            <div
              v-if="currenTab === 1"
              class="w-full h-[600px] mt-5 shadow-xl border-gray-400 border-2 rounded-lg p-5 mb-2"
            >
              {{ step2 }}
            </div>

            <div
              v-if="currenTab === 2"
              class="w-full h-[600px] mt-5 shadow-xl border-gray-400 border-2 rounded-lg p-5 mb-2"
            >
              {{step3}}
            </div>

            <div
              v-if="currenTab === 3"
              class="w-full h-[600px] mt-5 shadow-xl border-gray-400 border-2 rounded-lg p-5 mb-2"
            >
              {{ step4 }}
            </div>

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
            />
          </div>
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
