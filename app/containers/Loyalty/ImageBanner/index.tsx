import React from 'react';
import BannerItem, { Props } from './BannerItem';

interface Array {
    data: Props[];
}

const ListBanner = ({ data }: Array) => {
    return (
        <>
            {data.map((item: any, index: number) => {
                return (
                    <BannerItem title={item.title} type={item.type} iconName={item.iconName} content={item.content} key={`${index}`} />
                );
            })}
        </>
    );
};

export default ListBanner;
