import { Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';
import { ScaledSheet } from 'react-native-size-matters';

import { Box, Text } from 'components';

interface Props {
  title: string;
  option: string;
  onPress: (() => void) | undefined;
}

const wHeight = Dimensions.get('window').height;

const ListHeader = ({ title, option, onPress }: Props) => {
  return (
    <React.Fragment>
      <Box backgroundColor="backgroundTab" style={styles.container}>
        <Text variant="textRegular" style={styles.titleText}>{title}</Text>
        <TouchableOpacity {...{ onPress }}>
          <Text variant="textSemiBold" style={styles.optionText}>{option}</Text>
        </TouchableOpacity>
      </Box>
    </React.Fragment>
  );
};

const styles = ScaledSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    minHeight: 0.06 * wHeight,
    paddingTop: 10,
    paddingBottom: 5,

    paddingHorizontal: 10,
  },
  titleText: {
    marginTop: 10,
    fontSize: '13@ms',
    fontWeight: '500',
  },
  optionText: {
    marginTop: 10,
    color: '#3886D9',
    fontSize: '13@ms',
    fontWeight: '500',
  },
});

export default ListHeader;
