/* eslint-disable react-native/no-inline-styles */
import { useTheme } from '@shopify/restyle';
import React, { useRef } from 'react';
import {
  Animated,
  Dimensions,
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import { moderateScale } from 'react-native-size-matters';

import { Box, Text } from 'components';
import HeaderGoBack from 'components/HeaderGoBack';

const wheight = Dimensions.get('window').height;
const wWidth = Dimensions.get('window').width;

const DetailsReward = ({ navigation }: any) => {
  const theme = useTheme();
  const insets = useSafeAreaInsets();

  const scroll = useRef(new Animated.Value(0)).current;
  const opacityRanger = [-1, 10, 20, 30];
  const opacity = scroll.interpolate({
    inputRange: opacityRanger,
    outputRange: [-1, 0.3, 0.6, 0.7],
  });
  return (
    <Box flex={1} backgroundColor="backgroundPrimary">
      <StatusBar backgroundColor={'transparent'} />
      <Animated.View
        style={{
          position: 'absolute',
          paddingTop: insets.top,
          zIndex: 99,
          paddingHorizontal: Platform.OS === 'ios' ? 24 : 20,
          paddingBottom: 16,
          width: wWidth,
          backgroundColor: theme.colors.backgroundPrimary,
          opacity: opacity,
        }}>
        <HeaderGoBack
          title="The Zing VNG 10.000 VND"
          navigation={navigation}
          right={{
            icon: (
              <MaterialCommunityIcons name="share-variant" size={24} color={theme.colors.text} />
            ),
            // onPress: () => {
            //   navigation.navigate('MyRewardsScreen');
            // },
          }}
        />
      </Animated.View>
      <Animated.ScrollView
        style={{ flex: 1, marginBottom: 16 }}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scroll } } }], {
          useNativeDriver: true,
        })}>
        <Image
          style={{ width: wWidth, height: wheight * 0.3, position: 'relative' }}
          source={{
            uri: 'https://assets.grab.com/wp-content/uploads/sites/11/2022/06/13202415/rsz_6cover.jpg',
          }}
        />
        <LinearGradient
          colors={['#000000', '#000000', '#000000', '#434343']}
          style={{
            position: 'absolute',
            width: wWidth,
            height: wheight * 0.3,
            zIndex: 50,
            opacity: 0.4,
          }}
        />
        <Box
          flexDirection="column"
          justifyContent="space-between"
          style={{
            width: wWidth,
            height: wheight * 0.3 - insets.top,
            position: 'absolute',
            marginTop: insets.top,
            opacity: 1,
            zIndex: 100,
          }}>
          <Box marginHorizontal="l" flexDirection="row" justifyContent="space-between">
            <AntDesign
              name="left"
              size={moderateScale(24)}
              color={theme.colors.white}
              onPress={() => {
                navigation.goBack();
              }}
            />
            <MaterialCommunityIcons
              name="share-variant"
              size={moderateScale(24)}
              color={theme.colors.white}
              onPress={() => {
                navigation.goBack();
              }}
            />
          </Box>
          <Box margin="l" flexDirection="row" alignItems="center">
            <Image
              style={{
                width: 50,
                height: 50,
                marginRight: 10,
                borderColor: 'white',
                borderWidth: 1,
                borderRadius: 5,
              }}
              source={{
                uri: 'https://play-lh.googleusercontent.com/-F9U-9ieEr2lkYu6-Sbt-Mh61ey39hklYp8VK2cHoL9Jmdf1SQ1s6zTnt4CcjP9PROw',
              }}
            />
            <Text variant="textBold" color="white">
              Zing VNG
            </Text>
          </Box>
        </Box>
        <Box marginHorizontal="l">
          <Box alignItems="center" marginTop="m" marginHorizontal="m">
            <Text variant="textSemiBold" fontSize={16} textAlign="center">
              [15/07] Ưu đãi 20% nạp thẻ Zing VNG 100K
            </Text>
          </Box>
          <Box flexDirection="row" flex={1} marginVertical="m">
            <Box flex={0.5}>
              <Text variant="textSemiBold">Điểm</Text>
              <Text marginTop="n" variant="textSemiBold">
                450{' '}
                <Text variant="textRegular" fontSize={10}>
                  điểm
                </Text>
              </Text>
            </Box>
            <Box flex={0.5} borderLeftWidth={0.7} style={{ borderColor: '#ccc' }}>
              <Box marginLeft="m">
                <Text variant="textSemiBold">Hiệu lực</Text>
                <Text marginTop="n" variant="textSemiBold">
                  15 thg 7 2022 to 15 thg 7 2022
                </Text>
              </Box>
            </Box>
            <Box />
          </Box>
          <Box borderWidth={0.5} style={{ borderColor: '#ccc' }} />
          <Box marginTop="m">
            <Text variant="textBold" fontSize={16}>
              Description
            </Text>
            <Text marginTop="s" variant="textSemiBold" lineHeight={22} fontSize={14}>
              Đưa tận chỗ, rước tận nơi, GrabBike/ GrabCar ưu đãi 50% tối đa 30.000đ cho bạn mới.
              Bạn mới cần giao đồ gấp có GrabExpress ưu đãi 50% tối đa 30.000đ Ẩm thực Á Âu, món
              ngon xa gần, GrabFood khao bạn mới 50% tối đa 40.000đ Lần đầu đi chợ, trả thẻ/ ví
              Moca, GrabMart tặng deal 50% tối đa 30.000đ.
            </Text>
            <Text variant="textSemiBold" lineHeight={22} fontSize={14}>
              Với Grab, việc gọi taxi cực dễ dàng chỉ với 2 bước đơn giản. Nếu bạn là người thường
              xuyên di chuyển tại các nước Đông Nam Á, thì có thể thấy được tiện ích của dịch vụ gọi
              xe taxi của Grab mang lại. Ra đời vào năm 2012, thị trường chính của Grab tại Đông Nam
              Á, bắt đầu triển khai tại Malaysia, sau đó đến Singapore, Việt Nam, Thái Lan,
              Indonesia, Philippines. Gần đây, Grab cũng chính thức cung cấp dịch vụ đến thị trường
              Hoa Kỳ nhộn nhịp với tên gọi Lyft, và có mặt ở khoảng 200 thành phố khắp các tiểu bang
              Hoa Kỳ
            </Text>
          </Box>
          <Box
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            borderTopWidth={0.7}
            borderBottomWidth={0.7}
            style={{ borderColor: '#ccc' }}
            marginTop="l">
            <Box flexDirection="row" alignItems="center" paddingVertical="s">
              <MaterialCommunityIcons name="flag" size={24} color={theme.colors.text} />
              <Text marginLeft="s" variant="textSemiBold">
                Báo lỗi quà thưởng cho Grab
              </Text>
            </Box>
            <AntDesign
              name="right"
              size={moderateScale(22)}
              color={theme.colors.text}
              onPress={() => {
                navigation.goBack();
              }}
            />
          </Box>
        </Box>
      </Animated.ScrollView>
      <Box
        alignItems="center"
        justifyContent="center"
        backgroundColor="backgroundTab"
        height={0.1 * wheight}>
        <TouchableOpacity style={styles.btnBottomModal}>
          <Text variant="textBold" color="white" fontSize={16}>
            Đổi điểm
          </Text>
        </TouchableOpacity>
      </Box>
    </Box>
  );
};

export default DetailsReward;

const styles = StyleSheet.create({
  btnBottomModal: {
    borderRadius: 5,
    width: Dimensions.get('window').width * 0.9,
    height: 0.05 * wheight,
    backgroundColor: '#20BF55',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
