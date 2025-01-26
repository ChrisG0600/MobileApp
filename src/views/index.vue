<template>
  <!-- SideNav -->
  <ion-menu :swipeGesture="false" content-id="main-content">
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <div class="menu-header">
          <ion-avatar>
            <img alt="Profile Picture" src="/assets/images/profile.jpg" />
          </ion-avatar>
          <ion-buttons @click="loyaltypage">
            <ion-icon class="crown-svg" src="/assets/icons/crown.svg"></ion-icon>
            <p>
              0 Points
            </p>      
          </ion-buttons>
          <ion-icon class="back-button" src="/assets/icons/back.svg"></ion-icon>
        </div>
        <div class="info">
          <h2 class="fullname">Chou Tzuyu</h2>
          <p class="contact-number">+63 912 345 6789</p>
        </div> 
      </ion-toolbar>
    </ion-header>      
    <!-- Menu Links -->
      <ion-content scroll-y="false">
        <div class="icon-wrapper">
          <ion-icon class="icon-link" src="/assets/icons/home.svg"></ion-icon>
          <ion-buttons class="menu-link" @click="homepage">Home</ion-buttons>
        </div>
        <div class="icon-wrapper">
          <ion-icon class="icon-link" src="/assets/icons/chicken.svg"></ion-icon>
            <ion-buttons class="menu-link" @click="orderpage">Order Now!</ion-buttons>
        </div>
        <div class="icon-wrapper">
          <ion-icon class="icon-link" src="/assets/icons/bell.svg"></ion-icon>
          <div class="wrapper">
            <ion-buttons class="menu-link">Notifications</ion-buttons>
            <p class="count">4</p>
          </div>          
        </div>
        <div class="icon-wrapper">
          <ion-icon class="icon-link" src="/assets/icons/pin.svg"></ion-icon>
            <ion-buttons class="menu-link">Store Locator</ion-buttons>
        </div>
        <div class="icon-wrapper">
          <ion-icon class="icon-link" src="/assets/icons/question-mark.svg"></ion-icon>
            <ion-buttons class="menu-link">FAQ's</ion-buttons>
        </div>

        <div class="link-separator"></div>

        <div class="icon-wrapper">
          <ion-icon class="icon-link" src="/assets/icons/cart.svg"></ion-icon>
          <div class="wrapper">
            <ion-buttons class="menu-link">My Orders</ion-buttons>
            <p class="count">2</p>          
          </div>
        </div>

        <div class="icon-wrapper">
          <ion-icon class="icon-link" src="/assets/icons/profile.svg"></ion-icon>
          <ion-buttons class="menu-link">My Account</ion-buttons>
        </div>

        <div class="icon-wrapper">
          <ion-icon class="icon-link" src="/assets/icons/heart.svg"></ion-icon>
          <ion-buttons class="menu-link">My Favorites</ion-buttons>
        </div>

        <div class="icon-wrapper">
          <ion-icon class="icon-link" src="/assets/icons/pin.svg"></ion-icon>
          <ion-buttons class="menu-link">Order Tracker</ion-buttons>
        </div>

        <div class="icon-wrapper">
          <ion-icon class="icon-link" src="/assets/icons/history.svg"></ion-icon>
          <ion-buttons class="menu-link">Order History</ion-buttons>
        </div>
        <ion-button class="logout-btn">Log Out</ion-button>
      </ion-content>
  </ion-menu>

  <!-- Main Content -->
  <ion-page id="main-content">
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <div class="header-wrapper">
          <ion-buttons slot="start">
            <ion-menu-button></ion-menu-button>
          </ion-buttons>
          <div class="menu-header">
            <ion-icon class="crown-svg" src="/assets/icons/crown.svg"></ion-icon>
            <p>
              0 Points
            </p>      
            <ion-icon class="back-button" src="/assets/icons/back.svg"></ion-icon>   
            </div>   
            <ion-avatar class="profile-picture-wrapper">
              <img class="profile-picture" alt="Profile Picture" src="/assets/images/profile.jpg" />
            </ion-avatar>
        </div>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding"> 
      <div class="content-wrapper">
        <ion-icon class="logo" src="/assets/icons/home.svg"></ion-icon>
        <div class="header-content">
          <p class="header-secondary">Anneoyong, Chou!</p>
          <h1 class="header-title">What do you want to eat?</h1>          
        </div>
      </div>

      <ion-searchbar class="search-bar" placeholder="try our new Steak Fries Veggies"></ion-searchbar>
        <div class="offers">
          <h5 class="offer-title">Special Offers!</h5>
          <p class="view-all">
            View All
            <ion-icon class="see-offer" src="/assets/icons/back.svg"></ion-icon>   
          </p>
        </div>
        <swiper :loop="true">
          <template v-for="slide in slideData" :key="slide.id">
            <swiper-slide>
              <ion-img :src="slide.image"></ion-img>
            </swiper-slide>
          </template>
        </swiper>
        <h5>Category</h5>
        <swiper :loop="true">
          <template v-for="category in categoryData" :key="category.id">
            <swiper-slide>
              <p>{{category.name}}</p>
              <ion-img :src="category.image"></ion-img>
            </swiper-slide>
          </template>
        </swiper>
        <h5>What's New?</h5>
        <div class="new-menu">
          <ion-img src="/assets/images/new-menu.png"></ion-img>
        </div>
        <h5>Most Popular</h5>
        <ion-grid>
          <ion-row>

            <ion-col size="6">
              <ion-card>
                <ion-img src="/assets/images/ramen.png"></ion-img>
                <ion-card-header>
                  <ion-card-title class="card-title">Kur Ramen</ion-card-title>
                  <ion-card-subtitle class="card-subtitle">Meat</ion-card-subtitle>
                </ion-card-header>
                <div class="price-wrapper">
                  <p class="price">P 175</p>
                  <ion-icon class="rating" src="https://upload.wikimedia.org/wikipedia/commons/4/47/Rating_stars_4.5.svg"></ion-icon>
                </div>
              </ion-card>
            </ion-col>

            <ion-col size="6">
              <ion-card>
                <ion-img src="/assets/images/Curry.png"></ion-img>
                <ion-card-header>
                  <ion-card-title class="card-title">Beef Curry</ion-card-title>
                  <ion-card-subtitle class="card-subtitle">Meat</ion-card-subtitle>
                </ion-card-header>
                <div class="price-wrapper">
                  <p class="price">P 145</p>
                  <ion-icon class="rating" src="https://upload.wikimedia.org/wikipedia/commons/4/47/Rating_stars_4.5.svg"></ion-icon>
                </div>
              </ion-card>
            </ion-col>

            <ion-col size="6">
              <ion-card>
                <ion-img src="/assets/images/chicken-ramen.png"></ion-img>
                <ion-card-header>
                  <ion-card-title class="card-title">Chicken Ramen</ion-card-title>
                  <ion-card-subtitle class="card-subtitle">Meat</ion-card-subtitle>
                </ion-card-header>
                <div class="price-wrapper">
                  <p class="price">P 115</p>
                  <ion-icon class="rating" src="https://upload.wikimedia.org/wikipedia/commons/4/47/Rating_stars_4.5.svg"></ion-icon>
                </div>
              </ion-card>
            </ion-col>

            <ion-col size="6">
              <ion-card>
                <ion-img src="/assets/images/shrimp-noodles.png"></ion-img>
                <ion-card-header>
                  <ion-card-title class="card-title">Shrimp Noodles</ion-card-title>
                  <ion-card-subtitle class="card-subtitle">Seafoods</ion-card-subtitle>
                </ion-card-header>
                <div class="price-wrapper">
                  <p class="price">P 165</p>
                  <ion-icon class="rating" src="https://upload.wikimedia.org/wikipedia/commons/4/47/Rating_stars_4.5.svg"></ion-icon>
                </div>
              </ion-card>
            </ion-col>

          </ion-row>
        </ion-grid>
        <br>
        <ion-button @click="orderpage" slot="fixed">Order Now</ion-button>
    </ion-content>
  </ion-page>

</template>

<script>
  import {useIonRouter, IonButton, IonCol,IonCardContent, IonGrid, IonRow,IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonButtons, IonInput, IonSearchbar, IonContent, IonHeader, IonMenu, IonMenuButton, IonMenuToggle, IonPage, IonTitle, IonToolbar, IonAvatar, IonImg, IonIcon } from '@ionic/vue';
  import { defineComponent, ref } from 'vue';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/swiper-bundle.css';
  import { useRoute } from 'vue-router';
  export default defineComponent({
    name: 'Home',
    components: {
      IonButton,
      IonButtons,
      IonInput,
      IonSearchbar,
      IonContent,
      IonHeader,
      IonMenu,
      IonMenuButton,
      IonMenuToggle,
      IonPage,
      IonTitle,
      IonToolbar,
      IonAvatar,
      IonImg ,
      IonIcon,
      Swiper,
      SwiperSlide,
      IonCard,
      IonCardHeader,
      IonCardSubtitle,
      IonCardTitle,
      IonCardContent,
      IonGrid,
      IonRow,
      IonCol,
    },
    setup() {
      const router = useRoute();
      const ionRouter = useIonRouter();

      const slideData = ref([
        {id: 1, image: '/assets/images/special-offer.png'},
        {id: 2, image: '/assets/images/sushi-offer.png'},
      ]);
      const categoryData = ref([
        {id: 1, name: "Meat", image: '/assets/images/meat.png'},
        {id: 2, name: "Seafoods", image: '/assets/images/seafoods.png'},
      ]);

      const homepage = () => {
        ionRouter.push('/');
      }
      const loyaltypage = () => {
        ionRouter.push('/loyalty-points', 'forward');
      }
      const orderpage = () => {
        ionRouter.push('/order', 'forward');
      }

      return {
        router,
        slideData,
        categoryData,
        homepage,
        loyaltypage,
        orderpage
      };
    },
  });
</script>

<style scoped>
ion-toolbar {
  --background: #ffffff;
}

ion-menu-button{
  --color: red;
}
ion-item{
  --background:white;
  --color: black;
}
ion-searchbar{
  --background: #eaeaea;
  --color: black;
  --border-radius: 5px;
  --placeholder-color: grey;
  --icon-color:red;
}
ion-card{
  --background:rgb(188, 188, 188);
  width: 9rem;
}
ion-button[slot='fixed'] {
  top: 92%;
  right: 25px;
  --background: rgb(211, 8, 8);
  --color: white;
}

.menu-header{
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 10px;
}
.crown-svg{
  font-size: 25px;
  padding-right: 5px;
}
.menu-points{
  font-size: 16px;
  font-weight: bold;
  color:black;
}
.back-button{
  color: red;
  font-size:13px;
  font-weight: bold;
}
.info{
  margin: 10px;
}
.fullname{
  font-size: 20px;
  font-weight: bold;
}
.contact-number{
  font-size: 14px;
  color: grey;
}
.menu-link{
  margin-left:10px;
  padding: 10px 0;
  font-size:20px;
}
.icon-wrapper{
  margin-left:10px;
  display:flex;
  align-items: center;
}
.wrapper{
  display: flex;
  width: 100%;
  flex:1;
  justify-content: space-between;
  margin-right: 20px;
}
.icon-link{
  font-size: 20px;
}
.link-separator{
  border-bottom: 2px solid rgb(188, 188, 188);
  border-radius: 10px;
  margin: 10px 10px;
}
.count{
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  background-color: rgb(213, 183, 30);
  color:white;
  border-radius: 50%;
  height: 20px;
  width: 20px;
  /* margin-left: 4rem; */
}
.logout-btn{
  margin: 5px;
  --background: rgb(211, 8, 8);
  --color: white;
  --border-radius: 20px;
  --padding: 5px 0;
  width: 60%;
  margin-top:20%;
  margin-left: 5%;
}


/* Main Content */
.header-wrapper{
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}
.profile-picture-wrapper{
  display: flex;
  align-items: center;
  justify-content: center;
}
.profile-picture{
  width: 35px;
  height: 35px;
  border-radius: 50%;
}
.content-wrapper{
  display: flex;
  align-items: center;
  margin-bottom:20px;
}
.logo{
  font-size: 8em;
}
.header-content{
  padding:5px;
  flex:1;
}
.header-title{
  font-size: 20px;
  font-weight: bold;
  width: 90%;
}
.header-secondary,.header-title{
  margin:0;
}
.offers{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.offer-title{
margin:0;
}
.view-all,.see-offer{
  color:red;
}
.card-title{
  font-size:20px;
  font-weight:bold;
}
.card-subtitle{
  font-size: 13px;
  font-weight: bold;
  color:rgb(72, 72, 72);
}
.price-wrapper{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding:10px;
}
.price{
  color:rgb(218, 59, 59);
  font-size:15px;
  font-weight: bold;
}
.rating{
  font-size:4.5rem;
}

</style>