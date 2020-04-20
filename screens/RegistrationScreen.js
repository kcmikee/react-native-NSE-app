import React, { Component } from 'react'
import { Text, View,StyleSheet, ScrollView,Image,TouchableHighlight, Platform,ImageBackground } from 'react-native'
import Icon from "react-native-vector-icons/Ionicons"
import RegForm from '../components/forms/RegForm'
class RegistrationScreen extends Component {
    render() {
        return (
            <ImageBackground style={styles.bgImage} source={require('../assets/images/WallpapereLibrary.PNG.png')} >
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
                        <Image style={styles.logo} source={require('../assets/download.jpg')} />                    
                        <View>
                            <Text style={styles.logoText}>SIGN UP</Text>
                        </View>
                    </View>

                    {/* Form starts here */}    
                    <RegForm />
                </View>
            </ScrollView>
            </ImageBackground>
        )
    }
}
const styles = StyleSheet.create({
    screen:{
        flex: 1,
        // justifyContent:'center'
    },
    bgImage:{
        flex: 1,
        justifyContent: 'center',
        resizeMode: 'cover',
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
      submit:{
        width: 250,
        alignSelf: 'center',
        marginBottom: 20,
        padding: 25,
      }
})

export default RegistrationScreen