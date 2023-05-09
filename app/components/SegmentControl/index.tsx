import { useTheme } from '@shopify/restyle';
import React from 'react';
import { Animated, Dimensions, Easing, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Box, Text, Theme } from '../theme';

interface Props {
  segment: { title: string; icon?: JSX.Element }[];
  activeTab: number;
  style?: ViewStyle | TextStyle | undefined;
  onPress?: (value: { name: string; index: number }) => void;
  activeStyle?: ViewStyle | undefined;
  textStyle?: TextStyle | undefined;
  textActiveStyle?: TextStyle | undefined;
}

const Segment = ({
  segment,
  activeTab,
  style,
  activeStyle,
  textStyle,
  onPress,
  textActiveStyle,
}: Props) => {
  const [segmentWidth, setSegmentWidth] = React.useState(0);
  const theme = useTheme<Theme>();
  const { backgroundGrey } = theme.colors;

  const widthSegment = (
    segmentArr: { title: string; icon?: JSX.Element | undefined }[],
    width: string | number | undefined = Dimensions.get('window').width,
  ): { width: number } => {
    if (typeof width === 'number') {
      return {
        width: width / segmentArr.length,
      };
    } else {
      return { width: 0 };
    }
  };
  const heightSegment = (height: string | number | undefined) => {
    return (
      typeof height === 'number' && {
        height: height - 4,
      }
    );
  };

  const fadeAnim = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    const widthFirst = widthSegment(segment, style?.width);
    const { width } = widthFirst;
    setSegmentWidth(width);
  }, [segment, style?.width]);

  React.useEffect(() => {
    if (activeTab > 0) {
      translateXAnim(activeTab);
    }
  });

  const translateXAnim = (index: number) => {
    Animated.timing(fadeAnim, {
      toValue: segmentWidth * index,
      easing: Easing.out(Easing.quad),
      duration: 300,
      useNativeDriver: true,
    }).start();
  };
  return (
    <Box borderRadius="ml" style={[styles.container, { ...style }]}>
      <Box style={{ margin: 2 }}>
        <Box
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          position="relative"
          zIndex={999}>
          {segment.map((s, i) => {
            return (
              <TouchableOpacity
                key={i}
                style={[
                  styles.button,
                  widthSegment(segment, style?.width),
                  heightSegment(style?.height),
                ]}
                onPress={() => {
                  const value = {
                    name: s.title,
                    index: i,
                  };
                  translateXAnim(i);
                  typeof onPress === 'function' && onPress(value);
                }}>
                <Box
                  key={i}
                  flex={1}
                  flexDirection="row"
                  alignItems="center"
                  justifyContent="center"
                  // backgroundColor={
                  //   activeTab === i
                  //     ? 'backgroundPrimary'
                  //     : 'backgroundTransparent'
                  // }
                  borderRadius="ml">
                  {s.icon}
                  <Text style={activeTab === i ? textActiveStyle : textStyle}>{s.title}</Text>
                </Box>
              </TouchableOpacity>
            );
          })}
        </Box>
        <Animated.View
          style={[
            styles.animation,
            {
              backgroundColor: backgroundGrey,
              transform: [{ translateX: fadeAnim }],
              width: segmentWidth - 8,
            },
            activeStyle,
          ]}
        />
      </Box>
    </Box>
  );
};
const styles = StyleSheet.create({
  container: { backgroundColor: '#dddddd' },
  button: {
    flexDirection: 'row',
  },
  animation: {
    position: 'absolute',
    borderRadius: 7,
    top: 2,
    bottom: 2,
    right: 2,
    left: 2,
    borderWidth: 0.5,
    borderColor: 'rgba(0,0,0,0.04)',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
});
export default Segment;
