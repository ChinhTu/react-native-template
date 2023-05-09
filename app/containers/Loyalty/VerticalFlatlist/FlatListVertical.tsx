/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useState, useRef } from 'react';
import { SafeAreaView, Dimensions, TouchableOpacity, StatusBar, useColorScheme } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { Modalize } from 'react-native-modalize';
import { Portal } from 'react-native-portalize';

import { Box, Text, useTheme } from 'components';
import HeaderGoBack from 'components/HeaderGoBack';
import SkeletonScreen from '../../SkeletonScreen';
import VerticalFlatlist from './index';
import { Icon, Icons } from 'components';
import ListModalContent from './ListModalContent';
import FilterModalContent from './FilterModalContent';


const wWitdh = Dimensions.get('window').width;
const wHeight = Dimensions.get('window').height;

export interface BannerProps {
  id: string;
  nameIcon: string;
  typeIcon: any;
  title: string;
}

export interface VerticalFlatlistProps {
  uri: string;
  title: string;
  description: string;
  point: number;
}

const DATA = [
  {
    uri: 'https://i.imgur.com/NDMsmrc.jpg',
    title: '[20/07] 20% mã thẻ',
    description: 'Viettel 500k',
    point: 2250,
  },
  {
    uri: 'https://i.imgur.com/NDMsmrc.jpg',
    title: '[20/07] 20% mã thẻ',
    description: 'Viettel 200k',
    point: 900,
  },
  {
    uri: 'https://i.imgur.com/NDMsmrc.jpg',
    title: '[20/07] 20% mã thẻ',
    description: 'Viettel 100k',
    point: 450,
  },
  {
    uri: 'https://i.imgur.com/NDMsmrc.jpg',
    title: '[15/07] Ưu đãi 20% nạp',
    description: 'Vinaphone 500k',
    point: 1350,
  },
  {
    uri: 'https://i.imgur.com/NDMsmrc.jpg',
    title: '[15/07] Ưu đãi 20% nạp',
    description: 'Vinaphone 200k',
    point: 900,
  },
  {
    uri: 'https://i.imgur.com/NDMsmrc.jpg',
    title: '[15/07] Ưu đãi 20% nạp',
    description: 'Vinaphone 100k',
    point: 550,
  },
  {
    uri: 'https://i.imgur.com/NDMsmrc.jpg',
    title: '[15/07] Ưu đãi 20% nạp',
    description: 'Vinaphone 100k',
    point: 1350,
  },
];
const DATA2 = [
  {
    id: '1',
    nameIcon: 'crown-outline',
    typeIcon: Icons.MaterialCommunityIcons,
    title: 'Tất cả',
  },
  {
    id: '2',
    nameIcon: 'star-outline',
    typeIcon: Icons.Ionicons,
    title: 'Giải trí',
  },
  {
    id: '3',
    nameIcon: 'wrench',
    typeIcon: Icons.SimpleLineIcons,
    title: 'Grab',
  },
  {
    id: '4',
    nameIcon: 'handbag',
    typeIcon: Icons.SimpleLineIcons,
    title: 'Ẩm thực',
  },
  {
    id: '5',
    nameIcon: 'tag',
    typeIcon: Icons.SimpleLineIcons,
    title: 'Dịch vụ',
  },
  {
    id: '6',
    nameIcon: 'social-google',
    typeIcon: Icons.SimpleLineIcons,
    title: 'Mua sắm',
  },
  {
    id: '7',
    nameIcon: 'pin',
    typeIcon: Icons.SimpleLineIcons,
    title: 'Du lịch',
  },
  {
    id: '8',
    nameIcon: 'cup',
    typeIcon: Icons.SimpleLineIcons,
    title: 'Ưu đãi',
  },
  {
    id: '9',
    nameIcon: 'film',
    typeIcon: Icons.SimpleLineIcons,
    title: 'Ưu đãi giới hạn',
  },
];
const DATA3 = [
  {
    id: '1',
    nameIcon: 'clock-outline',
    typeIcon: Icons.MaterialCommunityIcons,
    title: 'Mới nhất',
  },
  {
    id: '2',
    nameIcon: 'fire',
    typeIcon: Icons.MaterialCommunityIcons,
    title: 'Phổ biến',
  },
  {
    id: '3',
    nameIcon: 'clock-outline',
    typeIcon: Icons.MaterialCommunityIcons,
    title: 'Điểm thấp đến cao',
  },
  {
    id: '4',
    nameIcon: 'crown-outline',
    typeIcon: Icons.MaterialCommunityIcons,
    title: 'Điểm cao đến thấp',
  },
];

const FlatListVertical = ({ navigation }: any) => {
  const modalizeRef = useRef<Modalize>(null);
  const modalizeRefRight = useRef<Modalize>(null);
  const theme = useTheme();
  const [data, setData] = useState(false);
  const [selectFilter, setSelectFilter] = useState(0);
  const [checkFilter, setCheckFilter] = useState(1);
  useEffect(() => {
    setTimeout(() => {
      setData(true);
    }, 2000);
  }, []);
  const onOpen = () => {
    modalizeRef.current?.open();
  };
  const onOpenRight = () => {
    modalizeRefRight.current?.open();
  };
  const onClose = () => {
    modalizeRef.current?.close();
  };
  const onCloseRight = () => {
    modalizeRefRight.current?.close();
  };
  return (
    <>
      <Box style={styles.container} backgroundColor="backgroundPrimary">
        <SafeAreaView style={{ flex: 1 }}>
          <Portal>
            <Modalize ref={modalizeRef} modalStyle={[{ backgroundColor: theme.colors.backgroundPrimary }, styles.modal]}>
              <ListModalContent DATA2={DATA2} onClose={onClose} />
            </Modalize>
          </Portal>

          <Portal>
            <Modalize ref={modalizeRefRight} modalStyle={[{ backgroundColor: theme.colors.backgroundPrimary }, styles.modal]}>
              <FilterModalContent DATA3={DATA3} onCloseRight={onCloseRight} />
            </Modalize>
          </Portal>
          <Box>
            <HeaderGoBack title="Tất cả" navigation={navigation} />
          </Box>
          <Box height={0.17} width={wWitdh} backgroundColor="tabBarCircle" marginTop="s" />
          <Box style={styles.filterWrapper} borderBottomColor="tabBarCircle" >
            <TouchableOpacity style={styles.itemWrapper} onPress={onOpen}>
              <Box justifyContent="center">
                <Text style={styles.modalNameText} color="text">Danh mục</Text>
                <Text style={styles.modalDescriptionText} color="text">{DATA2[selectFilter].title}</Text>
              </Box>
              <Box justifyContent="center">
                <Icon type={Icons.AntDesign} name="down" size={12} color={theme.colors.tabBarCircle} />
              </Box>
            </TouchableOpacity>
            <Box height={0.04 * wHeight} backgroundColor="tabBarCircle" width={0.1} />
            <TouchableOpacity style={styles.itemWrapper} onPress={onOpenRight}>
              <Box justifyContent="center">
                <Text style={styles.modalNameText} color="text">Lọc và phân loại</Text>
                <Text style={styles.modalDescriptionText} color="text">{DATA3[checkFilter].title}</Text>
              </Box>
              <Box justifyContent="center">
                <Icon type={Icons.AntDesign} name="down" size={12} color={theme.colors.tabBarCircle} />
              </Box>
            </TouchableOpacity>
          </Box>
          {data ? (
            <VerticalFlatlist DATA={DATA} />
          ) : (<SkeletonScreen />)}
        </SafeAreaView>
      </Box>
    </>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
  filterWrapper: {
    height: 0.06 * wHeight,
    width: wWitdh,
    flexDirection: 'row',
    paddingVertical: 10,
    justifyContent: 'flex-start',
    borderBottomWidth: 0.17,
  },
  itemWrapper: {
    width: 0.5 * wWitdh,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  modal: {
    overflow: 'hidden',
    flex: 1,
    minHeight: wHeight,
  },
  modalNameText: {
    fontSize: '10@ms',
  },
  modalDescriptionText: {
    fontSize: '13@ms',
  },
});

export default FlatListVertical;




