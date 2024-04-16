<script setup lang="ts">
import { ref } from 'vue';

const isPlayVideo = ref(false);

const handleClickPlay = () => {
  isPlayVideo.value = true;
};

const url =
  'https://dan-le-blob-cdn-production.glb.edgio.link/encoded-assets/massage-manual-device-pancreas-points/massage-manual-device-pancreas-points.m3u8';
const thumnailPreviewUrl =
  'https://image.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/storyboard.vtt';
const captionUrl =
  'https://d2zihajmogu5jn.cloudfront.net/elephantsdream/captions.en.vtt';
const thumnailUrl =
  'https://image.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/thumbnail.webp?time=268&width=1200';
const thumnailAltText = "Alt Text Demo Thumnail";
</script>

<template>
  <div class="lg:mx-40 aspect-w-16 aspect-h-9">
    <div v-if="!isPlayVideo" class="relative z-0 w-full h-full">
      <img
        src="https://drberg-dam.imgix.net/video-thumbnails/10b6b71d-b58f-4b27-8337-d9bc58f53ef8.png"
        alt="embed-thumnail"
        class="mx-auto w-full h-full my-auto object-contain"
        width="1228"
        height="690"
        sizes="(max-width: 320px) 280px,(max-width: 375px) 335px,(max-width: 410px) 370px,(max-width: 479px) 439px,(max-width: 639px) 599px,(max-width: 768px) 708px,(max-width: 879px) 819px,(max-width: 1023px) 963px,(min-width: 1024px) 1228px"
        srcset="
          https://drberg-dam.imgix.net/video-thumbnails/10b6b71d-b58f-4b27-8337-d9bc58f53ef8.png?w=1228&h=100%&auto=compress 1228w,
          https://drberg-dam.imgix.net/video-thumbnails/10b6b71d-b58f-4b27-8337-d9bc58f53ef8.png?w=963&h=100%&auto=compress   963w,
          https://drberg-dam.imgix.net/video-thumbnails/10b6b71d-b58f-4b27-8337-d9bc58f53ef8.png?w=819&h=100%&auto=compress   819w,
          https://drberg-dam.imgix.net/video-thumbnails/10b6b71d-b58f-4b27-8337-d9bc58f53ef8.png?w=708&h=100%&auto=compress   708w,
          https://drberg-dam.imgix.net/video-thumbnails/10b6b71d-b58f-4b27-8337-d9bc58f53ef8.png?w=599&h=100%&auto=compress   599w,
          https://drberg-dam.imgix.net/video-thumbnails/10b6b71d-b58f-4b27-8337-d9bc58f53ef8.png?w=439&h=100%&auto=compress   439w,
          https://drberg-dam.imgix.net/video-thumbnails/10b6b71d-b58f-4b27-8337-d9bc58f53ef8.png?w=370&h=100%&auto=compress   370w,
          https://drberg-dam.imgix.net/video-thumbnails/10b6b71d-b58f-4b27-8337-d9bc58f53ef8.png?w=335&h=100%&auto=compress   335w,
          https://drberg-dam.imgix.net/video-thumbnails/10b6b71d-b58f-4b27-8337-d9bc58f53ef8.png?w=280&h=100%&auto=compress   280w
        "
      />
      <button
        class="absolute top-0 left-0 w-full h-full flex justify-center items-center group"
        @click="handleClickPlay"
      >
        <span
          ><span
            class="flex justify-center items-center bg-gray-darkest bg-opacity-30 w-28 h-28 hover:w-32 hover:h-32 bg-transparent"
            ><img
              src="https://drberg-dam.imgix.net/icons/icon-filled-editing-play2.svg"
              alt="button-play"
              width="128"
              height="128"
              sizes=""
              srcset="" /></span
        ></span>
      </button>
    </div>
    <mgi-video-player
      v-if="isPlayVideo"
      :isAutoPlay="true"
      :thumnailPreviewUrl="thumnailPreviewUrl"
      :captionUrl="captionUrl"
      :thumnailUrl="thumnailUrl"
      :src="url"
      :thumnailAltText="thumnailAltText"
    ></mgi-video-player>
  </div>
</template>
