import React, { useRef, useState } from 'react';
import {View} from 'react-native';
import { Video, AVPlaybackStatus  } from 'expo-av';
import { Text } from 'react-native';
import { Button } from 'react-native';
import { StatusBar } from 'react-native';
import { useRoute } from '@react-navigation/native';

const VideoScreen = () => {
    const video = useRef(null);

    const { params: {
        id,
        title,
        description,
        videoUrl
    }} = useRoute()

    return (
        <View className="flex-1 bg-white" style={{paddingTop:StatusBar.currentHeight}}>  
            <Video
                ref={video} 
                source={{ uri: videoUrl }}
                useNativeControls
                resizeMode='contain'
                isLooping
                className="w-full h-56"   
            />

            <Text className=" font-bold text-lg px-2 py-2">{title}</Text>               
            <Text className=" font-bold text-sm text-gray-500 px-2 ">{description}</Text>
        </View>
    );
}

export default VideoScreen;
