    import React from 'react'
    import classNames from 'classnames'
    import styles from './ParamList.module.scss'
import { Col, Row } from 'antd'
import { DownOutlined } from '@ant-design/icons'
    const ParamList = () => {
      return (
      <div>
         <ul className={styles.param}>
              <Row gutter={12} className={classNames(styles.param__item,{
                [styles.active]: true
              })}>
                <Col span={10}>
                 <p className={styles.param__item__name}>Kích thước màn hình</p>
  
                </Col>
                <Col span={14}>
                   <div className={styles.param__item__info}>6.7 inches</div>
                </Col>
              </Row>
              <Row gutter={12} className={classNames(styles.param__item,{
                [styles.active]: false
              })}>
                <Col span={10}>
                 <p className={styles.param__item__name}>Công nghệ màn hình</p>
  
                </Col>
                <Col span={14}>
                   <div className={styles.param__item__info}>Super Retina XDR OLED</div>
                </Col>
              </Row>
              <Row gutter={12} className={classNames(styles.param__item,{
                [styles.active]: true
              })}>
                <Col span={10}>
                 <p className={styles.param__item__name}> Camera sau</p>
  
                </Col>
                <Col span={14}>
                   <div className={styles.param__item__info}>Camera chính: 48 MP, f/1.8, 24mm, 1.22µm, PDAF, OIS Camera góc siêu rộng: 12 MP, f/2.2, 13mm, 120˚, 1.4µm, PDAF Camera tele: 12 MP, f/2.8, 77mm (telephoto), PDAF, OIS, 3x optical zoom   Cảm biến độ sâu TOF 3D LiDAR </div>
                </Col>
              </Row>
              <Row gutter={12} className={classNames(styles.param__item,{
                [styles.active]: false
              })}>
                <Col span={10}>
                 <p className={styles.param__item__name}>Camera trước</p>
  
                </Col>
                <Col span={14}>
                   <div className={styles.param__item__info}>Camera selfie: 12 MP, f/1.9, 23mm, 1/3.6", PDAF </div>
                </Col>
              </Row>
              <Row gutter={12} className={classNames(styles.param__item,{
                [styles.active]: true
              })}>
                <Col span={10}>
                 <p className={styles.param__item__name}>Chipset</p>
  
                </Col>
                <Col span={14}>
                   <div className={styles.param__item__info}>Apple A16 Bionic 6-core</div>
                </Col>
              </Row>
              <Row gutter={12} className={classNames(styles.param__item,{
                [styles.active]: false
              })}>
                <Col span={10}>
                 <p className={styles.param__item__name}>Dung lượng RAM</p>
  
                </Col>
                <Col span={14}>
                   <div className={styles.param__item__info}>6 GB</div>
                </Col>
              </Row>
              <Row gutter={12} className={classNames(styles.param__item,{
                [styles.active]: true
              })}>
                <Col span={10}>
                 <p className={styles.param__item__name}>Bộ nhớ trong</p>
  
                </Col>
                <Col span={14}>
                   <div className={styles.param__item__info}>128 GB</div>
                </Col>
              </Row>
              <Row gutter={12} className={classNames(styles.param__item,{
                [styles.active]: false
              })}>
                <Col span={10}>
                 <p className={styles.param__item__name}>Pin</p>
  
                </Col>
                <Col span={14}>
                   <div className={styles.param__item__info}>4.352 mAh</div>
                </Col>
              </Row>
              <Row gutter={12} className={classNames(styles.param__item,{
                [styles.active]: true
              })}>
                <Col span={10}>
                 <p className={styles.param__item__name}>Thẻ SIM</p>
  
                </Col>
                <Col span={14}>
                   <div className={styles.param__item__info}>2 SIM (nano-SIM và eSIM)</div>
                </Col>
              </Row>
              <Row gutter={12} className={classNames(styles.param__item,{
                [styles.active]: false
              })}>
                <Col span={10}>
                 <p className={styles.param__item__name}>Hệ điều hành</p>
  
                </Col>
                <Col span={14}>
                   <div className={styles.param__item__info}>iOS 16</div>
                </Col>
              </Row>
              <Row gutter={12} className={classNames(styles.param__item,{
                [styles.active]: true
              })}>
                <Col span={10}>
                 <p className={styles.param__item__name}>Tính năng màn hình</p>
  
                </Col>
                <Col span={14}>
                   <div className={styles.param__item__info}>ProMotion 120Hz</div>
                </Col>
              </Row>
             
         </ul>
          <button className={styles.param__btn}>
          Xem cấu hình chi tiết
          <DownOutlined className={styles.param__icon}/>
        </button>
      </div>
      )
    }
    
    export default ParamList