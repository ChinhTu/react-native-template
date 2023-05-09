import React, { useEffect, useRef } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, TouchableOpacity, Platform, Dimensions } from 'react-native';
import { getFocusedRouteNameFromRoute, RouteProp } from '@react-navigation/native';
import { ScaledSheet } from 'react-native-size-matters';
import * as Animatable from 'react-native-animatable';
import { Host } from 'react-native-portalize';
import { useTranslation } from 'react-i18next';

import { Icon, Icons } from 'components';
import { Box, useTheme } from 'components';
import ExploreStack from './ExploreStack';
import SettingStack from './SettingStack';
import ProductListScreen from 'containers/ProductListScreen';
import AllServicesStack from './AllServicesStack';
import BookingStack from './BookingStack';

const platform = Platform.OS;
const TabArr = [
  {
    route: 'Account',
    label: 'Account',
    maintain: false,
    type: Icons.MaterialCommunityIcons,
    typeActive: Icons.MaterialCommunityIcons,
    icon: 'account-music-outline',
    iconActive: 'account-music',
    component: ExploreStack,
  },
  {
    route: 'Gifts',
    label: 'Gifts',
    maintain: false,
    type: Icons.Ionicons,
    typeActive: Icons.Ionicons,
    icon: 'gift-outline',
    iconActive: 'gift-sharp',
    component: BookingStack,
  },
  {
    route: 'Home',
    label: 'Home',
    maintain: true,
    type: Icons.Ionicons,
    typeActive: Icons.Ionicons,
    icon: 'home-outline',
    iconActive: 'home-sharp',
    component: ProductListScreen,
  },
  {
    route: 'General',
    label: 'General',
    maintain: false,
    type: Icons.Ionicons,
    typeActive: Icons.Ionicons,
    icon: 'musical-notes-outline',
    iconActive: 'musical-notes-sharp',
    component: AllServicesStack,
  },
  {
    route: 'Settings',
    label: 'Settings',
    maintain: false,
    type: Icons.Ionicons,
    typeActive: Icons.Ionicons,
    icon: 'settings-outline',
    iconActive: 'settings',
    component: SettingStack,
  },
];
const wHeight = Dimensions.get('window').height;

const Tab = createBottomTabNavigator();

const animate1 = { 0: { scale: 0.8 }, 1: { scale: 1 } };

const TabButton = (props: any) => {
  const { item, onPress, accessibilityState } = props;
  const focused = accessibilityState.selected;
  const iconRef = useRef<any>(null);
  const textRef = useRef<any>(null);
  const theme = useTheme();
  const { t } = useTranslation();

  useEffect(() => {
    if (focused) {
      iconRef.current.animate(animate1);
      textRef.current.animate(animate1);
    }
  }, [focused]);

  return (
    <TouchableOpacity activeOpacity={1} onPress={onPress} style={styles.wrapper}>
      <Box style={styles.container}>
        <Animatable.View
          duration={1000}
          style={[
            {
              backgroundColor: theme.colors.background,
              borderColor: theme.colors.tabBarCircle,
            },
            item.maintain ? styles.circle : styles.normalize,
          ]}>
          <View style={[{ borderColor: theme.colors.tabBarCircle }, styles.btn]}>
            <Animatable.View ref={iconRef}>
              <Icon
                type={focused ? item.typeActive : item.type}
                name={focused ? item.iconActive : item.icon}
                color={theme.colors.tabBarIcon}
              />
            </Animatable.View>
          </View>
          <Animatable.Text
            ref={textRef}
            style={[styles.activeText, { color: theme.colors.tabBarText }]}>
            {t(item.label)}
          </Animatable.Text>
        </Animatable.View>
      </Box>
    </TouchableOpacity>
  );
};

export const getTabBarVisibility = (route: RouteProp<any>) => {
  const routeName = getFocusedRouteNameFromRoute(route);
  switch (routeName) {
    case 'Home':
    case 'Explore':
    case undefined:
    case 'ScreenD':
    case 'ScreenB':
    case 'Settings':
      return 'flex';
    default:
      return 'none';
  }
};

export default function MyTabs() {
  const theme = useTheme();
  return (
    <Host>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          tabBarStyle: [styles.tabBar],
        }}>
        {TabArr.map((item, index) => {
          return (
            <Tab.Screen
              key={index}
              name={item.label}
              component={item.component}
              options={({ route }) => ({
                tabBarShowLabel: false,
                tabBarButton: props => <TabButton {...props} item={item} />,
                tabBarStyle: {
                  display: getTabBarVisibility(route),
                  backgroundColor: theme.colors.background,
                },
              })}
            />
          );
        })}
      </Tab.Navigator>
    </Host>
  );
}

const styles = ScaledSheet.create({
  wrapper: {
    flex: 1,
    zIndex: 1,
    position: 'relative',
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  normalize: {
    height: '45@vs',
    width: '45@s',
    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBar: {
    minHeight: '57@vs',
    position: 'relative',
    bottom: 0,
    right: 0,
    left: 0,
    opacity: 1,
  },
  circle: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '30@mvs',
    borderWidth: 1,
    height: '60@mvs',
    width: '60@mvs',
    marginBottom: 0.0001 * wHeight,
    position: 'absolute',
    bottom: platform === 'ios' ? 0.0003 * wHeight : 0.003 * wHeight,
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeText: {
    fontSize: '10@ms',
    paddingTop: 5,
    textAlign: 'center',
  },
});
