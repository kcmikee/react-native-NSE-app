import React, { Component } from 'react'
import { Text, View, Button,StyleSheet, ScrollView,Image, TextInput } from 'react-native'
import {Formik} from 'formik'
class RegistrationScreen extends Component {
    render() {
        return (
            <ScrollView >
                <View style={styles.screen}>
                    {/* background image */}
                    <Image style={styles.bgImage} source={require('../assets/images/Wallpaper eLibrary.PNG.png')} />

                    {/* top logo */}
                    <View style={styles.logoContainer}>
                        <Image style={styles.logo} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTqncJNEyYmdQIq8Ola1D3Ev_mhy1O2M0ZDQWdbhnSK1tWgnX4I&usqp=CAU'}} />                    
                        <View>
                            <Text style={styles.logoText}>SIGN UP</Text>
                        </View>
                    </View>

                    {/* Form starts here */}
                    <Formik
                        initialValues={{ name:'',email:'', password:'', department:'',matnumber:'',nsecode:'' }}
                        onSubmit={values => console.log(values)
                        }>
                            {({handleChange,handleSubmit, values}) =>(
                                <View style={styles.align}>
                                      <Text style={styles.labels}> 
                                        Full Name
                                    </Text>
                                    <View style={styles.inputContainer}>
                                        <TextInput style={styles.inputs} onChangeText={handleChange('name')} value={values.name}/>
                                    </View>
                                
                                    <Text style={styles.labels}>
                                        Email
                                    </Text>
                                    <View style={styles.inputContainer}>
                                        <TextInput style={styles.inputs} keyboardType="email-address" onChangeText={handleChange('email')} value={values.email}/>
                                    </View>
        
                                    <Text style={styles.labels}>
                                        Password
                                    </Text>
                                    <View style={styles.inputContainer}>
                                        <TextInput style={styles.inputs} secureTextEntry={true} onChangeText={handleChange('password')} value={values.password}/>
                                    </View>
        
                                    <Text style={styles.labels}>
                                        Department
                                    </Text>
                                    <View style={styles.inputContainer}>
                                        <TextInput style={styles.inputs} onChangeText={handleChange('department')} value={values.department}/>  
                                    </View>
        
                                    <Text style={styles.labels}>
                                        Matriculation Number
                                    </Text>
                                    <View style={styles.inputContainer}>
                                        <TextInput style={styles.inputs} onChangeText={handleChange('matnumber')} value={values.matnumber}/>
                                    </View>
        
                                    <Text style={styles.labels}>
                                        NSE Registration Code (Optional)
                                    </Text>
                                    <View style={styles.inputContainer}>
                                        <TextInput style={styles.inputs} onChangeText={handleChange('nsecode')} value={values.nsecode}/>
                                    </View>
                                    <View style={styles.submit}>
                                        <Button title='Submit'
                                            onPress={handleSubmit}
                                        />
                                    </View>
                                </View>
                            
                            )}
                    
                    </Formik>
                </View>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent:'center'
    },
    bgImage:{
        flex: 1,
        position: 'absolute',
        width: '100%',
        height: '100%',
        // justifyContent: 'center',
      },
    logoContainer:{
        width: 120,
        marginTop: -60,
        height:'22%',
        backgroundColor: '#171b3c',
        borderRadius: 40,
        alignSelf: 'center'
    },
    logo:{
        width:100,
        height:100,
        marginTop: 40,
        marginLeft: 10,
        borderRadius: 20,
    },
    logoText:{
        justifyContent:'center',
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 40,
        color: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 18,
        letterSpacing: 1,
    },
    labels:{
        fontWeight:'bold',
        fontSize: 18,
        color: '#0430ff',
        flex: 1,
    },
    align:{
        alignSelf:'center',
        width:'80%',
    },
    inputContainer: {
        borderColor: '#cdcdcd',
        backgroundColor: '#cdcd',
        borderRadius:10,
        borderWidth: 2,
        width:'100%',
        height:80,
        flex: 1,
        marginBottom:10,
      },
      inputs:{
        height:40,
        padding: 20,
        color: '#7e7e7e',
        fontSize: 25,
        fontWeight: 'bold',
        fontFamily: 'verdana',
        textAlign: 'center',
        flex: 1,
      },
      submit:{
        width: 250,
        alignSelf: 'flex-end',
        marginBottom: 20,
        padding: 35,
      }
})

export default RegistrationScreen