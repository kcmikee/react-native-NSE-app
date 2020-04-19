import React from 'react'
import { View, Text,Button,StyleSheet, TextInput, } from 'react-native'
import { Formik } from 'formik'

const RegForm = () => {
    return (
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
    )
}

export default RegForm

const styles = StyleSheet.create({
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
});