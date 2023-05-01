import React, { useEffect } from 'react';
import styles from '../Home.module.scss';
import useResize from '../../../hooks/useResize';
import { Col, Row, Tag } from 'antd';
import SpinIcon from '../../../components/Spin/SpinIcon';
import { useDispatch, useSelector } from 'react-redux';
import { CardItem } from '../../../components/CardItem';
import { fetchWatch } from '../../../features/productSlice';
const WatchItem = ({ data, listProduct }) => {
    const loadingStatus = useSelector((state) => state.products.isLoading);
    const dispatch = useDispatch();
    const size = useResize();
    useEffect(() => {
        dispatch(fetchWatch());
    }, []);

    return (
        <div className={styles.product}>
            <div className={styles.content__tag}>
                <div className={styles.content__tag__title}>
                    <h2>{data.title}</h2>
                    {size.width < 567 && <p className={styles.content__tag__title__text}>Xem tất cả</p>}
                </div>
                <div className={styles.content__tag__list}>
                    {data.tagList.map((item, i) => (
                        <Tag className={styles.content__tag__item} key={i}>
                            {item}
                        </Tag>
                    ))}
                </div>
            </div>
            <Row gutter={[12, 12]} style={{ marginBottom: '20px' }}>
                {loadingStatus ? (
                    <SpinIcon />
                ) : (
                    listProduct.map((item, i) => {
                        return (
                            <Col
                                style={{ width: '20%' }}
                                lg={{ span: 6 }}
                                md={{ span: 8 }}
                                sm={{ span: 12 }}
                                xs={{ span: 24 }}
                                key={i}
                            >
                                <CardItem item={item} title={item.name} />
                            </Col>
                        );
                    })
                )}
            </Row>
        </div>
    );
};

export default WatchItem;
