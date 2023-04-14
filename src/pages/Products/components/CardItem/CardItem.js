import { Card } from "antd";
import "./CardItem.scss";
import Rate from "../Rate/rate";
import { useState } from "react";

import {  useNavigate } from "react-router-dom";

import { HeartIcon, HeartIconActive } from "../../../../components/Icon";
import classNames from "classnames";
const { Meta } = Card;

const CardItem = ({ item }) => {
  const [active, setActive] = useState(false);
  const navigate = useNavigate();

  const handleCard = (e) => {
    if (e.target.closest(".btn-wish-list")) {
      setActive(!active);
    } else {
      navigate(`/${item.id}/accessory`);
    }
  };
  return (
    <Card
      hoverable
      className="card"
      cover={<img alt="example" src={item.link} />}
      onClick={handleCard}
    >
      <Meta
        title={item.name}
        description={
          <>
            <div className="box-price">
              <span className="box-price__new">{item.price} ₫</span>
              <span className="box-price__old">{item.priceOld} ₫</span>
            </div>
            <p className="description">{item.description}</p>

            <div className="product__price--percent">
              <p className="product__price--percent-detail">Giảm {item.id}%</p>
            </div>
          </>
        }
      />

      <div className="rate">
        <Rate />
      </div>

      <div
        className={classNames("btn-wish-list", {
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
