import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import HomeLayout from "../../components/HomeLayout/HomeLayout";
import SpinIcon from "../../components/Spin/SpinIcon";
import { fetchProduct } from "./components/productSlice";
import {CardItem} from "../Products/components/CardItem";
import { Col, Row } from "antd";
import {  useLocation } from "react-router-dom";
import Category from "./components/Category/Category";
import styles from './Product.module.scss'
import News from "./components/News/News";
import {UpOutlined} from '@ant-design/icons'
import {listCategory,listCategory2,listCategory3,listCategory4,listCategory5,newsList} from './data'
const Product = () => {
  const [show,setShow] = useState(false)
  const listProduct = useSelector((state) => state.products.products);
  const loadingStatus = useSelector((state) => state.products.isLoading);
  let location = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProduct());
  }, []);
  useEffect(() => {
    const handleScroll = () => {
       if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
          setShow(true)
       }else{
        setShow(false)
       }
    }
   window.addEventListener('scroll',handleScroll)
  //  return () => window.removeEventListener(handleScroll)
  },[])

  return (

    
      <HomeLayout >
 

        <Row gutter={[12, 12]} style={{marginBottom: '20px'}}>
 
        {loadingStatus ? (
          <SpinIcon />
        ) : (
          listProduct.map((item) => {
            return (
                
                <Col style={{width: '20%'}} 
                  lg={{span: 6}}
                  md={{span: 8}}
                  sm={{span : 12}}
                   xs={{span: 12}}

                
                key={item.id}>
                    <CardItem item={item} title={item.name}/>
                </Col>
             
            );
          })
        )}

        </Row>
        <div className={styles.category}>
          <h2 className={styles.category__title}>PHỤ KIỆN</h2>
          <Row gutter={[12, 12]}>
          
            {listCategory.map((item,i) => (
              <Col style={{width:'10%'}}
              lg={{span: 3}}
              md={{span: 4}}
              sm={{span : 6}}
              xs={{span: 8}}
              key={i}>
  
                  <Category img={item.img} title={item.name} backgroundColor='rgb(242, 131, 118)'/>
  
              </Col>
  
            ))}
          </Row>
        </div>
        <div className={styles.category}>
          <h2 className={styles.category__title}>LINK KIỆN MÁY TÍNH</h2>
          <Row gutter={[12, 12]}>
          
            {listCategory2.map((item,i) => (
              <Col    lg={{span: 3}}
              md={{span: 4}}
              sm={{span : 6}}  xs={{span: 8}} key={i}>
  
                  <Category img={item.img} title={item.name} backgroundColor={item.backgroundColor}/>
  
              </Col>
  
            ))}
          </Row>
        </div>
        <div className={styles.category}>
          <h2 className={styles.category__title}>HÀNG CŨ</h2>
          <Row gutter={[12, 12]}>
          
            {listCategory3.map((item,i) => (
              <Col    lg={{span: 3}}
              md={{span: 4}}
              sm={{span : 6}}
              xs={{span: 8}}
               key={i}>
  
                  <Category img={item.img} title={item.name} backgroundColor='rgb(214, 64, 68)'/>
  
              </Col>
  
            ))}
          </Row>
        </div>
        <div className={styles.category}>
          <h2 className={styles.category__title}>ƯU ĐÃI THANH TOÁN</h2>
          <Row gutter={[15, 12]}>
          
            {listCategory4.map((item,i) => (
              <Col    lg={{span: 6}}
              md={{span: 10}}
              sm={{span : 12}}  xs={{span: 24}} key={i}>
  
                  <Category img={item.img} />
  
              </Col>
  
            ))}
          </Row>
        </div>
        <div className={styles.category}>
          <h2 className={styles.category__title}>CHUYÊN TRANG THƯƠNG HIỆU</h2>
          <Row gutter={[15, 12]}>
          
            {listCategory5.map((item,i) => (
              <Col lg={{span: 6}}
              md={{span: 12}}
              sm={{span : 12}}
              xs={{span: 24}}
               key={i}>
  
                  <Category img={item.img} />
  
              </Col>
  
            ))}
          </Row>
        </div>
        <div className={styles.news}>
            <h2 className={styles.category__title}>TIN TỨC CÔNG NGHỆ</h2>
                <Row gutter={10}>
                  {newsList.map((item,i) => (
                  <Col lg={{span: 6}}
                  md={{span: 12}}
                  sm={{span : 12}}
                  xs={{span: 24}}  key={i}>
                      <News img={item.img} title={item.name}/> 
                  </Col>

                  ))}
              
                  
                </Row>
        </div>
           {show&& (
                  <button className={styles.back__to__top} onClick={() => window.scrollTo(0,0)}>
                  <UpOutlined className={styles.back__to__top__icon}/>
                      <strong>Lên đầu</strong>
                  </button>

            )}
          
      </HomeLayout>
    
  );
};

export default Product;
