<script setup lang="ts">
import { computed } from 'vue';
import
{
   useIonRouter,
} from '@ionic/vue';

import { useStore } from 'vuex';

const router = useIonRouter();

const store = useStore();

const sideBarOpen = computed(() => store.state.sideBarOpen);
</script>


<template>
    <!-- give the sidebar z-50 class so its higher than the navbar if you want to see the logo -->
    <!-- you will need to add a little "X" button next to the logo in order to close it though -->
    <div class="w-1/2 md:w-1/3 lg:w-64 fixed md:top-0 md:left-0 h-screen lg:block border-r z-30" :class="sideBarOpen ? '' : 'hidden'" style="--tw-bg-opacity: 1;background-color: rgb(28 36 52 / var(--tw-bg-opacity));" id="main-nav">

          <div class="w-full h-20 border-b flex px-4 items-center mb-8">
           <p class="font-semibold  text-white pl-4">App</p>
          </div>

          <div class="mb-4 px-4">
          <p class="pl-4 text-sm text-gray-600/90 font-semibold mb-1">Главная</p>
            <div class="w-full flex items-center  h-10 pl-4  hover:bg-sky-700 rounded-lg cursor-pointer">
              <svg class="h-6 w-6 text-white fill-current mr-2" viewBox="0 0 20 20">
                <path d="M18.121,9.88l-7.832-7.836c-0.155-0.158-0.428-0.155-0.584,0L1.842,9.913c-0.262,0.263-0.073,0.705,0.292,0.705h2.069v7.042c0,0.227,0.187,0.414,0.414,0.414h3.725c0.228,0,0.414-0.188,0.414-0.414v-3.313h2.483v3.313c0,0.227,0.187,0.414,0.413,0.414h3.726c0.229,0,0.414-0.188,0.414-0.414v-7.042h2.068h0.004C18.331,10.617,18.389,10.146,18.121,9.88 M14.963,17.245h-2.896v-3.313c0-0.229-0.186-0.415-0.414-0.415H8.342c-0.228,0-0.414,0.187-0.414,0.415v3.313H5.032v-6.628h9.931V17.245z M3.133,9.79l6.864-6.868l6.867,6.868H3.133z"></path>
              </svg>
              <span class="text-white"><p @click="() => router.navigate('/home','forward','replace')">В начало</p></span>
            </div>
          </div>

          <div class="mb-4 px-4">
            <p class="pl-4 text-sm text-gray-600/90 font-semibold mb-1">Posts</p>
            <div class="w-full flex items-center text-blue-400 h-10 pl-4 hover:bg-sky-700 rounded-lg cursor-pointer">
              <svg class="h-6 w-6 text-white fill-current mr-2" viewBox="0 0 20 20">
                <path d="M17.592,8.936l-6.531-6.534c-0.593-0.631-0.751-0.245-0.751,0.056l0.002,2.999L5.427,9.075H2.491c-0.839,0-0.162,0.901-0.311,0.752l3.683,3.678l-3.081,3.108c-0.17,0.171-0.17,0.449,0,0.62c0.169,0.17,0.448,0.17,0.618,0l3.098-3.093l3.675,3.685c-0.099-0.099,0.773,0.474,0.773-0.296v-2.965l3.601-4.872l2.734-0.005C17.73,9.688,18.326,9.669,17.592,8.936 M3.534,9.904h1.906l4.659,4.66v1.906L3.534,9.904z M10.522,13.717L6.287,9.48l4.325-3.124l3.088,3.124L10.522,13.717z M14.335,8.845l-3.177-3.177V3.762l5.083,5.083H14.335z"></path>
              </svg>
              <span class="text-white "><p @click="() => router.navigate('/posts','forward','replace')">All posts</p></span>
            </div>
            <div class="w-full flex items-center  h-10 pl-4 hover:bg-sky-700 rounded-lg cursor-pointer">
              <svg class="h-6 w-6 text-white fill-current mr-2" viewBox="0 0 20 20">
              <path d="M14.613,10c0,0.23-0.188,0.419-0.419,0.419H10.42v3.774c0,0.23-0.189,0.42-0.42,0.42s-0.419-0.189-0.419-0.42v-3.774H5.806c-0.23,0-0.419-0.189-0.419-0.419s0.189-0.419,0.419-0.419h3.775V5.806c0-0.23,0.189-0.419,0.419-0.419s0.42,0.189,0.42,0.419v3.775h3.774C14.425,9.581,14.613,9.77,14.613,10 M17.969,10c0,4.401-3.567,7.969-7.969,7.969c-4.402,0-7.969-3.567-7.969-7.969c0-4.402,3.567-7.969,7.969-7.969C14.401,2.031,17.969,5.598,17.969,10 M17.13,10c0-3.932-3.198-7.13-7.13-7.13S2.87,6.068,2.87,10c0,3.933,3.198,7.13,7.13,7.13S17.13,13.933,17.13,10"></path>
              </svg>
              <span class="text-white"><p @click="() => router.navigate('/posts/posts_add','forward','replace')">Add post</p></span>
            </div>
          </div>

        </div>
</template>
<style>
*, :before, :after {
    box-sizing: border-box;
    border-width: 0;
    border-style: solid;
    border-color: #1c243459;
}
</style>
