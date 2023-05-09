import React, { useState } from 'react';
import {
  Modal,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { useTheme } from '@shopify/restyle';
import Icon from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Octicons from 'react-native-vector-icons/Octicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Box, Text } from 'components';
import FilterCheck from 'components/FilterChecked';
import FilterSwitch from 'components/FilterSwitch';

const wWidth = Dimensions.get('window').width;
const wHeight = Dimensions.get('window').height;
const ModalFilter = ({ modalVisible, setModalVisible }: any) => {
  const theme = useTheme();
  const dataFilter = [
    {
      title: 'Chọn riêng cho bản thân (mặc định)',
      icon: <Icon name="gift" color={theme.colors.text} size={21} />,
      name: 'default',
    },
    {
      title: 'Phổ biến nhất',
      icon: <Icon name="like2" color={theme.colors.text} size={21} />,
      name: 'populate',
    },
    {
      title: 'Xếp hạng',
      icon: <Entypo name="star-outlined" color={theme.colors.text} size={21} />,
      name: 'rank',
    },
    {
      title: 'Thời gian giao hàng',
      icon: <MaterialCommunityIcons name="clock-fast" color={theme.colors.text} size={21} />,
      name: 'time',
    },
  ];

  const dataSwitch = [
    {
      title: 'Ưu đãi',
      icon: <Icon name="tag" color={theme.colors.text} size={22} />,
      name: 'promotion',
    },
    {
      title: 'Xếp hạng cao nhất',
      icon: <FontAwesome5 name="medal" color={theme.colors.text} size={22} />,
      name: 'rank',
    },
  ];

  const dataCoupons = [
    {
      title: 'Ticket Restaurant',
      icon: <Icon name="camerao" color={theme.colors.text} size={21} />,
      check: false,
    },
    {
      title: 'Swile',
      icon: <Icon name="shoppingcart" color={theme.colors.text} size={21} />,
      check: false,
    },
    {
      title: 'Pass Sodexo',
      icon: <Icon name="barschart" color={theme.colors.text} size={21} />,
      check: false,
    },
    {
      title: 'Bimpli (Trước đây là Apetiz)',
      icon: <Icon name="setting" color={theme.colors.text} size={21} />,
      check: false,
    },
    {
      title: 'UpDéjeuner',
      icon: <Icon name="hearto" color={theme.colors.text} size={21} />,
      check: false,
    },
  ];
  const dataDiet = [
    {
      title: 'Đồ ăn chay',
      icon: <Entypo name="leaf" color={theme.colors.text} size={22} />,
      check: false,
    },
    {
      title: 'Đồ ăn thuần chay',
      icon: <Octicons name="feed-heart" color={theme.colors.text} size={22} />,
      check: false,
    },
    {
      title: 'Đồ ăn không chứa gluten',
      icon: <Entypo name="tree" color={theme.colors.text} size={22} />,
      check: false,
    },
    {
      title: 'Halal',
      icon: <MaterialCommunityIcons name="food-halal" color={theme.colors.text} size={22} />,
      check: false,
    },
    {
      title: 'Dùng được cho người bị dị ứng',
      icon: <MaterialCommunityIcons name="peanut-off" color={theme.colors.text} size={22} />,
      check: false,
    },
  ];
  const insets = useSafeAreaInsets();
  const [selectFilter, setSelectFilter] = useState<number>(0);
  const [getUberEat, setUberEat] = useState<Array<string>>([]);
  const [arraySelectCoupons, setArraySelectCoupons] = useState<Array<number>>([]);
  const [arraySelectDiet, setArraySelectDiet] = useState<Array<number>>([]);
  const handleCheckCoupons = (i: number) => {
    if (arraySelectCoupons.includes(i)) {
      setArraySelectCoupons(prev => prev.filter(item => item !== i));
    } else {
      arraySelectCoupons.length < 3 && setArraySelectCoupons(prev => [...prev, i]);
    }
  };
  const handleCheckDiet = (i: number) => {
    if (arraySelectDiet.includes(i)) {
      setArraySelectDiet(prev => prev.filter(item => item !== i));
    } else {
      setArraySelectDiet(prev => [...prev, i]);
    }
  };

  const handleSubmit = () => {
    const dataSubmitCoupons = dataCoupons.filter(
      (item, i) => arraySelectCoupons.includes(i) && item,
    );
    const dataSubmitDiet = dataDiet.filter((item, i) => arraySelectDiet.includes(i) && item);

    const data = {
      filter: dataFilter[selectFilter]?.name,
      uberEat: getUberEat,
      coupons: dataSubmitCoupons,
      diet: dataSubmitDiet,
    };
    setUberEat([]);
    console.log(data);
  };
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        // Alert.alert('Modal has been closed.');
        setModalVisible(!modalVisible);
      }}>
      <Box style={[styles.modalView, { marginTop: insets.top }]} backgroundColor="backgroundPrimary" flex={1}>
        <Box
          flexDirection="row"
          marginTop="m"
          marginBottom="m"
          marginHorizontal="m"
          alignItems="center"
          justifyContent="space-between">
          <Icon
            name="close"
            color={theme.colors.text}
            size={24}
            onPress={() => {
              setModalVisible(!modalVisible);
            }}
          />
          <Text variant="text">Tất cả bộ lọc</Text>
          <Box marginRight="l" />
        </Box>
        <Box borderWidth={0.6} borderColor="backgroundTab" />
        <ScrollView
          style={
            { flex: 1 }}>
          <Box marginHorizontal="m">
            <Box>
              <Text fontWeight="500" variant="text" marginVertical="m">
                Sắp xếp
              </Text>
              {dataFilter.map((item, i) => (
                <FilterCheck
                  typeIcon={undefined} nameIcon={''} key={i}
                  check={i === selectFilter}
                  {...item}
                  onPress={() => setSelectFilter(i)} />
              ))}
            </Box>
            <Box>
              <Text fontWeight="500" variant="text" marginVertical="m">
                Từ Uber Eats
              </Text>
              {dataSwitch.map((item, i) => (
                <FilterSwitch
                  key={i}
                  {...item}
                  onValueChange={value => {
                    setUberEat(prev => [...prev, value]);
                  }}
                />
              ))}
            </Box>

            <Box>
              <Text fontWeight="500" variant="text" marginVertical="m">
                Phiếu giảm giá đồ ăn
              </Text>
              {dataCoupons.map((item, i) => (
                <FilterCheck
                  typeIcon={undefined} nameIcon={''} key={i}
                  {...item}
                  check={arraySelectCoupons.includes(i)}
                  onPress={() => {
                    handleCheckCoupons(i);
                  }} />
              ))}
            </Box>
            <Box>
              <Text fontWeight="500" variant="text" marginVertical="m">
                Chế độ ăn
              </Text>
              {dataDiet.map((item, i) => (
                <FilterCheck
                  typeIcon={undefined} nameIcon={''} key={i}
                  {...item}
                  check={arraySelectDiet.includes(i)}
                  onPress={() => {
                    handleCheckDiet(i);
                  }} />
              ))}
            </Box>
          </Box>
        </ScrollView>
        <Box borderWidth={0.6} borderColor="backgroundTab" />
        <Box
          alignItems="center"
          justifyContent="center"
          backgroundColor="boxGrey"
          height={0.09 * wHeight}
        >
          <TouchableOpacity style={styles.btnBottomModal} onPress={handleSubmit}>
            <Text fontWeight="400" variant="text" color="textWhite">
              Áp dụng
            </Text>
          </TouchableOpacity>
        </Box>
      </Box>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalView: {
    width: wWidth,
    height: wHeight,
  },
  btnBottomModal: {
    width: Dimensions.get('window').width * 0.9,
    height: 0.05 * wHeight,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ModalFilter;
