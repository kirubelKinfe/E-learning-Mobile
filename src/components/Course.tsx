import { Pressable, StyleSheet, View } from "react-native"
import { Button, Icon, Image, Text } from "react-native-elements"
import { CourseType } from "../types"
import { useState } from "react"

type CourseProps = {
    navigation: any 
    course: CourseType
}

const Course: React.FC<CourseProps> = ({ navigation, course }) => {
    const [onBookMark, setOnBookMark] = useState(false)
    const { title, thumbnail, department } = course
    
    const handleBookMark = () => setOnBookMark(!onBookMark)

    return (
        <Pressable
            onPress={() => {
                navigation.push('CourseDetail',
                {
                    course
                })
            }}
            style={styles.courseItem}
            >
            <View style={styles.courseContainer}>      
                <Image
                    source={{
                        uri: thumbnail
                    }}
                    style={styles.courseImage}
                />
                <View style={styles.courseDetailsContainer}>
                    <Text>
                        <View>
                            <Text style={styles.courseDetailsDepartment}>{department}</Text>
                        </View>
                    </Text>
                    <Text style={styles.courseDetailsTitle}>{title}</Text>
                </View>
            </View>
            <Icon 
                onPress={() => handleBookMark()}
                name={onBookMark ? 'bookmark' : 'bookmark-outline'}
                color={onBookMark ? '#3f51b5' : '#000'}
                type='material'
            />       
        </Pressable>
    );
}

export default Course


const styles = StyleSheet.create({
    courseItem: {
        position: 'relative',
        backgroundColor: '#fff',
        borderRadius: 30,
        flexDirection: 'row',
        justifyContent: "space-between",
        width: '100%',
        padding: 15,
        marginBottom: 16,
        elevation: 1
    },

    courseContainer: {
        flex: 1,
        flexDirection: "row",
    },

    courseImage: {
        width: 120,
        height: 120,
        borderRadius: 15,
        marginRight: 10
    },
    courseDetailsContainer: {
        flex: 1,
        flexDirection: "column",
        gap: 10
    },
    courseDetailsDepartment: {
        borderRadius: 4,
        fontWeight: 'bold',
        backgroundColor: '#e9f9fb',
        padding: 5,
        color: '#03a9f4',
        fontSize: 13,
        textTransform: "capitalize",
    },
    courseDetailsTitle: {
        fontWeight: '700',
        fontSize: 14,
        textTransform: "capitalize"
    }
})