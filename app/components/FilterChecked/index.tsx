import React from 'react';
import { useTheme } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';

import { Box, Text } from '../theme';
import { Icon } from '../';
interface Props {
  title: string;
  check: boolean;
  typeIcon?: any;
  nameIcon?: string;
  onPress: () => void;
}

const FilterCheck = (props: Props) => {
  const { title, typeIcon, nameIcon, check, onPress } = props;
  const theme = useTheme();
  return (
    <TouchableOpacity onPress={onPress}>
      <Box
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        marginVertical="m">
        <Box flexDirection="row" alignItems="center">
          <Icon type={typeIcon} name={nameIcon} size={21} color={theme.colors.text} />
          <Text marginLeft="m" variant="text">
            {title}
          </Text>
        </Box>
        {check ? <Icon name="check" color="#27BB66" size={20} /> : null}
      </Box>
    </TouchableOpacity>
  );
};

export default FilterCheck;
