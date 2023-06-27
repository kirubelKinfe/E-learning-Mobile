import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import {View, Text, Image, SafeAreaView, StatusBar, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import { Icon } from 'react-native-elements';

import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';
import { useCoursesData } from '../common/hooks/Queries/Courses';
import { RootStackParamList } from '../App';
import { NativeStackScreenProps } from '@react-navigation/native-stack'

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, "HomeScreen">

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
    const { data } = useCoursesData()
    const courses = (data || [])

    return (
        <SafeAreaView className="relative flex-1 pt-5 bg-white" style={{paddingTop:(StatusBar.currentHeight && StatusBar.currentHeight + 20)}}>   
                
                <View className="flex-row items-center pb-5 mx-4 space-x-2">
                        <Icon 
                            className="w-10 rounded-full" 
                            name='menu'
                            color="#00CCBB"
                            type='material'
                        />
                        <View className="flex-1">
                            <Text className="text-xl font-bold">
                                Hi, Kirubel Kinfe
                            </Text>
                        </View>
                        
                        <Image
                            source={require("../assets/pic1.jpg")}
                            className="w-8 h-8 p-4 bg-gray-300 rounded-full"
                        />
                </View>

                <View className="flex-row items-center pb-2 mx-4 space-x-2">
                        <View className="flex-row flex-1 p-3 space-x-2 bg-gray-200">
                            <Icon 
                                className="rounded-full" 
                                name='search'
                                color="#00CCBB"
                                type='material'
                            />
                            <TextInput  
                                className="flex-1"
                                placeholder='Search for courses'
                                keyboardType='default'
                            />
                        </View>
                </View>
                <ScrollView
                    className="flex-col"
                    contentContainerStyle={{
                        paddingBottom: 120,
                    }}
                    showsVerticalScrollIndicator={false}
                >

                    <TouchableOpacity
                        className="relative w-full px-4 my-4 bg-white shadow"
                        >
                        <Image
                            source={require("../assets/course3.jpg")}
                            className="object-fill w-full h-48 bg-gray-400 rounded-lg"
                        />
                        <Text className="absolute flex-wrap px-4 py-2 text-lg font-bold text-white rounded-full left-5 bottom-3 bg-violet-700">Computer Networking</Text>
                            
                    </TouchableOpacity>

                    <Categories />
                    
                    <FeaturedRow navigation={navigation} courses={courses} />
                </ScrollView>
                
                <View className="absolute bottom-0 left-0 right-0 flex-row items-center justify-between h-16 px-4 bg-white rounded-xl">
                    <Icon 
                        onPress={() => navigation.push("HomeScreen")}
                        className="rounded-full" 
                        name='home'
                        color="#000"
                        type='material'
                    />
                    <Icon 
                        onPress={() => navigation.push("HomeScreen")}
                        className="rounded-full" 
                        name='book'
                        color="#000"
                        type='material'
                    />
                    <Icon 
                        className="p-2 rounded-full border border-[#000]" 
                        name='add'
                        color="#000"
                        type='material'
                    />
                    <Icon 
                        onPress={() => navigation.push("HomeScreen")}
                        className="rounded-full" 
                        name='menu'
                        color="#000"
                        type='material'
                    />
                    <Icon 
                        onPress={() => navigation.push("HomeScreen")}
                        className="rounded-full" 
                        name='menu'
                        color="#000"
                        type='material'
                    />
                </View>
        </SafeAreaView>
    );
}

export default HomeScreen;
