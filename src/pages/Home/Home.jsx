import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row } from 'antd';

import { Category } from '../../components/Category';
import styles from './Home.module.scss';
import { News } from '../../components/News';
import { UpOutlined } from '@ant-design/icons';
import { listCategory, listCategory2, listCategory3, listCategory4, listCategory5, listTag, newsList } from './data';
import { Carousel } from '../../components/Carousel';
import useResize from '../../hooks/useResize';
import SaleProduct from '../../components/SaleProduct/SaleProduct';

import { fetchAll } from '../../features/productSlice';
import PhoneItem from './ProductItem/PhoneItem';
import LaptopItem from './ProductItem/LaptopItem';
import TabletItem from './ProductItem/TabletItem';
import SoundItem from './ProductItem/SoundItem';
import WatchItem from './ProductItem/WatchItem';
import BackToTop from '../../components/BackToTop/BackToTop';
import MenuBottom from '../../components/MenuBottom/MenuBottom';
const Home = () => {
    const size = useResize();
    const listProduct = useSelector((state) => state.products.all);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAll());
    }, []);

    return (
        <>
            {size.width < 1023 ? <MenuBottom /> : null}
            <div className={styles.content}>
                <Carousel />
                <SaleProduct />

                <PhoneItem data={listTag[0]} listProduct={listProduct.phone || []} />
                <LaptopItem data={listTag[1]} listProduct={listProduct.laptop || []} />
                <TabletItem data={listTag[2]} listProduct={listProduct.tablet || []} />
                <SoundItem data={listTag[3]} listProduct={listProduct.sound || []} />
                <WatchItem data={listTag[4]} listProduct={listProduct.watch || []} />
            </div>

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

            <BackToTop />
        </>
    );
};

export default Home;
