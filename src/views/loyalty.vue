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
            <ion-buttons>
              <ion-icon class="crown-svg" src="/assets/icons/crown.svg"></ion-icon>
              <p>
                0 Pointss
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
              <ion-buttons class="menu-link" @click="homepage">Home</ion-buttons>
          </ion-menu-toggle>
        </div>
        <div class="icon-wrapper">
          <ion-icon class="icon-link" src="/assets/icons/chicken.svg"></ion-icon>
          <ion-menu-toggle>
              <ion-buttons class="menu-link" @click="orderpage">Order Now!</ion-buttons>
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
          <ion-title class="header">Loyalty Points</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding"> 
      <div class="header-content-wrapper">
        <ion-icon class="header-crown" src="/assets/icons/crown.svg"></ion-icon>
        <div class="title-wrapper">
          <h1 class="title">Beginner Tier</h1>
          <p class="view-all">
              View All
              <ion-icon class="see-offer" src="/assets/icons/back.svg"></ion-icon>   
          </p>    
        </div>             
      </div>
      <p class="description">Earn points by purchasing from our store. Vestibulum ante ipsum primis in faucibus orci luctus .et</p>
      <div class="circle-position">
        <div class="outside-circular">
          <div class="inner-circular">
            <div class="content-circular">
              <p>0 / 160</p>
            </div>
          </div>
        </div>
      </div>

      <div class="reward-wrapper">
        <h5 class="reward-title">Rewards</h5>
          <p class="view-all">
            How  it Works
            <ion-icon class="see-offer" src="/assets/icons/back.svg"></ion-icon>   
          </p>
      </div>
      <div class="reward-button">
        <ion-button class="reward-all">All</ion-button>
        <ion-button>Beginner</ion-button>
        <ion-button>Intermediate</ion-button>
        <ion-button>Loyal</ion-button>
      </div>
      <div class="food-card">
        <ion-img class="food-image" src="/assets/images/Teriyaki.png">Image Here</ion-img>
        <div class="food-content">
          <h5 class="food-title">Food Title</h5>
          <p class="meat-type">Meat</p>
          <div class="food-point-wrapper">
            <ion-icon class="crown-svg" src="/assets/icons/crown.svg"></ion-icon>
            <p class="food-points">20 points</p>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>

</template>

<script>
  import {useIonRouter, IonButton, IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonMenuToggle, IonPage, IonTitle, IonToolbar, IonAvatar, IonImg, IonIcon } from '@ionic/vue';
  import { defineComponent, ref } from 'vue';
  import { useRoute } from 'vue-router';
  export default defineComponent({
    name: 'Loyalty',
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
    },
    setup() {
      const router = useRoute();
      const ionRouter = useIonRouter();

      const homepage = () => {
        console.log('navigate to')
        ionRouter.push('/');
      }
      const orderpage = () => {
        ionRouter.push('/order','forward');
      }

      return {
        router,
        homepage,
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
ion-button{
  --background: rgb(188, 188, 188);
  --color: rgb(61, 57, 57);
  --border-radius: 10px;
  font-weight: bold;
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
.header{
  font-weight: bold;
}
.header-content-wrapper{
  display: flex;
  align-items: start;
  gap: 10px;
}
.header-crown{
  font-size: 3.5rem;
}
.title-wrapper{
  display: flex;
  align-items: end;
  justify-content: space-between;
  width: 100%;
  flex: 1;
}
.title{
  font-size: 18px;
  font-weight:600;
}
.view-all{
  display: flex;
  align-items:center;
}
.view-all,.see-offer{
  color:red;
}
.see-offer{
  margin-left: 5px;
}

.description{
  color: grey;
  font-size: 14px;
}

.circle-position{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
}
.outside-circular{
  display: flex;
  justify-content: center;
  align-items: center;
  height:10rem;
  width: 10rem;
  background-color:rgb(245, 205, 205);
  border-radius: 50%;
}
.inner-circular{
  display: flex;
  justify-content: center;
  align-items: center;
  height:8rem;
  width: 8rem;
  background-color:white;
  box-shadow:1px 8px 5px rgb(230, 173, 173);
  border-radius: 50%;
}
.content-circular{
  font-size: 24px;
  font-weight: bold;
}

.reward-wrapper{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2.5rem;
}
.reward-title{
  font-size: 24px;
  font-weight: 600;
}
.reward-button{
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  gap: 2px;
}
.reward-all{
  --background: red;
  --color: white;
}

.food-card{
  display: flex;
  align-items: center;
  margin-top: 2rem;
  height: 10rem;
  width: 100%;
  border-radius: 10px;
  background-color:rgb(188, 188, 188);
  gap: 10px;
}
.food-image{
  margin: 0 1rem ;
  height: 5rem;
  width: auto;
}
.food-content{
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 1;
}
.food-title,.meat-type{
  margin:0;
}
.food-title{
  font-size:24px;
  font-weight: bold;
}
.meat-type{
  font-size: 14px;
}
.food-point-wrapper{
  display: flex;
  align-items: end;
  gap: 5px;
  font-size: 18px;
  margin-top: 2rem;
}
.food-points{
  font-weight: bold;
  color: red;
  margin: 0;
}
</style>