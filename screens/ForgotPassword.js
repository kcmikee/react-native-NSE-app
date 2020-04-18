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
                    <TextInput style={styles.inputs} keyboardType="email-address" onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        value={values.email}/>
                </View>
                <View>
                    <Button title='submit' onPress={handleSubmit} />
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
        fontFamily: 'segoe print',
        color: '#fff',
        position: 'relative'
    },
    inputContainer: {
        borderColor: '#cdcdcd',
        backgroundColor: '#fff',
        borderRadius:15,
        borderWidth: 2,
        width:'82%',
        height:55,
        marginBottom:45,
      },
    inputs:{
        height:50,
        // borderBottomColor: '#000',
        flex:1,
        padding: 20,
        color: '#7e7e7e',
        backgroundColor: '#fff',
        borderRadius:15,
        borderWidth: 2,
        fontSize: 25,
        fontWeight: 'bold',
        fontFamily: 'verdana',
        textAlign: 'center',
        justifyContent: 'center',
    },
    
})
