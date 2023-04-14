import React from 'react'

import styles from './Appreciate.module.scss'
import { Progress, Rate } from 'antd'
import { StarIcon } from '../../../../components/Icon'
const Appreciate = () => {
  return (
    <div className={styles.appreciate}>
        <div className={styles.appreciate__inner}>
            
            <h2 >Đánh giá & nhận xét iPhone 14 Pro Max 128GB | Chính hãng VN/A</h2>
            <div className={styles.appreciate__review}>
                
                    
                    <div className={styles.appreciate__review__score}>
                        <span className={styles.appreciate__review__score__title} >4.9/5</span>
                        <Rate disabled defaultValue={5} className={styles.appreciate__review__score__rate}/>
                        <p> <strong>16</strong> đánh giá và nhận xét</p>
                    </div>
    
                   <div className={styles.appreciate__review__item}>
                        <div className={styles.appreciate__review__star}>
                            <span className={styles.appreciate__review__star__icon} >
                                <span>5</span>
                                <StarIcon className={styles.appreciate__icon}/>
                            </span>
                            <Progress percent={90} status="exception" showInfo={false} className={styles.appreciate__review__star__process}/>
                          
                            <span>14 đánh giá</span>
                          
                        </div>
                        <div className={styles.appreciate__review__star}>
                            <span className={styles.appreciate__review__star__icon} >
                                <span>4</span>
                                <StarIcon className={styles.appreciate__icon}/>

                            </span>
                            <Progress percent={15} status="exception" showInfo={false} className={styles.appreciate__review__star__process}/>

                          
                            <span>2 đánh giá</span>
                          
                        </div>
                        <div className={styles.appreciate__review__star}>
                            <span className={styles.appreciate__review__star__icon} >
                                <span>3</span>
                                <StarIcon className={styles.appreciate__icon}/>

                            </span>
                            <Progress percent={0} status="exception" showInfo={false} className={styles.appreciate__review__star__process}/>

                          
                            <span>0 đánh giá</span>
                          
                        </div>
                        <div className={styles.appreciate__review__star}>
                            <span className={styles.appreciate__review__star__icon} >
                                <span>2</span>
                                <StarIcon className={styles.appreciate__icon}/>

                            </span>
                            <Progress percent={0} status="exception" showInfo={false} className={styles.appreciate__review__star__process}/>

                          
                            <span>0 đánh giá</span>
                          
                        </div>
                        <div className={styles.appreciate__review__star}>
                            <span className={styles.appreciate__review__star__icon} >
                                <span>1</span>
                                <StarIcon className={styles.appreciate__icon}/>

                            </span>
                            <Progress percent={0} status="exception" showInfo={false} className={styles.appreciate__review__star__process}/>

                          
                            <span>0 đánh giá</span>
                          
                        </div>
                    </div>
                   </div>
                
        </div>
         
       <div className={styles.appreciate__bottom}>
            <p className={styles.appreciate__title}>Bạn đánh giá sao sản phẩm này</p>
            <div className={styles.appreciate__btn}>
                <button>Đánh giá ngay</button>
            </div>
       </div>
    </div>
  )
}

export default Appreciate