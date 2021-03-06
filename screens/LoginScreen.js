import React from 'react';
import { View, Text, StyleSheet, Button, TextInput, TouchableHighlight,Image, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

import { Formik } from 'formik'

const LoginScreen = ({navigation}) => {
    return (
      <View style={styles.screen}>
        <Image style={styles.bgImage} source={require('../assets/bg/action-artisan-burnt-construction-1145434.jpg')} />
        {/* <Image style={styles.bgImage} source={require('../assets/bg/close-up-of-wooden-plank-326311.jpg')} /> */}
        {/* <Image style={styles.bgImage} source={require('../assets/bg/industry-metal-fire-radio-73833.jpg')} /> */}
        {/* <Image style={styles.bgImage} source={require('../assets/bg/silhouette-of-trees-2131614.jpg')} /> */}
        {/* <Image style={styles.bgImage} source={require('../assets/images/WallpapereLibrary.PNG.png')} /> */}

      
        {/* i put a link on the image to open the side nav. remove the touchablehighlight tag to delete */}
        <TouchableHighlight onPress={()=> navigation.navigate('Newsfeed')}>
          <Image style={styles.smallImage} source={require('../assets/download.jpg')}/>
        </TouchableHighlight>  
        
        <View style={{flex:1,alignSelf:'center', justifyContent: 'center'}}>
          <View>
            <Text style={styles.head}>eHUB</Text>
          </View>
        <View style={{backgroundColor:'#fff', width:'100%', padding:20, borderRadius: 8,paddingTop: 35,}}>

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
                <TextInput style={styles.inputs} onChangeText={handleChange('username')} placeholderTextColor='#000' value={values.username} placeholder='Username'/>
              </View>
              <View style={styles.inputContainer}>
                <Icon
                    name={Platform.OS === "ios" ? "ios-lock" : "md-lock"}
                    color="#000"
                    size={25}
                    style={{marginTop:8, marginLeft:7}}
                  />
                <TextInput style={styles.inputs} placeholder='Password' placeholderTextColor='#000' onChangeText={handleChange('password')} value={values.password} secureTextEntry={true}/>
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
                <TouchableHighlight 
                      style={styles.highlightContainer} 
                      onPress={() => navigation.navigate('ForgotPassword')}>
                  <Text style={styles.tf}>Forgot Password?</Text>
                </TouchableHighlight>
                <TouchableHighlight 
                    style={styles.highlightContainer} 
                    onPress={() => navigation.navigate('Register')}>
                <Text style={styles.tf}>Sign Up</Text>
              </TouchableHighlight>             
            </View>
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
      borderColor: '#fff',
      // backgroundColor: '#fff',
      borderRadius:12,
      borderWidth: 1,
      width: 300,
      marginBottom:10,
      flexDirection: 'row',
      backgroundColor: '#bebebe',
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
      justifyContent: 'space-between',
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