import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-url-polyfill/auto'
import CourseScreen from './screens/CourseScreen';
import VideoScreen from './screens/VideoScreen';
import { Provider } from 'react-redux';
// import { store } from './store';

export type RootStackParamList = {
  HomeScreen: undefined;
  CourseScreen: {
    course: CourseType
  };
  VideoScreen: {
    lecture: LectureType
  };
}

const Stack = createNativeStackNavigator<RootStackParamList>();

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { CourseType, LectureType } from './common/types';

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
                <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
                <Stack.Screen name="CourseScreen" component={CourseScreen} options={{ headerShown: false }} />
                <Stack.Screen name="VideoScreen" component={VideoScreen} options={{ headerShown: false }} />
              </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaProvider>
      </QueryClientProvider>
    // </Provider>
  );
}

export default App;
