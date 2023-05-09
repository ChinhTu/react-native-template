import React from 'react';
import { Dimensions, SectionList } from 'react-native';

import { Box, Text } from 'components';
import HistoryCard from './HistoryCard';
import { chain } from 'lodash';

const wWidth = Dimensions.get('window').width;
const wHeight = Dimensions.get('window').height;

export interface HistoryCardProps {
    id: string;
    date: string;
    time: string;
    title: string;
    description: string;
    decreasePoints: string;
}

const DataActive = [
    {
        id: '1',
        date: 'Sat, 20 May 2022',
        time: '12:00 PM',
        title: 'Car ride',
        description: 'GrabRewards Points',
        decreasePoints: '-3',
    },
    {
        id: '2',
        date: 'Sat, 20 May 2022',
        time: '12:00 PM',
        title: 'Car ride',
        description: 'GrabRewards Points',
        decreasePoints: '-3',
    },
    {
        id: '3',
        date: 'Sat, 21 May 2022',
        time: '12:00 PM',
        title: 'Car ride',
        description: 'GrabRewards Points',
        decreasePoints: '-3',
    },
    {
        id: '',
        date: 'Sat, 21 May 2022',
        time: '12:00 PM',
        title: 'Car ride',
        description: 'GrabRewards Points',
        decreasePoints: '-3',
    },
    {
        id: '5',
        date: 'Sat, 21 May 2022',
        time: '12:00 PM',
        title: 'Car ride',
        description: 'GrabRewards Points',
        decreasePoints: '-3',
    },
];
const handleData = chain(DataActive)
    .groupBy('date')
    .map((value, key) => ({ date: key, data: value }))
    .value();
const Used = () => {
    return (
        <Box flex={1} alignItems="center">
            <SectionList
                style={{ width: wWidth }}
                sections={handleData}
                keyExtractor={(item, index) => item.id + index}
                renderItem={({ item }) => <HistoryCard data={item} />}
                renderSectionHeader={({ section: { date } }) => (
                    <Box backgroundColor="backgroundTab" justifyContent="center" padding="s" height={0.05 * wHeight}>
                        <Text variant="textBold">{date}</Text>
                    </Box>
                )}
            />
        </Box>
    );
};

export default Used;
