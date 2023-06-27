import React, { useRef, useState } from 'react';
import {View} from 'react-native';
import { Video, AVPlaybackStatus  } from 'expo-av';
import { Text } from 'react-native';
import { Button } from 'react-native';
import { StatusBar } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

type VideoScreenProps = NativeStackScreenProps<RootStackParamList, "VideoScreen">

const VideoScreen: React.FC<VideoScreenProps> = ({ route }) => {
    const video = useRef(null);

    const { lecture } = route.params
    
    const { title, videoUrl, description } = lecture
    
    return (
        <View className="flex-1 bg-white" style={{paddingTop:StatusBar.currentHeight}}>  
            <Video
                ref={video} 
                source={{ uri: videoUrl }}
                useNativeControls
                isLooping
                shouldPlay
                className="w-full h-56"   
            />

            <Text className="px-2 py-2 text-lg font-bold ">{title}</Text>               
            <Text className="px-2 text-sm font-bold text-gray-500 ">{description}</Text>
        </View>
    );
}

export default VideoScreen;
