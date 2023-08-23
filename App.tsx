import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-url-polyfill/auto'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
// import { store } from './store';


import { Home, CourseDetail, CourseContent, PopularCourses } from './src/screens/index';
import { CourseType, LectureType } from './src/types';


export type RootStackParamList = {
  Home: undefined;
  CourseDetail: {
    course: CourseType
  };
  CourseContent: {
    lecture: LectureType
  };
  PopularCourses: {
    courses: CourseType[]
  };
}

const Stack = createNativeStackNavigator<RootStackParamList>();

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 1000 * 60 * 2}}
});

function App() {
  return (
    // <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <SafeAreaProvider>
          <NavigationContainer>
              <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
                <Stack.Screen name="CourseDetail" component={CourseDetail} options={{ headerShown: false }} />
                <Stack.Screen name="CourseContent" component={CourseContent} options={{ headerShown: false }} />
                <Stack.Screen name="PopularCourses" component={PopularCourses} options={{ headerShown: false }} />
              </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaProvider>
      </QueryClientProvider>
    // </Provider>
  );
}

export default App;
