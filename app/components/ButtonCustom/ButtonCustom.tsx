import React, { FC } from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  TextStyle,
  ViewStyle,
  ColorValue,
  // TouchableWithoutFeedbackProps,
  ButtonProps,
} from 'react-native';

interface Props extends ButtonProps {
  icon?: JSX.Element;
  backgroundColor?: ColorValue;
  iconColor?: ColorValue;
  borderRadius?: boolean;
  width?: number;
  height?: number;
  style?: ViewStyle | TextStyle;
  fontSize?: number;
  fontColor?: ColorValue;
}

const ButtonCustom: FC<Props> = props => {
  const {
    icon = null,
    title,
    backgroundColor = '#0072E5',
    iconColor = '#2E64FE',
    borderRadius = false,
    height = 34,
    width = 160,
    style,
    fontColor = '#fff',
    fontSize = 16,
    ...rest
  } = props;
  return (
    <TouchableOpacity
      style={[
        styles.wrap,
        {
          backgroundColor,
          height,
          minWidth: width,
          borderRadius: borderRadius ? 50 : 0,
          ...style,
        },
      ]}
      {...rest}>
      {icon && (
        <View
          style={[
            styles.icon,
            {
              height: height,
              borderRadius: borderRadius ? 50 : 0,
              minWidth: (30 / 100) * width,
              backgroundColor: iconColor,
            },
          ]}>
          {icon}
        </View>
      )}
      <Text
        style={[
          styles.text,
          {
            color: fontColor,
            fontSize: fontSize,
            minWidth: icon ? (70 / 100) * width : width,
          },
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  wrap: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 2,
    marginBottom: 40,
  },
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 5,
  },
});
export default ButtonCustom;
