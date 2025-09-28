import React, { useEffect, useRef, useState } from 'react'

import {
  IonApp,
  IonButton,
  IonButtons,
  IonContent,
  IonFooter,
  IonImg,
  IonList,
  IonModal,
} from '@ionic/react'
import { useProductStore } from '../stores/productStores';
import { useCartStore } from '../stores/cartStores';

type Props = {
  id?: number;
  name?: string;
  size?: string;
  flavor?: string;
  fullPrice?: number;
  actualPrice?: number;
}

const ModalCart: React.FC = (props: Props) => {
  const { id, name, size, flavor, fullPrice, actualPrice } = props

  const modalRef = useRef<HTMLIonModalElement>(null);
  const { productDetail } = useProductStore();
  const { addProductToCart } = useCartStore();

  const [amount, setAmount] = useState<number>(1);
  const [selectSize, setSelectSize] = useState<string | undefined>(size);
  const [selectFlavor, setSelectFlavor] = useState<string | undefined>(flavor);
  const [displayPrice, setDisplayPrice] = useState<{ fullPrice: number | undefined, actualPrice: number | undefined }>({ fullPrice, actualPrice })

  useEffect(() => {
    const result = productDetail.size.find((element) => element.label === selectSize);
    setDisplayPrice({ fullPrice: result?.fullPrice, actualPrice: result?.actualPrice });
  }, [selectSize]);

  const increaseAmount = () => {
    const existAmount: number = amount + 1;
    setAmount(existAmount);
  }
  const decreaseAmount = () => {
    if (amount <= 1) return;
    const existAmount: number = amount - 1;
    setAmount(existAmount);
  }

  const resetAmount = () => {
    setAmount(1);
  }

  const handleSelectSize = (props: { size: string, available: boolean }) => {
    if (!props.available) return;
    setSelectSize(props.size);
  };

  const handleSelectFlavor = (props: { flavor: string, stock: number }) => {
    if (props.stock <= 0) return;
    setSelectFlavor(props.flavor);
  }

  return (
    <IonModal ref={modalRef} trigger="open-modal" breakpoints={[0, 0.85]} initialBreakpoint={0.85} onIonModalDidDismiss={resetAmount}>

      {/* none selected quick cart*/}
      <div className="qcart-content-wrap ">
        <IonList className="qcart-content">
          <div className="position-wrap">
            {/* top section */}
            <div className="qcart-top-info-wrap">
              <IonImg className="product-img" src="assets/img/product-mock3.png"></IonImg>
              <IonButtons className="qcart-closing-btn">
                <IonButton onClick={() => modalRef.current?.dismiss()}>
                  <img src="assets/icon/closing-icon.svg" />
                </IonButton>
              </IonButtons>
              <div className="qcart-info-right">
                <span className="qcart-title">Baam My Whey Protien one two sentences dfsdf dfsf</span>
                <p className="qcart-des">Short description two sentence Lorem ipsum Short description two</p>
                <div className="price-d">฿{`${displayPrice.actualPrice ? displayPrice.actualPrice.toLocaleString() : '0'}`} <span className="price-o">฿{`${displayPrice.fullPrice ? displayPrice.fullPrice.toLocaleString() : '0'}`}</span></div>
              </div>
            </div>
            {/* mid and bottom section wrap */}
            <div className="qcart-select">Please select your options</div> {/* กดตัวเลือกด้านล่าง เพื่อสั่งซื้อ */}
            <div className="qcart-exp">EXP:20/2021</div>
            <div className="qcart-mid-wrap">
              {/* mid section */}
              <div className="qcart-selector-wrap">
                <div className="qcart-selector">
                  <div className="qcart-heading">Size <span className="select-num"> (Select 1)</span></div>
                  {productDetail.size && (
                    <IonButtons className="selector-btn-wrap">
                      {productDetail.size?.map((element, index) => (
                        <IonButton
                          key={index}
                          onClick={() => handleSelectSize({ size: element.label, available: element.available })}
                          className={`selector-btn ${element.available ? (selectSize === element.label ? 'select' : 'n-select') : 'disable'}`}
                        >
                          {element.label}
                          {element.focus && <img className="flash" src="assets/icon/mnf.svg" />}
                        </IonButton>
                      ))}
                    </IonButtons>
                  )
                  }
                </div>
                <div className="qcart-selector">
                  <div className="qcart-heading">Flavor / Selections <span className="select-num"> (Select 1)</span></div>
                  {productDetail.flavor && (
                    <IonButtons className="selector-btn-wrap">
                      {productDetail.flavor?.map((element, index) => (
                        <IonButton
                          key={index}
                          onClick={() => handleSelectFlavor({ flavor: element.label, stock: element.stock })}
                          className={`selector-btn ${element.stock ? (selectFlavor === element.label ? 'select' : 'n-select') : 'disable'}`}
                        >
                          {element.label}
                        </IonButton>
                      ))}
                    </IonButtons>
                  )}
                </div>
              </div>
              {/* bottom section */}
              <IonFooter className="qcart-confirm-footer">
                <div className="scroll-arrow-wrap" id="scrollable-arrow">
                  <img src="assets/icon/arrow-down-icon.svg" />
                </div>
                <div className="qcart-confirm" >
                  <div className="qcart-qty-wrap">
                    <p className="qty-left">Quantity</p>
                    <div className="qty-right">
                      <IonButton className="qcart-btn-qty" onClick={decreaseAmount} >
                        <img src="assets/icon/subtract-icon.svg" />
                      </IonButton>
                      <span className="quickcart-text-qty">{amount}</span>
                      <IonButton className="qcart-btn-qty" onClick={increaseAmount}>
                        <img src="assets/icon/add-icon.svg" />
                      </IonButton>
                    </div>
                  </div>
                  {/* for buttons use add,buy,remove,update,inactive for 50% width, add extension -f for width 100%, example: add-f */}
                  {/*                   
                      <IonButtons className="qcart-mix-btn-wrap">
                        <IonButton slot="start" className="qcart-btn add">Add to Cart</IonButton>
                        <IonButton className="qcart-btn buy">Buy Now</IonButton>
                      </IonButtons>
                                        */}
                  <IonButtons className="qcart-mix-btn-wrap">
                    <IonButton
                      slot="start"
                      expand="block"
                      onClick={(e)=>{
                        addProductToCart(e)
                        modalRef.current?.dismiss()
                      }}
                      className={`qcart-btn ${selectFlavor && selectSize ? 'add-f' : 'inactive-f'}`}>
                      Add to Cart
                    </IonButton>
                  </IonButtons>
                  {/*
                      <IonButtons className="qcart-mix-btn-wrap">
                        <IonButton slot="start" expand="block" className="qcart-btn remove">Remove</IonButton>
                      </IonButtons>
                                        */}
                  {/*
                      <IonButtons className="qcart-mix-btn-wrap">
                        <IonButton slot="start" className="qcart-btn inactive">Add to Cart</IonButton>
                        <IonButton className="qcart-btn inactive">Buy Now</IonButton>
                      </IonButtons>
                                        */}
                </div>
              </IonFooter>
            </div>
          </div>
        </IonList>
      </div>

    </IonModal>
  )
}

export default ModalCart