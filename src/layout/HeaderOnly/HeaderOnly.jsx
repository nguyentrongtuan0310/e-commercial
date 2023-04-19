import React from 'react';
import styles from './HeaderOnly.module.scss';
import { Layout } from 'antd';
import { HeaderApp } from './HeaderApp';

const HeaderOnly = ({ children }) => {
    return (
        <Layout className={styles.wrapper}>
            <div className={styles.header}>
                <HeaderApp />
            </div>
            <div className={styles.wrapper__container}>{children}</div>
        </Layout>
    );
};

export default HeaderOnly;
