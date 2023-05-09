import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Box, Text } from '../theme';
import Icon from 'react-native-vector-icons/AntDesign';
import { useSelector } from 'react-redux';
import { selectDark } from 'redux/reducers/appearance';
import { moderateScale } from 'react-native-size-matters';

type Props = {
  title?: string;
  navigation: any;
  right?: {
    icon?: Element;
    onPress?: () => void;
  };
};

const HeaderGoBack = ({ title, navigation, right }: Props) => {
  const isDark = useSelector(selectDark);

  return (
    <Box flexDirection="row" alignItems="center" justifyContent="space-between">
      <Box minWidth={30}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Icon name="left" size={moderateScale(22)} color={isDark ? '#ccc' : 'black'} />
        </TouchableOpacity>
      </Box>
      <Text marginLeft="m" variant="text" fontSize={moderateScale(16)} fontWeight="600">
        {title}
      </Text>
      <Box minWidth={30}>
        {right && (
          <TouchableOpacity
            onPress={() => {
              typeof right.onPress === 'function' && right.onPress();
            }}>
            {right.icon}
          </TouchableOpacity>
        )}
      </Box>
    </Box>
  );
};

export default HeaderGoBack;
