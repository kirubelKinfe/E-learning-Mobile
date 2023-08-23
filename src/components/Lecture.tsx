import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { LectureType } from '../types';
import { AntDesign } from '@expo/vector-icons'

type LectureProps = {
    navigation: any;
    lecture: LectureType;
    index: number
}

const Lecture: React.FC<LectureProps>  = ({ navigation, lecture, index }) => {
    const { title } = lecture
    
    return (
        <Pressable 
            onPress={() => {
                navigation.push('CourseContent',
                {
                    lecture
                })
            }}
            style={styles.lectureContainer}
            >
            <View style={styles.lectureTitleContainer}>
                <Text style={styles.lectureNo}>{index > 9 ? index + 1 : "0" + (index+ 1) }</Text>
                <Text style={styles.lectureTitle}>{title}</Text>
            </View>
            <AntDesign name='play' size={28} color='dodgerblue' />
        </Pressable>
    );
}

const styles = StyleSheet.create({
    lectureContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        marginVertical: 5,
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation: 1
    },
    lectureTitleContainer: {
        flex: 1,
        flexDirection: 'row',
        overflow: 'hidden',
        marginRight: 8
    },
    lectureNo: {
        color: '#2196f3',
        backgroundColor: '#d6f0fc',
        fontWeight: '700',
        fontSize: 14,
        marginRight: 10,
        padding: 10,
        borderRadius: 999
    },
    lectureTitle: {
        fontSize: 16,
        fontWeight: '700',
        paddingVertical: 8
    }
})

export default Lecture;