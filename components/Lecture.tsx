import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { LectureType } from '../common/types';

type LectureProps = {
    navigation: any;
    lecture: LectureType;
    index: number
}

const Lecture: React.FC<LectureProps>  = ({ navigation, lecture, index }) => {
    const { title } = lecture
    
    return (
        <TouchableOpacity 
            onPress={() => {
                navigation.push('VideoScreen',
                {
                    lecture
                })
            }}
            className="flex-row px-4 py-2 mx-2 mt-4 bg-white rounded-lg shadow-sm shadow-black"
            >
            <Text className="flex-1 font-bold text-md">{(index+ 1) + ". " + title}</Text>
            <Icon
                name='play'
                type='evilicon'
                color='#517fa4'
            />
        </TouchableOpacity>
    );
}

export default Lecture;