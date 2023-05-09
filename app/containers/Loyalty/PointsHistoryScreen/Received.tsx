import { chain } from 'lodash';
import React from 'react';
import { Dimensions, SectionList } from 'react-native';
import { Box, Text } from 'components/index';
import HistoryCard from './HistoryCard';

const wHeight = Dimensions.get('window').height;
const wWidth = Dimensions.get('window').width;

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
        date: '06/07/2022',
        time: '12:00 PM',
        title: 'Payment for order #12345',
        description: 'GrabRewards Points',
        decreasePoints: '+100',

    },
    {
        id: '2',
        date: '06/07/2022',
        time: '12:00 PM',
        title: 'Payment for order #12345',
        description: 'GrabRewards Points',
        decreasePoints: '+100',


    },
    {
        id: '3',
        date: '08/07/2022',
        time: '12:00 PM',
        title: 'Payment for order #12345',
        description: 'GrabRewards Points',
        decreasePoints: '+100',
    },
    {
        id: '4',
        date: '09/07/2022',
        time: '12:00 PM',
        title: 'Car ride',
        description: 'GrabRewards Points',
        decreasePoints: '+100',
    },
    {
        id: '5',
        date: '10/07/2022',
        time: '12:00 PM',
        title: 'Car ride',
        description: 'GrabRewards Points',
        decreasePoints: '+100',
    },
];

const handleData = chain(DataActive)
    .groupBy('date')
    .map((value, key) => ({ date: key, data: value }))
    .value();
const Received = () => {
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

export default Received;
