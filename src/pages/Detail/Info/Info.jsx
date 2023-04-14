import { Col, Row } from 'antd'
import React from 'react'

import styles from './Info.module.scss'
import { DownOutlined } from '@ant-design/icons'
import DropdownApp from './Dropdown/DropdownApp'
import Appreciate from './Appreciate/Appreciate'
import ParamList from './ParamList/ParamList'
import News from './NewsDetail/NewsDetail'


import { NewsIcon } from '../../../components/Icon'
import useResize from '../../../hooks/useResize'
const Info = () => {
    const listQuestion = [
        {id: 1,
        title: 'iPhone 14 Pro Max xem video được trong bao lâu?',
        param: 'iPhone 14 Pro được trang bị viên pin cho thời lượng sử dụng lên tới 29 giờ, tương đương 2 ngày sử dụng bình thường. Thời lượng sử dụng đủ dài để bạn có thể sử dụng thoải mái mà không lo hết pin. Ngoài ra, máy cũng hỗ trợ sạc nhanh 20W, nhờ vậy máy có thể sạc tới 50% trong khoảng 30 phút.'
        },
        {id: 2,
        title: 'Camera iPhone 14 Pro Max có gì khác biệt so với iPhone 13 Pro Max?',
        param: 'Camera chính của iPhone 14 Pro có cảm biến chính 48MP, lớn hơn 65% so với iPhone 13 Pro Max. Bên cạnh đó, máy cũng bổ sung thêm nhiều tính năng chụp hình và quay phim chuyên nghiệp hơn. Chẳng hạn như tính năng ProRAW ở 48 MP, Photonic Engine, Chế độ Hành động,... mang đến hiệu suất chụp ảnh thiếu sáng tốt hơn.'
        },
        {id: 3,
        title: 'Hiệu năng iPhone 14 Pro Max được cải tiến ra sao?',
        param: 'iPhone 14 Pro trang bị con chip xử lí được xây dựng trên tiến trình 4 nanomet mang lại hiệu năng cũng như hiệu suất cao, sử dụng ít năng lượng hơn 20% so với A15 Bionic, nhờ đó bạn hoàn toàn có thể tự tin chiến mọi game đồ họa khủng không lo giật lag.'
        },
        {id: 4,
        title: 'Dynamic Island trên iPhone 14 Pro có tác dụng gì? Có thể làm được gì?',
        param: 'Dynamic Island là phần cắt hình viên thuốc mới trên iPhone 14 Pro và iPhone 14 Pro Max. Bên cạnh làm ngoại hình iPhone đẹp hơn, nó còn hỗ trợ đa nhiệm và truy cập dễ dàng hơn vào các chức năng điều khiển và thông tin mà không cần rời khỏi ứng dụng bạn đang sử dụng.'
        },
        {id: 5,
        title: 'iPhone 14 Pro Max có mấy màu, có những phiên bản bộ nhớ nào?',
        param: 'iPhone 14 Pro Max bao gồm 4 sắc màu thời thượng và hiện đại là: Đen (Space Black), Bạc (Silver), Vàng (Gold), Tím đậm (Deep Purple). Dòng iPhone này bao gồm 4 phiên bản bộ nhớ 128GB, 256GB, 512GB và 1TB giúp bạn có thêm nhiều lựa chọn đa dạng và phù hợp với nhu cầu sử dụng.'
        },
        {id: 6,
        title: 'Redmi Note 11 Pro 5G có mấy phiên bản màu và bộ nhớ?',
        param: 'Redmi Note 11 Pro 5G sở hữu 3 phiên bản màu sắc là Xám, Xanh dương và Trắng và chỉ có 3 phiên bản bộ nhớ là 6+64GB, 6+128GB và 8+128GB.'
        },
    ]
    const size = useResize()
  return (
    <Row gutter={12}>
        <Col  lg={{ span: 16}} md={{ span: 24}} sm={{span: 24}} className={styles.content}>
                <div className={styles.content__feature}>
                    <div className={styles.content__feature__header}>
                            <h2>ĐẶC ĐIỂM NỔI BẬT</h2>
                            <ul>
                                <li> Màn hình Dynamic Island - Sự biến mất của màn hình tai thỏ thay thế bằng thiết kế viên thuốc, OLED 6,7 inch, hỗ trợ always-on display</li>
                                <li>  Cấu hình iPhone 14 Pro Max mạnh mẽ, hiệu năng cực khủng từ chipset A16 Bionic</li>
                                <li> Làm chủ công nghệ nhiếp ảnh - Camera sau 48MP, cảm biến TOF sống động</li>
                                <li> Pin liền lithium-ion kết hợp cùng công nghệ sạc nhanh cải tiến</li>
                         
                            </ul>
                    </div>
                    <div className={styles.content__feature__body}>
                            <p>
                                <strong>iPhone 14 Pro Max </strong>
                            là mẫu flagship nổi bật nhất của Apple trong lần trở lại năm 2022 với nhiều cải tiến về công nghệ cũng như vẻ ngoài cao cấp, sang chảnh hợp với gu thẩm mỹ đại chúng. Những chiếc điện thoại đến từ nhà Táo Khuyết nhận được rất nhiều sự kỳ vọng của thị trường ngay từ khi chưa ra mắt. Vậy liệu những chiếc flagship đến từ công ty công nghệ hàng đầu thế giới này có làm bạn thất vọng? Cùng khám phá những điều thú vị về iPhone 14 Pro Max ở bài viết dưới đây nhé.
                            </p>
                           <div className={styles.content__feature__body__info}>
                            <h2>Ưu đãi hấp dẫn khi mua hàng - trả góp iPhone 14 series tại CellphoneS</h2>
                            <p> Khi lựa chọn mua iPhone 14 Series tại CellphoneS, quý khách hàng không chỉ nhận được sản phẩm chất lượng, chính hãng VN/A mmaf bên cạnh đó còn được trải nghiệm nhiều chương trình giảm giá hấp dẫn, trừ thẳng vào giá sản phẩm. Chi tiết ưu đãi cho khách hàng khi mua điện thoại iPhone 14 series tại CellphoneS như sau:</p>
                            <p> Khi lựa chọn mua iPhone 14 Series tại CellphoneS, quý khách hàng không chỉ nhận được sản phẩm chất lượng, chính hãng VN/A mmaf bên cạnh đó còn được trải nghiệm nhiều chương trình giảm giá hấp dẫn, trừ thẳng vào giá sản phẩm. </p>
                            <p> Khi lựa chọn mua iPhone 14 Series tại CellphoneS, quý khách hàng không chỉ nhận được sản phẩm chất lượng, chính hãng VN/A mmaf bên cạnh đó còn được trải nghiệm nhiều chương trình giảm giá hấp dẫn, trừ thẳng vào giá sản phẩm</p>
                            
                           
                              
                           </div>
                       
                           <div className={styles.content__feature__body__btn}>
                                <button>Xem thêm 
                                <DownOutlined className={styles.content__feature__body__btn__icon} />
                                </button>
                           </div>
                    </div>
                </div>
                <div className={styles.content__question}>
                    <h2 className={styles.content__question__title}>Câu hỏi thường gặp</h2>
                    {listQuestion.map(item => (
                        <DropdownApp key={item.id} title={item.title} param={item.param}/>

                    ))}
                   
                </div>
                <Appreciate />
        </Col>
        {size.width > 996 ? (

        <Col span={8}>
            <div className={styles.content__param}>
                <h2 >Thông số kỹ thuật</h2>   
                  <ParamList />
            </div>
                     
                <News />
           
        </Col>

        ) : null}
        
    </Row>
  )
}

export default Info