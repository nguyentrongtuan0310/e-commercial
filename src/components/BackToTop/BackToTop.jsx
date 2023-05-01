import { UpOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import styles from './BackToTop.module.scss';
const BackToTop = () => {
    const [show, setShow] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
                setShow(true);
            } else {
                setShow(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        //  return () => window.removeEventListener(handleScroll)
    }, []);
    return (
        <>
            {show && (
                <button className={styles.back__to__top} onClick={() => window.scrollTo(0, 0)}>
                    <UpOutlined className={styles.back__to__top__icon} />
                    <strong>Lên đầu</strong>
                </button>
            )}
        </>
    );
};

export default BackToTop;
