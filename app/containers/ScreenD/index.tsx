/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Button, SafeAreaView } from 'react-native';
import { Box, Text } from 'components';
import LayoutAndroid from 'layout/LayoutAndroid';

interface Nav {
  navigate: (value: string) => void;
}

function ScreenD({ navigation }: { navigation: Nav }) {
  return (
    <LayoutAndroid>
      <Box flex={1}>
        <SafeAreaView style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              fontFamily: 'Montserrat',
            }}>
            ScreenD
          </Text>
          <Button
            title="Go All Services"
            onPress={() => {
              navigation.navigate('AllServices');
            }}
          />
        </SafeAreaView>
      </Box>
    </LayoutAndroid>
  );
}

export default ScreenD;
