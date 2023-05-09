import React from 'react';
import { Box, Text } from '../theme';
import { useTheme } from '@shopify/restyle';

type Props = {
  data: { name: string; icon: JSX.Element };
};

const CardServices = ({ data }: Props) => {

  const { widthSize } = useTheme();
  const width = widthSize.width / 3 - 12;
  return (
    <Box
      width={width}
      backgroundColor="backgroundTab"
      margin="n"
      height={width * 0.95}
      justifyContent="center"
      alignItems="center"
      borderRadius="s">
      {data.icon}
      <Box width={widthSize.width / 3 - 24} height={40}>
        <Text variant="text" paddingTop="s" textAlign="center" fontSize={13}>
          {data.name}
        </Text>
      </Box>
    </Box>
  );
};

export default CardServices;
