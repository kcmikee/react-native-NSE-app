import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'

import LoginScreen from '../screens/LoginScreen'
import RegistrationScreen from '../screens/RegistrationScreen'
import NewsFeedScreen from '../screens/NewsFeedScreen'
import ElibraryScreen from '../screens/ElibraryScreen'
import DepartmentalLibraryScreen from '../screens/DepartmentalLibraryScreen'
import FupreCommunityScreen from '../screens/FupreCommunityScreen'
import ForgotPassword from '../screens/ForgotPassword'

const Stack = createStackNavigator();

const NseNavigator = () =>{
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}/>
                <Stack.Screen name="ForgotPassword" component={ForgotPassword}/>
                <Stack.Screen name="Register" component={RegistrationScreen} options={{headerShown: true}} />
                <Stack.Screen name="Newsfeed" component={NewsFeedScreen} />
                <Stack.Screen name="Elibrary" component={ElibraryScreen} />
                <Stack.Screen name="Department" component={DepartmentalLibraryScreen} />
                <Stack.Screen name="Community" component={FupreCommunityScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default NseNavigator

// Login:{
//     screen:LoginScreen
// },
// Signup: {
//     screen:RegistrationScreen
// },
// Newsfeed: {
//     screen:NewsFeedScreen,
// },
// Elibrary: ElibraryScreen,
// Department:{
//     screen:DepartmentalLibraryScreen
// },
