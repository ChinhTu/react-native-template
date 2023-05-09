/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { useTheme } from '@shopify/restyle';
import { SafeAreaView, Dimensions } from 'react-native';

import { Box } from 'components';
import HeaderGoBack from 'components/HeaderGoBack';
import LayoutAndroid from 'layout/LayoutAndroid';
import TabReward from '../MyRewardsScreen/TabView/Index';
import Received from './Received';
import Used from './Used';

const wHeight = Dimensions.get('window').height;

const PointsHistoryScreen = ({ navigation }: any) => {
    const theme = useTheme();
    return (
        <LayoutAndroid>
            <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.backgroundPrimary }}>
                <Box flex={1}>
                    <Box backgroundColor="backgroundPrimary" height={0.05 * wHeight} justifyContent="center">
                        <HeaderGoBack title="Lịch sử điểm thưởng" navigation={navigation} />
                    </Box>
                    <TabReward scenMap={{ first: Received, second: Used }} routes1={[{ key: 'first', title: 'Điểm đã nhận' }, { key: 'second', title: 'Điểm đã đổi' }]} />
                </Box>
            </SafeAreaView>
        </LayoutAndroid >
    );
};

export default PointsHistoryScreen;
