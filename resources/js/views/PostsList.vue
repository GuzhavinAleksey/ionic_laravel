
<script setup lang="ts">
import { useRouter } from 'vue-router';
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
   IonButton,
} from '@ionic/vue';

const router = useRouter();

const datavw = ref({
  success: '',
  message: '',
  list: [],
});

const created = () => {
  try {
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
  Connect.delete("/posts/" + id);
  window.location.href = '/posts';
  //router.push({ name: 'Post_list' });
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

      <ion-button  @click="() => router.push({ name: 'Post_add' })">Post add</ion-button>

      <ion-grid>
          <ion-row>
              <ion-col>Title</ion-col>
              <ion-col>Edit</ion-col>
              <ion-col>Delete</ion-col>
          </ion-row>
          <ion-row v-for="list_one in datavw.list">
              <ion-col>{{list_one.title}}</ion-col>
              <ion-col>
              <ion-button @click="() => router.push({ name: 'Post_prev', params: { id: list_one.id } })">Edit</ion-button>
              </ion-col>
              <ion-col>
                <ion-button @click="deleteId(list_one.id)">Delete</ion-button>
              </ion-col>
          </ion-row>
      </ion-grid>

    </ion-content>
  </ion-page>
</template>

