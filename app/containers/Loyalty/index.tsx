/* eslint-disable react-native/no-inline-styles */
import React, { useRef } from 'react';
import { useTheme } from '@shopify/restyle';
import { Dimensions, Animated, Platform, StatusBar } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { moderateScale, ScaledSheet } from 'react-native-size-matters';
import { TouchableOpacity } from 'react-native';

import { Box, Text, Icons } from 'components';
import TextInputCustom from 'components/TextInputCustom/TextInputCustom';
import HeaderGoBack from 'components/HeaderGoBack';
import HorizontalFlatlist from './HorizontalFlatlist';
import PromotionList from './PromotionList';
import { datapromotion1, datapromotion2 } from './PromotionList/dataPromotion';

const wheight = Dimensions.get('window').height;
const wWidth = Dimensions.get('window').width;

export interface HorizontalFlatlistProps {
  id?: string;
  type: any;
  icon: string;
  title: string;
}

const DATA = [
  {
    id: '1',
    type: Icons.MaterialCommunityIcons,
    icon: 'crown-outline',
    title: 'First Item',
  },
  {
    id: '2',
    type: Icons.Ionicons,
    icon: 'star-outline',
    title: 'First Item',
  },
  {
    id: '3',
    type: Icons.SimpleLineIcons,
    icon: 'wrench',
    title: 'First Item',
  },
  {
    id: '4',
    type: Icons.SimpleLineIcons,
    icon: 'handbag',
    title: 'First Item',
  },
  {
    id: '5',
    type: Icons.SimpleLineIcons,
    icon: 'tag',
    title: 'First Item',
  },
  {
    id: '6',
    type: Icons.SimpleLineIcons,
    icon: 'social-google',
    title: 'First Item',
  },
  {
    id: '7',
    type: Icons.SimpleLineIcons,
    icon: 'pin',
    title: 'First Item',
  },
  {
    id: '8',
    type: Icons.SimpleLineIcons,
    icon: 'cup',
    title: 'First Item',
  },
  {
    id: '9',
    type: Icons.SimpleLineIcons,
    icon: 'film',
    title: 'First Item',
  },
];

const LoyaltyScreen = ({ navigation }: any) => {
  const theme = useTheme();
  const insets = useSafeAreaInsets();

  const scroll = useRef(new Animated.Value(0)).current;
  const opacityRanger = [-1, 10, 20, 30];
  const opacity = scroll.interpolate({
    inputRange: opacityRanger,
    outputRange: [-1, 0.3, 0.6, 0.7],
  });
  return (
    <Box flex={1}>
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
          title="MomiRewards"
          navigation={navigation}
          right={{
            icon: (
              <MaterialCommunityIcons
                name="ticket-confirmation-outline"
                size={24}
                color={theme.colors.text}
              />
            ),
            onPress: () => {
              navigation.navigate('MyRewardsScreen');
            },
          }}
        />
      </Animated.View>
      <Animated.ScrollView
        style={{ flex: 1 }}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scroll } } }], {
          useNativeDriver: true,
        })}>
        <LinearGradient colors={['#98DE5B', '#20BF55', '#3EE577']}>
          <Box
            style={{
              marginTop: insets.top,
              height: wheight * 0.22,
            }}
            marginHorizontal="l">
            <Box marginBottom="m">
              <AntDesign
                name="left"
                size={moderateScale(22)}
                color={theme.colors.white}
                onPress={() => {
                  navigation.goBack();
                }}
              />
            </Box>
            <Box flexDirection="row" justifyContent="space-between" alignItems="center">
              <Box>
                <Text
                  variant="textBold"
                  fontSize={moderateScale(20)}
                  color="white"
                  marginBottom="n">
                  Thành Viên
                </Text>
                <Text variant="textBold" fontSize={moderateScale(12)} color="white">
                  0 Điểm
                </Text>
              </Box>
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => {
                  navigation.navigate('MyRewardsScreen');
                }}>
                <Box
                  backgroundColor="white"
                  flexDirection="row"
                  justifyContent="center"
                  alignItems="center"
                  paddingVertical="n"
                  paddingHorizontal="s"
                  borderRadius="l">
                  <MaterialCommunityIcons
                    name="ticket-confirmation-outline"
                    size={24}
                    color={theme.colors.textPrimary}
                  />
                  <Text marginStart="s" style={styles.textSize} color="textPrimary">
                    Ưu đãi của tôi
                  </Text>
                </Box>
              </TouchableOpacity>
            </Box>
            <Box style={{ marginTop: moderateScale(24) }}>
              <TextInputCustom
                style={[styles.inputSize, { backgroundColor: '#fff', borderRadius: 10 }]}
                placeholder="Tìm danh mục reward"
                icon={<AntDesign name="search1" size={20} color="#000" />}
              />
            </Box>
          </Box>
        </LinearGradient>
        <TouchableOpacity onPress={() => navigation.navigate('PointsHistoryScreen')}>
          <Box
            alignItems="center"
            flexDirection="row"
            height={0.06 * wheight}
            backgroundColor="backgroundTab"
            paddingHorizontal="s">
            <MaterialCommunityIcons
              name="ticket-confirmation-outline"
              size={26}
              color={theme.colors.textPrimary}
            />
            <Text variant="textBold" marginHorizontal="s">
              Lịch sử điểm thưởng
            </Text>
          </Box>
        </TouchableOpacity>
        <Box style={[{ backgroundColor: theme.colors.backgroundPrimary, flex: 1 }]}>
          <Box height={100}>
            <HorizontalFlatlist DATA={DATA} />
          </Box>
          <PromotionList {...datapromotion1} />
          <PromotionList {...datapromotion2} />
        </Box>
      </Animated.ScrollView>
    </Box>
  );
};

export default LoyaltyScreen;

const styles = ScaledSheet.create({
  inputSize: {
    height: '35@ms',
  },
  textSize: {
    fontSize: '13@ms',
  },
});
