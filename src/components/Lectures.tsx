import React from 'react';
import { FlatList } from 'react-native';
import Lecture from './Lecture';
import { LectureType } from '../types';

type LecturesProps = {
    navigation: any;
    lectures: LectureType[]
}

const Lectures: React.FC<LecturesProps> = ({navigation, lectures }) => {
    return (
        <FlatList
            data={lectures}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
                <Lecture
                    index={index}
                    navigation={navigation}
                    lecture={item}
                />
            )}
        />
    )
}

export default Lectures;