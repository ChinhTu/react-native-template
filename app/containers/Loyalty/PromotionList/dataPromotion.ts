import { Icons } from 'components';

export interface PromotionProps {
    title: string;
    typeIcon: any;
    nameIcon: string;
    utilities: string;
    list: PromoItemProps[];
}

export interface PromoItemProps {
    image: string;
    description: string;
    name: string;
    pointUpdate: string;
    pointPass: string;
}

export const datapromotion1 =
{
    title: 'SALE HÈ 77 ĐIỂM',
    typeIcon: Icons.Feather,
    nameIcon: 'sun',
    utilities: 'See All',
    list: [
        {
            image: 'https://www.bigc.vn/files/banners/2020/november/december/si-u-sale-1212-cover-blog-big-c.png',
            description: '100.000 VND voucher + freeship',
            name: 'Native',
            pointUpdate: '77',
            pointPass: '3.900',
        },
        {
            image: 'https://s3-ap-northeast-1.amazonaws.com/wp-gogovan.com/wp-content/uploads/sites/6/2020/07/23105425/WS-7-scaled.jpg',
            description: 'Facial Movie',
            name: 'Sukin',
            pointUpdate: '77',
            pointPass: '5.970',
        },
        {
            image: 'https://www.bigc.vn/files/banners/2020/november/december/si-u-sale-1212-cover-blog-big-c.png',
            description: '100.000 VND voucher + freeship',
            name: 'Native',
            pointUpdate: '77',
            pointPass: '3.900',
        },
        {
            image: 'https://s3-ap-northeast-1.amazonaws.com/wp-gogovan.com/wp-content/uploads/sites/6/2020/07/23105425/WS-7-scaled.jpg',
            description: 'Facial Movie',
            name: 'Sukin',
            pointUpdate: '77',
            pointPass: '5.970',
        },
        {
            image: 'https://www.bigc.vn/files/banners/2020/november/december/si-u-sale-1212-cover-blog-big-c.png',
            description: '100.000 VND voucher + freeship',
            name: 'Native',
            pointUpdate: '77',
            pointPass: '3.900',
        },
    ],
};



export const datapromotion2 =
{
    title: 'Moca Partners',
    typeIcon: Icons.AntDesign,
    nameIcon: 'laptop',
    utilities: 'See All',
    list: [
        {
            image: 'https://file.hstatic.net/1000327709/file/5adba8b045d6b888e1c7_37fcf718399845db895aed1eeaf6c5e1_grande.jpg',
            description: '500.000 VND voucher',
            name: 'Di Động Việt',
            pointUpdate: '120',
            pointPass: '15.000',
        },
        {
            image: 'https://shopeeplus.com/upload/images/photo-1-15580655154342108694673.jpg',
            description: '10.000 VND Vinaphone',
            name: 'Vinaphone',
            pointUpdate: '200',
            pointPass: '',
        },
        {
            image: 'https://file.hstatic.net/1000327709/file/5adba8b045d6b888e1c7_37fcf718399845db895aed1eeaf6c5e1_grande.jpg',
            description: '500.000 VND voucher',
            name: 'Di Động Việt',
            pointUpdate: '120',
            pointPass: '15.000',
        },
        {
            image: 'https://shopeeplus.com/upload/images/photo-1-15580655154342108694673.jpg',
            description: '10.000 VND Vinaphone',
            name: 'Vinaphone',
            pointUpdate: '200',
            pointPass: '',
        },
        {
            image: 'https://file.hstatic.net/1000327709/file/5adba8b045d6b888e1c7_37fcf718399845db895aed1eeaf6c5e1_grande.jpg',
            description: '500.000 VND voucher',
            name: 'Di Động Việt',
            pointUpdate: '120',
            pointPass: '15.000',
        },
    ],
};
