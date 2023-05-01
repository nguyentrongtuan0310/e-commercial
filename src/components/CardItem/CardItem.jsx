import { Card } from 'antd';
import './CardItem.scss';
import Rate from '../Rate/rate';
import { useEffect, useState } from 'react';

import { useNavigate, useParams } from 'react-router-dom';

import { HeartIcon, HeartIconActive } from '../../components/Icon';
import classNames from 'classnames';
const { Meta } = Card;
const VND = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
});
const CardItem = ({ item }) => {
    const [active, setActive] = useState(false);
    const [status, setStatus] = useState(false);
    const navigate = useNavigate();

    const handleCard = (e) => {
        if (e.target.closest('.btn-wish-list')) {
            setActive(!active);
        } else {
            navigate(item.id);
        }
    };

    return (
        <Card hoverable className="card" cover={<img alt="example" src={item.link} />} onClick={handleCard}>
            <Meta
                title={item.name}
                description={
                    <>
                        <div className="box-price">
                            <span className="box-price__new">{VND.format(item.price)} </span>
                            <span className="box-price__old">{VND.format(item.priceOld)}</span>
                        </div>
                        <p className="description">{item.description}</p>

                        <div className="product__price--percent">
                            <p className="product__price--percent-detail">Giảm {item.sale}%</p>
                        </div>
                    </>
                }
            />

            <div className="rate">
                <Rate />
            </div>

            <div
                className={classNames('btn-wish-list', {
                    active,
                })}
            >
                <span>Yêu thích </span>
                <HeartIconActive className="icon-active" />
                <HeartIcon className="icon" />
            </div>
        </Card>
    );
};

export default CardItem;
