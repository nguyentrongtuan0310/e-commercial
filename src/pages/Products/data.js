const listCategory = [
    {
      id: 1,
      name: 'Nổi bât',
      img: "https://cdn2.cellphones.com.vn/x/media/icons/category/cate-1644.svg"
    },
    {
      id: 2,
      name: 'Phụ kiện Apple',
      img: "https://cdn2.cellphones.com.vn/x/media/icons/category/cate-43.svg"
    },
    {
      id: 3,
      name: 'Dán màn hình',
      img: "https://cdn2.cellphones.com.vn/x/media/icons/category/cate-286.svg"
    },
    {
      id: 4,
      name: 'Ốp lưng - Bao da',
      img: "https://cdn2.cellphones.com.vn/x/media/icons/category/cate-108.svg"
    },
    {
      id: 5,
      name: 'Cáp sạc',
      img: "https://cdn2.cellphones.com.vn/x/media/icons/category/cate-114.svg"
    },
    {
      id: 6,
      name: 'Pin dự phòng',
      img: "https://cdn2.cellphones.com.vn/x/media/icons/category/cate-122.svg"
    },
    {
      id: 7,
      name: 'Thiết bị mạng',
      img: "https://cdn2.cellphones.com.vn/x/media/icons/category/cate-676.svg"
    },
    {
      id: 8,
      name: 'Gaming Grear',
      img: "https://cdn2.cellphones.com.vn/x/media/icons/category/cate-669.svg"
    },
    {
      id: 9,
      name: 'Gimbal| Tay cầm chống rung',
      img: "https://cdn2.cellphones.com.vn/x/media/icons/category/cate-852.svg"
    },
    {
      id: 10,
      name: 'Thẻ nhớ, USB',
      img: "https://cdn2.cellphones.com.vn/x/media/icons/category/cate-109.svg"
    },
    {
      id: 11,
      name: 'Chuột bàn phím',
      img: "https://cdn2.cellphones.com.vn/x/media/icons/category/cate-663.svg"
    },
    {
      id: 12,
      name: 'Sim 4G',
      img: "https://cdn2.cellphones.com.vn/150x,webp,q70/media/catalog/product/s/i/sim_1_1.png"
    },
    {
      id: 13,
      name: 'Sim số đẹp',
      img: "https://cdn2.cellphones.com.vn/150x,webp,q70/media/catalog/product/s/i/sim_5.png"
    },
    {
      id: 14,
      name: 'Camera hành trình',
      img: "https://cdn2.cellphones.com.vn/150x,webp,q70/media/tmp/catalog/product/i/c/icon_cam_htrinh.png"
    },
    {
      id: 15,
      name: 'Camera an ninh',
      img: "https://cdn2.cellphones.com.vn/150x,webp,q70/media/tmp/catalog/product/i/c/icon_cam_anninh.png"
    },
    {
      id: 16,
      name: 'Phụ kiện Laptop',
      img: "https://cdn2.cellphones.com.vn/x/media/icons/category/cate-44.svg"
    },
    {
      id: 17,
      name: 'Balo,túi chống sốc',
      img: "https://cdn2.cellphones.com.vn/x/media/icons/category/cate-70.svg"
    },
    {
      id: 18,
      name: 'Dây đeo đồng hồ',
      img: "https://cdn2.cellphones.com.vn/x/media/icons/category/cate-707.svg"
    },
    {
      id: 19,
      name: 'Ổ cứng di động',
      img: "https://cdn2.cellphones.com.vn/x/media/icons/category/cate-750.svg"
    },
    {
      id: 20,
      name: 'Apple Care',
      img: "https://cdn2.cellphones.com.vn/x/media/icons/category/cate-966.svg"
    },

]
const listCategory2 = [
  {
    id: 1,
    name: 'PC ráp sẵn Cellphone S',
    img: "https://cdn2.cellphones.com.vn/150x,webp,q70/media/catalog/product/m/a/mainboard_1.png",
    backgroundColor: 'rgb(252, 165, 165)'
  },
  {
    id: 2,
    name: 'CPU',
    img: "https://cdn2.cellphones.com.vn/150x,webp,q70/media/catalog/product/c/p/cpu_1.png",
    backgroundColor: 'rgb(253, 164, 175)'

  },
  {
    id: 3,
    name: 'Mainboard',
    img: "https://cdn2.cellphones.com.vn/150x,webp,q70/media/catalog/product/m/a/mainboard_1.png",
    backgroundColor: 'rgb(249, 168, 212)'

  },
  {
    id: 4,
    name: 'Ram',
    img: "https://cdn2.cellphones.com.vn/150x,webp,q70/media/catalog/product/r/a/ram_2.png",
    backgroundColor: 'rgb(196, 181, 253)'

  },
  {
    id: 5,
    name: 'Ổ cứng',
    img: "https://cdn2.cellphones.com.vn/150x,webp,q70/media/catalog/product/s/s/ssd_2.png",
    backgroundColor: 'rgb(165, 180, 252)'
  },
  {
    id: 6,
    name: 'Card màn hình',
    img: "https://cdn2.cellphones.com.vn/150x,webp,q70/media/catalog/product/v/g/vga.png",
    backgroundColor: 'rgb(147, 197, 253)'

  },
  {
    id: 7,
    name: 'Nguồn máy tính',
    img: "https://cdn2.cellphones.com.vn/150x,webp,q70/media/catalog/product/p/s/psu.png",
    backgroundColor: 'rgb(110, 231, 183)'
  },
  {
    id: 8,
    name: 'Tản nhiệt',
    img: "https://cdn2.cellphones.com.vn/150x,webp,q70/media/catalog/product/t/_/t_n_nhi_t_2.png",
    backgroundColor: 'rgb(252, 211, 75)'
  },
  {
    id: 9,
    name: 'Case máy tính',
    img: "https://cdn2.cellphones.com.vn/150x,webp,q70/media/catalog/product/c/a/case_1.png",
    backgroundColor: 'rgb(253, 186, 116)'
  },
]
const listCategory3 = [
  {
    id: 1,
    name: 'Điện thoại cũ',
    img: "https://cdn2.cellphones.com.vn/150x,webp,q70/media/catalog/product/i/p/ip-14-hp-cu.png"
  },
  {
    id: 2,
    name: 'Máy tính bảng cũ',
    img: "https://cdn2.cellphones.com.vn/150x,webp,q70/media/catalog/product/i/p/ipad-cate-cu.png"
  },
  {
    id: 3,
    name: 'Mac cũ',
    img: "https://cdn2.cellphones.com.vn/x/media/icons/category/cate-392.svg"
  },
  {
    id: 4,
    name: 'Laptop cũ',
    img: "https://cdn2.cellphones.com.vn/x/media/icons/category/cate-878.svg"
  },
  {
    id: 5,
    name: 'Tai nghe cũ',
    img: "https://cdn2.cellphones.com.vn/150x,webp,q70/media/catalog/product/c/a/cate-tai-nghe_1.png"
  },
  {
    id: 6,
    name: 'Loa cũ',
    img: "https://cdn2.cellphones.com.vn/150x,webp,q70/media/catalog/product/c/a/cate-loa_1.png"
  },
  {
    id: 7,
    name: 'Đồng hồ thông minh cũ',
    img: "https://cdn2.cellphones.com.vn/x/media/icons/category/cate-451.svg"
  },
  {
    id: 8,
    name: 'Nhà thông minh cũ',
    img: "https://cdn2.cellphones.com.vn/x/media/icons/category/cate-846.svg"
  },
  {
    id: 9,
    name: 'Phụ kiện cũ',
    img: "https://cdn2.cellphones.com.vn/150x,webp,q70/media/catalog/product/c/a/cate-phu-kien.png"
  },
  {
    id: 10,
    name: 'Màn hình cũ',
    img: "https://cdn2.cellphones.com.vn/150x,webp,q70/media/catalog/product/c/a/cate-man-hinh.png"
  },
]
const listCategory4 = [
  {
    id: 1,
    img: "https://cdn2.cellphones.com.vn/690x300,webp,q100/https://dashboard.cellphones.com.vn/storage/evo-banner-hp.png"
  },
  {
    id: 2,
    img: "https://cdn2.cellphones.com.vn/690x300,webp,q100/https://dashboard.cellphones.com.vn/storage/Sliding.jpg"
  },
  
]
const listCategory5 = [
  {
    id: 1,
    img: "https://cdn2.cellphones.com.vn/690x300,webp,q100/https://dashboard.cellphones.com.vn/storage/th-hieu-apple-0013.png"
  },
  {
    id: 2,
    img: "https://cdn2.cellphones.com.vn/690x300,webp,q100/https://dashboard.cellphones.com.vn/storage/SIS%20asus.png"
  },
  {
    id: 3,
    img: "https://cdn2.cellphones.com.vn/690x300,webp,q100/https://dashboard.cellphones.com.vn/storage/th-hieu-ss-0013.png"
  },
  {
    id: 4,
    img: "https://cdn2.cellphones.com.vn/690x300,webp,q100/https://dashboard.cellphones.com.vn/storage/xiaomi.png"
  },
  
]
const newsList = [
{
  id: 1,
  img: 'https://cellphones.com.vn/sforum/wp-content/uploads/2023/03/apple-mixed-reality-headset-1.jpeg',
  name: 'Kính thực tế ảo hỗn hợp AR/VR của Apple có thể không xuất hiệ...',
},
{
  id: 2,
  img: 'https://cellphones.com.vn/sforum/wp-content/uploads/2023/03/realme-gt-neo-5-se-cau-hinh.jpeg',
  name: 'Đây là cấu hình chi tiết của Realme GT Neo 5 SE, ra mắt ngày 3/4',
},

{
  id: 3,
  img: 'https://cellphones.com.vn/sforum/wp-content/uploads/2023/03/Cover-40.jpg',
  name: 'OnePlus Nord CE 3 Lite được xác nhận sẽ có màn hình 120Hz và vi...',
},
{
  id: 4,
  img: 'https://cellphones.com.vn/sforum/wp-content/uploads/2023/03/nang-cap-ssd-m-2-1.png',
  name: 'Tự nâng cấp SSD M.2 cho PC? Còn dễ hơn cả ăn bánh',
},
]
export {listCategory,listCategory2,listCategory3,listCategory4,listCategory5,newsList}