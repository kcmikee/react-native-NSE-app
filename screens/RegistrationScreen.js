import React, { Component } from 'react'
import { Text, View, Button,StyleSheet, ScrollView,Image, TextInput } from 'react-native'
import Input from '../components/input'

class RegistrationScreen extends Component {
    render() {
        return (
            <ScrollView >
                <View style={styles.screen}>
                    <Image style={styles.bgImage} source={require('../assets/images/Wallpaper eLibrary.PNG.png')} />

                    <View style={styles.logoContainer}>
                        {/* image */}
                        <Image style={styles.logo} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTqncJNEyYmdQIq8Ola1D3Ev_mhy1O2M0ZDQWdbhnSK1tWgnX4I&usqp=CAU'}} />                    
                        <View>
                            <Text style={styles.logoText}>SIGN UP</Text>
                        </View>
                    </View>
                        <Text style={styles.labels}> 
                            Full Name
                        </Text>
                        <View style={styles.inputContainer}>
                            <Input />
                        </View>
                        <Text style={styles.labels}>
                            Email
                        </Text>
                        <View style={styles.inputContainer}>
                        <TextInput style={styles.inputs} keyboardType="email-address" />

                        </View>
                        <Text style={styles.labels}>
                            Password
                        </Text>
                        <View style={styles.inputContainer}>
                            <TextInput style={styles.inputs} secureTextEntry={true} />
                        </View>
                        <Text style={styles.labels}>
                            Department
                        </Text>
                        <View style={styles.inputContainer}>
                            <Input />
                        </View>
                        <Text style={styles.labels}>
                            Matriculation Number
                        </Text>
                        <View style={styles.inputContainer}>
                            <Input />
                        </View>
                        <Text style={styles.labels}>
                            NSE Registration Code (Optional)
                        </Text>
                        <View style={styles.inputContainer}>
                            <Input />
                        </View>
                    <View style={styles.submit}>
                        <Button title='Submit'
                                onPress={() => {
                                this.props.navigation.navigate('Newsfeed')} }/>
                    </View>
                </View>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    screen:{ 
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
    logoContainer:{
        width: 120,
        marginTop: -50,
        height:'10%',
        backgroundColor: '#171b3c',
        borderRadius: 40,
    },
    logo:{
        width:100,
        height:100,
        marginTop: 68,
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
        marginTop: 40,
        // textAlign: 'left', Doesn't work due to the alignItem style on the screen
        position: 'relative',
    },
    inputContainer: {
        borderColor: '#cdcdcd',
        backgroundColor: '#fff',
        borderRadius:10,
        borderWidth: 2,
        width:'80%',
        height:50,
        marginBottom:10,
      },
      inputs:{
        height:50,
        flex:1,
        padding: 20,
        color: '#7e7e7e',
        fontSize: 25,
        fontWeight: 'bold',
        fontFamily: 'verdana',
        textAlign: 'center',
        justifyContent: 'center',
      },
      submit:{
        marginRight: '-60%',
        marginBottom: 20,
        borderRadius: 4,
      }
})

export default RegistrationScreen