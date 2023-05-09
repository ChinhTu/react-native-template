import React from 'react';
import { Dimensions, TouchableOpacity } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import FastImage from 'react-native-fast-image';
import { Box, Text } from 'components';

interface Array {
  listItem: Props[];
}
interface Props {
  icon: string;
  name: string;
  description: string;
  isNew: boolean;
}

const wWidth = Dimensions.get('window').width;
const wHeight = Dimensions.get('window').height;

const ListBody = ({ listItem }: Array) => {
  return (
    <Box backgroundColor="backgroundPrimary" style={styles.container}>
      {listItem.map((element, index) => {
        const { icon, name, isNew } = element;
        return (
          <TouchableOpacity key={index}>
            {element.isNew && (
              <Box style={styles.isNewWrapper}>
                <Text style={styles.isNewText}>New</Text>
              </Box>
            )}
            <Box style={styles.item}>
              <FastImage
                source={{
                  uri: `${icon}`,
                  priority: FastImage.priority.normal,
                }}
                resizeMode={FastImage.resizeMode.cover}
                style={styles.logo}
              />
              <Text
                variant="textBold"
                color={isNew ? 'isNewText' : 'tabBarText'}
                style={styles.name}>
                {name}
              </Text>
              <Text variant="textPrimary" style={styles.description}>
                {element.description}
              </Text>
            </Box>
          </TouchableOpacity>
        );
      })}
    </Box>
  );
};

const styles = ScaledSheet.create({
  container: {
    flexDirection: 'row',
    width: wWidth,
    minHeight: 0.05 * wHeight,
    flexWrap: 'wrap',
  },
  item: {
    width: 0.2 * wWidth,
    height: 0.2 * wWidth,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  logo: {
    marginTop: 10,
    width: 0.09 * wWidth,
    height: 0.09 * wWidth,
  },
  name: {
    fontSize: '10@ms',
    textAlign: 'center',
    paddingTop: 5,
  },
  description: {
    fontSize: '10@ms',
    textAlign: 'center',
    paddingVertical: 4,
    fontWeight: '500',
  },
  isNewWrapper: {
    width: 34,
    height: 24,
    backgroundColor: '#6AD980',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    borderBottomEndRadius: 8,
    zIndex: 100,
    marginLeft: 10,
  },
  isNewText: {
    color: '#fff',
    fontSize: 12,
  },
});

export default ListBody;
