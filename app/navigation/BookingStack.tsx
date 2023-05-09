import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ScreenB from 'containers/ScreenB';
import LoyaltyScreen from 'containers/Loyalty';
import MyRewardsScreen from 'containers/Loyalty/MyRewardsScreen';
import FlatListVertical from 'containers/Loyalty/VerticalFlatlist/FlatListVertical';
import DetailsReward from 'containers/Loyalty/DetailsReward/DetailsReward';
import PointsHistory from 'containers/Loyalty/PointsHistoryScreen';


const Stack = createStackNavigator<any>();

const BookingStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={'ScreenB'}
      screenOptions={{
        gestureEnabled: false,
        headerShown: false,
        cardStyle: { backgroundColor: 'transparent' },
      }}>
      <Stack.Screen name="ScreenB" component={ScreenB} />
      <Stack.Screen name="LoyaltyScreen" component={LoyaltyScreen} />
      <Stack.Screen name="MyRewardsScreen" component={MyRewardsScreen} />
      <Stack.Screen name="FlatListVertical" component={FlatListVertical} />
      <Stack.Screen name="DetailsRewardScreen" component={DetailsReward} />
      <Stack.Screen name="PointsHistoryScreen" component={PointsHistory} />

    </Stack.Navigator>
  );
};

export default BookingStack;
