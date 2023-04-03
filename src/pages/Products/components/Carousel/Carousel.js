import "./Carousel..scss";
import banner1 from "../../../../img/banner1.png";
import banner2 from "../../../../img/banner2.png";
import banner3 from "../../../../img/banner3.png";
import banner4 from "../../../../img/banner4.png";
import banner5 from "../../../../img/banner5.png";
import bannerRight from "../../../../img/bannerRight.png";
import bannerRight2 from "../../../../img/bannerRight2.png";
import { Col, Row } from "antd";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination, Autoplay } from "swiper";
import { RightOutlined } from "@ant-design/icons";
import { LeftOutlined } from "@ant-design/icons/lib/icons";
import { useRef } from "react";

const CarouselApp = () =>{
  const navigationPrevRef = useRef(null)
  const navigationNextRef = useRef(null)
  return  (
  
    <Row className="carousel" gutter={4}>
      <Col span={14} style={{ width: "100%", height: "100%" }}>
        <Swiper
          slidesPerView={1}
          spaceBetween={4}
          loop={true}
          pagination={{
            
            clickable: true,
          }}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
            clickable: true
           }}
          grabCursor={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
       
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img style={{ width: "100%" }} src={banner1} alt="banner1" />
          </SwiperSlide>
          <SwiperSlide>
            <img style={{ width: "100%" }} src={banner2} alt="banner1" />
          </SwiperSlide>
          <SwiperSlide>
            <img style={{ width: "100%" }} src={banner3} alt="banner1" />
          </SwiperSlide>
          <SwiperSlide>
            <img style={{ width: "100%" }} src={banner4} alt="banner1" />
          </SwiperSlide>
          <SwiperSlide>
            <img style={{ width: "100%" }} src={banner5} alt="banner1" />
          </SwiperSlide>
          <div className="slider-controler" >
            <div className="swiper-button-prev slider-arrow" ref={navigationPrevRef}>
              <LeftOutlined name="arrow-back-ouline" className="icon"/>
  
            </div>
            <div className="swiper-button-next slider-arrow" ref={navigationNextRef}>
            <RightOutlined name="arrow-forward-ouline"  className="icon"/>
  
            </div>
          </div>
        </Swiper>
      </Col>
  
      <Col span={10} className="carousel__right">
        <div>
          <img
            className="carousel__right__img"
            src={bannerRight}
            alt="bannerRight"
          />
        </div>
        <div>
          <img
            className="carousel__right__img"
            src={bannerRight2}
            alt="bannerRight2"
          />
        </div>
      </Col>
    </Row>
  );
}
export default CarouselApp;
