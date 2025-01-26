<template>
  <ion-page>
    <ion-content class="ion-padding">
      <div class="icon-wrapper">
        <ion-icon class="check-icon" src="/assets/icons/check.svg"></ion-icon>
        <h5 class="title">Order Received!</h5>
        <p class="description ion-padding">
          Your order <span>No. 190449585</span> has successfully take and now being process.
          Kinddly wait for our notification regarding your order.
        </p>
      </div>
      <div class="button">
        <ion-button class="track">Track Order</ion-button>
        <p class="home" @click="root">Back to Home</p>
      </div>

    </ion-content>
  </ion-page>
</template>

<script>
import {useIonRouter, IonButton, IonIcon, IonPage, IonContent } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent ({
  name: 'Receipt',
  components: {
    IonButton,
    IonIcon,
    IonPage,
    IonContent
  },
  setup(){
    const ionRouter = useIonRouter();
    const root = () => {
      ionRouter.push('/');
    }
    return{
      root
    }
  }
});
</script>

<style scoped>

.icon-wrapper{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.check-icon{
  font-size:10rem; 
}
.title{
  font-size: 32px;
  margin:30px 0 10px 0;
  font-weight: bold;
}
.description{
  text-align: center;
  color: grey;
  font-size:13px;
  line-height: 24px;
  font-weight: bold;
}
.description span{
  color: rgb(218, 59, 59);
}

.button{
  display: flex;
  flex-direction: column;
  position: relative;
  bottom: 12%;
}
.track{
  --background:rgb(218, 59, 59);
  --color:white;
  --border-radius:10px;
  height:3.5rem;
  font-weight: bold;
}
.home{
  text-align: center;
  color:rgb(218, 59, 59);
  font-weight: bold;
}
</style>
