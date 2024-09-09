<script setup lang="ts">
import { ref } from 'vue'
import Connect from '../../confconnect'
import
{
   IonContent,
   IonPage,
   useIonRouter,
} from '@ionic/vue';

const router = useIonRouter()
const datavw = ref({
  //csrf: '',
  error: '',

  form:
    {
        email: '',
        password: '',
    },
});
const submit = () => {
  try {
    //Connect.defaults.headers.post['X-CSRF-Token'] = datavw.value.csrf;
    Connect.post('/auth/login', datavw.value.form)
      .then((response) => {
        localStorage.setItem('token', response.data.access_token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        router.navigate('/home','forward','replace');
      });
  } catch (error) {
    datavw.value.error = error;
  }
};
</script>



<template>
  <IonPage class="flex items-center justify-center h-screen  bg-white-200">
    <IonContent class="max-w-md w-full space-y-8">
      <div>
       <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Вход в систему</h2>
</div>
            <!-- alert  -->
            <div v-if="datavw.error" class="flex p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">
               <svg class="inline flex-shrink-0 mr-3 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
               <div>
                 <span class="font-medium" >{{ datavw.error }}</span>
               </div>
            </div>
      <form class="mt-8 space-y-6" @submit.prevent="submit">
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
             <label for="email-address" class="sr-only">email</label>
             <input id="email-address" name="email" v-model="datavw.form.email" type="text" autocomplete="email" required="" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="email" ></input>
          </div>
          <div>
                   <label for="password" class="sr-only">Пароль</label>
<input id="password" name="password" v-model="datavw.form.password" type="password" autocomplete="current-password" required="" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Пароль"></input>
          </div>
        </div>


        <div>
          <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              <LockClosedIcon class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
            </span>
          Вход
          </button>
        </div>
      </form>
          <button
            @click="() => router.navigate('/auth/registr','forward','replace')"
            class="w-full px-4 py-2 text-sm text-center text-white bg-indigo-600 rounded-md focus:outline-none hover:bg-indigo-500"
          >
          Регистрация
          </button>
    </IonContent>
  </IonPage>
</template>
