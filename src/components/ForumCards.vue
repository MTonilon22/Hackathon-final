<template>
    <div
      class="w-[90%] h-[100%] flex flex-col gap-2 mx-auto hover:cursor-pointer dark:text-white   bg-white dark:bg-neutral-900 p-5 rounded-md mt-8 shadow-md hover:scale-105 hover:duration-150 duration-150"
    >
      <div class="flex flex-row justify-between w-full">
        <div class="flex flex-row justify-between w-full">
          <p class="text-md font-bold">{{name}}Anonymous</p>
          <p class="text-xs">{{date}} December 1, 2000</p>
        </div>
      </div>
      <div class="flex flex-row justify-between w-full">
        <h3 class="text-xl font-bold">{{title}} Techniques to be a successful developer</h3>
    
        <div class="text-xs">
          <div class="flex flex-row">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 text-yellow-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M9.049 2.927c.3-.916 1.603-.916 1.902 0l1.286 3.953a1.5 1.5 0 001.421 1.033h4.171c.949 0 1.341 1.154.577 1.715l-3.38 2.458a1.5 1.5 0 00-.54 1.659l1.286 3.953c.3.916-.757 1.67-1.539 1.145l-3.38-2.458a1.5 1.5 0 00-1.76 0l-3.38 2.458c-.782.525-1.838-.229-1.539-1.145l1.286-3.953a1.5 1.5 0 00-.54-1.659l-3.38-2.458c-.764-.561-.372-1.715.577-1.715h4.171a1.5 1.5 0 001.421-1.033l1.286-3.953z"
              ></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 text-yellow-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M9.049 2.927c.3-.916 1.603-.916 1.902 0l1.286 3.953a1.5 1.5 0 001.421 1.033h4.171c.949 0 1.341 1.154.577 1.715l-3.38 2.458a1.5 1.5 0 00-.54 1.659l1.286 3.953c.3.916-.757 1.67-1.539 1.145l-3.38-2.458a1.5 1.5 0 00-1.76 0l-3.38 2.458c-.782.525-1.838-.229-1.539-1.145l1.286-3.953a1.5 1.5 0 00-.54-1.659l-3.38-2.458c-.764-.561-.372-1.715.577-1.715h4.171a1.5 1.5 0 001.421-1.033l1.286-3.953z"
              ></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 text-yellow-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M9.049 2.927c.3-.916 1.603-.916 1.902 0l1.286 3.953a1.5 1.5 0 001.421 1.033h4.171c.949 0 1.341 1.154.577 1.715l-3.38 2.458a1.5 1.5 0 00-.54 1.659l1.286 3.953c.3.916-.757 1.67-1.539 1.145l-3.38-2.458a1.5 1.5 0 00-1.76 0l-3.38 2.458c-.782.525-1.838-.229-1.539-1.145l1.286-3.953a1.5 1.5 0 00-.54-1.659l-3.38-2.458c-.764-.561-.372-1.715.577-1.715h4.171a1.5 1.5 0 001.421-1.033l1.286-3.953z"
              ></path>
            </svg>
            
    
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 text-yellow-200"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M9.049 2.927c.3-.916 1.603-.916 1.902 0l1.286 3.953a1.5 1.5 0 001.421 1.033h4.171c.949 0 1.341 1.154.577 1.715l-3.38 2.458a1.5 1.5 0 00-.54 1.659l1.286 3.953c.3.916-.757 1.67-1.539 1.145l-3.38-2.458a1.5 1.5 0 00-1.76 0l-3.38 2.458c-.782.525-1.838-.229-1.539-1.145l1.286-3.953a1.5 1.5 0 00-.54-1.659l-3.38-2.458c-.764-.561-.372-1.715.577-1.715h4.171a1.5 1.5 0 001.421-1.033l1.286-3.953z"
              ></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 text-yellow-200"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M9.049 2.927c.3-.916 1.603-.916 1.902 0l1.286 3.953a1.5 1.5 0 001.421 1.033h4.171c.949 0 1.341 1.154.577 1.715l-3.38 2.458a1.5 1.5 0 00-.54 1.659l1.286 3.953c.3.916-.757 1.67-1.539 1.145l-3.38-2.458a1.5 1.5 0 00-1.76 0l-3.38 2.458c-.782.525-1.838-.229-1.539-1.145l1.286-3.953a1.5 1.5 0 00-.54-1.659l-3.38-2.458c-.764-.561-.372-1.715.577-1.715h4.171a1.5 1.5 0 001.421-1.033l1.286-3.953z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    
      <div class="text-sm">
        {{description}} I am planning to apply as Software Engineer at Accenture but what I can only do is to display Hello World using HTML, can you suggest a way to improve my skills? Thanks.
      </div>
      <div class="flex flex-row w-[100%]">
        <div class="my-5 "><buttons class="text-primary bg-orange-500 px-2 py-2 rounded-lg text-center w-[22%]">Add Comment</buttons></div>
        
      </div>
      
    </div>
    
    
 

    
    </template>
    <script setup></script>