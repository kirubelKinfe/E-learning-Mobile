import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import {View, Text, SafeAreaView, StatusBar, Image} from 'react-native';
import Videos from '../components/Videos';

const CourseScreen = () => {
    const navigation = useNavigation();

    const { params: {
        id,
        image,
        title,
        description,
        department,
        lecture,
        videos
    }} = useRoute()

    return (
        <SafeAreaView className="bg-white">
                <Image
                    source={image}
                    className="w-full h-60 object-fill rounded-lg bg-gray-400"
                />
                <Text className=" font-bold text-lg px-2 py-2">{title}</Text>               
                <Text className=" font-bold text-sm text-gray-500 px-2 ">{description}</Text> 
                <View className="px-2 py-2 flex-row items-center">
                    <Image
                        source={require("../assets/pic1.jpg")}
                        className="h-8 w-8 bg-gray-300 p-4 rounded-full"
                    />
                    <Text className=" font-bold text-lg px-2 py-2">{lecture}</Text>
                </View>  
                <Text className=" font-bold text-lg px-2 py-2">Topics Covered</Text>
                
                <Videos videos={videos} />   
        </SafeAreaView>
    );
}
export default CourseScreen;
