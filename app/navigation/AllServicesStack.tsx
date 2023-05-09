import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AllServicesScreen from 'containers/AllServicesScreen';
import ScreenD from 'containers/ScreenD';
import KhoanVayScreen from 'containers/AllServicesScreen/ServicesScreen/KhoanVayScreen';

const Stack = createStackNavigator<any>();

const AllServicesStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: false,
        headerShown: false,
        cardStyle: { backgroundColor: 'transparent' },
      }}>
      <Stack.Screen name="ScreenD" component={ScreenD} />
      <Stack.Screen name="AllServices" component={AllServicesScreen} />
      <Stack.Screen name="KhoanVayScreen" component={KhoanVayScreen} />
    </Stack.Navigator>
  );
};

export default AllServicesStack;
