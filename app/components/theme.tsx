import React, { ReactNode } from 'react';
import { ViewStyle, TextStyle, ImageStyle, Dimensions } from 'react-native';
import {
  createTheme,
  createText,
  createBox,
  useTheme as useReTheme,
  ThemeProvider as ReStyleThemeProvider,
} from '@shopify/restyle';
import { useSelector } from 'react-redux';
import { selectDark } from '../redux/reducers/appearance';

export const pallette = {
  white: '#ffffff',
  secondary: '#25509E',
  danger: '#FF0058',
  green: '#27BB66',
  lightGrey2: '#9aa0a5',
  darkGrey2: '#73797f',
  grey: '#505259',
  darkGrey: '#26252b',
  dark: '#36383f',
  transparent: 'transparent',
  lightGrey: '#f1f5f6',
  black: '#000000',
};

export const theme = createTheme({
  colors: {
    danger: pallette.danger,
    border: pallette.darkGrey2,
    text: pallette.dark,
    textGrey: pallette.darkGrey2,
    textPrimary: pallette.green,
    backgroundPrimary: pallette.white,
    backgroundTransparent: pallette.transparent,
    backgroundGrey: pallette.white,
    backgroundTab: pallette.lightGrey,
    background: pallette.white,
    dark: pallette.black,
    white: pallette.white,

    // cua ALong
    tabBarText: pallette.black,
    tabBarIcon: pallette.black,
    tabBarCircle: pallette.darkGrey2,
    isNew: pallette.secondary,
    isNewText: pallette.danger,
  },
  widthSize: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  spacing: {
    zero: 0,
    n: 4,
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
    xxl: 60,
  },
  button: {
    s: 20,
    m: 32,
    l: 48,
    xl: 60,
  },
  borderRadii: {
    s: 4,
    m: 10,
    l: 25,
    ml: 50,
    xl: 75,
    xxl: 100,
  },
  textVariants: {
    defaults: {},
    textPrimary: {
      color: 'textPrimary',
      lineHeight: 20,
      fontFamily: 'Montserrat',
    },
    textDisable: {
      color: 'textGrey',
      lineHeight: 20,
      fontFamily: 'Montserrat',
    },
    textSecondary: {
      color: 'isNew',
    },
    textBold: {
      color: 'tabBarText',
      fontWeight: 'bold',
    },
    textSemiBold: {
      color: 'tabBarText',
      fontWeight: '600',
      fontFamily: 'Montserrat',
    },
    textRegular: {
      fontWeight: '400',
      fontFamily: 'Montserrat',
      color: 'text',
    },
    hero: {
      // fontFamily: 'SFProDisplay-Bold',
      fontSize: 50,
      lineHeight: 80,
      color: 'text',
    },
    text: {
      color: 'text',
      fontSize: 14,
      fontFamily: 'Montserrat',
    },
  },
  breakpoints: {},
});

export type Theme = typeof theme;

export const darkTheme: Theme = {
  ...theme,
  colors: {
    ...theme.colors,
    border: pallette.lightGrey2,
    text: pallette.white,
    textPrimary: pallette.green,
    textGrey: pallette.lightGrey2,
    backgroundPrimary: pallette.dark,
    backgroundGrey: pallette.grey,
    backgroundTab: pallette.darkGrey,
    background: pallette.black,
    tabBarText: pallette.white,
    tabBarIcon: pallette.white,
    tabBarCircle: pallette.white,
  },
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const isDark = useSelector(selectDark);
  return <ReStyleThemeProvider theme={isDark ? darkTheme : theme}>{children}</ReStyleThemeProvider>;
};

export const Box = createBox<Theme>();
export const Text = createText<Theme>();
export const useTheme = () => useReTheme<Theme>();

type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle };
export const makeStyles =
  <T extends NamedStyles<T>>(styles: (theme: Theme) => T) =>
  () => {
    const currentTheme = useTheme();
    return styles(currentTheme);
  };
