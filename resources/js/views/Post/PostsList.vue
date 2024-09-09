
<script setup lang="ts">
import { ref } from 'vue';
import Connect from '../../confconnect';
import
{
   IonContent,
   IonPage,
   useIonRouter,
} from '@ionic/vue';

import HeaderApp from '../HeaderApp.vue';

import SidebarApp from '../SidebarApp.vue';

import FooterApp from '../FooterApp.vue';

const router = useIonRouter();

const token = localStorage.getItem('token');

const datavw = ref({
  success: '',
  message: '',
  list: [],
});

const created = () => {
  try {
    Connect.defaults.headers.Authorization = `Bearer ${token}`;
    Connect.get('/posts')
      .then((response) => {
        if (response.data.error != null) {
          datavw.value.error = response.data.error;
        } else {
          datavw.value.success = response.data.success;
          datavw.value.message = response.data.message;
          datavw.value.list = response.data.list;
        }
      });
  } catch (error) {
    console.log(error);
  }
};

created();

const deleteId = (id) => {
 //Connect.defaults.headers.delete['X-CSRF-Token'] = datavw.value.csrf;
  Connect.defaults.headers.Authorization = `Bearer ${token}`;
  Connect.delete("/posts/" + id);
  Connect.get('/posts')
      .then((response) => {
        if (response.data.error != null) {
          datavw.value.error = response.data.error;
        } else {
          datavw.value.success = response.data.success;
          datavw.value.message = response.data.message;
          datavw.value.list = response.data.list;
        }
      });
  router.navigate('/posts','forward','replace');
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
            <table class="font-inter w-full table-auto border-separate border-spacing-y-1 overflow-scroll text-left md:overflow-auto">
                <thead class="w-full rounded-lg bg-[#222E3A]/[6%] text-base font-semibold text-white">
                    <tr>
                        <th class="whitespace-nowrap py-3 pl-1 text-sm font-normal text-[#212B36]">Title</th>
                        <th class="whitespace-nowrap py-3 pl-1 text-sm font-normal text-[#212B36]">Edit</th>
                        <th class="whitespace-nowrap py-3 pl-1 text-sm font-normal text-[#212B36]">Delete</th>
                    </tr>
                </thead>
                <tbody class="cursor-pointer bg-[#f6f8fa] drop-shadow-[0_0_10px_rgba(34,46,58,0.02)] hover:shadow-2xl">
                    <tr v-for="list_one in datavw.list">
                        <td class="px-1 py-4 text-sm font-normal text-[#637381]">{{list_one.title}}</td>
                        <td class="px-1 py-4 text-sm font-normal text-[#637381]"><button @click="() => router.navigate({ name: 'Post_prev', params: { id: list_one.id } },'forward','replace')">Edit</button></td>
                        <td class="px-1 py-4 text-sm font-normal text-[#637381]"><button @click="deleteId(list_one.id)">Delete</button></td>
                    </tr>
                </tbody>
            </table>
            </div>
          </div>
        </div>

        <FooterApp />

      </div>
    </IonContent>
  </IonPage>
</template>
