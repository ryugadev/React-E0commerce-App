export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  description: string;
  isNew?: boolean;
  isBestSeller?: boolean;
  isDiscount?: boolean;
}

export const categories = ['Điện thoại', 'Laptop', 'Phụ kiện', 'Đồng hồ'];

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'iPhone 15 Pro Max 256GB',
    price: 34990000,
    originalPrice: 38990000,
    image: 'https://picsum.photos/seed/iphone15/400/400',
    category: 'Điện thoại',
    description: 'iPhone 15 Pro Max với thiết kế titan nguyên khối, chip A17 Pro mạnh mẽ, camera 48MP zoom quang học 5x.',
    isNew: true,
    isBestSeller: true,
    isDiscount: true,
  },
  {
    id: '2',
    name: 'Samsung Galaxy S24 Ultra',
    price: 33990000,
    image: 'https://picsum.photos/seed/s24/400/400',
    category: 'Điện thoại',
    description: 'Galaxy S24 Ultra tích hợp Galaxy AI đột phá, khung viền titan, camera 200MP siêu nét.',
    isNew: true,
    isBestSeller: true,
  },
  {
    id: '3',
    name: 'MacBook Pro 14 M3',
    price: 39990000,
    originalPrice: 42990000,
    image: 'https://picsum.photos/seed/macbook/400/400',
    category: 'Laptop',
    description: 'MacBook Pro 14 inch trang bị chip M3 siêu mạnh, màn hình Liquid Retina XDR tuyệt đẹp.',
    isNew: true,
    isDiscount: true,
  },
  {
    id: '4',
    name: 'Asus ROG Strix G16',
    price: 35990000,
    image: 'https://picsum.photos/seed/rog/400/400',
    category: 'Laptop',
    description: 'Laptop gaming Asus ROG Strix G16 với CPU Intel Core i7 thế hệ 13, RTX 4060.',
    isBestSeller: true,
  },
  {
    id: '5',
    name: 'AirPods Pro 2',
    price: 6190000,
    originalPrice: 6990000,
    image: 'https://picsum.photos/seed/airpods/400/400',
    category: 'Phụ kiện',
    description: 'Tai nghe không dây AirPods Pro 2 với khả năng chống ồn chủ động xuất sắc.',
    isBestSeller: true,
    isDiscount: true,
  },
  {
    id: '6',
    name: 'Apple Watch Series 9',
    price: 10490000,
    image: 'https://picsum.photos/seed/applewatch/400/400',
    category: 'Đồng hồ',
    description: 'Apple Watch Series 9 với chip S9 SiP mới, thao tác chạm hai lần tiện lợi.',
    isNew: true,
  },
  {
    id: '7',
    name: 'Chuột Logitech MX Master 3S',
    price: 2490000,
    image: 'https://picsum.photos/seed/logitech/400/400',
    category: 'Phụ kiện',
    description: 'Chuột không dây Logitech MX Master 3S với cảm biến 8000 DPI, click siêu êm.',
    isBestSeller: true,
  },
  {
    id: '8',
    name: 'Bàn phím cơ Keychron K8 Pro',
    price: 2290000,
    originalPrice: 2590000,
    image: 'https://picsum.photos/seed/keychron/400/400',
    category: 'Phụ kiện',
    description: 'Bàn phím cơ không dây Keychron K8 Pro hỗ trợ QMK/VIA, switch Gateron G Pro.',
    isDiscount: true,
  },
  {
    id: '9',
    name: 'Oppo Find N3 Flip',
    price: 22990000,
    image: 'https://picsum.photos/seed/oppo/400/400',
    category: 'Điện thoại',
    description: 'Điện thoại gập Oppo Find N3 Flip với màn hình ngoài lớn, camera Hasselblad.',
    isNew: true,
  },
  {
    id: '10',
    name: 'Dell XPS 15',
    price: 45990000,
    image: 'https://picsum.photos/seed/dell/400/400',
    category: 'Laptop',
    description: 'Laptop cao cấp Dell XPS 15 với thiết kế mỏng nhẹ, màn hình OLED 3.5K.',
  },
  {
    id: '11',
    name: 'Sạc dự phòng Anker 10000mAh',
    price: 850000,
    originalPrice: 1100000,
    image: 'https://picsum.photos/seed/anker/400/400',
    category: 'Phụ kiện',
    description: 'Sạc dự phòng Anker PowerCore 10000mAh hỗ trợ sạc nhanh PD 20W.',
    isDiscount: true,
  },
  {
    id: '12',
    name: 'Garmin Forerunner 265',
    price: 11690000,
    image: 'https://picsum.photos/seed/garmin/400/400',
    category: 'Đồng hồ',
    description: 'Đồng hồ thông minh thể thao Garmin Forerunner 265 với màn hình AMOLED.',
    isBestSeller: true,
  }
];
