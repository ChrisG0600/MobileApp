<template>
  <ion-app>
    <ion-router-outlet aria-hidden="true">
      <router-view />
    </ion-router-outlet>
  </ion-app>
</template>

<script>
import { IonApp, IonRouterOutlet } from '@ionic/vue';

export default {
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet,
  },
};
</script>

<style>
</style>
