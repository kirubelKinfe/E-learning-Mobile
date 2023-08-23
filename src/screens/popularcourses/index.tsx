import React from 'react';
import { Platform, StatusBar, StyleSheet, Text } from 'react-native';
import { View } from 'react-native';
import { CategoryList, CoursesList } from '../../components';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../App';
import { AntDesign } from '@expo/vector-icons'
import colors from '../../config/colors';


type CourseDetailProps = NativeStackScreenProps<RootStackParamList, "PopularCourses">


const PopularCourses: React.FC<CourseDetailProps> = ({ navigation, route }) => {
    
    const { courses } = route.params

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <View style={styles.backContainer}>
                    <AntDesign 
                        name='arrowleft' 
                        size={25} 
                        color='#000' 
                        onPress={() => navigation.pop()}
                        />
                    <Text style={styles.headerText}>Most Popular Courses</Text>
                </View>
                <AntDesign name='search1' size={25} color='#000' />
            </View>
            <CategoryList />
            <CoursesList navigation={navigation} courses={courses} />
        </View>
    );
}

export default PopularCourses;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? (StatusBar.currentHeight && StatusBar.currentHeight + 20) : 0,
        backgroundColor: colors.bg
    },
    headerContainer: {
        paddingHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20
    },
    backContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    headerText: {
        marginLeft: 10,
        fontWeight: '700',
        fontSize: 22
    },
    coursesList: {
        paddingHorizontal: 16,
    }
})
