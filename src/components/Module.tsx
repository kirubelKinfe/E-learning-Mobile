import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Lectures from './Lectures';
import { ModuleType } from '../types';

type ModuleProps = {
    navigation: any
    module: ModuleType
    index: number
}

const Module: React.FC<ModuleProps> = ({ navigation, module, index }) => {

    const { title, lectures } = module
    
    return (
        <View style={styles.moduleContainer}>
            <Text style={styles.moduleHeader}>Section {index + 1} - {title}</Text>
            <Lectures navigation={navigation} lectures={lectures} />
        </View>
    );
}

export default Module;

const styles = StyleSheet.create({
    moduleContainer: {
        flex: 1,
        marginBottom: 10
    },
    moduleHeader: {
        fontSize: 14,
        fontWeight: 'bold',
        paddingTop: 16,
        paddingBottom: 8,
    }
})
