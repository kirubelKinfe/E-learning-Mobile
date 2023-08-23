import React from 'react';
import { FlatList, ScrollView, StyleSheet, View } from 'react-native';;
import Module from './Module';
import { ModuleType } from '../types';

type ModulesProps = {
    navigation: any;
    modules: ModuleType[]
}

const Modules: React.FC<ModulesProps> = ({ navigation, modules }) => {
    return (
            <FlatList
                style={styles.moduleList}
                data={modules}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => <Module index={index} navigation={navigation} module={item} />}
            />  
    )
}

const styles = StyleSheet.create({
    moduleList: {
        padding: 8,
    }
})

export default Modules;
