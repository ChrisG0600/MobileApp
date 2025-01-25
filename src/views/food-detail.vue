<template>
  <ion-page>
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-buttons @click="goback">
          <ion-icon class="icon-link" src="/assets/icons/backbtn.svg"></ion-icon>
          <ion-title>Meat Type</ion-title>
          <ion-icon class="icon-cart" src="/assets/icons/cart.svg"></ion-icon>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <div class="image-background">
        <ion-img src="/assets/images/Teriyaki.png"></ion-img>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import {IonImg, useIonRouter,IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonBackButton, IonIcon } from '@ionic/vue';

export default {
  name: 'Details',
  components: {
    IonImg,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonIcon
  },
  setup(){
    const ionRouter = useIonRouter();

    const goback = () => {
      ionRouter.push('/order','back');
    }
    return {
      goback
    };
  }

};
</script>

<style>

.icon-link{
  font-size: 20px;
  margin-left:10px
}
.icon-cart{
  font-size:20px;
  margin-right:10px;
  color:red;
}

.image-background{
  background-color:rgb(188, 188, 188);
  height:30rem;
  width:100%;
  border-radius: 10px;
}
</style>
