import * as React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import BottomTabs from './BottomTabs';
import { navigationRef, isReadyRef } from './RootNavigation';
import Splash from 'containers/SplashScreen';
import { AppNavigationThemeDark, AppNavigationThemeDefault } from 'fixtures/themes';
import { useSelector } from 'react-redux';
import { selectDark } from 'redux/reducers/appearance';

const Stack = createStackNavigator<any>();

const NavigationStack = () => {
  const isDark = useSelector(selectDark);

  React.useEffect(() => {
    return () => {
      isReadyRef.current = false;
    };
  }, []);
  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        isReadyRef.current = true;
      }}
      theme={isDark ? AppNavigationThemeDark : AppNavigationThemeDefault}>
      <StatusBar translucent barStyle={isDark ? 'light-content' : 'dark-content'} />
      <Stack.Navigator
        initialRouteName={'Splash'}
        screenOptions={{
          gestureEnabled: false,
          headerShown: false,
          // presentation: 'modal',
          cardStyle: { backgroundColor: 'transparent' },
        }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="BottomTabs" component={BottomTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationStack;
