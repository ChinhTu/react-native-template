import { useTheme } from '@shopify/restyle';
import React from 'react';
import { SafeAreaView, SectionList, TouchableOpacity } from 'react-native';
import { Box, Text } from 'components/index';
import Icon from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import CardServices from 'components/CardServices/index';
import { useSelector } from 'react-redux';
import { selectDark } from 'redux/reducers/appearance';
import HeaderGoBack from 'components/HeaderGoBack/index';
import LayoutAndroid from 'layout/LayoutAndroid/index';
interface DataArray {
  title: string;
  data: { name: string; icon: JSX.Element; nextScreen?: string }[][];
}

const AllServicesScreen = ({ navigation }: any) => {
  const isDark = useSelector(selectDark);
  const DataServices: DataArray[] = [
    {
      title: 'Thanh toán hoá đơn, dịch vụ',
      data: [
        [
          {
            name: 'Khoản vay',
            icon: (
              <FontAwesome5 name="money-check-alt" size={26} color={isDark ? '#ccc' : 'black'} />
            ),
            nextScreen: 'KhoanVayScreen',
          },
          {
            name: 'Truyền hình',
            nextScreen: 'KhoanVayScreen',
            icon: <FontAwesome name="television" size={26} color={isDark ? '#ccc' : 'black'} />,
          },
          {
            name: 'Vé xe khách',
            nextScreen: 'KhoanVayScreen',
            icon: <FontAwesome5 name="bus" size={26} color={isDark ? '#ccc' : 'black'} />,
          },
        ],
        [
          {
            name: 'Thẻ cào điện thoại',
            nextScreen: 'KhoanVayScreen',
            icon: <FontAwesome name="credit-card" size={26} color={isDark ? '#ccc' : 'black'} />,
          },
          {
            name: 'Nạp tiền điện thoại',
            nextScreen: 'KhoanVayScreen',
            icon: <FontAwesome name="usd" size={26} color={isDark ? '#ccc' : 'black'} />,
          },
          {
            name: 'Phiếu quà tặng',
            nextScreen: 'KhoanVayScreen',
            icon: <FontAwesome5 name="ticket-alt" size={26} color={isDark ? '#ccc' : 'black'} />,
          },
        ],
        [
          {
            name: 'Cà phê nguyên bản',
            nextScreen: 'KhoanVayScreen',
            icon: <FontAwesome5 name="coffee" size={26} color={isDark ? '#ccc' : 'black'} />,
          },
          {
            name: 'Ri Coffee & Tea',
            nextScreen: 'KhoanVayScreen',
            icon: <MaterialCommunityIcons name="cup" size={26} color={isDark ? '#ccc' : 'black'} />,
          },
        ],
      ],
    },
    {
      title: 'Sản phẩm tài chính',
      data: [
        [
          {
            name: 'MCredit',
            nextScreen: 'KhoanVayScreen',
            icon: <Icon name="credit-card" size={26} color={isDark ? '#ccc' : 'black'} />,
          },
          {
            name: 'PTF',
            nextScreen: 'KhoanVayScreen',
            icon: <AntDesign name="creditcard" size={26} color={isDark ? '#ccc' : 'black'} />,
          },
          {
            name: 'Mirae Asset',
            nextScreen: 'KhoanVayScreen',
            icon: <FontAwesome name="credit-card" size={26} color={isDark ? '#ccc' : 'black'} />,
          },
        ],
        [
          {
            nextScreen: 'KhoanVayScreen',
            name: 'Home Credit',
            icon: (
              <FontAwesome name="credit-card-alt" size={26} color={isDark ? '#ccc' : 'black'} />
            ),
          },
          {
            name: 'CIMB',
            nextScreen: 'KhoanVayScreen',
            icon: <FontAwesome name="credit-card" size={26} color={isDark ? '#ccc' : 'black'} />,
          },
          {
            name: 'Easy Credit',
            nextScreen: 'KhoanVayScreen',
            icon: <FontAwesome5 name="credit-card" size={26} color={isDark ? '#ccc' : 'black'} />,
          },
        ],
      ],
    },
    {
      title: 'Mở ví điện tử, ngân hàng số',
      data: [
        [
          {
            name: 'VIB',
            nextScreen: 'KhoanVayScreen',
            icon: <Fontisto name="html5" size={26} color={isDark ? '#ccc' : 'black'} />,
          },
          {
            name: 'VPBank',
            nextScreen: 'KhoanVayScreen',
            icon: <Fontisto name="github" size={26} color={isDark ? '#ccc' : 'black'} />,
          },
          {
            name: 'VNPay',
            nextScreen: 'KhoanVayScreen',
            icon: <Fontisto name="vuejs" size={26} color={isDark ? '#ccc' : 'black'} />,
          },
        ],
        [
          {
            name: 'Ví MoMo',
            nextScreen: 'KhoanVayScreen',
            icon: <Fontisto name="react" size={26} color={isDark ? '#ccc' : 'black'} />,
          },
          {
            name: 'Tnex MSB',
            nextScreen: 'KhoanVayScreen',
            icon: <Fontisto name="angularjs" size={26} color={isDark ? '#ccc' : 'black'} />,
          },
          {
            name: 'MB Bank',
            nextScreen: 'KhoanVayScreen',
            icon: <Fontisto name="nodejs" size={26} color={isDark ? '#ccc' : 'black'} />,
          },
        ],
        [
          {
            name: 'Cake VPB',
            nextScreen: 'KhoanVayScreen',
            icon: <Fontisto name="redux" size={26} color={isDark ? '#ccc' : 'black'} />,
          },
          {
            name: 'CIMB Bank',
            nextScreen: 'KhoanVayScreen',
            icon: <Fontisto name="gitlab" size={26} color={isDark ? '#ccc' : 'black'} />,
          },
          {
            name: 'OCB OMNI',
            nextScreen: 'KhoanVayScreen',
            icon: <Fontisto name="sass" size={26} color={isDark ? '#ccc' : 'black'} />,
          },
        ],
        [
          {
            name: 'TPBank',
            nextScreen: 'KhoanVayScreen',
            icon: <Fontisto name="visual-studio" size={26} color={isDark ? '#ccc' : 'black'} />,
          },
        ],
      ],
    },
  ];
  // const Stack = createStackNavigator<any>();
  const { widthSize, colors } = useTheme();
  const Item = ({ data }: { data: { name: string; icon: JSX.Element; nextScreen?: string }[] }) => (
    <Box alignItems="center" width={widthSize.width}>
      <Box flexDirection="row" width={widthSize.width - 12}>
        {data.map((item, i) => (
          <TouchableOpacity
            key={i}
            onPress={() => {
              navigation.navigate(item.nextScreen);
            }}>
            <CardServices data={item} />
          </TouchableOpacity>
        ))}
      </Box>
    </Box>
  );
  return (
    <LayoutAndroid>
      <SafeAreaView style={{ flex: 1, backgroundColor: colors.backgroundPrimary }}>
        <Box paddingVertical="m">
          <HeaderGoBack title="Tất cả dịch vụ" navigation={navigation} />
        </Box>
        <SectionList
          sections={DataServices}
          stickySectionHeadersEnabled={false}
          keyExtractor={(item, index: any) => item + index}
          renderItem={({ item }) => <Item data={item} />}
          renderSectionHeader={({ section: { title } }) => (
            <Text variant="text" margin="m" fontSize={16}>
              {title}
            </Text>
          )}
        />
      </SafeAreaView>
    </LayoutAndroid>
  );
};

export default AllServicesScreen;
