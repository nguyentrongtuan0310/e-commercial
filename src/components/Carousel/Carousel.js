import './Carousel..scss';

import { Col, Row } from 'antd';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination, Autoplay } from 'swiper';
import { RightOutlined } from '@ant-design/icons';
import { LeftOutlined } from '@ant-design/icons/lib/icons';
import { useRef } from 'react';
import useResize from '../../hooks/useResize';

const CarouselApp = () => {
    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);
    const size = useResize();
    return (
        <Row className="carousel" gutter={4}>
            <Col style={{ width: '100%', height: '100%' }} xs={{ span: 24 }} md={{ span: 24 }} lg={{ span: 14 }}>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={0}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={{
                        prevEl: navigationPrevRef.current,
                        nextEl: navigationNextRef.current,
                        clickable: true,
                    }}
                    grabCursor={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    modules={[Pagination, Navigation, Autoplay]}
                    className="swpier__carosel"
                >
                    <SwiperSlide>
                        <img style={{ width: '100%' }} src="assets/img/banner1.png" alt="banner1" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img style={{ width: '100%' }} src="assets/img/banner2.png" alt="banner1" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img style={{ width: '100%' }} src="assets/img/banner3.png" alt="banner1" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img style={{ width: '100%' }} src="assets/img/banner4.png" alt="banner1" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img style={{ width: '100%' }} src="assets/img/banner5.png" alt="banner1" />
                    </SwiperSlide>
                    <div className="slider-controler">
                        <div className="swiper-button-prev slider-arrow" ref={navigationPrevRef}>
                            <LeftOutlined name="arrow-back-ouline" className="icon" />
                        </div>
                        <div className="swiper-button-next slider-arrow" ref={navigationNextRef}>
                            <RightOutlined name="arrow-forward-ouline" className="icon" />
                        </div>
                    </div>
                </Swiper>
            </Col>
            {size.width > 992 && (
                <Col span={10} className="carousel__right">
                    <div>
                        <img className="carousel__right__img" src="assets/img/bannerRight.png" alt="bannerRight" />
                    </div>
                    <div>
                        <img className="carousel__right__img" src="assets/img/bannerRight2.png" alt="bannerRight2" />
                    </div>
                </Col>
            )}
        </Row>
    );
};
export default CarouselApp;
