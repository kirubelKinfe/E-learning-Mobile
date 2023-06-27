import React from 'react';
import {View, FlatList, Text, TouchableOpacity, Image} from 'react-native';
import { departments } from '../common/constants/arrays';

const Categories: React.FC = () => {
    return (
        <View className="w-full">
            <Text className="p-2 text-lg font-semibold">Departments</Text>
            <FlatList
                data={departments}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity className="px-4 py-2 mx-1 shadow-sm rounded-3xl shadow-sky-600">
                        <View>
                            <Text className="text-lg">{item}</Text>   
                        </View>
                    </TouchableOpacity>
                )}
            /> 
        </View>
    );
}

export default Categories;
