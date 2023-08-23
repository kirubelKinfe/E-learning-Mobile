import {SafeAreaView, StatusBar, StyleSheet, Platform} from 'react-native';
import { useCoursesData } from '../../hooks/queries/Courses';
import { RootStackParamList } from '../../../App';
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { Banner, PopularCourses, Header, SearchBar} from './components';
import BottomNav from './components/bottomnav';
import colors from '../../config/colors';
import { CoursesList } from '../../components';

type HomeProps = NativeStackScreenProps<RootStackParamList, "Home">

const Home: React.FC<HomeProps> = ({ navigation }) => {
    const { data } = useCoursesData()
    const courses = (data || [])
    console.log(courses)
    
    return (
        <SafeAreaView style={styles.container}>     
            <Header />
            <SearchBar />
            <Banner />
            <PopularCourses navigation={navigation} courses={courses} />
            <CoursesList navigation={navigation} courses={courses} />
            <BottomNav navigation={navigation} />    
        </SafeAreaView>
    );
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        backgroundColor: colors.bg,
        position: 'relative',
        paddingVertical: 20,
        paddingBottom: 75
    }
})