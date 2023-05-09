import { useNavigation, useTheme } from '@react-navigation/native';
import React from 'react';
import { FlatList, Dimensions, TouchableOpacity } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

import { Box, Text, Icon } from 'components';
import { HorizontalFlatlistProps } from '..';
interface Nav {
    navigate: (value: string) => void;
}

const Item = ({ type, icon, title }: HorizontalFlatlistProps) => {
    const navigation = useNavigation<Nav>();
    const theme = useTheme();
    return (
        <TouchableOpacity activeOpacity={0.5} style={styles.container} onPress={() => {
            navigation.navigate('FlatListVertical');
        }}>
            <Box style={styles.item} backgroundColor="backgroundTab">
                <Icon type={type} name={icon} size={0.04 * wWitdh} color={theme.colors.text} />
            </Box>
            <Text style={styles.title} color="text">{title}</Text>
        </TouchableOpacity>
    );
};

const wHeight = Dimensions.get('window').height;
const wWitdh = Dimensions.get('window').width;
function HorizontalFlatlist({ DATA }: { DATA: HorizontalFlatlistProps[] }) {
    const renderItem = ({ item }: { item: HorizontalFlatlistProps }) => (
        <Item title={item.title} icon={item.icon} type={item.type} />
    );
    return (
        <FlatList
            horizontal={true}
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item, index) => `${index}`}
        />

    );
}
const styles = ScaledSheet.create({
    container: {
        height: 0.12 * wHeight,
        justifyContent: 'center',
        alignItems: 'center',
    },
    item: {
        justifyContent: 'center',
        marginHorizontal: 0.03 * wWitdh,
        marginBottom: 5,
        alignItems: 'center',
        height: '50@ms',
        width: '50@ms',
        borderRadius: '25@ms',
    },
    title: {
        fontSize: '10@ms',
    },
});

export default HorizontalFlatlist;
