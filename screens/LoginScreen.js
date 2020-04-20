import React from 'react';
import { View, Text, StyleSheet, Button, TextInput, TouchableHighlight,Image, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

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
                <Icon
                  name={Platform.OS === "ios" ? "ios-person" : "md-person"}
                  color="#000"
                  size={25}
                  style={{marginTop:8, marginLeft:7}}
                />
                <TextInput style={styles.inputs} onChangeText={handleChange('username')} value={values.username} placeholder='Username'/>
              </View>
              <View style={styles.inputContainer}>
                <Icon
                    name={Platform.OS === "ios" ? "ios-lock" : "md-lock"}
                    color="#000"
                    size={25}
                    style={{marginTop:8, marginLeft:7}}
                  />
                <TextInput style={styles.inputs} placeholder='Password' onChangeText={handleChange('password')} value={values.password} secureTextEntry={true}/>
              </View>

              <View style={styles.forgotContainer}>
                <TouchableHighlight 
                      style={styles.highlightContainer} 
                      onPress={() => navigation.navigate('ForgotPassword')}>
                  <Text style={styles.tf}>Forgot Username/Password?</Text>
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
                <Text style={styles.tf}>Sign Up</Text>
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
      margin:25
    },
    head:{
      marginBottom: 20,
      fontSize: 50,
      fontFamily: 'segoePrint',
      color: '#fff',
      textAlign: 'center'
    },
    inputContainer: {
      borderColor: '#cdcdcd',
      backgroundColor: '#fff',
      borderRadius:12,
      borderWidth: 1,
      width: 300,
      marginBottom:10,
      flexDirection: 'row',
      alignSelf:'center'
    },
    inputs:{
      height:45,
      width: 300,
      color: '#000',
      fontSize: 16,
      fontFamily: 'minion',
      fontWeight: 'bold',
      paddingLeft: 5,
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:5,
    justifyContent: 'center',
    color: '#000',
    marginTop: 6
  },
    highlightContainer:{
      paddingLeft: 8,
    },
    tf:{
      fontSize: 20,
      fontFamily: 'minion',
      fontWeight: 'bold',
    },
    ftext:{
      color: '#feef36',
      fontSize: 20,
      fontWeight: 'bold',
      fontFamily: 'minion',
      letterSpacing: 1,
    },
    forgotContainer:{
      flexDirection:'row',
      justifyContent: 'space-around',
      // padding:10,
    },
    login:{
      padding:25,
      width:200,
      alignSelf: 'center',
      marginBottom: 10,
    },
  })

  export default LoginScreen