<template>
  <ion-page>
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-buttons @click="goback">
          <ion-icon class="icon-link" src="/assets/icons/backbtn.svg"></ion-icon>
          <ion-title>Order Summary</ion-title>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <ion-list>
        <ion-item-sliding>
          <ion-item>
            <div>
              <h5 class="name">Chou Tzuyu</h5>
              <p class="contact">+63 12 345 6789</p>
              <p class="email">chou.tzuyu@gmail.com</p>
            </div>
          </ion-item>

          <ion-item-options>
            <ion-item-option class="pencil">
              <ion-icon src="/assets/icons/pencil.svg"></ion-icon>
            </ion-item-option>
            <ion-item-option class="trash">
              <ion-icon src="/assets/icons/trash.svg"></ion-icon>
            </ion-item-option>
          </ion-item-options>
        </ion-item-sliding>

        <ion-item-sliding>
          <ion-item>
            <div class="wrapper">
              <div class="content-wrapper">
                <h5 class="name">House</h5> 
                  <div class="outer-circle">
                    <div class="inner-circle">
                    </div>
                  </div>
              </div>
              <p class="contact">+63 12 125 6789</p>
              <p class="email">home@gmail.com</p>
            </div>
          </ion-item>

          <ion-item-options>
            <ion-item-option class="pencil">
              <ion-icon src="/assets/icons/pencil.svg"></ion-icon>
            </ion-item-option>
            <ion-item-option class="trash">
              <ion-icon src="/assets/icons/trash.svg"></ion-icon>
            </ion-item-option>
          </ion-item-options>
        </ion-item-sliding>

        <ion-item-sliding>
          <ion-item>
            <div class="wrapper">
              <div class="content-wrapper">
                <h5 class="name">Office</h5> 
                  <div class="outer-circle">
                  </div>
              </div>
              <p class="contact">+63 12 125 6789</p>
              <p class="email">office@gmail.com</p>
            </div>
          </ion-item>

          <ion-item-options>
            <ion-item-option class="pencil">
              <ion-icon src="/assets/icons/pencil.svg"></ion-icon>
            </ion-item-option>
            <ion-item-option class="trash">
              <ion-icon src="/assets/icons/trash.svg"></ion-icon>
            </ion-item-option>
          </ion-item-options>
        </ion-item-sliding>
      </ion-list>

      <h5 class="title">Orders</h5>
      <ion-item-sliding>
        <ion-item>
          <div class="food-wrapper">
            <div class="food-card">
              <ion-img class="food-image" src="/assets/images/ramen.png"></ion-img>
              <div class="food-content">
                <h5 class="food-title">Kur Ramen</h5>
                <p class="subtitle">1x Coke</p>
                <p class="subtitle">1x White Rice</p>
                <p class="subtitle">1x Broth</p>
              </div>
            </div>
            <div class="food-card-bottom">
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
            </div>
          </div>
        </ion-item>
  
        <ion-item-options>
          <ion-item-option class="pencil">
            <ion-icon src="/assets/icons/pencil.svg"></ion-icon>
          </ion-item-option>
          <ion-item-option class="trash">
            <ion-icon src="/assets/icons/trash.svg"></ion-icon>
          </ion-item-option>
        </ion-item-options>
      </ion-item-sliding>

      <h5 class="title">Payment Options</h5>
      <div class="payment-cards ion-padding">
          <div class="content-wrapper">
              <h5 class="payment-option">Cash On Delivery</h5> 
              <div class="outer-circle">
                <div class="inner-circle">
                </div>
              </div>
          </div>
        <p class="payment-description">Pay when you recieved you order.</p>
      </div>

      <div class="payment-cards ion-padding">
          <div class="content-wrapper">
              <h5 class="payment-option">Loyalty Points <span class="loyaltly-points">(0 points)</span></h5> 
              <div class="outer-circle">
              </div>
          </div>
        <p class="payment-description">Pay using your own loyalty points.</p>
      </div>

      <div class="payment-cards ion-padding">
          <div class="content-wrapper">
              <ion-img class="e-wallet" src="/assets/icons/paypal.svg"></ion-img> 
              <div class="outer-circle">
              </div>
          </div>
        <p class="payment-description">Pay using e-wallet.</p>
      </div>

      <div class="payment-cards ion-padding">
          <div class="content-wrapper">
              <ion-img class="e-wallet" src="/assets/icons/bank.svg"></ion-img> 
              <div class="outer-circle">
              </div>
          </div>
        <p class="payment-description">Pay using debit or credit card.</p>
      </div>

      <div class="bill">
        <h5 class="subtotal">Subtotal</h5>
        <p class="dollars">172</p>
      </div>
      <div class="bill">
        <h5 class="subtotal">Delivery</h5>
        <p class="dollars">55</p>
      </div>

      <ion-item>
        <ion-input label="Change for" label-placement="stacked" placeholder="1000"></ion-input>
      </ion-item>
    </ion-content>


    <ion-footer>
      <ion-toolbar>
        <div class="footer-content">
          <div class="total">
            <h5 class="grand-total">Grand Total</h5>
            <p class="grand-total-dollars">P 227</p>
          </div>
          <ion-button @click="receiptpage" class="place-order">Place Order</ion-button>
        </div>
      </ion-toolbar>
    </ion-footer>
  </ion-page>
</template>

<script>
import {useIonRouter, IonImg, IonButtons, IonIcon, IonPage, IonHeader, IonToolbar, IonTitle, IonContent,  IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList } from '@ionic/vue';
import { defineComponent } from 'vue';
export default defineComponent ({
  name: 'Summary',
  components: {
    IonImg,
    IonButtons,
    IonIcon,
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonItem,
    IonItemOption,
    IonItemOptions,
    IonItemSliding,
    IonLabel,
    IonList,
  },
  setup () {
    const ionRouter = useIonRouter();

    const goback = () => {
      ionRouter.replace('/order/details');
    };
    const receiptpage = () => {
      ionRouter.push('/order/success');
    }
    return {
      goback,
      receiptpage
    }
  }
});
</script>

<style scoped>
ion-item{
  --background:rgba(228, 228, 228);
  --border-radius: 10px;
  --border-color:white;
  width: 100%;
  margin-bottom:10px;
}

.icon-link{
  font-size: 20px;
  margin-left:10px
}
.pencil,.trash{
  font-size:18px;
  border-radius: 10px;
  height:100%;
  margin:0 2px;
}
.pencil{
  --background:rgb(255, 227, 115);
}
.trash{
  --background:rgb(255, 202, 202);
}
.wrapper{
  display: flex;
  flex-direction:column;
  width:100%;
}
.content-wrapper{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.outer-circle{
  display:flex;
  align-items:center;
  justify-content: center;
  height: 20px;
  width: 20px;
  background-color:white;
  border-radius: 50%;
}
.inner-circle{
  height: 10px;
  width: 10px;
  background-color:rgb(246, 187, 79);
  border-radius: 50%;
}
.name{
  font-size:20px;
  font-weight: bold;
}
.contact,.email{
  color:rgb(90, 88, 88);
  
}
.name,.contact,.email{
  margin:8px;
}

.food-wrapper{
  display:flex;
  flex-direction:column;
  flex: 1;
  width:100%;
}
.title{
  font-size: 24px;
  font-weight: bold;
  margin-bottom:0;
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
  font-size:18px;
  font-weight: bold;
}
.subtitle{
  font-size:12px;
  color:rgb(76, 76, 76);
  margin:0;
}
.container{
  display:flex;
  align-items:center;
  justify-content: space-between;
  margin:0 20px;
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
.subtraction,.addition{
  display: flex;
  align-items:center;
  justify-content: center;
  color: red;
  font-size: 20px;
  font-weight: bold;
}
.food-card-bottom{
  position:relative;
  bottom:2%;
  height: 5rem;
  width: 100%;
  background-color: rgb(228, 228, 228);
  border-top:1px solid grey;
  border-radius: 0 0 10px 10px;
}

.payment-cards{
  background-color: rgb(228, 228, 228);
  border-radius: 10px;
  height: 7rem;
  width:100%;
  margin:10px 0;
}
.payment-option{
  font-size:14px;
  font-weight:bold;
}
.payment-description{
  color: rgb(76, 76, 76);
  font-size:12px;
}
.loyaltly-points{
  color:red;
}
.e-wallet{
  height: 3rem;
  width: 5rem;
}
.bill{
  display: flex;
  align-items: center;
  justify-content:space-between;
  margin:0 10px;
  font-weight:bold;
}
.subtotal,.dollars{
  margin:5px 0;
}
.footer-content{
  display:flex;
  align-items: center;
  justify-content: space-between;
  margin:20px 10px;
}
.grand-total,.grand-total-dollars{
  margin:0;
}
.place-order{
  --background:rgb(218, 59, 59);
  --color:white;
  --border-radius: 10px;
  width:10rem;
  height:2.5rem;
}
</style>
