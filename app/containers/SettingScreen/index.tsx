import React, { useEffect, useRef } from 'react';
import { Box, Text, Theme } from 'components';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import OctionsIcon from 'react-native-vector-icons/Octicons';
import { useSelector, useDispatch } from 'react-redux';
import {
  changeLanguage,
  changeMode,
  selectDark,
  selectLanguage,
} from 'redux/reducers/appearance';
import SegmentControl from 'components/SegmentControl';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Modalize } from 'react-native-modalize';
import { useTheme } from '@shopify/restyle';
import i18next from 'i18next';
import Entypo from 'react-native-vector-icons/Entypo';
import { useTranslation } from 'react-i18next';
import { FlatList, SafeAreaView, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Linking } from 'react-native';
import LayoutAndroid from 'layout/LayoutAndroid';

const SettingScreen = () => {
  const theme = useTheme<Theme>();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const isDark = useSelector(selectDark);

  const Language = useSelector(selectLanguage);
  const [setlanguage, getlanguage] = React.useState(Language === 'vi' ? 0 : 1);
  useEffect(() => {
    i18next.changeLanguage(Language);
  }, [Language]);
  const Item = ({ title }: any) => (
    <Box>
      <Text style={{ ...styles.item, color: colorActive }}>{title}</Text>
    </Box>
  );
  const modalizeRef = useRef<Modalize>(null);

  const onOpen = () => {
    modalizeRef.current?.open();
  };
  const { backgroundTab } = theme.colors;
  const { height } = theme.widthSize;
  const color = isDark ? 'white' : 'black';
  const colorActive = isDark ? 'white' : 'black';
  const renderItem = ({ item }: any) => (
    <TouchableOpacity
      onPress={() => {
        item.modal && onOpen();
        if (item.email) {
          Linking.openURL('https://www.google.com/intl/vi/gmail/about/');
        }
        if (item.phone) {
          Linking.openURL(`tel:${1232425654}`);
        }
      }}>
      <Box flexDirection="row" marginTop="m" justifyContent="space-between" padding="n">
        <Box flexDirection="row">
          {item.icon}
          <Item title={t(item.title)} />
        </Box>
        {item.segment}
      </Box>
    </TouchableOpacity>
  );
  const lng = [
    {
      title: 'vi',
    },
    {
      title: 'en',
    },
  ];
  const dataFillter = [
    {
      title: 'Theme',
      icon: <FontAwesomeIcon name="heart" size={21} color={isDark ? '#ffffff' : '#000000'} />,
    },
    {
      title: 'Language',
      icon: (
        <MaterialCommunityIcons name="language" color={isDark ? '#ffffff' : '#000000'} size={21} />
      ),
      segment: (
        <SegmentControl
          segment={lng}
          activeTab={setlanguage}
          textStyle={{ ...styles.text, color }}
          textActiveStyle={{
            ...styles.textActive,
            color: colorActive,
          }}
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            width: 120,
            borderRadius: 4,
            height: 30,
            backgroundColor: backgroundTab,
          }}
          // eslint-disable-next-line react-native/no-inline-styles
          activeStyle={{
            borderRadius: 4,
          }}
          onPress={value => {
            getlanguage(value.index);
            // i18next.changeLanguage(value.name);
            dispatch(changeLanguage(value.name));
          }}
        />
      ),
    },
    {
      title: 'Account Setting',
      icon: <OctionsIcon name="feed-person" color={isDark ? '#ffffff' : '#000000'} size={21} />,
    },
    {
      title: 'Give Feedback',
      icon: (
        <MaterialCommunityIcons name="feedback" size={21} color={isDark ? '#ffffff' : '#000000'} />
      ),
    },
    {
      title: 'Contact',
      icon: <AntDesign name="contacts" size={21} color={isDark ? '#ffffff' : '#000000'} />,
      phone: 'phone',
    },
    {
      title: 'Email',
      icon: (
        <MaterialCommunityIcons name="email" size={21} color={isDark ? '#ffffff' : '#000000'} />
      ),
      // email: Linking.openURL('https://www.google.co.in/')
      email: 'email',
    },
  ];
  const tabs = [
    {
      title: 'Light',
      icon: <Entypo name="light-up" size={26} color={isDark ? '#ffffff' : '#000000'} />,
    },
    {
      title: 'Dark',
      icon: <FontAwesomeIcon name="moon-o" size={26} color={isDark ? '#ffffff' : '#000000'} />,
    },
  ];
  const [tab, setTab] = React.useState(isDark ? 1 : 0);

  return (
    <LayoutAndroid>
      <SafeAreaView>
        <Box backgroundColor="backgroundPrimary" paddingTop="m" height={height}>
          <Text variant="text">{t('Theme')}</Text>
          <Box flexDirection="column" margin="n" marginLeft="l" padding="n">
            <Box>
              <SegmentControl
                segment={tabs}
                activeTab={tab}
                textStyle={{ ...styles.text, color }}
                textActiveStyle={{
                  ...styles.textActive,
                  color: colorActive,
                }}
                style={{ ...styles.segment, backgroundColor: backgroundTab }}
                onPress={value => {
                  setTab(value.index);
                  dispatch(changeMode(value.name === 'Dark' ? true : false));
                }}
              />
            </Box>
          </Box>
          <Box borderWidth={0.25} marginTop="n" borderColor="border" />
          <Box padding="n" marginTop="n" margin="m">
            <FlatList data={dataFillter} renderItem={renderItem} />
          </Box>
        </Box>
      </SafeAreaView>
    </LayoutAndroid>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  segment: {
    width: 300,
    borderRadius: 10,
    height: 40,
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    marginLeft: 10,
  },
  textActive: {
    fontSize: 18,
    textAlign: 'center',
    marginLeft: 5,
  },
  item: {
    marginLeft: 10,
    fontSize: 18,
  },
});
export default SettingScreen;
