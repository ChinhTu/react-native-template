import React from 'react';
import { ScaledSheet } from 'react-native-size-matters';
import { Placeholder, PlaceholderMedia, PlaceholderLine, Fade } from 'rn-placeholder';
import { Box } from '../../components';

const SkeletonScreen = () => {
  return (
    <React.Fragment>
      <Box
        flexDirection="column"
        paddingVertical="m"
        borderTopWidth={1}
        borderTopColor="backgroundGrey">
        <Placeholder
          Animation={Fade}
          Left={props => <PlaceholderMedia style={[styles.media, props.style]} />}>
          <PlaceholderLine width={80} />
          <PlaceholderLine width={50} />
          <PlaceholderLine width={30} style={styles.bottomLine} />
        </Placeholder>
      </Box>
      <Box
        flexDirection="column"
        paddingVertical="m"
        borderTopWidth={1}
        borderTopColor="backgroundGrey">
        <Placeholder
          Animation={Fade}
          Left={props => <PlaceholderMedia style={[styles.media, props.style]} />}>
          <PlaceholderLine width={80} />
          <PlaceholderLine width={50} />
          <PlaceholderLine width={30} style={styles.bottomLine} />
        </Placeholder>
      </Box>
      <Box
        flexDirection="column"
        paddingVertical="m"
        borderTopWidth={1}
        borderTopColor="backgroundGrey">
        <Placeholder
          Animation={Fade}
          Left={props => <PlaceholderMedia style={[styles.media, props.style]} />}>
          <PlaceholderLine width={80} />
          <PlaceholderLine width={50} />
          <PlaceholderLine width={30} style={styles.bottomLine} />
        </Placeholder>
      </Box>
    </React.Fragment>
  );
};

const styles = ScaledSheet.create({
  media: {
    height: '84@mvs',
    width: '150@ms',
    marginHorizontal: 10,
    borderRadius: '8@s',
  },
  bottomLine: {
    marginTop: 30,
  },
});

export default SkeletonScreen;
