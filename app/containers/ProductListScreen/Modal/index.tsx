import React from 'react';
import { Dimensions, Image, TouchableOpacity } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

import { Icon, Icons } from 'components';
import { Box, Text, useTheme } from 'components';
import { ModalProps } from 'components/ProductData';

interface Array {
  onClose: (() => void);
  modal: ModalProps[] | undefined;
}

const wWidth = Dimensions.get('window').width;
const wHeight = Dimensions.get('window').height;

const Modal = ({ modal, onClose }: Array) => {
  const theme = useTheme();
  return (
    <Box backgroundColor="backgroundPrimary" style={styles.container}>
      <Box style={styles.header} backgroundColor="backgroundTab">
        <Box width={0.05 * wWidth} />
        <Text variant="textRegular" style={styles.headerText} color="tabBarText">Tiện ích</Text>
        <TouchableOpacity onPress={onClose}>
          <Icon type={Icons.MaterialIcons} name="cancel" color={theme.colors.tabBarIcon} size={0.05 * wWidth} />
        </TouchableOpacity>
      </Box>
      {modal?.map((item, index) => {
        return (
          <TouchableOpacity key={index}>
            <Box style={styles.item}>
              <Image source={{ uri: `${item.logo}` }} style={styles.logo} />
              <Text variant="textBold" style={styles.name} color="tabBarText">{item.name}</Text>
            </Box>
          </TouchableOpacity>
        );
      })}
    </Box>
  );
};

const styles = ScaledSheet.create({
  container: {
    width: wWidth,
    flexDirection: 'row',
    minHeight: 0.1 * wHeight,
    flexWrap: 'wrap',
  },
  item: {
    width: 0.25 * wWidth,
    height: 0.25 * wWidth,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    width: wWidth,
    height: 0.05 * wHeight,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopRadius: 40,
    paddingHorizontal: 30,
  },
  headerText: {
    fontSize: '12@ms',
    fontWeight: '500',
  },
  logo: {
    marginTop: 10,
    width: 0.07 * wWidth,
    height: 0.07 * wWidth,
  },
  name: {
    fontSize: '10@ms',
    textAlign: 'center',
    paddingTop: 10,
  },
});

export default Modal;
