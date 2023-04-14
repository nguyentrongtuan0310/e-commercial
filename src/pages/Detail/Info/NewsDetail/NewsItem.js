import { Col } from 'antd'
import React from 'react'
import styles from './NewsDetail.module.scss'
const NewsItem = ({img,title}) => {
  return (
    <>
        <Col span={8} className={styles.news__list__img}>
        <img src={img} alt='new1'/>
        </Col>
        <Col span={16} className={styles.news__info}>
        <p>{title}</p>
        </Col>
    </>
  )
}

export default NewsItem