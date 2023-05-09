import React, { ReactNode } from 'react';
import { Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Box } from '../../components/theme';

const LayoutAndroid = ({ children }: { children: ReactNode }) => {
  const insets = useSafeAreaInsets();
  return (
    <Box flex={1} style={{ paddingTop: Platform.OS === 'android' ? insets.top : 0 }}>
      {children}
    </Box>
  );
};

export default LayoutAndroid;
