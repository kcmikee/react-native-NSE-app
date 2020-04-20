import React from 'react'
import { StyleSheet, Text, View, Button, Image,TextInput } from 'react-native'
import { Formik } from 'formik'

const ForgotPassword = () => {
    return (
        <View style={styles.screen}>
            <Image style={styles.bgImage} source={require('../assets/pencil.jpg')} />
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
    )
}

export default ForgotPassword

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bgImage:{
        flex: 1,
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
    },
    label:{
        marginTop: -100,
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
