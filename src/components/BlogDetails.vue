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
            <div><img src="../assets/gal3.jpg" alt="" /></div>
          </div>
        </div>

        <div class="flex-col w-[90%]">
          <div class="font-sans lg:ml-[-3%] md:ml-[-5%]">
            <strong class="font-bold font-poppins lg:text-2xl lg:text-center"
              >Software Developer</strong
            ><br /><br />

            <strong class="font-bold font-poppins">Position Overview: </strong>
            We are looking for a skilled Software Developer to join our team.
            The ideal candidate is passionate about coding, problem-solving, and
            staying updated with the latest technologies. In this role, you will
            contribute to the development of software applications, participate
            in code reviews, and collaborate with cross-functional teams to
            deliver high-quality products.<br /><br />

            <strong class="font-bold font-poppins">Location: </strong>
            IT Park Ceu CIty<br /><br />

            <strong class="font-bold font-poppins">Salary</strong>
            ₱15,000 - ₱25-000 / month<br /><br />
            <div class="whitespace-break-spaces font-poppins">
              <strong>Skills Required</strong> Java, React,Vue, MYSQL<br /><br />
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
              Step View 1
            </div>

            <div
              v-if="currenTab === 1"
              class="w-full h-[600px] mt-5 shadow-xl border-gray-400 border-2 rounded-lg p-5 mb-2"
            >
              Step View 2
            </div>

            <div
              v-if="currenTab === 2"
              class="w-full h-[600px] mt-5 shadow-xl border-gray-400 border-2 rounded-lg p-5 mb-2"
            >
              Step View 3
            </div>

            <div
              v-if="currenTab === 3"
              class="w-full h-[600px] mt-5 shadow-xl border-gray-400 border-2 rounded-lg p-5 mb-2"
            >
              Step View 4
            </div>

            <div
              v-if="currenTab === 4"
              class="w-full h-[600px] mt-5 shadow-xl border-gray-400 border-2 rounded-lg p-5 mb-2"
            >
              Step View 5
            </div>
            <div
              class="flex lg:w-full text-[#E67E23] lg:ml-3 lg:mb-2 md:ml-1 md:mb-1"
            >
              <div class="flex text-lg font-semibold pl-3 custom-sm:my-4">
                Comments:
                <ChatBubbleLeftIcon
                  class="h-[26px] w-[26px] ml-1 text-[#E67E23]"
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
                    class="ml-1 mr-1 w-[25px] h-[25px] text-[#E67E23] hover:scale-110"
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
  iframe: String,
  developer: String,
  description: String,
  title: String,
  location: String,
  amenities: Array,
  landmarks: Array,
  highlights: Array,
  details: String,
  broker: String,
  contact_phone: String,
  contact_telephone: String,
  email_address: String,
  key_tags: String,
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
