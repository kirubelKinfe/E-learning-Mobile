import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { Text} from 'react-native';
import { CourseType } from '../common/types';

type CourseProps = {
    navigation: any;
    course: CourseType
}

const Course: React.FC<CourseProps> = ({ navigation, course }) => {

    const { title, thumbnail, department } = course
    
    return (
        <TouchableOpacity 
            onPress={() => {
                navigation.push('CourseScreen',
                {
                    course
                })
            }}
            className="flex px-2 mt-4 bg-white shadow"
            >
            <Image
                source={{
                    uri: thumbnail
                }}
                className="object-fill w-48 bg-gray-400 rounded-sm h-36"
            />
            <View className="flex w-48 gap-1 mt-3">
                <Text className="w-full text-lg font-bold">{title}</Text>
                <Text className="mt-2 text-xs font-bold text-gray-500 rounded-md">{department}</Text>
            </View>
                
        </TouchableOpacity>
    );
}

export default Course;
