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
        <ion-img src="/assets/images/ramen.png"></ion-img>
      </div>
      <div class="heart-border">
        <div class="heart-content">
          <ion-icon class="heart" src="/assets/icons/heart.svg"></ion-icon>
        </div>
      </div>
      <h5 class="title">Kur Ramen</h5>
      <ion-icon class="rating" src="https://upload.wikimedia.org/wikipedia/commons/4/47/Rating_stars_4.5.svg"></ion-icon>
      <div class="description">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur 
          beatae excepturi quidem, dignissimos natus perferendis provident maiores 
          iste, delectus tenetur atque quod accusamus sunt neque?
        </p>
      </div>
      <div class="container">
        <p class="price">P 172</p>
        <div class="quantity-container">
          <div class="border">
            <div class="subtraction">
              -
            </div>
          </div>
          <p class="quantity">1</p>
          <div class="border">
            <div class="addition">
              +
            </div>
          </div>
        </div>
      </div>
      <h5 class="title">Beverages</h5>
      <ion-list>
        <ion-item>
          <ion-select fill="solid" shape="round" aria-label="Beverages" label-placement="stacked" label="Choose Beverages" interface="popover" placeholder="Coke">
            <ion-select-option value="Coke">Coke</ion-select-option>
            <ion-select-option value="Orange">Orange</ion-select-option>
            <ion-select-option value="Pepsi">Pepsi</ion-select-option>
          </ion-select>
        </ion-item>
      </ion-list>
      <div class="drink-sizes">
        <ion-button class="active">Regular</ion-button>
        <ion-button>Large</ion-button>
        <ion-button>X-Large</ion-button>
      </div>
      <h5 class="title">Add-Ons</h5>
      <div class="food-card">
        <ion-img class="food-image" src="/assets/images/broth.png"></ion-img>
        <div class="food-content">
          <div class="title-wrapper ion-padding-end">
            <h5 class="food-title">Broth</h5>
            <div class="check-border">
              <div class="check">
                ✓
              </div>
            </div>
          </div>
          <p class="add-on">Sauce</p>
          <div class="container ion-padding-end">
            <p class="price">P 172</p>
            <div class="quantity-container">
              <div class="border">
                <div class="subtraction">
                  -
                </div>
              </div>
              <p class="quantity">1</p>
              <div class="border">
                <div class="addition">
                  +
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="food-card">
        <ion-img class="food-image rice-size" src="/assets/images/rice.png"></ion-img>
        <div class="food-content">
          <div class="title-wrapper ion-padding-end">
            <h5 class="food-title">White Rice</h5>
            <div class="check-border">
            </div>
          </div>
          <p class="add-on">Rice</p>
          <div class="container ion-padding-end">
            <p class="price">P 172</p>
            <div class="quantity-container">
              <div class="border">
                <div class="subtraction">
                  -
                </div>
              </div>
              <p class="quantity">1</p>
              <div class="border">
                <div class="addition">
                  +
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ion-button @click="setOpen(true)" class="place-order">Add to bag</ion-button>

    <ion-modal :is-open="isOpen">
      <ion-content>
        <ion-icon class="check-icon" src="/assets/icons/check.svg"></ion-icon>
        <div class="modal-content">
          <h5 class="modal-title">Successfully Added!</h5>
          <p class="subtitle">What do you want to do now?</p>
          <ion-button class="check-out" @click="summary">Proceed to Checkout</ion-button>
          <p class="add-more" @click="setOpen(false, '/order')">Add More</p>
        </div>
      </ion-content>
    </ion-modal>

    </ion-content>
  </ion-page>
</template>

<script>
import {IonModal, IonButton,IonList, IonItem, IonSelect, IonSelectOption ,IonImg, useIonRouter,IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonBackButton, IonIcon } from '@ionic/vue';
import { defineComponent, ref, onMounted } from 'vue';

export default defineComponent({
  name: 'Details',
  components: {
    IonModal,
    IonButton,
    IonList,
    IonItem,
    IonSelect,
    IonSelectOption,
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
    const isOpen = ref(false);

    const setOpen = (open, route = '/order') => {
      isOpen.value = open;
      if (!open) {
        ionRouter.replace(route);
      }
    };

    
    const goback = () => {
      ionRouter.replace('/order');
    };

    const summary = () => {
      setOpen(false, '/order/summary');
    };

    return {
      goback,
      summary,
      isOpen,
      setOpen


    };
  }
  
  
});
</script>

<style scoped>
ion-select{
  /* --background:rgb(188, 188, 188); */
  --boder-color:rgb(188, 188, 188);
  --border-width:0;
  --border-radius:10px;
}
ion-select::part(icon) {
  color: red;
  opacity: 1;
}
ion-button{
  --background:white;
  --color:black;
  --border-color:rgb(188, 188, 188);
  --border-radius:12px;
  font-weight:bold;
  width: 7rem;
}
ion-modal{    
  --height: 50%;
  --width: fit-content;
  --min-width: 350px;
  --border-radius: 16px;
  --box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
}

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
  background-color:rgb(228, 228, 228);
  height:30rem;
  width:100%;
  border-radius: 10px;
}
.heart-border{
  position: relative;
  top: -20px;
  right: -300px;
  height: 40px;
  width: 50px;
  background-color: white;
  box-shadow:1px 1px 10px 5px rgb(188, 188, 188);
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.heart-content{
  display: flex;
  align-items:center;
  justify-content: center;
}
.heart{
  font-size: 18px;
  color:red;
}

.title{
  font-size: 24px;
  font-weight: bold;
  margin-bottom:0;
}
.rating{
  font-size:5rem;
}
.description{
  margin:0;
}

.container{
  display:flex;
  align-items:center;
  justify-content: space-between;
}
.price{
  font-size:20px;
  font-weight: bold;
  color: red;
}
.quantity-container{
  display: flex;
  align-items:center;
  justify-content: end;
  flex: 1;
  width: 100%;
}
.border{
  background-color:rgb(188, 188, 188);
  height: 30px;
  width: 30px;
  border-radius: 10px;
}
.quantity{
  font-size: 24px;
  margin:0 20px;
}
.subtraction,.addition,.check{
  display: flex;
  align-items:center;
  justify-content: center;
  color: red;
  font-size: 20px;
  font-weight: bold;
}

.drink-sizes{
  display:flex;
  align-items:center;
  justify-content: space-evenly;
  gap:10px;
}
.active{
  --background:rgb(246, 187, 79);
  --color: white;
}

.food-card{
  display: flex;
  align-items: center;
  margin-top: 2rem;
  height: 10rem;
  width: 100%;
  border-radius: 10px;
  background-color:rgb(228, 228, 228);
  gap: 10px;
}
.food-image{
  margin: 0 1rem ;
  height: 5rem;
  width: auto;
}
.rice-size{
  height: 5rem;
  width: 5rem
}
.food-content{
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 1;
}
.food-title,.add-on{
  margin:0;
}
.title-wrapper{
  display:flex;
  align-items: center;
  justify-content: space-between;
}
.food-title{
  font-size:24px;
  font-weight: bold;
}
.check-border{
  background-color:white;
  height: 30px;
  width: 30px;
  border-radius: 10px;
}
.add-on{
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
.place-order{
  --background:rgb(218, 59, 59);
  --color:white;
  --border-radius:12px;
  font-weight:normal;
  height: 50px;
  width: 100%;
  margin:20px 0;
}

.check-icon{
  position: relative;
  top:10%;
  right: -40%;
  font-size:5rem;
}
.modal-content{
  margin-top:4rem;
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content:center;
}
.modal-title,.subtitle{
  margin:5px 0;
}
.modal-title{
  font-weight: bold;
}
.subtitle{
  margin-bottom:30px;
  color:grey;
}
.check-out{
  --background:rgb(218, 59, 59);
  --color:white;
  --border-radius:12px;
  font-weight:normal;
  height: 50px;
  width: 15rem;
  margin:20px 0;
}
.add-more{
  text-align:center;
  color: rgb(218, 59, 59);
  font-weight: bold;
}
</style>
