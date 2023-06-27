import React from 'react';
import { FlatList } from 'react-native';
import {View, Text} from 'react-native';
import Course from './Course';
import { CourseType } from '../common/types';

type FeaturedRowProps = {
    navigation: any;
    courses: CourseType[]
}

const FeaturedRow: React.FC<FeaturedRowProps> = ({ navigation, courses }) => {
    
    return (
        <View className="flex gap-1">
            <View>
                <View className="flex-row items-center justify-between px-2 mt-4">
                    <Text className="text-lg font-bold">Popular Courses</Text>
                    <Text className="text-sm font-bold text-blue-400">see all</Text>
                </View>

                {Array.isArray(courses) && <FlatList
                    horizontal
                    data={courses}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => {
                        return <Course
                            navigation={navigation}
                            course={item}
                        />
                    }}
                />}
            </View>
            <View>
                <View className="flex-row items-center justify-between px-2 mt-4">
                    <Text className="text-lg font-bold">Computer Science</Text>
                    <Text className="text-sm font-bold text-blue-400">see all</Text>
                </View>

                <FlatList
                    horizontal
                    data={courses}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => {
                        if(item.department === "Computer Science") {
                            return <Course
                                    navigation={navigation}
                                    course={item}
                                />
                        } else {
                            return null
                        }
                    }}
                /> 
            </View>
            <View>
                <View className="flex-row items-center justify-between px-2 mt-4">
                    <Text className="text-lg font-bold">Information Technology</Text>
                    <Text className="text-sm font-bold text-blue-400">see all</Text>
                </View>

                <FlatList
                    horizontal
                    data={courses}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => {
                        if(item.department === "Information Technology") {
                            return <Course
                                    navigation={navigation}
                                    course={item}
                                />
                        } else {
                            return null
                        }
                    }} 
                /> 
            </View>
        </View>
    );
}

export default FeaturedRow;
