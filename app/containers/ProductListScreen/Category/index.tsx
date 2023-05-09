import { StyleSheet, Dimensions } from 'react-native';
import React from 'react';

import ListHeader from '../List/ListHeader';
import ListBody from '../List/ListBody';
import { Box } from 'components';
import { List } from 'components/ProductData';

const wWidth = Dimensions.get('window').width;
const wHeight = Dimensions.get('window').height;

interface Props {
  data: List;
  onPressModal: () => void;
}

const ListWrapper = ({ data, onPressModal }: Props) => {
  return (
    <Box backgroundColor="backgroundTab" style={styles.container}>
      <ListHeader title={data.title} option={data.option} onPress={onPressModal} />
      <ListBody listItem={data.listItem} />
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    width: wWidth,
    minHeight: 0.1 * wHeight,
    backgroundColor: '#fff',
  },
});

export default ListWrapper;
