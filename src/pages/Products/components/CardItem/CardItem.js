import { Card, Button } from "antd";
import "./CardItem.scss";
import Rate from "../Rate/rate";
import {  useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import {  HeartIcon, HeartIconActive } from "../../../../components/Icon";
import classNames from "classnames";
const { Meta } = Card;

const CardItem = ({ item }) => {
  const [active,setActive] = useState(false)
 
const handleActive = (e) => {
 setActive(!active)
 console.log(e.target);
}

const handleCard = (e) => {

  if(e.target.closest('.btn-wish-list')){
    console.log(123);
  }
}
  return (
      <Card
        hoverable
        className="card"
        cover={<img alt="example" src={item.link} />}
        onClick={handleCard}
      >
       {/* <Link Link to={item.id}> */}
     
        
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
                    <p className="product__price--percent-detail">Giảm 13%</p>
                  </div>
                </>
              }
            />
          
            <div className="rate">
              <Rate />
            </div>
            {/* </Link> */}
          <div className={classNames('btn-wish-list',{
            active
          })} onClick={handleActive}>
                <span>Yêu thích  </span>
                  <HeartIconActive  className="icon-active"/>
                  <HeartIcon className="icon" />
             
                  
               
          </div>

      </Card>
   
  );
};

export default CardItem;
