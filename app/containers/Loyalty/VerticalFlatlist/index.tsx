/* eslint-disable react-native/no-inline-styles */
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList, Dimensions, TouchableOpacity, Image } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

import { Box, Text } from 'components';
import { VerticalFlatlistProps } from './FlatListVertical';

interface Props {
    uri: string;
    title: string;
    description: string;
    point: number;
}

interface Nav {
    navigate: (value: string) => void;
}

const Item = ({ uri, title, description, point }: Props) => {
    const navigation = useNavigation<Nav>();
    return (
        <TouchableOpacity
            activeOpacity={0.5}
            style={styles.container}
            onPress={() => {
                navigation.navigate('DetailsRewardScreen');
            }}>
            <Box style={styles.item}>
                <Image
                    source={{
                        uri: `${uri}`,
                    }}
                    style={{ height: '100%', width: '100%' }}
                    resizeMode="cover"
                />
            </Box>
            <Box style={styles.textWrapper}>
                <Text variant="textBold" style={styles.title}>
                    {title}
                </Text>
                <Text variant="textBold" style={styles.description}>
                    {description}
                </Text>
                <Text variant="textBold" style={styles.point}>
                    {point} point
                </Text>
            </Box>
        </TouchableOpacity>
    );
};

const wHeight = Dimensions.get('window').height;
const wWitdh = Dimensions.get('window').width;
function VerticalFlatlist({ DATA }: { DATA: VerticalFlatlistProps[] }) {
    const renderItem = ({ item }: { item: VerticalFlatlistProps }) => (
        <Item title={item.title} uri={item.uri} description={item.description} point={item.point} />
    );
    return (
        <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item, index) => `${index}`}
            showsVerticalScrollIndicator={true}
        />
    );
}
const styles = ScaledSheet.create({
    container: {
        height: 0.15 * wHeight,
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomColor: '#ccc',
        borderBottomWidth: 0.5,
        marginHorizontal: 8,
    },
    item: {
        height: 0.12 * wHeight,
        width: 0.42 * wWitdh,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: 'blue',
    },
    textWrapper: {
        height: 0.12 * wHeight,
        marginHorizontal: 0.03 * wWitdh,
    },
    title: {
        fontSize: '12@ms',
    },
    description: {
        fontSize: '12@ms',
    },
    point: {
        position: 'absolute',
        bottom: 0,
        fontSize: '10@ms',
        color: 'green',
    },
});

export default VerticalFlatlist;
