import { useTheme } from '@shopify/restyle';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { Text } from 'components';
import HeaderGoBack from 'components/HeaderGoBack';
import LayoutAndroid from 'layout/LayoutAndroid';

type Props = {
  navigation: any;
};

const KhoanVayScreen = ({ navigation }: Props) => {
  const { colors } = useTheme();

  return (
    <LayoutAndroid>
      <SafeAreaView style={{ flex: 1, backgroundColor: colors.backgroundPrimary }}>
        <HeaderGoBack title="Khoản vay" navigation={navigation} />
        <Text marginLeft="l" variant="textBold">
          Khoản vay screen
        </Text>
      </SafeAreaView>
    </LayoutAndroid>
  );
};

export default KhoanVayScreen;
