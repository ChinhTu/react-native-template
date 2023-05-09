import React from 'react';

import { Box, Text } from 'components';
import { Icon } from 'components';
import ImageBanner, { Content } from './ImageBanner';

export interface Props {
    title: string;
    type: any;
    iconName: string;
    content: Content[];
    key: string
}

const BannerItem = ({ type, iconName, title, content, key }: Props) => {
    return (
        <Box key={key} margin="s" backgroundColor="backgroundPrimary"  >
            <Box flexDirection="row">
                <Icon type={type} size={20} name={iconName} color="coral" />
                <Text variant="textBold" fontSize={16}>{title}</Text>
                <Icon type={type} size={20} name={iconName} color="coral" />
            </Box>
            {content.map((element, i) => (
                <ImageBanner key={i} {...element} height={0.22}
                />
            ))}
        </Box>
    );
};


export default BannerItem;
