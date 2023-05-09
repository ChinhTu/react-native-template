/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { SafeAreaView } from 'react-native';
import { Box, Text } from 'components';

function ScreenC() {
  return (
    <Box flex={1}>
      <SafeAreaView style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            fontFamily: 'Montserrat',
          }}>
          ScreenC
        </Text>
      </SafeAreaView>
    </Box>
  );
}

export default ScreenC;
