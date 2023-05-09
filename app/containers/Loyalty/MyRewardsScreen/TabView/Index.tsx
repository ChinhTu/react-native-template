/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import { Dimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { useTheme } from 'components';

const initialLayout = { width: Dimensions.get('window').width };



export default function TabReward({ scenMap, routes1 }: any) {
  const renderScene = SceneMap(scenMap);
  const theme = useTheme();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState(routes1);
  const renderTabBar = (props: any) => (
    <TabBar
      inactiveColor={theme.colors.text}
      activeColor={theme.colors.textPrimary}
      labelStyle={{ textTransform: 'none', fontSize: 15 }}
      {...props}
      indicatorStyle={{ backgroundColor: theme.colors.textPrimary }}
      style={{
        backgroundColor: theme.colors.backgroundPrimary,
        marginBottom: 5,
      }}
    />
  );

  return (
    <TabView
      navigationState={{ index, routes }}
      renderTabBar={renderTabBar}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      style={{ backgroundColor: theme.colors.backgroundPrimary }}
    />
  );
}
