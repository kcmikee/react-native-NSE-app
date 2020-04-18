import React from 'react';
import { View, Text, StyleSheet, Button, TextInput, TouchableHighlight,Image } from 'react-native';

import { Formik } from 'formik'

const LoginScreen = ({navigation}) => {
    return (
      <View style={styles.screen}>
        <Image style={styles.bgImage} source={require('../assets/images/BACKGROUND.png')} />
      
        {/* i put a link on the image to open the side nav. remove the touchablehighlight tag to delete */}
        <TouchableHighlight onPress={()=> navigation.openDrawer()}>
          <Image style={styles.smallImage} source={require('../assets/download.jpg')}/>
        </TouchableHighlight>  

        <View style={{flex:1,alignSelf:'center', justifyContent: 'center'}}>
          <View>
            <Text style={styles.head}>eHUB</Text>
          </View>

        {/* textInput area */}
        <Formik
          initialValues={{ username: '', password: ''}}
          onSubmit={values => console.log(values)}
        >
          {({ handleChange, handleSubmit, values }) => (
            <View>
              <View style={styles.inputContainer}>
                <Image style={styles.inputIcon} source={require('../assets/user-512.png')} />
                <TextInput style={styles.inputs} onChangeText={handleChange('username')} value={values.username} placeholder='Username'/>
              </View>
              <View style={styles.inputContainer}>
                <Image style={styles.inputIcon} source={require('../assets/download.png')} />
                <TextInput style={styles.inputs} placeholder='Password' onChangeText={handleChange('password')} value={values.password} secureTextEntry={true}/>
              </View>
            
              <View style={styles.forgotContainer}>
                <Text style={styles.tf}>Forgot Password?</Text>
                <TouchableHighlight 
                      style={styles.highlightContainer} 
                      onPress={() => navigation.navigate('ForgotPassword')}>
                  <Text style={styles.ftext}>Get help Signing In</Text>
                </TouchableHighlight>
              </View>

              <View style={styles.login}>
                <Button title='Log In' style={styles.btn}
                    onPress={handleSubmit}/>
              </View>
            </View>
          )}
        </Formik>  
        {/* signUp Area */}
        <View style={styles.forgotContainer}>
              <Text style={styles.tf}>Don't Have An Account?</Text>
              <TouchableHighlight 
                    style={styles.highlightContainer} 
                    onPress={() => navigation.navigate('Register')}>
                <Text style={styles.ftext}>Sign Up</Text>
              </TouchableHighlight>
            </View>
        </View>
      </View>
    );
  };

  const styles = StyleSheet.create({
    screen:{ 
      flex: 1, 
    },
    bgImage:{
      flex: 1,
      position: 'absolute',
      width: '100%',
      height: '100%',
      justifyContent: 'center',
    },
    smallImage:{
      height:60,
      width:60,
      borderRadius:30,
      margin:15
    },
    head:{
      marginBottom: 20,
      fontSize: 50,
      fontFamily: 'segoe print',
      color: '#1b1b1b',
      textAlign: 'center'
    },
    inputContainer: {
      borderColor: '#cdcdcd',
      backgroundColor: '#fff',
      borderRadius:12,
      borderWidth: 2,
      width:'80%',
      height:50,
      marginBottom:22.5,
      flexDirection: 'row',
      alignSelf:'center'
    },
    inputs:{
      // height:45,
      // borderBottomColor: '#000',
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
    color: '#000',
    marginTop: 6
  },
    highlightContainer:{
      paddingLeft: 8,
    },
    tf:{
      fontSize: 20,
      fontWeight: 'bold',
    },
    ftext:{
      color: '#feef36',
      fontSize: 20,
      fontWeight: 'bold',
      letterSpacing: 1,
    },
    forgotContainer:{
      flexDirection:'row',
      justifyContent: 'space-around',
      // marginTop: -20,
      padding:10,
    },
    login:{
      padding:25,
      width:'40%',
      alignSelf: 'center',
    },
  })

  export default LoginScreen