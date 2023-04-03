import { SmileOutlined } from '@ant-design/icons';
import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';


const NoData = () => {
    const navigate = useNavigate()
    return(
    
        <Result
          icon={<SmileOutlined />}
          title="Không có sản phẩm nào trong giỏ hàng, vui lòng quay lại"
          extra={<Button type="primary" onClick={() => navigate('/home')} style={{backgroundColor: 'red'}}>Quay lại trang chủ</Button>}
        />
      );
}
export default NoData;