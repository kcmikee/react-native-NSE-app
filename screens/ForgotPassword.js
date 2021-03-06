import React from 'react'
import { StyleSheet, Text, View, Button, Image,TextInput, Platform,TouchableHighlight} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { Formik } from 'formik'

const ForgotPassword = (props) => {
    return (
        <View style={styles.screen}>
            <Image style={styles.bgImage} source={require('../assets/pencil.jpg')} />
            <View style={styles.header}>
                <View style={styles.left}>
                    <TouchableHighlight style={styles.links1} onPress={()=> props.navigation.navigate('Login')}>
                        <Icon
                            name={Platform.OS === "ios" ? "ios-arrow-back" : "md-arrow-back"}
                            color="#fff"
                            size={25}
                        />
                    </TouchableHighlight>
                    <Text onpress={()=> props.navigation.navigate('Login')} style={styles.logo}>Forgot Password</Text> 
                </View>               
            </View>
            <View  style={styles.formik}>
          <Formik 
            initialValues={{ email: '' }}
            onSubmit={values => console.log(values)}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View>
            <Text style={styles.label}>Enter Email</Text>
            <View style={styles.inputContainer}>
                <TextInput style={styles.inputs} keyboardType="email-address" />
            </View>
            <View style={{width:200, alignSelf: 'center',}}>
                <Button title='Reset Password' onPress={handleSubmit} />
            </View>
            </View>
            )}
          </Formik>
          </View>
        </View>
    )
}

export default ForgotPassword

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
    header:{
        flexDirection: 'row',
        justifyContent:'space-between',
        paddingTop: 10,
    },
    logo:{
        fontWeight: 'bold',
        fontSize: 20,
        fontFamily: 'segoePrint',
        marginTop:13,
        color: '#fff'
    },
    links1:{
        padding:14
    },
    left:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10,
    },
    formik:{
        flex:1,
        alignSelf: 'center',
        justifyContent: 'center',
    },
    label:{
        // marginTop: -100,
        marginBottom: 20,
        fontSize: 25,
        fontFamily: 'segoePrint',
        color: '#fff',
        position: 'relative',
        alignSelf: 'center',
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
        fontWeight: 'bold',
        paddingLeft:6,
        fontFamily: 'minion',
    },
})
