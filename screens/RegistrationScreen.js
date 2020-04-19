import React, { Component } from 'react'
import { Text, View,StyleSheet, ScrollView,Image,TouchableHighlight, Platform } from 'react-native'
import Icon from "react-native-vector-icons/Ionicons"
import RegForm from '../components/forms/RegForm'
class RegistrationScreen extends Component {
    render() {
        return (
            <ScrollView >
                <View style={styles.screen}>
                    {/* background image */}
                    <Image style={styles.bgImage} source={require('../assets/images/WallpapereLibrary.PNG.png')} />
                    <TouchableHighlight style={{justifyContent: 'flex-start',marginTop: 18,marginLeft: 18,}} onPress={()=> this.props.navigation.navigate('Login')}>
                            <Icon
                                name={Platform.OS === "ios" ? "ios-arrow-back" : "md-arrow-back"}
                                color="#fff"
                                size={30}
                            />
                        </TouchableHighlight>
                    {/* top logo */}
                    <View style={styles.logoContainer}>
                        <Image style={styles.logo} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTqncJNEyYmdQIq8Ola1D3Ev_mhy1O2M0ZDQWdbhnSK1tWgnX4I&usqp=CAU'}} />                    
                        <View>
                            <Text style={styles.logoText}>SIGN UP</Text>
                        </View>
                    </View>

                    {/* Form starts here */}    
                    <RegForm />
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
        height:150,
        backgroundColor: '#171b3c',
        borderRadius: 40,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo:{
        width:100,
        height:100,
        borderRadius: 20,
        alignSelf: 'center',
    },
    logoText:{
        fontWeight: 'bold',
        fontSize: 20,
        color: '#fff',
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
        padding: 25,
      }
})

export default RegistrationScreen