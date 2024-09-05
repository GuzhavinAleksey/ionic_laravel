<script setup lang="ts">
import { ref } from 'vue';
import Connect from '../../confconnect';
import
{
   IonContent,
   IonPage,
   IonInput,
   IonButton,
   useIonRouter,
} from '@ionic/vue';

import HeaderApp from '../HeaderApp.vue';

import SidebarApp from '../SidebarApp.vue';

import FooterApp from '../FooterApp.vue';

const router = useIonRouter();

const token = localStorage.getItem('token');

const datavw = ref({
  //csrf: '',
  error: '',

  form:
    {
      title: '',
      content: '',
    },
});

const submit = () => {
  try {
    //Connect.defaults.headers.post['X-CSRF-Token'] = datavw.value.csrf;
    Connect.defaults.headers.Authorization = `Bearer ${token}`;
    Connect.post('/posts', datavw.value.form)
      .then((response) => {
        response.title = '';
        response.content = '';
        router.navigate('/posts','forward','replace');
      });
  } catch (error) {
    datavw.value.error = error;
  }
};
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
      <form class="mt-8 space-y-6" @submit.prevent="submit">
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
             <IonLabel for="Title" class="sr-only">Title</IonLabel>
             <IonInput id="Title" name="email" v-model="datavw.form.title" type="text" autocomplete="Title" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Title" ></IonInput>
          </div>
          <div>
                   <IonLabel for="Content" class="sr-only">Content</IonLabel>
<IonInput id="Content" name="Content" v-model="datavw.form.content" type="text" autocomplete="Content" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Content"></IonInput>
          </div>
        </div>


        <div>
          <IonButton type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              <LockClosedIcon class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
            </span>
          Send
          </IonButton>
        </div>
      </form>
            </div>
          </div>
        </div>

        <FooterApp />

      </div>
    </IonContent>
  </IonPage>
</template>
