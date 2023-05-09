import React from 'react';
import { Dimensions, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import ModalFilter from './ModaFilter';
import { Box, Text } from 'components/theme';
import { useTheme } from '@shopify/restyle';
function ScreenB({ navigation }: any) {
  const [modalVisible, setModalVisible] = React.useState(false);
  const theme = useTheme();
  return (
    <SafeAreaView style={{ backgroundColor: theme.colors.backgroundPrimary, flex: 1 }}>
      <Box style={styles.centeredView}>
        <ModalFilter modalVisible={modalVisible} setModalVisible={setModalVisible} />
        <Box
          marginTop="m"
          justifyContent="space-between"
          style={{ width: Dimensions.get('window').width * 0.9 }}>
          <TouchableOpacity
            onPress={() => {
              setModalVisible(true);
            }}>
            <Text variant="textBold" fontSize={20}>
              Show Filter
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('LoyaltyScreen');
            }}>
            <Text variant="textBold" fontSize={20}>
              Loyalty
            </Text>
          </TouchableOpacity>
        </Box>
      </Box>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    alignItems: 'center',
    marginTop: 22,
    width: Dimensions.get('window').width,
  },
  wrap: {},

  close: {
    position: 'absolute',
    top: 0,
    left: 20,
    zIndex: 10,
    width: 30,
    height: 20,
  },
  body: {
    marginTop: 20,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    fontSize: 18,

    textAlign: 'center',
  },
});

export default ScreenB;
