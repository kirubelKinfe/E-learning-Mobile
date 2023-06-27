import React from 'react';
import { Text, View } from 'react-native';
import Lectures from './Lectures';
import { ModuleType } from '../common/types';

type ModuleProps = {
    navigation: any;
    module: ModuleType
}

const Module: React.FC<ModuleProps> = ({ navigation, module }) => {

    const { title, lectures } = module
    
    return (
        <View className="flex-1">
            <View className="flex-row px-4 py-4 mx-2 mt-4 bg-blue-600 rounded-lg shadow-sm shadow-black">
                <Text className="flex-1 text-xl font-bold text-white">{title}</Text>
            </View>
            <Lectures navigation={navigation} lectures={lectures} />
        </View>
    );
}

export default Module;
