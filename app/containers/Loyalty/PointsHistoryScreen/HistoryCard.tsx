import React from 'react';
import { Dimensions, SafeAreaView, TouchableOpacity } from 'react-native';

import { Box, Text } from 'components/index';
import { HistoryCardProps } from './Received';

const wHeight = Dimensions.get('window').height;
const HistoryCard = ({ data }: { data: HistoryCardProps }) => {
    return (
        <>
            < SafeAreaView>
                <Box>
                    <TouchableOpacity>
                        <Box backgroundColor="backgroundPrimary" height={0.12 * wHeight} justifyContent="space-evenly" paddingHorizontal="s" paddingVertical="s">
                            <Text color="textGrey" >{data.time}</Text>
                            <Text variant="textBold" color="text">{data.title}</Text>
                            <Box flexDirection="row" justifyContent="space-between">
                                <Text color="textGrey">{data.description}</Text>
                                <Text variant="textBold" color="textPrimary">{data.decreasePoints}</Text>
                            </Box>
                        </Box>
                    </TouchableOpacity>
                </Box>
            </SafeAreaView >
        </>

    );
};

export default HistoryCard;
