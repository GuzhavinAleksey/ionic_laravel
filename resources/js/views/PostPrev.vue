<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { ref } from 'vue';
import Connect from '../confconnect';
import 
{ 
   IonContent, 
   IonHeader, 
   IonPage, 
   IonTitle, 
   IonToolbar, 
   IonCol, 
   IonGrid,
   IonRow,
   IonInput,
   IonItem,
   IonList,
} from '@ionic/vue';

const router = useRouter();

const route = useRoute();

const datavw = ref({
  //csrf: '',
  id: '',
  error: '',

  form:
    {
      title: '',
      content: '',
    },
});

const created = () => {
  try {
    Connect.get("/posts/" + route.params.id)
      .then((response) => {
        if (response.data.error != null) {
          datavw.value.error = response.data.error;
        } else {
          datavw.value.id = response.data.data.id;
          datavw.value.form.title = response.data.data.title;
          datavw.value.form.content = response.data.data.content;
        }
      });
  } catch (error) {
    console.log(error);
  }
};

created();

const submit = () => {
  try {
    //Connect.defaults.headers.post['X-CSRF-Token'] = datavw.value.csrf;
    Connect.put('/posts/' + route.params.id, datavw.value.form)
      .then((response) => {
        response.title = '';
        response.content = '';
        //router.push({ name: 'Post_list' });
        window.location.href = '/posts';
      });
  } catch (error) {
    datavw.value.error = error;
  }
};
</script>

<style scoped>
#container {
  text-align: center;
  
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  
  color: #8c8c8c;
  
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Blank</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Blank</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-button  @click="() => router.push({ name: 'Post_list' })">Back</ion-button>

 <form @submit.prevent="submit">
  <ion-list>
    <ion-item>
      <ion-input required label="Title" v-model="datavw.form.title"></ion-input>
    </ion-item>

    <ion-item>
      <ion-input required label="Content" v-model="datavw.form.content"></ion-input>
    </ion-item>

    <ion-button type="submit">Send</ion-button>

  </ion-list>
  </form>
    </ion-content>
  </ion-page>
</template>

