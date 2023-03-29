import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { Text} from 'react-native';

const CourseCard = ({ id, title, image, department, description, lecture, videos}) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity 
            onPress={() => {
                navigation.navigate('CourseScreen',
                {
                    id,
                    title,
                    image,
                    department,
                    description,
                    lecture,
                    videos
                })
            }}
            className="bg-white  px-2 mt-4 shadow flex"
            >
            <Image
                source={image}
                className="w-48 h-36 rounded-sm object-fill bg-gray-400"
            />
            <View className="w-48 flex mt-3 gap-1">
                <Text className="font-bold text-lg w-full">{title}</Text>
                <Text className="font-bold text-xs text-gray-500  rounded-md mt-2">{department}</Text>
            </View>
                
        </TouchableOpacity>
    );
}

export default CourseCard;
