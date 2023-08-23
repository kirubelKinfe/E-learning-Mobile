import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { View } from 'react-native';

import { CourseType } from '../types';
import { Course } from '../components';

type CoursesListProps = {
    navigation: any;
    courses: CourseType[]
}


const CoursesList: React.FC<CoursesListProps> = ({ navigation, courses }) => {
    
    return (
        <View style={styles.coursesContainer}>
            {Array.isArray(courses) && <FlatList
                data={courses}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => <Course navigation={navigation} course={item} />}
            />}
        </View>
    );
}

export default CoursesList;

const styles = StyleSheet.create({
    coursesContainer: {
        paddingHorizontal: 16,
        flex: 1,
        marginTop: 8
    }
})
