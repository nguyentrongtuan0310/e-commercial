import React from 'react'
import { NavLink } from 'react-router-dom'
import classNames from 'classnames'

import styles from '../detail.module.scss'
const Option = ({item,handleActive}) => {
    
  return (
    <NavLink onClick={() => handleActive(item.title)} to={item.link}  className={({isActive}) => classNames(styles.product__option__item,{
        [styles.active]: isActive
    }) }    
    >{item.title}</NavLink>
  )
}

export default Option