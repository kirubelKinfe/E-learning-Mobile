import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native';
import {View, StyleSheet} from 'react-native';
import { Icon } from 'react-native-elements';

const VideoCard = ({ id, title, videoUrl, description }) => {
    const navigation = useNavigation()

    return (
        <TouchableOpacity 
            onPress={() => {
                navigation.navigate('VideoScreen',
                {
                    id,
                    title,
                    videoUrl,
                    description
                })
            }}
            className="bg-white flex-row mx-2 rounded-lg  px-4 py-2 mt-4 shadow-sm shadow-black"
            >
            <Text className="font-bold text-lg flex-1">{title}</Text>
            <Icon 
                className="w-10 rounded-full" 
                name='play'
                color="#00CCBB"
                type='antdesign'
            />
        </TouchableOpacity>
    );
}

export default VideoCard;
