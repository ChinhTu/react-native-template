import React from 'react';
import { Dimensions, Image, TouchableOpacity } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

import { Box, commonStyles, Text } from 'components';


export interface Content {
    image: string;
    decription: string;
    name: string;
    pointUpdate: string;
    pointPass: string;
    height: number;
    shadowImage?: boolean
}
const wHeight = Dimensions.get('window').height;
const ImageBanner = ({ image, name, decription, pointPass, pointUpdate, height, shadowImage }: Content) => {
    return (
        <TouchableOpacity activeOpacity={0.85} >
            <Box backgroundColor="backgroundTab" style={[styles.container, shadowImage ? commonStyles.shadowOp2 : null]}>
                <Box height={height * wHeight} width="100%" marginBottom="s">
                    <Image
                        style={styles.image}
                        resizeMode="cover" source={{
                            uri: `${image}`,
                        }} />
                </Box>
                <Box paddingHorizontal="s" >
                    <Text variant="textBold" marginVertical="n">{decription}</Text>
                    <Text variant="text" marginBottom="s">{name}</Text>
                    <Box flexDirection="row">
                        <Text variant="textPrimary" >{pointUpdate}</Text>
                        <Text textDecorationLine="line-through" variant="textDisable" marginHorizontal="s">{pointPass}</Text>
                        <Text variant="textDisable" marginBottom="n">điểm</Text>
                    </Box>
                </Box>
            </Box>
        </TouchableOpacity >
    );
};
const styles = ScaledSheet.create({
    container: {
        marginVertical: 10,
        borderRadius: 10,
        shadowRadius: 3,
    },
    image: {
        height: '100%',
        width: '100%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },

}
);
export default ImageBanner;
