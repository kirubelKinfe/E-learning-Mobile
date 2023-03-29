import React from 'react';
import { FlatList } from 'react-native';
import {View} from 'react-native';
import { videos } from '../constants/arrays';
import VideoCard from './VideoCard';

const Videos = ({ videos }) => {
    return (
        <FlatList
            data={videos}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
                <VideoCard
                    id={item.id}
                    title={item.title}
                    videoUrl={item.videoUrl}
                    description={item.description}
                />
            )}
        />
    )
}

export default Videos;
