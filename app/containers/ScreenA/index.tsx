import React from 'react';
import { SafeAreaView } from 'react-native';
import { Text } from 'components';
import LayoutAndroid from 'layout/LayoutAndroid';

function ScreenA() {
  return (
    <LayoutAndroid>
      <SafeAreaView>
        <Text>ScreenA</Text>
      </SafeAreaView>
    </LayoutAndroid>
  );
}

export default ScreenA;
