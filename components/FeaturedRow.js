import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import {View, Text} from 'react-native';
import { useSelector } from 'react-redux';
import { selectCourse } from '../features/courseSlice';
import CourseCard from './CourseCard';

const FeaturedRow = () => {
    const courses = useSelector(selectCourse);

    return (
        <View className="flex gap-1">
            <View>
                <View className="mt-4 flex-row items-center justify-between px-2">
                    <Text className="font-bold text-lg">Popular Courses</Text>
                    <Text className="font-bold text-sm text-blue-400">see all</Text>
                </View>

                <FlatList
                    horizontal
                    data={courses}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <CourseCard
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            description={item.description}
                            department={item.department}
                            lecture={item.lecture}
                            videos={item.videos}
                        />
                    )}
                /> 
            </View>
            <View>
                <View className="mt-4 flex-row items-center justify-between px-2">
                    <Text className="font-bold text-lg">Computer Science</Text>
                    <Text className="font-bold text-sm text-blue-400">see all</Text>
                </View>

                <FlatList
                    horizontal
                    data={courses}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => {
                        if(item.department === "Computer Science") {
                            return <CourseCard
                                    key={item.id}
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    description={item.description}
                                    department={item.department}
                                    lecture={item.lecture}
                                    videos={item.videos}
                                />
                        } 
                    }}
                /> 
            </View>
            <View>
                <View className="mt-4 flex-row items-center justify-between px-2">
                    <Text className="font-bold text-lg">Information Technology</Text>
                    <Text className="font-bold text-sm text-blue-400">see all</Text>
                </View>

                <FlatList
                    horizontal
                    data={courses}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => {
                        if(item.department === "Information Technology") {
                            return <CourseCard
                                    key={item.id}
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    description={item.description}
                                    department={item.department}
                                    lecture={item.lecture}
                                    videos={item.videos}
                                />
                        }}}
                /> 
            </View>
        </View>
    );
}

export default FeaturedRow;
