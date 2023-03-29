import React from 'react';
import {View, FlatList, Text, TouchableOpacity, Image} from 'react-native';
import { Icon } from 'react-native-elements';
import { departments } from '../constants/arrays';

const Categories = () => {
    return (
        <View className="w-full">
            <Text className="p-2 text-lg font-semibold">Departments</Text>
            <FlatList
                data={departments}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity className="px-4 py-2 rounded-3xl shadow-sm shadow-sky-600 mx-1">
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
