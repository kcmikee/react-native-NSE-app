import React from 'react';

import { createStackNavigator } from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer';


import LoginScreen from '../screens/LoginScreen'
import RegistrationScreen from '../screens/RegistrationScreen'
import NewsFeedScreen from '../screens/NewsFeedScreen'
import ElibraryScreen from '../screens/ElibraryScreen'
import DepartmentalLibraryScreen from '../screens/DepartmentalLibraryScreen'
import FupreCommunityScreen from '../screens/FupreCommunityScreen'
import ForgotPassword from '../screens/ForgotPassword'

import {DrawerContent } from '../shared/drawer'

const NewsfeedStack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const HomeStackScreen = ({navigation}) =>(
         <Stack.Navigator >
                <Stack.Screen 
                        name="Login" 
                        component={LoginScreen} 
                        options={{headerShown: false}}
                    />
                <Stack.Screen 
                    name="ForgotPassword" 
                    component={ForgotPassword}
                />
                <Stack.Screen 
                        name="Register" 
                        component={RegistrationScreen}
                    />   
        </Stack.Navigator>
);
const NewsfeedStackScreen =({navigation}) => (
            <NewsfeedStack.Navigator>
                <NewsfeedStack.Screen 
                        name="Newsfeed" 
                        component={NewsFeedScreen} 
                        options={{headerShown: false}}
                    />
                <NewsfeedStack.Screen 
                        name="Community" 
                        component={FupreCommunityScreen} 
                        options={{headerShown: false}}
                    />
                <NewsfeedStack.Screen
                        name="Department" 
                        component={DepartmentalLibraryScreen} 
                        options={{headerShown: false}}
                    />
                <NewsfeedStack.Screen 
                    name="Elibrary" 
                    component={ElibraryScreen} 
                    options={{headerShown: false}}
                    />
            </NewsfeedStack.Navigator>
);

const NseNavigator = () =>{
    return(
        <NavigationContainer>
            <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />} swipeEnabled={false}>
                <Drawer.Screen name="Login" component={HomeStackScreen} />
                <Drawer.Screen name="Newsfeed" component={NewsfeedStackScreen} />
          </Drawer.Navigator>
        </NavigationContainer>            

    )
}
export default NseNavigator
