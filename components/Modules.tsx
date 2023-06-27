import React from 'react';
import { FlatList } from 'react-native';;
import Module from './Module';
import { ModuleType } from '../common/types';

type ModulesProps = {
    navigation: any;
    modules: ModuleType[]
}

const Modules: React.FC<ModulesProps> = ({ navigation, modules }) => {
    return (
        <FlatList
            style={{ marginBottom: 400 }}
            data={modules}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
                <Module
                    navigation={navigation}
                    module={item}
                />
            )}
        />
    )
}

export default Modules;
