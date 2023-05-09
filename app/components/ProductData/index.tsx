export interface List {
  title: string;
  option: string;
  listItem: Props[];
  modal?: ModalProps[];
}
interface Props {
  icon: string;
  name: string;
  description: string;
  isNew: boolean;
}

export interface ModalProps {
  logo: string;
  name: string;
}

export const DataArray = [
  {
    key: 1,
    title: 'Mở ví điện tử, ngân hàng số',
    option: 'Tiện ích',
    listItem: [
      {
        icon: 'https://i.imgur.com/KufKaLe.jpg',
        name: 'VIB',
        description: '+120k',
        isNew: true,
      },
      {
        icon: 'https://i.imgur.com/CaIPDg0.png',
        name: 'VPBank',
        description: '+70k',
        isNew: true,
      },
      {
        icon: 'https://i.imgur.com/sjxNQpK.png',
        name: 'ViettelPay',
        description: '+65k',
        isNew: true,
      },
      {
        icon: 'https://i.imgur.com/neNWjb5.png',
        name: 'Momo',
        description: '+80k',
        isNew: false,
      },
      {
        icon: 'https://i.imgur.com/BTXMhsa.png',
        name: 'MB',
        description: '+50k',
        isNew: false,
      },
      {
        icon: 'https://i.imgur.com/mNnbHQu.png',
        name: 'TPBank',
        description: '+50k',
        isNew: false,
      },
      {
        icon: 'https://i.imgur.com/3PJeR0X.jpg',
        name: 'Cake',
        description: '+50k',
        isNew: false,
      },
      {
        icon: 'https://i.imgur.com/ZLRK5nD.png',
        name: 'ShopeePay',
        description: '+50k',
        isNew: false,
      },
      {
        icon: 'https://i.imgur.com/2OnlUAF.png',
        name: 'ACB',
        description: '+50k',
        isNew: false,
      },
      {
        icon: 'https://i.imgur.com/2GYyG1K.png',
        name: 'Viettinbank',
        description: '+50k',
        isNew: false,
      },
    ],
    modal: [
      {
        logo: 'https://i.imgur.com/2GYyG1K.png',
        name: 'M1',
      },
      {
        logo: 'https://i.imgur.com/2GYyG1K.png',
        name: 'M2',
      },
      {
        logo: 'https://i.imgur.com/2GYyG1K.png',
        name: 'M3',
      },
      {
        logo: 'https://i.imgur.com/2GYyG1K.png',
        name: 'M4',
      },
    ],
  },
  {
    key: 2,
    title: 'Bán bảo hiểm điện tử',
    option: 'Tiện ích',
    listItem: [
      {
        icon: 'https://i.imgur.com/xXGc8JX.png',
        name: 'VCB',
        description: '+50k',
        isNew: false,
      },
      {
        icon: 'https://i.imgur.com/xXGc8JX.png',
        name: 'VCB',
        description: '+50k',
        isNew: false,
      },
      {
        icon: 'https://i.imgur.com/xXGc8JX.png',
        name: 'VCB',
        description: '+50k',
        isNew: false,
      },
      {
        icon: 'https://i.imgur.com/xXGc8JX.png',
        name: 'VCB',
        description: '+50k',
        isNew: false,
      },
      {
        icon: 'https://i.imgur.com/xXGc8JX.png',
        name: 'VCB',
        description: '+50k',
        isNew: false,
      },
      {
        icon: 'https://i.imgur.com/xXGc8JX.png',
        name: 'VCB',
        description: '+50k',
        isNew: false,
      },
      {
        icon: 'https://i.imgur.com/xXGc8JX.png',
        name: 'VCB',
        description: '+50k',
        isNew: false,
      },
      {
        icon: 'https://i.imgur.com/xXGc8JX.png',
        name: 'VCB',
        description: '+50k',
        isNew: false,
      },
    ],
    modal: [
      {
        logo: 'https://i.imgur.com/BTXMhsa.png',
        name: 'Modal1',
      },
      {
        logo: 'https://i.imgur.com/BTXMhsa.png',
        name: 'Modal2',
      },
      {
        logo: 'https://i.imgur.com/BTXMhsa.png',
        name: 'Modal3',
      },
    ],
  },
  {
    key: 3,
    title: 'Bán bảo hiểm con người',
    option: 'Tất cả',
    listItem: [
      {
        icon: 'https://i.imgur.com/CaIPDg0.png',
        name: 'VCB',
        description: 'admin',
        isNew: false,
      },
      {
        icon: 'https://i.imgur.com/CaIPDg0.png',
        name: 'VCB',
        description: 'admin',
        isNew: false,
      },
      {
        icon: 'https://i.imgur.com/CaIPDg0.png',
        name: 'VCB',
        description: 'admin',
        isNew: true,
      },
    ],
  },
];
