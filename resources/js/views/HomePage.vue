<script setup lang="ts">
import
{
   IonContent,
   IonPage,
   IonText,
} from '@ionic/vue';
import HeaderApp from './HeaderApp.vue';

import SidebarApp from './SidebarApp.vue';

import FooterApp from './FooterApp.vue';


</script>

<template>
  <IonPage class="flex items-center justify-center h-screen  bg-gray-200">
    <IonContent class="w-full  bg-white rounded-md shadow-md">

      <SidebarApp />

      <div class="w-full bg-gray-100 pl-0 lg:pl-64 min-h-screen" :class="sideBarOpen ? 'overlay' : ''" id="main-content">

        <HeaderApp />

        <div class="p-6 bg-gray-100 mb-20">
          <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
          <IonText>
                    <h5 class="p-6 bg-white border-b border-gray-200">
                        Вы авторизовнны!
                    </h5>
          </IonText>
                </div>
            </div>
          </div>
        </div>

        <FooterApp />

      </div>
    </IonContent>
  </IonPage>
</template>
