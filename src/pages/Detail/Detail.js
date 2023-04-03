import { CheckOutlined, PlusOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Badge, Col, Layout, Row } from "antd";
import { Content } from "antd/es/layout/layout";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import productApi from "../../api/ProductApi/productApi";
import HeaderApp from "../../components/HomeLayout/HeaderApp/HeaderApp";
import { countToatalItem } from "../Cart/CartSlice";

import styles from "./detail.module.scss";
const Detail = () => {
  const [data, setData] = useState();
  const { id } = useParams();

  const getData = async () => {
    const res = await productApi.getById(id);
    setData(res);
  };
  useEffect(() => {
    getData();
  }, []);
  const dispatch = useDispatch();
  const handleAddProduct = () => {
    dispatch(countToatalItem({ count: 1, product: data}));
  };
  return (
    <div>
      <Layout>
        <HeaderApp />
        <Content className={styles.wrapper}>
          <div style={{ width: 1200, margin: "0 auto" }}>
            {data ? <h2 className={styles.wrapper__title}>{data.name}</h2> : ""}

            <Row gutter={[30, 12]} className={styles.contanier}>
              <Col span={10}>
                <div className={styles.side__left}>
                  {data ? (
                    <img
                      src={data.link}
                      alt={data.link}
                      className={styles.contanier__img}
                    />
                  ) : (
                    ""
                  )}
                </div>
              </Col>
              <Col span={14}>
                <div className={styles.price}>
                  <span className={styles.price__regular}>
                    {data && data.price}
                  </span>
                  <span className={styles.price__old}>
                    {data && data.priceOld}
                  </span>
                </div>
                <div className={styles.size}>
                  <div className={styles.size__item}>
                    <p>44mn</p>
                    <span>{data && data.price}</span>
                    <span className={styles.size__icon}>
                      <CheckOutlined />
                    </span>
                  </div>
                  <div className={styles.size__item}>
                    <p>44mn</p>
                    <span>{data && data.price}</span>
                    <span className={styles.size__icon}>
                      <CheckOutlined />
                    </span>
                  </div>
                </div>
                <p className={styles.selector__color}>
                  Chọn màu để xem giá và chi nhánh có hàng
                </p>
                <div className={styles.size}>
                  <div className={styles.size__item}>
                    <p>Trắng</p>
                    <span>{data && data.price}</span>
                    <span className={styles.size__icon}>
                      <CheckOutlined />
                    </span>
                  </div>
                  <div className={styles.size__item}>
                    <p>Đen</p>
                    <span>{data && data.price}</span>
                    <span className={styles.size__icon}>
                      <CheckOutlined />
                    </span>
                  </div>
                  <div className={styles.size__item}>
                    <p>Bạc</p>
                    <span>{data && data.price}</span>
                    <span className={styles.size__icon}>
                      <CheckOutlined />
                    </span>
                  </div>
                </div>
                <div className={styles.box}>
                  <div className={styles.box__order}>
                    <button className={styles.box__order__btn}>
                      <h3 className={styles.box__order__title}>MUA NGAY</h3>
                      <p className={styles.box__order__des}>
                        (Giao hàng nhanh từ 2 giờ hoặc nhận tại cửa hàng )
                      </p>
                    </button>
                    <div className={styles.box__order__icon} onClick={handleAddProduct}>
                      <img  src='https://cdn2.cellphones.com.vn/50x,webp,q70/media/wysiwyg/add-to-cart.png' alt="cart" />
                        <span>Thêm vào giỏ </span>
                    </div>
                  </div>
                </div>
                <div className={styles.installment}>
                      <button className={styles.installment__button}>
                          <strong>Trả góp 0%</strong>
                          <span>(Xét duyệt qua điện thoại)</span>
                      </button>
                      <button className={styles.installment__button}>
                          <strong>Trả Góp Qua Thẻ</strong>
                          <span>(Visa,Mastercard, JCB)</span>
                      </button>
                   
                </div>
              </Col>
            </Row>
          </div>
        </Content>
      </Layout>
    </div>
  );
};

export default Detail;
