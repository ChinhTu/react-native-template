import React from 'react';
import { Dimensions, FlatList } from 'react-native';
import { Box } from 'components';
import CardReward from '../CardReward';

const DataActive = [
  {
    id: '1',
    image: 'https://tintuc.ngan-hang.com/media/blog/1567999468476.png',
    title: 'Freeship 25k, đơn từ 0đ',
    time: '13 jul 2022',
    isActive: true,
    amount: 1,
  },
  {
    id: '2',
    image: 'https://tintuc.ngan-hang.com/media/blog/1567999468476.png',
    title: 'Freeship 25k, đơn từ 0đ',
    time: '13 jul 2022',
    isActive: true,
    amount: 4,
  },
  {
    id: '3',
    image: 'https://tintuc.ngan-hang.com/media/blog/1567999468476.png',
    title: 'Freeship 25k, đơn từ 0đ',
    time: '13 jul 2022',
    isActive: true,
    amount: 1,
  },
  {
    id: '4',
    image: 'https://tintuc.ngan-hang.com/media/blog/1567999468476.png',
    title: 'Freeship 25k, đơn từ 0đ',
    time: '13 jul 2022',
    isActive: true,
    amount: 1,
  },
  {
    id: '5',
    image: 'https://tintuc.ngan-hang.com/media/blog/1567999468476.png',
    title: 'Freeship 25k, đơn từ 0đ',
    time: '13 jul 2022',
    isActive: true,
    amount: 1,
  },
];

const ActiveReward = () => {
  const renderItem = ({ item }: { item: any }) => <CardReward {...item} />;

  return (
    <Box flex={1} alignItems="center">
      <FlatList
        data={DataActive}
        style={{ width: Dimensions.get('window').width }}
        renderItem={renderItem}
        keyExtractor={(item: any) => item.id}
      />
    </Box>
  );
};

export default ActiveReward;
