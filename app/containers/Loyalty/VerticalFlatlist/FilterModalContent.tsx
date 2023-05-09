/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { SafeAreaView, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider';
import { ScaledSheet } from 'react-native-size-matters';

import { Box, Text, useTheme, Icon, Icons } from 'components';
import FilterCheck from 'components/FilterChecked';
import { BannerProps } from './FlatListVertical';



const FilterModalContent = ({ DATA3, onCloseRight }: { DATA3: BannerProps[], onCloseRight: () => void }) => {
    const [val, setVal] = useState<Number>(0);
    const [checkFilter, setCheckFilter] = useState(1);
    const theme = useTheme();
    return (
        <SafeAreaView>
            <Box backgroundColor="backgroundPrimary">
                <Box flexDirection="row" justifyContent="space-between" marginHorizontal="s" paddingVertical="s" borderBottomWidth={0.8} borderBottomColor="tabBarCircle">
                    <TouchableOpacity onPress={onCloseRight}>
                        <Icon type={Icons.Feather} name="x" size={30} color={theme.colors.text} />
                    </TouchableOpacity>
                    <Text variant="text" style={styles.titleText}>Lọc và phân loại</Text>
                    <Box width={30} />
                </Box>
                <Box backgroundColor="backgroundTab" style={styles.titleWrapper}>
                    <Text variant="textBold" color="text">Phân loại theo</Text>
                </Box>
                <Box flex={1} paddingHorizontal="s">
                    {
                        DATA3.map((item: any, i: number) => (
                            <Box borderBottomWidth={0.17} borderBottomColor="tabBarCircle" key={item.id + i}>
                                <FilterCheck
                                    check={i === checkFilter}
                                    {...item}
                                    onPress={() => { onCloseRight(); setCheckFilter(i); }}
                                />
                            </Box>
                        ))
                    }
                </Box>
                <Box backgroundColor="backgroundTab" style={styles.titleWrapper}>
                    <Text variant="textBold" color="text">Lọc theo</Text>
                </Box>
                <Box padding="m" flex={1}>
                    <Text variant="textBold" color="text">Từ 0 {'->'} {val} điểm</Text>
                    <Slider
                        style={{ width: 350, height: 40 }}
                        minimumValue={0}
                        maximumValue={15000}
                        step={5}
                        minimumTrackTintColor="#53f57c"
                        maximumTrackTintColor="#cccccc"
                        thumbTintColor="#53f57c"
                        value={0}
                        onValueChange={value => setVal(value)}
                    />
                </Box>
            </Box>
        </SafeAreaView>
    );
};

const styles = ScaledSheet.create({
    titleWrapper: {
        height: '40@ms',
        paddingHorizontal: 10,
        justifyContent: 'center',
    },
    titleText: {
        fontSize: '24@ms',
    },
});

export default FilterModalContent;

