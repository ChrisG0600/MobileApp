<template>
  <!-- SideNav -->
  <ion-menu :swipeGesture="false" content-id="main-content">
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <div class="menu-header">
          <ion-avatar>
            <img alt="Profile Picture" src="/assets/images/profile.jpg" />
          </ion-avatar>
          <ion-menu-toggle>
            <ion-buttons router-link="/loyalty-points">
              <ion-icon class="crown-svg" src="/assets/icons/crown.svg"></ion-icon>
              <p>
                0 Points
              </p>      
            </ion-buttons>
          </ion-menu-toggle>

          <ion-menu-toggle>
            <ion-icon class="back-button" src="/assets/icons/back.svg"></ion-icon>
          </ion-menu-toggle>    
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
          <ion-menu-toggle>
              <ion-buttons class="menu-link" router-link="/">Home</ion-buttons>
          </ion-menu-toggle>
        </div>
        <div class="icon-wrapper">
          <ion-icon class="icon-link" src="/assets/icons/chicken.svg"></ion-icon>
          <ion-menu-toggle>
              <ion-buttons class="menu-link" id="active" router-link="/order">Order Now!</ion-buttons>
          </ion-menu-toggle>          
        </div>

        <div class="icon-wrapper">
          <ion-icon class="icon-link" src="/assets/icons/bell.svg"></ion-icon>
          <div class="wrapper">
            <ion-menu-toggle>
              <ion-buttons class="menu-link">Notifications</ion-buttons>
            </ion-menu-toggle>
            <p class="count">4</p>
          </div>          
        </div>

        <div class="icon-wrapper">
          <ion-icon class="icon-link" src="/assets/icons/pin.svg"></ion-icon>
          <ion-menu-toggle>
              <ion-buttons class="menu-link">Store Locator</ion-buttons>
          </ion-menu-toggle>
        </div>

        <div class="icon-wrapper">
          <ion-icon class="icon-link" src="/assets/icons/question-mark.svg"></ion-icon>
          <ion-menu-toggle>
              <ion-buttons class="menu-link">FAQ's</ion-buttons>
          </ion-menu-toggle>
        </div>

        <div class="link-separator"></div>

        <div class="icon-wrapper">
          <ion-icon class="icon-link" src="/assets/icons/cart.svg"></ion-icon>
          <div class="wrapper">
            <ion-menu-toggle>
              <ion-buttons class="menu-link">My Orders</ion-buttons>
            </ion-menu-toggle>
            <p class="count">2</p>          
          </div>
        </div>

        <div class="icon-wrapper">
          <ion-icon class="icon-link" src="/assets/icons/profile.svg"></ion-icon>
          <ion-menu-toggle>
              <ion-buttons class="menu-link">My Account</ion-buttons>
          </ion-menu-toggle>
        </div>

        <div class="icon-wrapper">
          <ion-icon class="icon-link" src="/assets/icons/heart.svg"></ion-icon>
          <ion-menu-toggle>
              <ion-buttons class="menu-link">My Favorites</ion-buttons>
          </ion-menu-toggle>
        </div>

        <div class="icon-wrapper">
          <ion-icon class="icon-link" src="/assets/icons/pin.svg"></ion-icon>
          <ion-menu-toggle>
              <ion-buttons class="menu-link">Order Tracker</ion-buttons>
          </ion-menu-toggle>
        </div>

        <div class="icon-wrapper">
          <ion-icon class="icon-link" src="/assets/icons/history.svg"></ion-icon>
          <ion-menu-toggle>
              <ion-buttons class="menu-link">Order History</ion-buttons>
          </ion-menu-toggle>
        </div>
        <ion-button class="logout-btn">Log Out</ion-button>
      </ion-content>
  </ion-menu>

  <!-- Main Content -->
  <ion-page id="main-content">
    <ion-header class="ion-no-border">
      <ion-toolbar>
          <ion-buttons slot="start">
            <ion-menu-button></ion-menu-button>
          </ion-buttons>
          <div class="header-wrapper">
            <ion-title class="header">Our Foods</ion-title>
            <ion-icon class="header-cart" src="/assets/icons/cart.svg"></ion-icon>
          </div>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding"> 
      <ion-searchbar class="search-bar" placeholder="try our new Beef Bibimbowl"></ion-searchbar>
      <div class="reward-button">
        <ion-button class="reward-all">All</ion-button>
        <ion-button>Beginner</ion-button>
        <ion-button>Intermediate</ion-button>
        <ion-button>Loyal</ion-button>
      </div>
        <ion-grid>
          <ion-row>
            <ion-col size="6">
              <ion-card @click="detailpage">
                <ion-img src="/assets/images/ramen.png"></ion-img>
                <ion-card-header>
                  <ion-card-subtitle class="card-subtitle">Meat</ion-card-subtitle>
                  <ion-card-title class="card-title">Ramen</ion-card-title>
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
                  <ion-card-subtitle class="card-subtitle">Meat</ion-card-subtitle>
                  <ion-card-title class="card-title">Beef Curry</ion-card-title>
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
                  <ion-card-subtitle class="card-subtitle">Meat</ion-card-subtitle>
                  <ion-card-title class="card-title">Chicken Ramen</ion-card-title>
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
                  <ion-card-subtitle class="card-subtitle">Seafoods</ion-card-subtitle>
                  <ion-card-title class="card-title">Shrimp Noodles</ion-card-title>
                </ion-card-header>
                <div class="price-wrapper">
                  <p class="price">P 175</p>
                  <ion-icon class="rating" src="https://upload.wikimedia.org/wikipedia/commons/4/47/Rating_stars_4.5.svg"></ion-icon>
                </div>
              </ion-card>
            </ion-col>

            <ion-col size="6">
              <ion-card>
                <ion-img src="/assets/images/shrimp-noodles.png"></ion-img>
                <ion-card-header>
                  <ion-card-subtitle class="card-subtitle">Seafoods</ion-card-subtitle>
                  <ion-card-title class="card-title">Shrimp Noodles</ion-card-title>
                </ion-card-header>
                <div class="price-wrapper">
                  <p class="price">P 175</p>
                  <ion-icon class="rating" src="https://upload.wikimedia.org/wikipedia/commons/4/47/Rating_stars_4.5.svg"></ion-icon>
                </div>
              </ion-card>
            </ion-col>

            <ion-col size="6">
              <ion-card>
                <ion-img src="/assets/images/shrimp-noodles.png"></ion-img>
                <ion-card-header>
                  <ion-card-subtitle class="card-subtitle">Seafoods</ion-card-subtitle>
                  <ion-card-title class="card-title">Shrimp Noodles</ion-card-title>
                </ion-card-header>
                <div class="price-wrapper">
                  <p class="price">P 175</p>
                  <ion-icon class="rating" src="https://upload.wikimedia.org/wikipedia/commons/4/47/Rating_stars_4.5.svg"></ion-icon>
                </div>
              </ion-card>
            </ion-col>

            <ion-col size="6">
              <ion-card>
                <ion-img src="/assets/images/shrimp-noodles.png"></ion-img>
                <ion-card-header>
                  <ion-card-subtitle class="card-subtitle">Seafoods</ion-card-subtitle>
                  <ion-card-title class="card-title">Shrimp Noodles</ion-card-title>
                </ion-card-header>
                <div class="price-wrapper">
                  <p class="price">P 175</p>
                  <ion-icon class="rating" src="https://upload.wikimedia.org/wikipedia/commons/4/47/Rating_stars_4.5.svg"></ion-icon>
                </div>
              </ion-card>
            </ion-col>

            <ion-col size="6">
              <ion-card>
                <ion-img src="/assets/images/shrimp-noodles.png"></ion-img>
                <ion-card-header>
                  <ion-card-subtitle class="card-subtitle">Seafoods</ion-card-subtitle>
                  <ion-card-title class="card-title">Shrimp Noodles</ion-card-title>
                </ion-card-header>
                <div class="price-wrapper">
                  <p class="price">P 175</p>
                  <ion-icon class="rating" src="https://upload.wikimedia.org/wikipedia/commons/4/47/Rating_stars_4.5.svg"></ion-icon>
                </div>
              </ion-card>
            </ion-col>

          </ion-row>
        </ion-grid>

    </ion-content>
  </ion-page>

</template>

<script>
  import {useIonRouter, IonCol,IonCardContent, IonGrid, IonRow,IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonButton, IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonMenuToggle, IonPage, IonTitle, IonToolbar, IonAvatar, IonImg, IonIcon } from '@ionic/vue';
  import { defineComponent, ref } from 'vue';
  import { useRoute } from 'vue-router';
  export default defineComponent({
    name: 'Order',
    components: {
      IonButton,
      IonButtons,
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
      IonCol,
      IonCardContent,
      IonGrid,
      IonRow,
      IonCard,
      IonCardHeader,
      IonCardSubtitle,
      IonCardTitle

    },

    setup() {
      const router = useRoute();
      const ionRouter = useIonRouter();

      const detailpage = () => {
        ionRouter.push('/order/details');
      }

      return {
        router,
        detailpage
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
ion-button{
  --background: rgb(188, 188, 188);
  --color: rgb(61, 57, 57);
  --border-radius: 10px;
  font-weight: bold;
}
ion-card{
  --background:rgb(188, 188, 188);
  width: 10rem;
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
.active{
  background-color:red;
  color:red;
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
  align-items: center;
  justify-content: space-between;
}
.header{
  font-weight: bold;
}
.header-cart{
  color:red;
  font-size: 24px;
  margin-right:20px;
}
.reward-button{
  display: flex;
  align-items:center;
  justify-content: space-between;
  margin-top: 1rem;
  gap: 2px;
}
.reward-all{
  --background: red;
  color: white;
}
.order-detail{
  --padding-bottom:20rem;
  display: flex;
  flex-direction:column;
  align-items:center;
  justify-content: center;
}
.card-title{
  font-size:20px;
}
.card-subtitle{
  font-size: 10px;
  color:rgb(72, 72, 72);
}
.price-wrapper{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding:10px;
}
.price{
  color:red;
}
.rating{
  font-size:4.5rem;
}
</style>