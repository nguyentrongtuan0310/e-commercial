import React from 'react';
import styles from './DefaultLayout.module.scss';
import { Layout } from 'antd';
import { HeaderApp } from './HeaderApp';
import { FooterApp } from './FooterApp';
import useResize from '../../hooks/useResize';
import { MenuBottom } from '../../components/MenuBottom';
const DefaultLayout = ({ children }) => {
    const size = useResize();
    return (
        <Layout className={styles.wrapper}>
            <div className={styles.header}>
                <HeaderApp />
            </div>
            <div className={styles.wrapper__container}>{children}</div>
            <div className={styles.footer}> {size.width > 768 ? <FooterApp /> : <MenuBottom />}</div>
        </Layout>
    );
};

export default DefaultLayout;
