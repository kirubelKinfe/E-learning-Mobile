import React from "react"
import { FlatList, StyleSheet, View } from "react-native"
import { departments } from "../constants"
import Category from "./Category"

type CategoryListProps = {
   
}

const CategoryList: React.FC<CategoryListProps> = () => {
    return (
        <View style={styles.categoryList}>
            <FlatList
                data={departments}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => <Category item={item} />}
            /> 
        </View>
        
      
    )
}

export default CategoryList

const styles = StyleSheet.create({
    categoryList: {
        width: '100%',
        paddingLeft: 16,
        marginVertical: 8
    }
})
