import React from 'react';
import Homescreen from './screens/Homescreen';
import SearchScreen from './screens/Searchscreen';
import MovieDetails from './screens/MovieDetails';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScrollView } from 'react-native';
import { Provider } from 'react-redux';
import store from './redux/store';

const Stack = createNativeStackNavigator();
export default function App()
{
    return(
      <NavigationContainer>
        <Provider store={store}>
        <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen component={Homescreen} name='Home'/>
        <Stack.Screen name='Details'>
          {
             props=>
             {
                return <MovieDetails  props={props}/>
             }
          }
        </Stack.Screen>
        <Stack.Screen component={SearchScreen} name='Search'/>
        </Stack.Navigator>
        </Provider>
      </NavigationContainer>
    );
}