import React from 'react';
import { FlatList } from 'react-native';
import { Box } from 'components';
import CardReward from '../CardReward';

const DataInActive = [
  {
    id: '1',
    image: 'https://tintuc.ngan-hang.com/media/blog/1567999468476.png',
    title: 'Freeship 25k, don tu 0D',
    time: '13 jul 2022',
    isActive: false,
    amount: 1,
  },
  {
    id: '2',
    image: 'https://tintuc.ngan-hang.com/media/blog/1567999468476.png',
    title: 'Freeship 25k, don tu 0D',
    time: '13 jul 2022',
    isActive: false,
    amount: 4,
  },
  {
    id: '3',
    image: 'https://tintuc.ngan-hang.com/media/blog/1567999468476.png',
    title: 'Freeship 25k, don tu 0D',
    time: '13 jul 2022',
    isActive: false,
    amount: 1,
  },
];

const PastReward = () => {
  const renderItem = ({ item }: { item: any }) => <CardReward {...item} />;

  return (
    <Box flex={1} alignItems="center">
      <FlatList data={DataInActive} renderItem={renderItem} keyExtractor={(item: any) => item.id} />
    </Box>
  );
};

export default PastReward;
