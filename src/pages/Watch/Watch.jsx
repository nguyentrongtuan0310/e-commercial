import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row, Tag } from 'antd';

import { fetchTablet } from '../../features/productSlice';
import { CardItem } from '../../components/CardItem';
import SpinIcon from '../../components/Spin/SpinIcon';
import { Category } from '../../components/Category';
import styles from './Watch.module.scss';
import { News } from '../../components/News';
import { UpOutlined } from '@ant-design/icons';
import { listCategory, listCategory2, listCategory3, listCategory4, listCategory5, newsList } from './data';
import { Carousel } from '../../components/Carousel';
import useResize from '../../hooks/useResize';
import SaleProduct from '../../components/SaleProduct/SaleProduct';
import { Drawer } from '../../components/Drawer';
const Watch = () => {
    const [show, setShow] = useState(false);
    const listProduct = useSelector((state) => state.products.products);
    const loadingStatus = useSelector((state) => state.products.isLoading);
    const tagList = ['Apple', 'Samsung', 'Xiaomi', 'OPPO', 'VIVO', 'Realme', 'Nokia', 'ASUS', 'Tecno', 'Xem tất cả'];
    const size = useResize();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchTablet());
    }, []);
    useEffect(() => {
        const handleScroll = () => {
            if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
                setShow(true);
            } else {
                setShow(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        //  return () => window.removeEventListener(handleScroll)
    }, []);
    console.log(listProduct);
    return (
        <>
            <Drawer />
            <div className={styles.content}>
                <Carousel />
                <SaleProduct />
                <div className={styles.content__tag}>
                    <div className={styles.content__tag__title}>
                        <h2>SẢN PHẨM NỔI BẬT</h2>
                        {size.width < 567 && <p className={styles.content__tag__title__text}>Xem tất cả</p>}
                    </div>
                    <div className={styles.content__tag__list}>
                        {tagList.map((item, i) => (
                            <Tag className={styles.content__tag__item} key={i}>
                                {item}
                            </Tag>
                        ))}
                    </div>
                </div>
            </div>
            <Row gutter={[12, 12]} style={{ marginBottom: '20px' }}>
                {loadingStatus ? (
                    <SpinIcon />
                ) : (
                    listProduct.map((item) => {
                        return (
                            <Col
                                style={{ width: '20%' }}
                                lg={{ span: 6 }}
                                md={{ span: 8 }}
                                sm={{ span: 12 }}
                                xs={{ span: 12 }}
                                key={item.id}
                            >
                                <CardItem item={item} title={item.name} />
                            </Col>
                        );
                    })
                )}
            </Row>
            <div className={styles.category}>
                <h2 className={styles.category__title}>PHỤ KIỆN</h2>
                <Row gutter={[12, 12]}>
                    {listCategory.map((item, i) => (
                        <Col
                            style={{ width: '10%' }}
                            lg={{ span: 3 }}
                            md={{ span: 4 }}
                            sm={{ span: 6 }}
                            xs={{ span: 8 }}
                            key={i}
                        >
                            <Category img={item.img} title={item.name} backgroundColor="rgb(242, 131, 118)" />
                        </Col>
                    ))}
                </Row>
            </div>
            <div className={styles.category}>
                <h2 className={styles.category__title}>LINK KIỆN MÁY TÍNH</h2>
                <Row gutter={[12, 12]}>
                    {listCategory2.map((item, i) => (
                        <Col lg={{ span: 3 }} md={{ span: 4 }} sm={{ span: 6 }} xs={{ span: 8 }} key={i}>
                            <Category img={item.img} title={item.name} backgroundColor={item.backgroundColor} />
                        </Col>
                    ))}
                </Row>
            </div>
            <div className={styles.category}>
                <h2 className={styles.category__title}>HÀNG CŨ</h2>
                <Row gutter={[12, 12]}>
                    {listCategory3.map((item, i) => (
                        <Col lg={{ span: 3 }} md={{ span: 4 }} sm={{ span: 6 }} xs={{ span: 8 }} key={i}>
                            <Category img={item.img} title={item.name} backgroundColor="rgb(214, 64, 68)" />
                        </Col>
                    ))}
                </Row>
            </div>
            <div className={styles.category}>
                <h2 className={styles.category__title}>ƯU ĐÃI THANH TOÁN</h2>
                <Row gutter={[15, 12]}>
                    {listCategory4.map((item, i) => (
                        <Col lg={{ span: 6 }} md={{ span: 10 }} sm={{ span: 12 }} xs={{ span: 24 }} key={i}>
                            <Category img={item.img} />
                        </Col>
                    ))}
                </Row>
            </div>
            <div className={styles.category}>
                <h2 className={styles.category__title}>CHUYÊN TRANG THƯƠNG HIỆU</h2>
                <Row gutter={[15, 12]}>
                    {listCategory5.map((item, i) => (
                        <Col lg={{ span: 6 }} md={{ span: 12 }} sm={{ span: 12 }} xs={{ span: 24 }} key={i}>
                            <Category img={item.img} />
                        </Col>
                    ))}
                </Row>
            </div>
            <div className={styles.news}>
                <h2 className={styles.category__title}>TIN TỨC CÔNG NGHỆ</h2>
                <Row gutter={10}>
                    {newsList.map((item, i) => (
                        <Col lg={{ span: 6 }} md={{ span: 12 }} sm={{ span: 12 }} xs={{ span: 24 }} key={i}>
                            <News img={item.img} title={item.name} />
                        </Col>
                    ))}
                </Row>
            </div>
            {show && (
                <button className={styles.back__to__top} onClick={() => window.scrollTo(0, 0)}>
                    <UpOutlined className={styles.back__to__top__icon} />
                    <strong>Lên đầu</strong>
                </button>
            )}
        </>
    );
};

export default Watch;
