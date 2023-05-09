import React, { useState } from 'react';
import { SafeAreaView, TouchableOpacity } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

import { Box, Text, useTheme, Icon, Icons } from 'components';
import FilterCheck from 'components/FilterChecked';

const ListModalContent = ({ DATA2, onClose }: any) => {
    const theme = useTheme();
    const [selectFilter, setSelectFilter] = useState(0);
    return (
        <SafeAreaView>
            <Box backgroundColor="backgroundPrimary">
                <Box flexDirection="row" justifyContent="space-between" marginHorizontal="s" paddingVertical="s" borderBottomWidth={0.8} borderBottomColor="tabBarCircle">
                    <TouchableOpacity onPress={onClose}>
                        <Icon type={Icons.Feather} name="x" size={30} color={theme.colors.text} />
                    </TouchableOpacity>
                    <Text variant="text" style={styles.titleText}>Danh mục</Text>
                    <Box width={30} />
                </Box>
                <Box flex={1} padding="s">
                    {
                        DATA2.map((item: any, i: number) => (
                            <Box borderBottomWidth={0.17} borderBottomColor="tabBarCircle" key={item.id + i}>
                                <FilterCheck
                                    check={i === selectFilter}
                                    {...item}
                                    onPress={() => { onClose(); setSelectFilter(i); }}
                                />
                            </Box>
                        ))
                    }
                </Box>
            </Box>
        </SafeAreaView>
    );
};

const styles = ScaledSheet.create({
    titleText: {
        fontSize: '24@ms',
    },
});

export default ListModalContent;
