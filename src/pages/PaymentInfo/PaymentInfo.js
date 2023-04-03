import React, { useEffect, useState } from "react";
import HomeLayout from "../../components/HomeLayout/HomeLayout";
import { Col, Form, Input, Radio, Row, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { fecthProvince, fecthWard, getListDistricts } from "./PaymentSlice";
import CartLayout from "../Cart/CartLayout.js";
import styles from "./paymentInfo.module.scss";
import { useNavigate } from "react-router-dom";
import { LeftOutlined } from "@ant-design/icons";
import {
  CartProcessIcon,
  CompleteIcon,
  CreditCardIcon,
  InfoOrderIcon,
  VoucherIcon,
} from "../../components/Icon";

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const PaymentInfo = () => {
  const [itemWard, setItemWard] = useState([]);
  const navigate = useNavigate();
  const listProvince = useSelector((state) => state.payment.listProvinces);
  const listWard = useSelector((state) => state.payment.listWard);
  const dataDistricts = useSelector(
    (state) =>
      state.payment.listDistricts.districts || [{ name: "Quận / Huyện" }]
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fecthProvince());
    dispatch(fecthWard());
  }, []);
  const handleProvinceChange = (value) => {
    dispatch(getListDistricts(value));
  };
  const handleDistrictsChange = (value) => {
    const data = listWard.filter((item) => {
      return item.district_code === value;
    });
    setItemWard(data);
  };

  return (
    <CartLayout>
      <span className={styles.title}>
        <span className={styles.title__back} onClick={() => navigate(-1)}>
          <LeftOutlined className={styles.title__icon} /> Trở về
        </span>
        <span className={styles.title__cart}>Thông tin đặt hàng</span>
      </span>

      <Row justify={"center"}>
        <Col
          span={21}
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            padding: "10px",
          }}
        >
          <div className={styles.container}>
            <div className={styles.processa}>
              <div className={styles.process__wrapper}>
                <CartProcessIcon className={styles.process__icon} />
              </div>
              <span>Chọn sản phẩm</span>
            </div>

            <div className={styles.process}>
              <div className={styles.process__wrapper}>
                <InfoOrderIcon className={styles.process__icon} />
              </div>
              <span>Thông tin đặt hàng</span>
            </div>

            <div className={styles.process}>
              <div className={styles.process__wrapper}>
                <VoucherIcon />
              </div>
              <span>Phiếu giảm giá</span>
            </div>
            <div className={styles.process}>
              <div className={styles.process__wrapper}>
                <CreditCardIcon />
              </div>
              <span>Thanh toán</span>
            </div>
            <div className={styles.process}>
              <div className={styles.process__wrapper}>
                <CompleteIcon />
              </div>
              <span>Hoàn tất đặt hàng</span>
            </div>
          </div>
          <div className={styles.wrapper__form}>
            <h2 className={styles.wrapper__form__title}>
              Thông tin khách hàng
            </h2>

            <Form
              name="basic"
              className={styles.form}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                className={styles.form__item}
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <Input
                  className={styles.form__input}
                  placeholder="Họ và tên (bắt buộc)"
                />
              </Form.Item>

              <Form.Item
                className={styles.form__item}
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input
                  className={styles.form__input}
                  type="text"
                  placeholder="Số điện thoại là bắt buộc(bắt buộc)"
                />
              </Form.Item>
              <Form.Item
                className={styles.form__item}
                rules={[
                  {
                    required: true,
                    message: "Please input your email",
                  },
                ]}
              >
                <Input
                  className={styles.form__input}
                  type="text"
                  placeholder="Email (Vui lòng điền email để nhận hóa đơn VAT)"
                />
              </Form.Item>
              <div className={styles.form__wrapper__selected}>
                <h3>Chọn cách thức giao hàng</h3>

                <Radio.Group className={styles.form__selected}>
                  <Radio value="apple" className={styles.form__selected__item}>
                    {" "}
                    Nhận tại cửa hàng{" "}
                  </Radio>
                  <Radio value="pear" className={styles.form__selected__item}>
                    {" "}
                    Giao hàng tận nơi{" "}
                  </Radio>
                </Radio.Group>
              </div>
              <div className={styles.form__selected__adress}>
                <Row style={{ width: "100%" }}>
                  <Col span={12}>
                    <Form.Item>
                      <Select
                        placeholder="Hồ Chí Minh"
                        options={listProvince.map((item) => ({
                          label: item.name,
                          value: item.code,
                        }))}
                        onChange={handleProvinceChange}
                      />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item>
                      <Select
                        placeholder={dataDistricts[0].name}
                        onChange={handleDistrictsChange}
                        options={
                          dataDistricts
                            ? dataDistricts.map((item) => ({
                                label: item.name,
                                value: item.code,
                              }))
                            : ""
                        }
                      />
                    </Form.Item>
                  </Col>

                  <Form.Item style={{ width: "100%" }}>
                    <Select
                      className={styles.form__selected__adress_item}
                      placeholder={itemWard[0]?.name}
                      onChange={handleDistrictsChange}
                      options={
                        itemWard
                          ? itemWard.map((item) => ({
                              label: item.name,
                              value: item.code,
                            }))
                          : ""
                      }
                    />
                  </Form.Item>
                </Row>
              </div>
              <Form.Item
                className={styles.form__item}
                rules={[
                  {
                    required: true,
                    message: "Please input your email",
                  },
                ]}
              >
                <Input
                  type="text"
                  placeholder="Yêu cầu khác"
                  className={styles.form__input}
                  style={{ marginTop: "12px" }}
                />
              </Form.Item>
            </Form>
          </div>
        </Col>
      </Row>
    </CartLayout>
  );
};

export default PaymentInfo;
