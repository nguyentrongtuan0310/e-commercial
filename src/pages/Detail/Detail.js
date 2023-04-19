import { CheckOutlined } from '@ant-design/icons';
import { Col, Layout, Row } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useRef, useState } from 'react';

import { useLocation, useParams } from 'react-router-dom';
import productApi from '../../api/ProductApi/productApi';
import HeaderApp from '../../components/HomeLayout/HeaderApp/HeaderApp';
import { countTotalItem } from '../Cart/CartSlice';
import styles from './detail.module.scss';
import FooterApp from '../../components/HomeLayout/FooterApp/FooterApp';
import Option from './Option/Option';

import Info from './Info/Info';
import { CheckIcon } from '../../components/Icon';
import useResize from '../../hooks/useResize';
import { MenuBottom } from '../../components/MenuBottom';
import { fetchPhone } from '../../features/productSlice';
import { ProductSwiper } from '../../components/ProductSwiper';

const Detail = () => {
    const [data, setData] = useState();
    const [title, setTitle] = useState('PHỤ KIỆN MUA CÙNG');
    const { id } = useParams();
    const listProduct = useSelector((state) => state.products.products);
    const item = useSelector((state) => state.cart.listCart.item);

    const toastRef = useRef();
    const dispatch = useDispatch();
    let location = useLocation();

    useEffect(() => {
        dispatch(fetchPhone());
    }, [location]);
    const list = [
        {
            id: 0,
            title: 'PHỤ KIỆN MUA CÙNG',
            link: `/${id}/accessory`,
        },
        {
            id: 1,
            title: 'SẢN PHẨM TƯƠNG TỰ',
            link: `/${id}/similar`,
        },
        {
            id: 2,
            title: 'THAM KHẢO THÊM HÀNG CŨ',
            link: `/${id}/refer`,
        },
    ];
    const handleActive = (item) => {
        setTitle(item);
    };
    const getData = async () => {
        const res = await productApi.getByIdPhone(id);
        setData(res);
    };
    useEffect(() => {
        getData();
    }, []);

    const handleAddProduct = () => {
        dispatch(countTotalItem({ count: 1, product: data }));
        if (!item.includes(data)) {
            toastRef.current.classList.add(styles.visible);
            setTimeout(() => {
                toastRef.current.classList.remove(styles.visible);
            }, 3000);
            localStorage.setItem(
                'quanity',
                JSON.stringify({
                    value: item.length + 1,
                    data: [...item, data],
                }),
            );
        }
    };
    const size = useResize();
    console.log(data);
    return (
        <div>
            <Content className={styles.wrapper}>
                <div className={styles.wrapper}>
                    {data ? <h2 className={styles.wrapper__title}>{data.name}</h2> : ''}

                    <Row gutter={[30, 12]} className={styles.contanier}>
                        <Col lg={{ span: 10 }} md={{ span: 24 }} sm={{ span: 24 }}>
                            <div className={styles.side__left}>
                                {data ? <img src={data.link} alt={data.link} className={styles.contanier__img} /> : ''}
                            </div>
                        </Col>
                        <Col lg={{ span: 14 }} md={{ span: 24 }} sm={{ span: 24 }} className={styles.side__right}>
                            <div className={styles.price}>
                                <span className={styles.price__regular}>{data && data.price}</span>
                                <span className={styles.price__old}>{data && data.priceOld}</span>
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
                            <p className={styles.selector__color}>Chọn màu để xem giá và chi nhánh có hàng</p>
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
                                        <img
                                            src="https://cdn2.cellphones.com.vn/50x,webp,q70/media/wysiwyg/add-to-cart.png"
                                            alt="cart"
                                        />
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
                            <div className={styles.promotion}>
                                <h2 className={styles.promotion__title}>ƯU ĐÃI THÊM</h2>
                                <ul className={styles.promotion__list}>
                                    <li className={styles.promotion__item}>
                                        <a>Giảm thêm tới 1% cho thành viên Smember (áp dụng tùy sản phẩm)</a>
                                    </li>
                                    <li className={styles.promotion__item}>
                                        <a>Bảo vệ sản phẩm toàn diện với dịch vụ bảo hành mở rộng</a>
                                    </li>
                                    <li className={styles.promotion__item}>
                                        <img src="assets/img/sale1.png" alt="sale1" />
                                        <a>Giảm thêm 5% tối đa 500.000đ khi thanh toán qua Kredivo</a>
                                    </li>
                                    <li className={styles.promotion__item}>
                                        <a>Mở thẻ UOB - Nhận Evoucher tới 3 triệu mua hàng tại CellphoneS </a>
                                    </li>
                                    <li className={styles.promotion__item}>
                                        <img src="assets/img/sale2.png" alt="sale2" />
                                        <a>Mở thẻ tín dụng VIB - Nhận voucher 200.000đ mua hàng tại CellphoneS</a>
                                    </li>
                                    <li className={styles.promotion__item}>
                                        <a>Thu cũ đổi mới: Giá thu cao - Thủ tục nhanh chóng - Trợ giá tốt nhất</a>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                    <div className={styles.product}>
                        <ul className={styles.product__option}>
                            {list.map((item) => (
                                <Option item={item} key={item.id} handleActive={handleActive} />
                            ))}
                        </ul>
                        <h2 className={styles.product__title}>{title}</h2>
                    </div>
                    <div className={styles.product__same}>
                        <ProductSwiper data={listProduct} />
                    </div>
                    <Info />
                </div>
                {/* Toast message */}
                <div className={styles.toast} ref={toastRef}>
                    <CheckIcon className={styles.toast__icon} />
                    <p className={styles.toast__text}>Thêm vào giỏ hàng thành công</p>
                </div>
            </Content>
        </div>
    );
};

export default Detail;
