import { Col, Row } from "antd";
import { Footer } from "antd/es/layout/layout";
import React from "react";
import styles from "./FooterApp.module.scss";
import pay1 from "../../../img/pay1.png";
import pay2 from "../../../img/pay2.png";
import pay3 from "../../../img/pay3.png";
import pay4 from "../../../img/pay4.png";
import pay5 from "../../../img/pay5.png";
import pay6 from "../../../img/pay6.png";
import pay7 from "../../../img/pay7.png";
import youtube from "../../../img/youtube.png";
import zalo from "../../../img/zalo.png";
import fb from "../../../img/fb.png";
import tiktok from "../../../img/tiktok.png";
import istagram from "../../../img/istagram.png";
import dt from "../../../img/dt.png";
import dt1 from "../../../img/dt1.png";
import schanel from "../../../img/schanel.png";
import sforum from "../../../img/sforum.png";
import sale from "../../../img/sale.png";
import dmca from "../../../img/dmca.png";

const FooterApp = () => {
  return (
    <Footer className={styles.footer}>
      <Row gutter={12} className={styles.footer__container}>
        <Col span={6} className={styles.footer__content}>
          <div className={styles.box__suppost}>
            <p className={styles.title}>Tổng đài hỗ trợ miễn phí</p>
            <ul className={styles.title__list}>
              <li>
                Gọi mua hàng <strong>1800.2097 </strong>(7h30 - 22h00)
              </li>
              <li>
                Gọi khiếu nại <strong>1800.2063</strong> (8h00 - 21h30)
              </li>
              <li>
                Gọi bảo hành <strong>1800.2064</strong> (8h00 - 21h00)
              </li>
            </ul>
          </div>
          <div className={styles.box__payment}>
            <p className={styles.title}>Phương thức thanh toán</p>
            <ul className={styles.title__list}>
              <li>
                <a href="">
                  <img src={pay1} alt="123" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src={pay2} alt="123" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src={pay3} alt="123" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src={pay4} alt="123" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src={pay5} alt="123" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src={pay6} alt="123" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src={pay7} alt="123" />
                </a>
              </li>
            </ul>
          </div>
        </Col>
        <Col span={6} className={styles.info}>
          <p className={styles.title}>Thông tin mua và chính sách</p>
          <ul>
            <li>
              <a href="">Mua hàng và thanh toán Online</a>
            </li>
            <li>
              {" "}
              <a href="">Mua hàng trả góp Online</a>
            </li>
            <li>
              <a href="">Tra thông tin đơn hàng</a>
            </li>
            <li>
              <a href="">Tra điểm Smember</a>
            </li>
            <li>
              {" "}
              <a href="">Xem ưu đãi Smember</a>
            </li>
            <li>
              <a href="">Tra thông tin bảo hành</a>
            </li>
            <li>
              <a href="">Tra cứu hoá đơn điện tử</a>
            </li>
            <li>
              <a href="">Trung tâm bảo hành chính hãng</a>
            </li>
            <li>
              <a href="">Quy định về việc sao lưu dữ liệu</a>
            </li>
            <li>
              <a href="">Dịch vụ bảo hành điện thoại</a>
            </li>
            <li>
              <a href="">Dịch vụ bảo hành mở rộng</a>
            </li>
          </ul>
        </Col>
        <Col span={6} className={styles.info}>
          <p className={styles.title}>Dịch vụ và thông tin khác</p>
          <ul>
            <li>
              <a href="">Khách hàng doanh nghiệp (B2B)</a>
            </li>
            <li>
              {" "}
              <a href="">Ưu đãi thanh toán</a>
            </li>
            <li>
              <a href="">Quy chế hoạt động</a>
            </li>
            <li>
              <a href="">Chính sách Bảo hành</a>
            </li>
            <li>
              {" "}
              <a href="">Xem ưu đãi Smember</a>
            </li>
            <li>
              <a href="">Liên hệ hợp tác kinh doanh </a>
            </li>
            <li>
              <a href="">Tuyển dụng</a>
            </li>
          </ul>
        </Col>
        <Col span={6} className={styles.connect}>
          <p className={styles.title}>Kết nối với CellphoneS</p>
          <div className={styles.connect__social}>
            <a href="" className={styles.connect__social__logo}>
              <img src={youtube} alt="youtube" />
            </a>
            <a href="" className={styles.connect__social__logo}>
              <img src={fb} alt="youtube" />
            </a>
            <a href="" className={styles.connect__social__logo}>
              <img src={istagram} alt="youtube" />
            </a>
            <a href="" className={styles.connect__social__logo}>
              <img src={tiktok} alt="youtube" />
            </a>
            <a href="" className={styles.connect__social__logo}>
              <img src={zalo} alt="youtube" />
            </a>
          </div>
          <p className={styles.connect__title}>Website thành viên</p>
          <div className={styles.connect__support}>
            <p>Hệ thống bảo hành sửa chữa Điện thoại - Máy tính</p>

            <img src={dt} className={styles.connect__support__logo} alt="dt" />

            <p>Trung tâm bảo hành uỷ quyền Apple</p>
            <img
              src={dt1}
              className={styles.connect__support__logo}
              alt="youtube"
            />
            <p>Kênh thông tin giải trí công nghệ cho giới trẻ</p>
            <img
              src={schanel}
              className={styles.connect__support__logo}
              alt="youtube"
            />
            <p>Trang thông tin công nghệ mới nhất</p>
            <img
              src={sforum}
              className={styles.connect__support__logo}
              alt="youtube"
            />
          </div>
        </Col>
      </Row>
      <div className={styles.footer__bottom}>
        <Row className={styles.footer__container}>
          <Col span={6}>
            <p className={styles.footer__container__text}>Điện thoại - Điện thoại iPhone - Điện thoại iPhone 14</p>
            <p className={styles.footer__container__text}>iPhone 14 Pro 128GB – iPhone 14 Pro Max 128GB</p>
            <p className={styles.footer__container__text}>Điện thoại iPhone 12 – Điện thoại iPhone 13</p>
          </Col>
          <Col span={6}>
            <p className={styles.footer__container__text}>Điện thoại Vivo – Điện thoại OPPO – Điện thoại Samsung</p>
            <p className={styles.footer__container__text}>Samsung S22 – Điện thoại Samsung S23 Ultra</p>
            <p className={styles.footer__container__text}>Samsung A13 – Samsung A23 5G – Samsung A33</p>
          </Col>
          <Col span={6}>
            <p className={styles.footer__container__text}>Máy tính Laptop – Tivi – Tivi Samsung</p>
            <p className={styles.footer__container__text}>Laptop cũ giá rẻ – Laptop Acer – Laptop ASUS</p>
            <p className={styles.footer__container__text}>Máy tính để bàn – Màn hình máy tính</p>
          </Col>
          <Col span={6}>
            <p className={styles.footer__container__text}>Robot hút bụi – Máy lọc không khí</p>
            <p className={styles.footer__container__text}>Robot hút bụi Xiaomi – Robot hút bụi Ecovas</p>
            <p className={styles.footer__container__text}>Máy hút bụi – Máy hút bụi cầm tay – Camera</p>
          </Col>
        </Row>
        <div className={styles.footer__bottom__box}>
          {" "}
          <p>
            Công ty TNHH Thương Mại và Dịch Vụ Kỹ Thuật DIỆU PHÚC - GPĐKKD:
            0316172372 cấp tại Sở KH & ĐT TP. HCM. Địa chỉ văn phòng: 350-352 Võ
            Văn Kiệt, Phường Cô Giang, Quận 1, Thành phố Hồ Chí Minh, Việt Nam.
            Điện thoại: 028.7108.9666
          </p>
          <div className={styles.footer__bottom__box__logo}>
          <div className={styles.footer__bottom__box__sale}>
                <img src={sale} alt="" />
            </div>
            <div className={styles.footer__bottom__box__dmca}>
              <img src={dmca} alt="" />
            </div>
          
          </div>
           
        </div>
      </div>
    </Footer>
  );
};

export default FooterApp;
