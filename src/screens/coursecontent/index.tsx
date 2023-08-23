import React, { useRef } from 'react';
import {Platform, StyleSheet} from 'react-native';
import { Video  } from 'expo-av';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from 'react-native';
import { StatusBar } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '../../../App';
import { useCourseDataWithId } from '../../hooks';
import { Modules } from '../../components';
import colors from '../../config/colors';

type CourseContentProps = NativeStackScreenProps<RootStackParamList, "CourseContent">

const CourseContent: React.FC<CourseContentProps> = ({ navigation, route }) => {
    const video = useRef(null);

    const { lecture } = route.params
    
    const { title, videoUrl, description, courseId } = lecture
    
    const { data } = useCourseDataWithId(courseId)
    const course = (data || [])[0]
    const modules = course ? course?.modules : []
    
    return (
        <SafeAreaView style={styles.container}>  
            <Video
                ref={video} 
                source={{ uri: videoUrl }}
                useNativeControls
                isLooping
                shouldPlay
                style={styles.videoPlayer}  
            />

            <Text style={styles.title}>{title}</Text>               
            <Text style={styles.description}>{description}</Text>
            <Modules navigation={navigation} modules={modules} />
        </SafeAreaView>
    );
}

export default CourseContent;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.bg,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 
    },
    videoPlayer: {
        width: "100%",
        height: 260
    },
    title: {
        padding: 8,
        fontSize: 18,
        lineHeight: 28,
        fontWeight: '700'
    },
    description: {
        paddingHorizontal: 8,
        fontSize: 14,
        lineHeight: 20,
        fontWeight: '700'
    }
})