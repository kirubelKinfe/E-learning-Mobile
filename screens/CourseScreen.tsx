import { useRoute } from '@react-navigation/native';
import React from 'react';
import {View, Text, SafeAreaView, StatusBar, Image} from 'react-native';
import Modules from '../components/Modules';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

type CourseScreenProps = NativeStackScreenProps<RootStackParamList, "CourseScreen">

const CourseScreen: React.FC<CourseScreenProps> = ({ route, navigation }) => {
   
    const { course } = route.params
   
    const { title, thumbnail, description, department, instructorId, modules } = course
    
    return (
        <SafeAreaView className="bg-white">
                <Image
                    source={{
                        uri: thumbnail
                    }}
                    className="object-fill w-full bg-gray-400 rounded-lg h-60"
                />
                <Text className="px-2 py-2 text-lg font-bold ">{title}</Text>               
                <Text className="px-2 text-sm font-bold text-gray-500 ">{description}</Text> 
                <View className="flex-row items-center px-2 py-2">
                    <Image
                        source={require("../assets/pic1.jpg")}
                        className="p-4 bg-gray-300 rounded-full w-11 h-11"
                    />
                    <View>
                        <Text className="px-2 py-2 text-lg font-bold ">{instructorId.firstName + " " + instructorId.lastName}</Text>
                        <Text className="px-2 text-sm font-bold text-gray-500 ">{department}</Text> 
                    </View>
                    </View>  
                <Text className="px-2 py-2 text-lg font-bold ">Topics Covered</Text>
                
                <Modules navigation={navigation} modules={modules} />   
        </SafeAreaView>
    );
}
export default CourseScreen;
