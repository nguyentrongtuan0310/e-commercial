import { DownOutlined, RightOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import classNames from 'classnames';

import styles from './DropdownApp.module.scss'
import { useState } from 'react';
const DropdownApp = ({title,param}) =>{

 const [active,setActive] = useState(false)
  return (

    <div className={styles.wrapper} onClick={() => setActive(!active)}>
        <div className={styles.dropdown}> 
           <p>{title}</p>
           <RightOutlined />
         
        </div>
        <p className={classNames(styles.pragraph,{
          [styles.active]: active
        })}>
          {param}
           </p>
    </div>
  );
}
export default DropdownApp;