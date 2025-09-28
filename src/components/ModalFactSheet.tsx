import React, { useRef } from 'react'

import {
  IonButton,
  IonButtons,
  IonContent,
  IonImg,
  IonModal,
  IonTitle,
  IonToolbar,
} from '@ionic/react'

type Props = {
  id?: number;
  name?: string;
  size?: string;
  flavor?: string;
  fullPrice?: number;
  actualPrice?: number;
}

const ModalFactSheet: React.FC = (props: Props) => {
  const modal = useRef<HTMLIonModalElement>(null);

  function dismiss() {
    modal.current?.dismiss();
  }

  return (
    <IonModal ref={modal} trigger="open-factsheet-modal"  breakpoints={[0, 0.85]} initialBreakpoint={0.85}>
      <IonContent>
        <IonToolbar>
          <IonTitle>Fact Sheet</IonTitle>
          <IonButtons slot="end">
            <IonButton color="primary" onClick={() => dismiss()}>
              Close
            </IonButton>
          </IonButtons>
        </IonToolbar>
        <IonImg src="assets/img/fact-sheet.png" />
      </IonContent>
    </IonModal>
  )
}

export default ModalFactSheet