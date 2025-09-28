import React, { useState } from 'react'

import {
    IonButton,
    IonButtons,
    IonFooter,
    IonToolbar
} from '@ionic/react';

type Props = {}

const Footer: React.FC = (props: Props) => {
    const [favorite, setFavorite] = useState<boolean>(false);

    const handleFavorite = () =>{
        setFavorite(!favorite);
    }

    return (
        <IonFooter className="footer-menu-common ">
            <div className="pd-noti-float">
                <span className="noti-text"><img src="assets/icon/mini-noti-icon.svg" /> This product was last placed 2 minutes ago from Nonthaburi</span>
            </div>
            <IonToolbar className="menu-bar-wrap">
                <IonButtons className="menu-btn">
                    <IonButton onClick={handleFavorite} className={`favorite-btn ${favorite ? 's-active': 's-inactive'}`}></IonButton>
                    <IonButton id="open-modal" className="main-footer-btn active">Add to Cart</IonButton>
                </IonButtons>
            </IonToolbar>
        </IonFooter>
    )
}

export default Footer;