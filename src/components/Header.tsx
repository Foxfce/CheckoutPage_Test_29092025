import React from 'react'
import {
  IonBadge,
  IonButton,
  IonButtons,
  IonHeader,
  IonSearchbar,
  IonToolbar
} from '@ionic/react';
import { useCartStore } from '../stores/cartStores';

const Header: React.FC = () => {
  const { productAmount, removeProductFromCart } = useCartStore();

  return (
    <>
      {/* header */}
      <IonHeader mode="md" className="top-header-wrap ion-no-border fixed">
        <IonToolbar className="toolbar-wrap clear">
          <IonButtons slot="start" className='clear'>
            <IonButton className="header-btn back-btn">
              <img src="/assets/icon/white-back-arrow-icon.svg" />
            </IonButton>
          </IonButtons>
          {/* <IonSearchbar /> */}
          <IonButtons slot="primary" className="icon-btn">
            <IonButton onClick={removeProductFromCart}>
              <IonBadge className="noti-count">{productAmount}</IonBadge>
              <img src="/assets/icon/cart-icon.svg" alt="" className="icon-size" />
            </IonButton>
            <IonButton>
              <IonBadge className="noti-count">99</IonBadge>
              <img src="/assets/icon/message-icon.svg" alt="" className="icon-size message" />
            </IonButton>
          </IonButtons>
        </IonToolbar>

        {/* order purchase noti */}
        {/*       
                <div className="pd-noti-float">
                <span className="noti-text"><img src="assets/icon/mini-noti-icon.svg"> This product was last placed 2 minutes ago from Nonthaburi</span>
                </div>
                */}

      </IonHeader >
    </>
  )
}

export default Header