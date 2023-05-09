import React, { useRef, useState } from 'react';
import { Dimensions, SafeAreaView, ScrollView } from 'react-native';
import { Modalize } from 'react-native-modalize';
import { useNavigation } from '@react-navigation/native';

import ListWrapper from './Category';
import Modal from './Modal';
import { DataArray } from 'components/ProductData';
import { Portal } from 'react-native-portalize';
import { useTheme } from '@shopify/restyle';
import { ScaledSheet } from 'react-native-size-matters';
import LayoutAndroid from 'layout/LayoutAndroid';
interface Nav {
  navigate: (value: string) => void;
}
const wHeight = Dimensions.get('window').height;

const ProductListScreen: React.FC = () => {
  const themes = useTheme();
  const navigation = useNavigation<Nav>();
  const [modalIndex, setmodalIndex] = useState<number>(0);
  const modalizeRef = useRef<Modalize>(null);
  const onOpen = (index: number) => {
    setmodalIndex(index);
    modalizeRef.current?.open();
  };
  const onClose = () => {
    modalizeRef.current?.close();
  };
  const handleNavigation = () => {
    navigation.navigate('Booking');
  };
  return (
    <LayoutAndroid>
      <Portal>
        <Modalize
          ref={modalizeRef}
          modalHeight={0.3 * wHeight}
          modalStyle={[{ backgroundColor: themes.colors.backgroundPrimary }, styles.modalize]}>
          <Modal modal={DataArray[modalIndex].modal} onClose={onClose} />
        </Modalize>
      </Portal>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.body}>
          {DataArray.map((item, index) => {
            return (
              <ListWrapper
                key={index}
                data={item}
                onPressModal={() => (item.modal ? onOpen(index) : handleNavigation())}
              />
            );
          })}
        </ScrollView>
      </SafeAreaView>
    </LayoutAndroid>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flex: 1,
  },
  modalize: {
    overflow: 'hidden',
    borderTopLeftRadius: '25@ms',
    borderTopRightRadius: '25@ms',
  },
});

export default ProductListScreen;
