import React from 'react'
import styles from './Category.module.scss'
const Category = ({img,title,backgroundColor}) => {
  return (
   <>
        <div className={styles.category} style={{backgroundImage:`url(${img})`,backgroundColor: backgroundColor }}>
          <span className={styles.category__title}>{title}</span>

        </div>
   </>
  )
}

export default Category 