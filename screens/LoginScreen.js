// In App.js in a new project

import React from 'react';
import { View, Text, StyleSheet, Button, TextInput, TouchableHighlight,Image } from 'react-native';

// import Input from '../components/input'


const LoginScreen = props => {
    return (
      <View style={styles.screen}>
        <Image style={styles.bgImage} source={require('../assets/vsco_bg.jpg')} />
        <View><Text style={styles.head}>Fupreng</Text></View>
        {/* textInput area */}
        <View style={styles.inputContainer}>
        <Image style={styles.inputIcon} source={require('../assets/user-512.png')} />
          <TextInput style={styles.inputs} placeholder='Username'/>
        </View>
        <View style={styles.inputContainer}>
        <Image style={styles.inputIcon} source={require('../assets/download.png')} />
          <TextInput style={styles.inputs} placeholder='Password' secureTextEntry={true}/>
        </View>
        {/* forgot password */}
        <View style={styles.forgotContainer}>
          <Text style={styles.tf}>Forgot Password?</Text>
          <TouchableHighlight 
                style={styles.highlightContainer} 
                onPress={() => {props.navigation.navigate('ForgotPassword')}}>
            <Text style={styles.ftext}>Get help Signing In</Text>
          </TouchableHighlight>
        </View>

        {/* login button */}
        <View style={styles.login}>
          <Button title='Log In'
              onPress={() => {
              props.navigation.navigate('Newsfeed')} 
            }/>
        </View>
        
        {/* signUp Area */}
        <View style={styles.forgotContainer}>
              <Text style={styles.tf}>Don't Have An Account?</Text>
              <TouchableHighlight 
                    style={styles.highlightContainer} 
                    onPress={() => props.navigation.navigate('Register')}>
                <Text style={styles.ftext}>Sign Up</Text>
              </TouchableHighlight>
              <TouchableHighlight 
                    style={styles.highlightContainer} 
                    onPress={() => props.navigation.navigate('Newsfeed')}>
                <Text style={styles.ftext}>Newsfeed</Text>
              </TouchableHighlight>
            </View>
      </View>
    );
  };

  const styles = StyleSheet.create({
    screen:{ 
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center' 
    },
    bgImage:{
      flex: 1,
      position: 'absolute',
      width: '100%',
      height: '100%',
      justifyContent: 'center',
    },
    head:{
      // marginTop: -80,
      marginBottom: 40,
      fontSize: 50,
      fontFamily: 'segoe print',
      color: '#000'
    },
    inputContainer: {
      borderColor: '#cdcdcd',
      backgroundColor: '#fff',
      borderRadius:12,
      borderWidth: 2,
      width:'80%',
      height:50,
      marginBottom:45,
      flexDirection: 'row',
      alignItems:'center'
    },
    inputs:{
      height:45,
      borderBottomColor: '#000',
      flex:1,
      width: '80%',
      padding: 15,
      color: '#000',
      fontSize: 25,
      fontWeight: 'bold',
      fontFamily: 'verdana',
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center',
    color: '#000'
  },
    highlightContainer:{
      marginLeft: 8,
    },
    tf:{
      fontSize: 18,
      fontWeight: 800,
    },
    ftext:{
      color: '#dcb410',
      fontSize: 16,
      fontWeight: 800,
      letterSpacing: 1,
    },
    forgotContainer:{
      flexDirection:'row',
      justifyContent: 'space-between',
      marginTop: -20,
      marginBottom:80,
      borderRadius:30,
      width:250,
    },
    login:{
      marginBottom:25,
      width:200
    },
  })

  export default LoginScreen