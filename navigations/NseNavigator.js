import React from 'react';
import {Platform} from 'react-native'

import { createStackNavigator } from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons'

import LoginScreen from '../screens/LoginScreen'
import RegistrationScreen from '../screens/RegistrationScreen'
import NewsFeedScreen from '../screens/NewsFeedScreen'
import ElibraryScreen from '../screens/ElibraryScreen'
import DepartmentalLibraryScreen from '../screens/DepartmentalLibraryScreen'
import FupreCommunityScreen from '../screens/FupreCommunityScreen'
import ForgotPassword from '../screens/ForgotPassword'
import ProfileScreen from '../screens/ProfileScreen'
import UpdateProfileScreen from '../screens/UpdateProfileScreen'
import Views from '../screens/Views'

import {DrawerContent } from '../shared/drawer'

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const ProfileStack = createStackNavigator();
const Tab = createBottomTabNavigator(); 
const Final = createStackNavigator();
const FeedStack =createStackNavigator();

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
                    options={{headerShown: false}}
                    />
                <Stack.Screen 
                        name="Register" 
                        component={RegistrationScreen}
                        options={{headerShown: false}}
                        />    
        </Stack.Navigator>
);
const Comments = ({navigation})=>(
    <FeedStack.Navigator>
        <FeedStack.Screen name='Newsfeed' 
                component={DrawerNavigation}
                options={{headerShown: false}}
        />
        <FeedStack.Screen name='Views' 
                component={Views}
                options={{headerShown: false}}
        />
        <FeedStack.Screen name='Update' 
                component={UpdateProfileScreen}
                options={{headerShown: false}}
        />
    </FeedStack.Navigator>
);
const FeedTabNavigator =({navigation})=>(
    <Tab.Navigator 
        tabBarOptions={{
            activeTintColor: '#000',
            inactiveTintColor: 'grey',
        }}
        screenOptions={({route})=>({
        tabBarIcon:({color,size})=>{
            let iconName
            if(route.name == 'Newsfeed')
            {
                iconName = Platform.OS === "ios" ? "ios-home" : "md-home"
            }
            else if(route.name == 'Community')
            {
                iconName = Platform.OS === "ios" ? "ios-construct" : "md-construct"
            }
            else if(route.name == 'Department')
            {
                iconName = Platform.OS === "ios" ? "ios-businee" : "md-business"
            }
            else if(route.name == 'Elibrary')
            {
                iconName = Platform.OS === "ios" ? "ios-book" : "md-book"
            }
            else if(route.name == 'Profile')
            {
                iconName =  Platform.OS === "ios" ? "ios-person" : "md-person"
            }
            return <Icon name={iconName} size={size} color={color} />
        }
    })}      
    >
        <Tab.Screen name='Newsfeed' 
                component={NewsFeedScreen}
                options={{headerShown: false}}                
        />
        <Tab.Screen 
                name="Community" 
                component={FupreCommunityScreen} 
                options={{headerShown: false}}
            />
        <Tab.Screen
                name="Department" 
                component={DepartmentalLibraryScreen} 
                options={{headerShown: false}}
            />
        <Tab.Screen 
            name="Elibrary" 
            component={ElibraryScreen} 
            options={{headerShown: false}}
            />
        <Tab.Screen 
            name="Profile" 
            component={ProfileSK}
            options={{headerShown: false}}
            />
    </Tab.Navigator>
)
//inside the tab navigator
const ProfileSK = ({navigation})=>(
    <ProfileStack.Navigator>
        <ProfileStack.Screen name='Profile' component={ProfileScreen} options={{headerShown:false}}/>
    </ProfileStack.Navigator>
);

//feedtabNavigator inside
const DrawerNavigation =({navigation}) => (
        <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />} swipeEnabled={false}>
            <Drawer.Screen 
                name="Newsfeed" 
                component={FeedTabNavigator} />
        </Drawer.Navigator>
);


const NseNavigator = () =>{
    return(
        <NavigationContainer>
            <Final.Navigator>
                <Final.Screen 
                    name="Login"
                    component={HomeStackScreen}
                    options={{headerShown: false}}
                />
                <Final.Screen
                    name='Newsfeed' 
                    component={Comments}
                    options={{headerShown: false}}
                />
            </Final.Navigator>
        </NavigationContainer>            

    )
}
export default NseNavigator
