import { useTheme } from '@shopify/restyle';
import React from 'react';
import { Image } from 'react-native-animatable';
import { useSelector } from 'react-redux';
import { Box, Text } from 'components';
import { selectDark } from 'redux/reducers/appearance';

type Props = {
  title?: string;
  image?: string;
  time?: string;
  isActive: boolean;
  amount: number;
};

const CardReward = (props: Props) => {
  const { title, image, time, isActive, amount } = props;
  const theme = useTheme();
  const isDark = useSelector(selectDark);

  return (
    <Box
      borderTopEndRadius="s"
      borderBottomEndRadius="s"
      style={{ width: theme.widthSize.width * 0.93, height: theme.widthSize.height * 0.13 }}
      marginVertical="n"
      alignSelf="center"
      backgroundColor="backgroundTab"
      padding="s">
      {/* Top card */}

      <Box style={{ width: '100%', height: '60%' }} flexDirection="row">
        <Image
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            width: theme.widthSize.width * 0.14,
            height: theme.widthSize.width * 0.14,
            resizeMode: 'cover',
            opacity: !isActive ? 0.4 : 1,
          }}
          source={{
            uri: image,
          }}
        />
        <Box justifyContent="space-between">
          <Box flexDirection="row">
            <Box
              // eslint-disable-next-line react-native/no-inline-styles
              style={{ backgroundColor: isActive ? '#CCFFCC' : '#D3D3D3' }}
              borderRadius="l"
              paddingHorizontal="s"
              paddingVertical="n"
              marginLeft="s">
              <Text fontSize={11} color={isActive ? 'textPrimary' : isDark ? 'dark' : 'white'}>
                Được tặng
              </Text>
            </Box>
            <Box
              // eslint-disable-next-line react-native/no-inline-styles
              style={{ backgroundColor: isActive ? '#CCFFCC' : '#D3D3D3' }}
              borderRadius="l"
              paddingHorizontal="s"
              marginLeft="s"
              paddingVertical="n">
              <Text fontSize={11} color={isActive ? 'textPrimary' : isDark ? 'dark' : 'white'}>
                MomiMart
              </Text>
            </Box>
          </Box>
          <Text marginLeft="s" fontWeight="700" color="text">
            {title}
          </Text>
        </Box>
      </Box>
      <Box />
      {/* Bottom card */}

      <Box
        flexDirection="row"
        justifyContent="space-between"
        paddingVertical="s"
        style={{ paddingLeft: theme.widthSize.width * 0.14 + 12 }}>
        <Text fontSize={12} variant="text">
          {isActive ? `Hạn đến ${time}` : `Đã dùng vào ${time}`}
        </Text>
        {isActive ? (
          <Text color="textPrimary" fontWeight="600">
            Sử Sụng
          </Text>
        ) : (
          <Text color="danger" fontWeight="600">
            Hết Hạn
          </Text>
        )}
      </Box>
      {amount > 1 && isActive && (
        <Box
          style={{ backgroundColor: '#D3D3D3' }}
          position="absolute"
          right={0}
          top={10}
          width={25}
          alignItems="center"
          borderTopLeftRadius="m"
          borderBottomLeftRadius="m">
          <Text>x4</Text>
        </Box>
      )}
    </Box>
  );
};

export default CardReward;
