import { Layout } from 'antd';

import { Carousel } from '../Carousel';
import './HomeLayout.scss';
import HeaderApp from './HeaderApp/HeaderApp';
import FooterApp from './FooterApp/FooterApp';

import { MenuBottom } from '../MenuBottom';
import useResize from '../../hooks/useResize';

const HomeLayout = ({ children }) => {
    const size = useResize();

    return (
        <Layout className="layout">
            <HeaderApp className="layout-header" />

            <div className="layout__content">
                <div className="site-layout-content">{children}</div>
            </div>
            <div>{size.width > 768 ? <FooterApp /> : <MenuBottom />}</div>
        </Layout>
    );
};
export default HomeLayout;
