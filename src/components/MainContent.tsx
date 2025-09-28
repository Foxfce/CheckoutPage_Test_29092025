import React, { useEffect, useRef, useState } from 'react'
import {
    IonAvatar,
    IonButton,
    IonButtons,
    IonContent,
    IonIcon,
    IonImg,
    IonItem,
    IonList,
} from '@ionic/react';
import {
    alertCircleOutline,
    chevronBackCircle
} from 'ionicons/icons';


import MidDetailSection from './productsDescription/MidDetailSection';

import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper'
import { useProductStore } from '../stores/productStores';

const MainContent: React.FC = () => {
    const { productDetail } = useProductStore();

    const [selectSize, setSelectSize] = useState<string | undefined>('');
    const [displayPrice, setDisplayPrice] = useState<{ fullPrice: number | undefined, actualPrice: number | undefined }>({ fullPrice: 0, actualPrice: 0 })
    const [currentPicture, setCurrentPicture] = useState<number>(1);

    useEffect(() => {
        const result = productDetail.size.find((element) => element.label === selectSize);
        setDisplayPrice({ fullPrice: result?.fullPrice, actualPrice: result?.actualPrice });
    }, [selectSize]);

    const handleSelectSize = (props: { size: string }) => {
        setSelectSize(props.size);
    };

    // const swiperRef = useRef<SwiperType>(null);

    const handleCyclePicture = (swiper : any) => {
        console.log(swiper.realIndex);
        setCurrentPicture(swiper.realIndex+1);
    }

    return (
        <IonContent className="main-content-pd" fullscreen>
            {/* top detail section */}
            <div className="pd-top-sec-wrap">
                <div className="slider-item pd-image-slider">
                    {/*
                    <IonButtons className="slide-btn-left">
                        <img src="assets/icon/swipe-arrow-left.svg"/>
                    </IonButtons>
                    <IonButtons className="slide-btn-right">
                        <img src="assets/icon/swipe-arrow-right.svg"/>
                    </IonButtons>
                    */}
                    <div className="product-label">
                        <span>{selectSize}</span>
                    </div>
                    <div className="slide-count">
                        <span>{`${currentPicture}/${productDetail.picture.length}`}</span>
                    </div>
                    <Swiper
                        onSlideChangeTransitionEnd={(swiper)=>handleCyclePicture(swiper)}
                        className='pd-image-slide'
                        spaceBetween={0}
                        loop={true}
                        slidesPerView={'auto'}
                    >
                        {
                            productDetail.picture.map((element,index) => (
                                <SwiperSlide key={index}>
                                    <IonImg src={`${element}`} className="slides-product-image"></IonImg>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                    <div className="tier-level">
                        <span className="sub-text">Your Tier</span>
                        <span className="main-text">
                            <img src="assets/icon/dumbbell-icon.svg" />
                            Pro Member
                        </span>
                    </div>
                </div>
                {/* flash */}
                <div className="pd-flash-wrap">
                    <span className="flash-header">Flash Sale</span>
                    <span className="timer">
                        <ul>
                            <li>00</li> :
                            <li>12</li> :
                            <li>24</li>
                        </ul>
                    </span>
                </div>
                {/* product heading info */}
                <div className="product-heading-wrap">
                    <div className="product-title">Baam 100% My Whey</div>
                    <div className="rp-content">
                        <IonButtons className="rate">
                            <label>★★★★★</label><span className="review-count">(200 Reviews)</span>
                        </IonButtons>
                        <span className="points">500</span>
                    </div>
                    <div className="pricing-content">
                        <div className="price-w">
                            <div className="sub-text">Price</div>
                            <div className="price-d">฿{`${displayPrice.actualPrice ? displayPrice.actualPrice.toLocaleString() : '0'}`}<span className="price-o">฿{`${displayPrice.fullPrice ? displayPrice.fullPrice.toLocaleString() : '0'}`}</span></div>
                        </div>
                        <div className="price-w border-left">
                            <div className="sub-text">Your Price<IonIcon icon={alertCircleOutline}></IonIcon></div>
                            <div className="price-d">฿{`${displayPrice.actualPrice ? (displayPrice.actualPrice * 0.8).toLocaleString() : '0'}`}</div>
                            {/*
                            <div className="sub-text">Next Tier<IonIcon name="alert-circle-outline"></IonIcon></div>
                            <div className="price-nt">฿1,600</div>
                            */}
                        </div>
                    </div>
                    {productDetail.size && (
                        <IonButtons className="pd-size-slider-tab">
                            <IonButton className="size-sub-btn inactive"><IonIcon icon={chevronBackCircle}></IonIcon></IonButton>
                            {productDetail.size?.map((element, index) => (
                                <IonButton
                                    key={index}
                                    onClick={() => handleSelectSize({ size: element.label })}
                                    className={`size-sub-btn ${selectSize === element.label ? 'active' : 'inactive'}`}
                                >
                                    {element.label}
                                </IonButton>
                            ))}
                        </IonButtons>
                    )}
                    <IonButtons className="supp-btn-wrap">
                        <IonButton id="open-factsheet-modal" className="supp-btn">View Supplement Fact</IonButton>
                    </IonButtons>
                </div>
            </div>
            <div className="line-break"></div>
            {/* mid detail section */}
            <MidDetailSection />

            <div className="line-break"></div>
            {/* bottom detail section */}
            {/* recommended promo set section */}
            <div className="p-title">Bundle Set</div>
            <div className="slider-item pd-product-slider">
                <Swiper
                    spaceBetween={12}
                    className='pd-product-slide'
                    slidesPerView={'auto'}
                >
                    <SwiperSlide className='pd-product-container'>
                        <IonImg className="product-image" src="/assets/img/product-mock3.png"></IonImg>
                        <div className="product-info">
                            <div className="title">Baam Mass V1</div>
                            <div className="price-d">฿1,000<span className="price-o">฿2,000</span></div>
                            <IonButtons className="cart">
                                <IonButton>
                                    <img src="assets/icon/cart-mini-icon.svg" />
                                </IonButton>
                            </IonButtons>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='pd-product-container'>
                        <IonImg src="assets/img/product-mock3.png" className="product-image"></IonImg>
                        <div className="product-info">
                            <div className="title">Baam Mass V1</div>
                            <div className="price-d">฿1,000<span className="price-o">฿2,000</span></div>
                            <IonButtons className="cart">
                                <IonButton>
                                    <img src="assets/icon/cart-mini-icon.svg" />
                                </IonButton>
                            </IonButtons>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='pd-product-container'>
                        <IonImg className="product-image" src="assets/img/product-mock3.png"></IonImg>
                        <div className="product-info">
                            <div className="title">Baam Mass V1</div>
                            <div className="price-d">฿1,000<span className="price-o">฿2,000</span></div>
                            <IonButtons className="cart">
                                <IonButton>
                                    <img src="assets/icon/cart-mini-icon.svg" />
                                </IonButton>
                            </IonButtons>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='pd-product-container'>
                        <IonImg className="product-image" src="assets/img/product-mock3.png"></IonImg>
                        <div className="product-info">
                            <div className="title">Baam Mass V1</div>
                            <div className="price-d">฿1,000<span className="price-o">฿2,000</span></div>
                            <IonButtons className="cart">
                                <IonButton>
                                    <img src="assets/icon/cart-mini-icon.svg" />
                                </IonButton>
                            </IonButtons>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="line-break"></div>
            {/* review section */}
            <div className="pd-review">
                <div className="review-heading-wrap">
                    <div className="re-flex">
                        <div className="t-title">Customer Review</div>
                        <div className="re-rate">
                            <label>★★★★★</label><span className="re-rate-total">4/5</span><span className="re-count">(200 Reviews)</span>
                        </div>
                    </div>
                    <IonButtons className="re-write">
                        <IonButton className="re-write-btn">Write Review</IonButton>
                    </IonButtons>
                </div>
                {/* show max 4 reviews */}
                <IonList>
                    <IonItem>
                        <IonAvatar className="img-content" slot="start">
                            <img src="assets/img/profile-placeholder.png" />
                        </IonAvatar>
                        <div className="re-right-content">
                            <IonButtons>
                                <IonButton className="like">0</IonButton>
                            </IonButtons>
                            <div className="name">Barack Obama</div>
                            <div className="rate">★★★★★</div>
                            <div className="sub-info">
                                <span>12 March 2022</span> |
                                <span className="verify"><img src="assets/icon/verify-icon.svg" /> Verified Buyer</span>
                            </div>
                            <div className="flavor">Vanilla Milkshake</div>
                            <p className="description">Lorem ipsum dolor sit met, consecterur adipiscing elit, ed Do eius
                                mod tempor incididut ut labore te dfdf dfsdfdf
                            </p>
                            <div className="img-vdo-container">
                                <ul>
                                    <li>
                                        <IonButton className="play-btn">
                                            <img src="assets/icon/play-icon.svg" />
                                        </IonButton>
                                        <img src="https://dummyimage.com/360x640/333/aaa" />
                                    </li>
                                    <li>
                                        <IonButton className="play-btn">
                                            <img src="assets/icon/play-icon.svg" />
                                        </IonButton>
                                        <img src="assets/img/place-holder3.png" />
                                    </li>
                                    <li>
                                        <img src="assets/img/place-holder3.png" />
                                    </li>
                                    <li>
                                        <img src="assets/img/place-holder3.png" />
                                    </li>
                                    <li>
                                        <img src="assets/img/place-holder3.png" />
                                    </li>
                                    <li>
                                        <img src="assets/img/place-holder3.png" />
                                    </li>
                                </ul>
                            </div>
                            <div className="bottom-sub-info">
                                <span>Order ID: 0123456</span> |
                                <span>Product 1 of 2</span>{/* ชิ้นที่ 1 จาก 2 */}
                            </div>
                        </div>
                    </IonItem>
                    <IonItem>
                        <IonAvatar className="img-content" slot="start">
                            <img src="assets/img/profile-placeholder.png" />
                        </IonAvatar>
                        <div className="re-right-content">
                            <IonButtons>
                                <IonButton className="like">0</IonButton>
                            </IonButtons>
                            <div className="name">Onitsuka Tiger</div>
                            <div className="rate">★★★★★</div>
                            <div className="sub-info">
                                <span>12 March 2022</span>
                            </div>
                            <p className="description">Lorem ipsum dolor sit met, consecterur adipiscing elit, ed Do eius
                                mod tempor incididut ut labore te dfdf dfsdfdf
                            </p>
                            <div className="bottom-sub-info">
                            </div>
                        </div>
                    </IonItem>
                    <IonItem>
                        <IonAvatar className="img-content" slot="start">
                            <img src="assets/img/profile-placeholder.png" />
                        </IonAvatar>
                        <div className="re-right-content">
                            <IonButtons>
                                <IonButton className="like-active">3</IonButton>
                            </IonButtons>
                            <div className="name">Steve Jobs</div>
                            <div className="rate">★★★★★</div>
                            <div className="sub-info">
                                <span>12 March 2022</span>
                                <span className="verify"><img src="assets/icon/verify-icon.svg" /> Verified Buyer</span>
                            </div>
                            <p className="description">Lorem ipsum dolor sit met, consecterur adipiscing elit, ed Do eius
                                mod tempor incididut ut labore te dfdf dfsdfdf
                            </p>
                            <div className="bottom-sub-info">
                                <span>Order ID: 0123456</span>
                            </div>
                        </div>
                    </IonItem>
                    <IonItem>
                        <IonAvatar className="img-content" slot="start">
                            <img src="assets/img/profile-placeholder.png" />
                        </IonAvatar>
                        <div className="re-right-content">
                            <IonButtons>
                                <IonButton className="like-active">3</IonButton>
                            </IonButtons>
                            <div className="name">Steve Jobs</div>
                            <div className="rate">★★★★★</div>
                            <div className="sub-info">
                                <span>12 March 2022</span> |
                                <span className="verify"><img src="assets/icon/verify-icon.svg" /> Verified Buyer</span>
                            </div>
                            <div className="flavor">Vanilla Milkshake</div>
                            <p className="description">Lorem ipsum dolor sit met, consecterur adipiscing elit, ed Do eius
                                mod tempor incididut ut labore te dfdf dfsdfdf
                            </p>
                            <div className="bottom-sub-info">
                                <span>Order ID: 0123456</span> |
                                <span>Product 1 of 2</span>{/* ชิ้นที่ 2 จาก 2 */}
                            </div>
                        </div>
                    </IonItem>
                </IonList>
                <IonButtons className="sm-btn-wrap">
                    <IonButton className="sm-btn">See More</IonButton>
                </IonButtons>
            </div>
        </IonContent >
    )
}

export default MainContent