import { FontAwesome5 } from "@expo/vector-icons"
import { StyleSheet, TouchableOpacity } from "react-native"
import { Text } from "react-native"
import colors from "../config/colors"

const Category = ({ item }: { item: string }) => {
  return (
    <TouchableOpacity style={[styles.categoryItem, {backgroundColor: item === 'All' ? colors.secondary : colors.white}]}>
        <FontAwesome5 name='fire' size={20} color={`${item === 'All' ? colors.primary : colors.secondary}`} /> 
        <Text style={[styles.categoryItemValue, {color: item === 'All' ? colors.white : colors.secondary}]}>{item}</Text>   
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({ 
    categoryItem: {
        paddingHorizontal: 18,
        paddingVertical: 8,
        marginRight: 8,
        backgroundColor: colors.white,
        borderColor: colors.secondary,
        borderWidth: 2,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    categoryItemValue: {
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.secondary,
        marginLeft: 5
    }
})

export default Category