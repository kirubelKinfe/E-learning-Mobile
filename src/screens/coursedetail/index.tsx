
import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import { Modules } from '../../components';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../App';
import colors from '../../config/colors';
import { AntDesign } from '@expo/vector-icons';

type CourseDetailProps = NativeStackScreenProps<RootStackParamList, "CourseDetail">

const CourseDetail: React.FC<CourseDetailProps> = ({ route, navigation }) => {
   
    const { course } = route.params
   
    const { title, thumbnail, description, department, instructorId, modules } = course
    
    return (
        <View style={styles.container}>
                
            <Image
                source={{
                    uri: thumbnail
                }}
                style={styles.courseImage}
            />
            <AntDesign
                style={styles.backIcon} 
                name='arrowleft' 
                size={25} 
                color='#000' 
                onPress={() => navigation.pop()}
            />
            <View style={styles.courseContainer}>
                <Text style={styles.courseTitle}>{title}</Text>               
                <Text style={styles.courseDescription}>{description}</Text> 
                <View style={styles.profileContainer}>
                        <Image
                            source={require("../../../assets/pic1.jpg")}
                            style={styles.profilePic}
                        />
                        <View>
                            <Text style={styles.profileDetailsName}>{instructorId.firstName + " " + instructorId.lastName}</Text>
                            <Text style={styles.profileDetailsDepartment}>{department}</Text> 
                        </View>
                </View>     
                <View style={styles.navigationContainer}>
                    <Text style={styles.navigationItem}>About</Text>
                    <Text style={styles.navigationItem}>Lessons</Text>
                    <Text style={styles.navigationItem}>Reviews</Text>
                </View>
                <Text style={styles.courseTopicsHeader}>Topics Covered</Text>
                <Modules navigation={navigation} modules={modules} />   
            </View>
            </View>
    );
}

export default CourseDetail;


const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        backgroundColor: colors.bg
    },
    courseImage: {
        width: '100%',
        height: 260,
    },
    backIcon: {
        position: 'absolute',
        top: 40,
        left: 20,
        color: '#0f0f0f',
        fontSize: 30
    },
    courseContainer: {
        flex: 1,
        width: '100%', 
        padding: 16
    },
    courseTitle: {
        fontWeight: "700",
        fontSize: 18,
        lineHeight: 28,
        paddingBottom: 4
    },
    courseDescription: {
        color: '#8a9090',
        fontSize: 14,
        lineHeight: 20,
        paddingTop: 4,
        marginBottom: 8
    },
    profileContainer: {
        flexDirection: 'row',
        marginBottom: 8
    },
    profilePic: {
        width: 50,
        height: 50,
        borderRadius: 9999,
        marginRight: 10
    },
    profileDetailsName: {
        fontWeight: 'bold',
        fontSize: 18
    },
    profileDetailsDepartment: {
        color: '#03a9f4',
        fontSize: 14
    },
    navigationContainer: {
        width: '100%',
        flex: 1,
        backgroundColor: 'blue',
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderBottomColor: 'gray',
        borderBottomWidth: 2,
        borderBottomStyle: 'solid',
    },
    navigationItem: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    courseTopicsHeader: {
        fontWeight: 'bold',
        fontSize: 18,
        lineHeight: 28
    }
})