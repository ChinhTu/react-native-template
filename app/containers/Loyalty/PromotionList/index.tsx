import React from 'react';
import { Dimensions, FlatList, TouchableOpacity } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

import { Box, Text, Icon } from 'components';
import ImageBanner from '../ImageBanner/ImageBanner';
import { PromoItemProps, PromotionProps } from './dataPromotion';


const wWitdh = Dimensions.get('window').width;
const Item = ({ image, name, description, pointUpdate, pointPass }: PromoItemProps) => {
    return (
        <Box width={0.65 * wWitdh} marginHorizontal="n">
            <ImageBanner height={0.15} image={image} name={name} decription={description} pointUpdate={pointUpdate}
                pointPass={pointPass} />
        </Box>
    );
};

const PromotionList = ({ list, typeIcon, nameIcon, title, utilities }: PromotionProps) => {
    const renderItem = ({ item }: { item: PromoItemProps }) => (
        <Item name={item.name} image={item.image} description={item.description} pointUpdate={item.pointUpdate}
            pointPass={item.pointPass}
        />
    );
    return (
        <Box width={wWitdh} style={styles.listWrapper}>
            <Box style={styles.title}>
                <Box flexDirection="row">
                    <Icon type={typeIcon} name={nameIcon} size={20} color="green" />
                    <Text variant="textBold" marginLeft="s">{title}</Text>
                </Box >
                <TouchableOpacity>
                    <Text variant="textPrimary" >{utilities}</Text>
                </TouchableOpacity>
            </Box >
            <Box width={wWitdh}>
                <FlatList
                    data={list}
                    renderItem={renderItem}
                    horizontal={true}
                />
            </Box>
        </Box >
    );
};

const styles = ScaledSheet.create({
    title: {
        height: '8%',
        width: wWitdh,
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 10,
        alignItems: 'center',
    },
    listWrapper: {
        height: '250@ms0.3',
    },
});

export default PromotionList;
