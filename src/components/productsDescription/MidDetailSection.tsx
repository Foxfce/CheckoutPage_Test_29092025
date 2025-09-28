import React, { useRef, useState } from 'react'

import {
    IonLabel,
    IonList,
    IonSegment,
    IonSegmentButton,
    IonToolbar
} from '@ionic/react'

import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from 'swiper'

type Props = {}

const MidDetailSection: React.FC = (props: Props) => {
    const [productDescTabValue, setProductDescTabValue] = useState<number>(1);
    const swiperRef = useRef<SwiperType>(null);

    const segmentTabs = [
        { value: 1, label: 'Overview' },
        { value: 2, label: 'Benefit' },
        { value: 3, label: 'Direction' },
        { value: 4, label: 'Storage Method' },
        { value: 5, label: 'Cautions' },
        { value: 6, label: 'Q & A' },
    ];

    // const tabIndex = segmentTabs.findIndex(tab => tab.value === productDescTabValue);

    return (
        <div className="pd-mid-sec-wrap">
            {/* navigation bar */} {/* this nav section is fixed once scroll to top */}
            <IonToolbar mode="md" className="pd-mid-nav-wrap">
                <IonSegment
                    scrollable
                    className="pd-slider-tab"
                    value={productDescTabValue}
                    onIonChange={(e) => {
                        const newValue: number = +e.detail.value!;
                        setProductDescTabValue(newValue);

                        const index = segmentTabs.findIndex(tab => tab.value === newValue);
                        swiperRef.current?.slideTo(index);
                    }}
                >
                    {
                        segmentTabs.map(tab => (
                            <IonSegmentButton key={tab.value} className="pd-tab-btn" value={tab.value}>
                                <IonLabel className="border-right">{tab.label}</IonLabel>
                            </IonSegmentButton>
                        ))
                    }

                </IonSegment>
            </IonToolbar>
            {/* content slider */}

            <div className="slider-item pd-content-slider">
                <Swiper
                    spaceBetween={0}
                    className='content-slide'
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    onSlideChange={(swiper) => {
                        const index: number = swiper.activeIndex;
                        const tab = segmentTabs[index];
                        if (tab) setProductDescTabValue(tab.value);
                    }}
                >
                    {/* overview */}
                    <SwiperSlide>
                        <div className="pd-overview">
                            <h4>Whey Protein</h4>
                            <div className="rate">
                                <span className="text">เพิ่มกล้ามเนื้อ</span>
                                <span className="fill-dot"></span>
                                <span className="fill-dot"></span>
                                <span className="empty-dot"></span>
                                <span className="empty-dot"></span>
                                <span className="empty-dot"></span>
                            </div>
                            <div className="rate">
                                <span className="text">ลดไขมัน</span>
                                <span className="fill-dot"></span>
                                <span className="fill-dot"></span>
                                <span className="empty-dot"></span>
                                <span className="empty-dot"></span>
                                <span className="empty-dot"></span>
                            </div>
                            <div className="rate">
                                <span className="text">เพิ่มน้ำหนัก</span>
                                <span className="fill-dot"></span>
                                <span className="fill-dot"></span>
                                <span className="empty-dot"></span>
                                <span className="empty-dot"></span>
                                <span className="empty-dot"></span>
                            </div>
                            <div className="rate">
                                <span className="text">ฟื้นฟูกล้ามเนื้อ</span>
                                <span className="fill-dot"></span>
                                <span className="fill-dot"></span>
                                <span className="empty-dot"></span>
                                <span className="empty-dot"></span>
                                <span className="empty-dot"></span>
                            </div>
                            <div className="rate">
                                <span className="text">ความเร็วในการดูดซึม</span>
                                <span className="fill-dot"></span>
                                <span className="fill-dot"></span>
                                <span className="empty-dot"></span>
                                <span className="empty-dot"></span>
                                <span className="empty-dot"></span>
                            </div>
                            <p>** เป็นเพียงการประเมิณเพื่อสะท้อน สรรพคุณสินค้าเท่านั้น ไม่ได้เปรียนเทียบระหว่างสินค้า</p>
                            <p><strong>BAAM!! MY WHEY </strong>เป็นเวย์ที่มีส่วนผสมของ Whey protein Concentrate เป็นหลัก (95%+)
                                ที่มีความคุ้มค่าด้านราคาสูง และสามารถให้ผลได้จริง ตอบโจทย์ได้ทุกเป้าหมาย ไม่ว่าจะเพิ่มกล้ามเนื้อ หรือลดไขมัน
                                สามารถใช้ได้ทั้งผู้ชาย และผู้หญิง BAAM!! MY WHEY จึงเหมาะสำหรับเป็นเวย์ถุงแรกของทุกคน
                            </p>
                            <ul>
                                <li>โปรตีนดูดซึมไว 25 g. / ช้อน</li>
                                <li>พลังงาน 140 Kcal. (ไขมัน 2 กรัม, คาร์โบไฮเดรท 4 กรัม)</li>
                                <li>ให้ BCAA ~5.5 g. , Glutamine ~4 g.</li>
                                <li>ช่วยซ่อมแซม ฟื้นฟู และ เสริมสร้างมวลกล้ามเนื้อ</li>
                                <li>มีส่วนช่วยลดความอยากอาหาร และของหวานได้</li>
                                <li>ไม่มีการใส่น้ำตาล (ใช้สารให้ความหวานทดแทน)</li>
                                <li>ไม่มีสารอันตราย และ สารต้องห้ามทางกีฬา</li>
                                <li>เวย์โปรตีน จาก USA นำเข้า และ ตรวจคุณภาพ โดย FITWHEY</li>
                            </ul>
                        </div>
                    </SwiperSlide>

                    {/* benefit */}
                    <SwiperSlide>
                        <div className="pd-benefit">
                            <h4>เวย์โปรตีน โปรตีน สกัดจากนมวัวธรรมชาติ</h4>
                            <p>แหล่งโปรตีนคุณภาพสูง ตัวเลือกที่ดีอันดับต้นๆ ด้วยความสะดวก และความบริสุทธิ์ของโปรตีนที่สูง ได้โปรตีนเน้นๆ
                                โดยไม่ต้องรับพลังงาน ส่วนเกินจากไขมัน หรือแป้งที่จะมาพร้อมอาหารปกติ แถมยังสามารถย่อย และดูดซึมได้ไว
                                ไม่เป็นภาระของกระเพาะอาหาร จึงเป็นอาหารเสริมตัวสำคัญสำหรับทุกเป้าหมาย ไม่ว่าจะสร้างกล้ามเนื้อ ลดไขมัน เพิ่มน้ำหนัก
                                หรือ จะทานเพื่อสุขภาพ เสริมโปรตีนให้เพียงพอ เวย์โปรตีนก็ตอบได้ทุกโจทย์
                            </p>
                            <h4>ประโยชน์ของเวย์โปรตีน</h4>
                            <h5>ซ่อมแซม และ สร้างกล้ามเนื้อ</h5>
                            <p>เวย์โปรตีน โปรตีนล้วนๆ ที่อุดมไปด้วย BCAA ที่เป็นกรดอะมิโนที่จำเป็น ที่เรียกว่าเป็นกุญแจสำคัญในการจุดชนวนการ
                                สร้างกล้ามเนื้อของร่างกาย และมีกรดอะมิโนอื่นๆ รวมกว่า 19 ชนิด ที่เป็นสารอาหารสำคัญสำหรับร่างกาย ช่วยทำให้ร่างกาย
                                ฟื้นฟูกล้ามเนื้อได้ไวขึ้น และสร้างมวลกล้ามเนื้อที่มากขึ้น
                            </p>
                            <p>(ปริมาณโปรตีนรวม (จากทุกๆแหล่ง) ที่ควรได้รับต่อวัน เพื่อการสร้างหล้ามเนื้อได้เต็มที่ แนะนำอยู่ที่ ประมาณ
                                1.5 - 2 กรัม / น้ำหนักตัว 1 กิโลกรัม ขึ้นไป)
                            </p>
                            <h5>ร่างกายสามารถนำไปใช้ได้เต็มเม็ดเต็มหน่วย</h5>
                            <p>
                                เวย์โปรตีน เป็นโปรตีนกลุ่มที่ร่างกายสามารถนำไปใช้ได้ดีที่สุด ถ้าเราลองเทียบจากค่าง่ายๆ ที่เรารู้จักกันอย่างค่า BV
                                (Biological Value)[1] อกไก่มีคะแนนอยู่ที่ 79, ไข่ไก่ ได้คะแนน 100 ส่วน เวย์โปรตีน มีคะแนนอยู่ที่ 104 หรือ ค่าที่เจาะจงขึ้น
                                อย่างค่า DIAAS (Digestible Indispensable Amino Acid Scores)[2] อกไก่มีคะแนนอยู่ที่ 1 (1.08), ไข่ไก่ ได้ 1 (1.13)
                                และ เวย์โปรตีน ได้ 1 (1.07) คะแนน จะเห็นว่า เวย์โปรตีน นั้น อยู่ในกลุ่มโปรตีนที่มีคุณภาพสูงที่สุด ไม่ต่างจาก ไก่ และไข่เลย
                            </p>
                            <ul>
                                <li>ค่า Biological Value (BV) คือ ค่าพื้นฐานเพื่อบอกคุณภาพของโปรตีน โดยเทียบระหว่าง โปรตีนที่ได้รับ กับ ที่ร่างกายนำไปใช้ได้</li>
                                <li>ค่า Digestible Indispensable Amino Acid Scores (DIASS) คือ ค่าที่ใช้บอกคุณภาพของโปรตีนที่แม่นยำขึ้น และเป็นค่าหลักที่ใช้บอกคุณภาพ
                                    โปรตีนในปัจจุบัน ที่คิดจากการดูซึมกรดอะมิโนต่างๆในลำไส้เล็ก เทียบ ปริมาณกรดอะมืโนืที่ดูดซึมได้ กับ กรดอะมิโนที่ร่างกายต้องการ</li>
                            </ul>
                            <h5>ช่วยควบคุมน้ำหนักได้</h5>
                            <p>
                                เวย์โปรตีนช่วยคุมความอยากอาหาร และของหวานได้ดี อย่างแรกเพราะรสชาติต่างๆที่ทำออกมา สามารถแทนของหวานได้
                                แต่ไม่ต้องรับ แป้ง หรือน้ำตาลส่วนเกิน เป็นแหล่งสารอาหาร และพลังงานที่มีคุณภาพกว่าของหวานมาก
                                <br></br>
                                สารอาหารประเภทโปรตีนยังทำให้ร่างกานรู้สึกอิ่มได้นานกว่าสารอาหารประเภทแป้ง ทำให้มีส่วนช่วยในการควนคุมน้ำหนักได้
                                และการทานโปรตีนที่สูง อาจส่งผลให้ร่างกายมีอัตราการเผาผลาญที่สูงขึ้น โดยเฉพาะเมื่อควบคู่กับการออกกำลังกาย
                            </p>
                            <h5>เป็นอาหารเสริมที่ไม่มีอันตราย</h5>
                            <p>
                                เวย์โปรตีนเป็นอาหารเสริมที่มีงานวิจัยรองรับมากเป็นอันดับต้นๆ และถูกใช้มากเป็นเวลาหลายสิบปี โดยที่ยังไม่พบอันตราย
                                หรือผลข้างเคียงของการทานเวย์โปรตีน สามารถใช้ได้ทุกเพศ ทุกวัย และสามารถทานเสริมกับอาหารหลักได้ โดยไม่จำกัดแค่
                                นักกีฬา หรือคนที่ออกกำลังกายเท่านั้น
                                <br></br>
                                เวย์โปรตีน จึงเป็นอาหารเสริมพื้นฐาน ที่ควรเลือกใช้ ไม่ว่าเป้าหมายของคุณจะเป็นอะไรก็ตาม
                            </p>
                        </div>
                    </SwiperSlide>
                    {/* direction */}
                    <SwiperSlide>
                        <div className="pd-direction">
                            <h4>Directions</h4>
                            <img src="assets/img/baam-directions.png" />
                        </div>
                    </SwiperSlide>
                    {/* storage */}
                    <SwiperSlide>
                        <div className="pd-storage">
                            <h4>Storage</h4>
                            <ul>
                                <li>เก็บในที่ที่แห้ง และ เย็น (ไม่เกิน 25 - 30 °C) และไม่โดนแสงแดด</li>
                                <li>เมื่อเปิดแล้ว ต้องปิดให้สนิททุกครั้ง</li>
                                <li>ล้างมือให้สะอาด และเช็ดมือให้แห้งทุกครั้ง ก่อนตักผง</li>
                                <li>หมั่นเขย่าเมื่อตั้งทิ้งไว้เป็นเวลานาน เพื่อป้องกันการแยกชั้น และลดโอกาสการจับตัวกันเป็นก้อนของผง</li>
                            </ul>
                        </div>
                    </SwiperSlide>
                    {/* cautions */}
                    <SwiperSlide>
                        <div className="pd-cautions">
                            <h4>Cautions</h4>
                            <p>Optional</p>
                        </div>
                    </SwiperSlide>
                    {/* q & a */}
                    <SwiperSlide>
                        <div className="pd-qa">
                            {/* show 4 Q & A */}
                            <h4>Q & A</h4>
                            <IonList>
                                <div className="qa-main-wrap">
                                    <div className="qa-main">
                                        <span className="q-icon">Q</span>
                                        <p className="q-title">What is the difference between whey A and whey B?</p>
                                    </div>
                                    <div className="qa-main">
                                        <span className="a-icon">A</span>
                                        <p>Lorem ipsum dolor sit met, consecterur adipiscing elit, ed Do eius mod tempor
                                            incididut ut labore te nosrud exerci Ullamcanco labori snidi ut aliquip exa
                                            ead commonde</p>
                                    </div>
                                </div>
                                <div className="qa-main-wrap">
                                    <div className="qa-main">
                                        <span className="q-icon">Q</span>
                                        <p className="q-title">What is the difference between whey A and whey B?</p>
                                    </div>
                                    <div className="qa-main">
                                        <span className="a-icon">A</span>
                                        <p>Lorem ipsum dolor sit met, consecterur adipiscing elit, ed Do eius mod tempor
                                            incididut ut labore te nosrud exerci Ullamcanco labori snidi ut aliquip exa
                                            ead commonde</p>
                                    </div>
                                </div>
                                <div className="qa-main-wrap">
                                    <div className="qa-main">
                                        <span className="q-icon">Q</span>
                                        <p className="q-title">What is the difference between whey A and whey B?</p>
                                    </div>
                                    <div className="qa-main">
                                        <span className="a-icon">A</span>
                                        <p>Lorem ipsum dolor sit met, consecterur adipiscing elit, ed Do eius mod tempor
                                            incididut ut labore te nosrud exerci Ullamcanco labori snidi ut aliquip exa
                                            ead commonde</p>
                                    </div>
                                </div>
                                <div className="qa-main-wrap">
                                    <div className="qa-main">
                                        <span className="q-icon">Q</span>
                                        <p className="q-title">What is the difference between whey A and whey B?</p>
                                    </div>
                                    <div className="qa-main">
                                        <span className="a-icon">A</span>
                                        <p>Lorem ipsum dolor sit met, consecterur adipiscing elit, ed Do eius mod tempor
                                            incididut ut labore te nosrud exerci Ullamcanco labori snidi ut aliquip exa
                                            ead commonde</p>
                                    </div>
                                </div>
                            </IonList>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default MidDetailSection