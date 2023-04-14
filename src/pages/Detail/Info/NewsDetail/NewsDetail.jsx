import React from 'react'
import { Col, Row } from 'antd'
import styles from './NewsDetail.module.scss'
import { NewsIcon } from '../../../../components/Icon'
import NewsItem from './NewsItem'
import new1 from '../../../../img/new1.png'
import new2 from '../../../../img/new2.png'
import new3 from '../../../../img/new3.jpeg'
import new4 from '../../../../img/new4.png'
import new5 from '../../../../img/new5.png'
const listNews = [
    {
        id:0,
        title: 'So sánh nhanh camera Galaxy S23 Ultra với Galaxy S22 Ultra, iPhone 14 Pro Max và Google Pixel 7 Pro',
        img: new1
    },
    {
        id:1,
        title: 'Galaxy S23 Ultra đặt cạnh Galaxy S22 Ultra: Làm thế nào để nhận biết khi chỉ nhìn ngoại hình?',
        img: new2
    },
    {
        id:2,
        title: 'Sau khi Galaxy S23 Ultra ra mắt, Galaxy S22 Ultra còn đáng mua không?',
        img: new3
    },
    {
        id:3,
        title: 'So sánh Galaxy S23 Ultra vs Galaxy S22 Ultra: Có nên lên đời?',
        img: new4
    },
    {
        id:4,
        title: 'Đang dùng Galaxy S22 Ultra muốn “lên đời” Galaxy S23 Ultra cần bù thêm bao nhiêu tiền?',
        img: new5
    },
]
const NewsDetail = () => {
  return (
    <div className={styles.news}>
        <div className={styles.news__title}>
            <NewsIcon className={styles.news__icon}/>
            <h2>Tin tức về sản phẩm</h2>
        </div>
        <Row gutter={[12,12]} className={styles.news__list}>
            {listNews.map(item => (
                <NewsItem key={item.id} img={item.img} title={item.title}/>

            ))}
        </Row>
        <div className={styles.news__btn}>
             <button>
             Xem tất cả bài viết
                </button>   
        </div>
    </div>
  )
}

export default NewsDetail