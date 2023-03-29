import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import {View, Text, Image, SafeAreaView, StatusBar, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import { Icon } from 'react-native-elements';
import { useDispatch } from 'react-redux';

import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';
import { courses } from '../constants/arrays';
import { setCourse } from '../features/courseSlice';

const HomeScreen = () => {
    const navigation = useNavigation()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setCourse(courses))
    }, []);

    return (
        <SafeAreaView className="relative bg-white pt-5 flex-1" style={{paddingTop:StatusBar.currentHeight}}>   
                
                <View className="flex-row pb-5 items-center  mx-4 space-x-2">
                        <Icon 
                            className="w-10 rounded-full" 
                            name='menu'
                            color="#00CCBB"
                            type='material'
                        />
                        <View className="flex-1">
                            <Text className="font-bold text-xl">
                                Hi, Kirubel Kinfe
                            </Text>
                        </View>
                        
                        <Image
                            source={require("../assets/pic1.jpg")}
                            className="h-8 w-8 bg-gray-300 p-4 rounded-full"
                        />
                </View>

                <View className="flex-row items-center space-x-2 pb-2 mx-4">
                        <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
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
                        onPress={() => {
                            navigation.navigate('CourseScreen')
                        }}
                        className="relative bg-white w-full   px-4 my-4 shadow"
                        >
                        <Image
                            source={require("../assets/course3.jpg")}
                            className="w-full h-48 object-fill rounded-lg bg-gray-400"
                        />
                        <Text className="absolute left-5 bottom-3 bg-violet-700 text-white  font-bold text-lg px-4 py-2 rounded-full flex-wrap">Computer Networking</Text>
                            
                    </TouchableOpacity>

                    <Categories />
                    
                    <FeaturedRow />
                </ScrollView>
                
                <View className="absolute bottom-0 left-0 right-0 rounded-xl px-4 h-16 bg-white flex-row items-center justify-between">
                    <Icon 
                        onPress={() => navigation.navigate("HomeScreen")}
                        className="rounded-full" 
                        name='home'
                        color="#000"
                        type='material'
                    />
                    <Icon 
                        onPress={() => navigation.navigate("HomeScreen")}
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
                        onPress={() => navigation.navigate("HomeScreen")}
                        className="rounded-full" 
                        name='menu'
                        color="#000"
                        type='material'
                    />
                    <Icon 
                        onPress={() => navigation.navigate("HomeScreen")}
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
