import React from 'react';
import {View, FlatList, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { departments } from '../../../../constants';
import { CourseType } from '../../../../types';
import { CategoryList } from '../../../../components';




type CategoriesProps = {
    navigation: any;
    courses: CourseType[]
}

const Categories: React.FC<CategoriesProps> = ({ navigation, courses }) => {
    return (
        <View style={styles.categoriesContainer}>
            <View style={styles.coursesHeaderContainer}>
                    <Text style={styles.coursesHeaderText}>Most Popular Courses</Text>
                    <Text 
                        style={styles.coursesSeeAllText} 
                        onPress={() => {
                            navigation.push('PopularCourses',
                            {
                                courses
                            })
                        }}>See All</Text>
                </View>
            <CategoryList  />
        </View>
    );
}

export default Categories;

const styles = StyleSheet.create({
    categoriesContainer: {
        width: "100%",
        marginBottom: 10
    },
    coursesHeaderContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        marginTop: 16,
        marginBottom: 8
    },
    coursesHeaderText: {
        fontSize: 18,
        lineHeight: 28,
        fontWeight: 'bold'
    },
    coursesSeeAllText: {
        fontSize: 14,
        lineHeight: 20,
        fontWeight: 'bold',
        color: '#0ce'
    }
})