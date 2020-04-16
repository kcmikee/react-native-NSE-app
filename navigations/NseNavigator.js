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
                <Stack.Screen name="Department" component={DepartmentalLibraryScreen} options={{headerShown: false}}/>
                <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}/>
                <Stack.Screen name="ForgotPassword" component={ForgotPassword}/>
                <Stack.Screen name="Register" component={RegistrationScreen} />
                <Stack.Screen name="Newsfeed" component={NewsFeedScreen} options={{headerShown: false}} />
                <Stack.Screen name="Elibrary" component={ElibraryScreen} options={{headerShown: false}}/>
                <Stack.Screen name="Community" component={FupreCommunityScreen} options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default NseNavigator
 
