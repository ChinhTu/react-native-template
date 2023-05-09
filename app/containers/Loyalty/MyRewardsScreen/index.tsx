/* eslint-disable react-native/no-inline-styles */
import { useTheme } from '@shopify/restyle';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { Box } from 'components';
import HeaderGoBack from 'components/HeaderGoBack';
import LayoutAndroid from 'layout/LayoutAndroid';
import ActiveReward from './ActiveRewards';
import PastReward from './PassReward';
import TabReward from './TabView/Index';

const MyRewardsScreen = ({ navigation }: any) => {
  const theme = useTheme();
  return (
    <LayoutAndroid>
      <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.backgroundPrimary }}>
        <Box flex={1}>
          <Box backgroundColor="backgroundPrimary">
            <HeaderGoBack title="Ưu đãi của tôi " navigation={navigation} />
          </Box>
          <TabReward scenMap={{ first: ActiveReward, second: PastReward }} routes1={[{ key: 'first', title: 'Active Rewards' }, { key: 'second', title: 'Past Rewards' }]} />
        </Box>
      </SafeAreaView>
    </LayoutAndroid>
  );
};

export default MyRewardsScreen;
