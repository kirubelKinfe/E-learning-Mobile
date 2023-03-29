import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-url-polyfill/auto'
import CourseScreen from './screens/CourseScreen';
import VideoScreen from './screens/VideoScreen';
import { Provider } from 'react-redux';
import { store } from './store';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
              <Stack.Screen name="CourseScreen" component={CourseScreen} options={{ headerShown: false }} />
              <Stack.Screen name="VideoScreen" component={VideoScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}

export default App;
