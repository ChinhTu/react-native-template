import React, { useState } from 'react';
import { Switch } from 'react-native';
import { Box, Text } from '../theme';

interface Props {
  title: string;
  icon: JSX.Element;
  name: string;
  onValueChange: (val: string) => void;
}

const FilterSwitch = (props: Props) => {
  const { title, icon, name, onValueChange } = props;
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <Box flexDirection="row" justifyContent="space-between" alignItems="center" marginVertical="m">
      <Box flexDirection="row" alignItems="center">
        {icon}
        <Text marginHorizontal="m" variant="text">
          {title}
        </Text>
      </Box>
      <Switch
        trackColor={{ false: '#767577', true: '#767577' }}
        thumbColor={isEnabled ? '#000' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={value => {
          toggleSwitch();
          value && typeof onValueChange === 'function' && onValueChange(name);
        }}
        value={isEnabled}
      />
    </Box>
  );
};

export default FilterSwitch;
