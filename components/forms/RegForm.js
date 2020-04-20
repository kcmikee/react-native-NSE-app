import React from 'react'
import { View, Text,Button,StyleSheet, TextInput, Platform} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { Formik } from 'formik'

const RegForm = () => {
    return (
        <Formik
            initialValues={{ name:'',email:'', password:'', department:'',matnumber:'',nsecode:'' }}
            onSubmit={values => console.log(values)
            }>
                {({handleChange,handleSubmit, values}) =>(
                    <View style={styles.align}>
                        
                        <View style={styles.inputContainer}>
                            <Icon
                                name={Platform.OS === "ios" ? "ios-person" : "md-person"}
                                color="#000"
                                size={25}
                                style={{marginTop:8, marginLeft:7}}
                            />
                            <TextInput style={styles.inputs} onChangeText={handleChange('name')} value={values.name} placeholder='Full Name'/>
                        </View>
                    
                        <View style={styles.inputContainer}>
                            <Icon
                                name={Platform.OS === "ios" ? "ios-mail" : "md-mail"}
                                color="#000"
                                size={25}
                                style={{marginTop:8, marginLeft:7}}
                            />
                            <TextInput style={styles.inputs} placeholder='Email' keyboardType="email-address" onChangeText={handleChange('email')} value={values.email}/>
                        </View>

                        <View style={styles.inputContainer}>
                            <Icon
                                name={Platform.OS === "ios" ? "ios-lock" : "md-lock"}
                                color="#000"
                                size={25}
                                style={{marginTop:8, marginLeft:7}}
                            />
                            <TextInput style={styles.inputs} placeholder='Password' secureTextEntry={true} onChangeText={handleChange('password')} value={values.password}/>
                        </View>

                        
                        <View style={styles.inputContainer}>
                            <Icon
                                name={Platform.OS === "ios" ? "ios-business" : "md-business"}
                                color="#000"
                                size={25}
                                style={{marginTop:8, marginLeft:7}}
                            />
                            <TextInput style={styles.inputs} placeholder='Department' onChangeText={handleChange('department')} value={values.department}/>  
                        </View>

                        <View style={styles.inputContainer}>
                            <Icon
                                name={Platform.OS === "ios" ? "ios-school" : "md-school"}
                                color="#000"
                                size={25}
                                style={{marginTop:8, marginLeft:7}}
                            />
                            <TextInput style={styles.inputs} placeholder='Matric Number' onChangeText={handleChange('matnumber')} value={values.matnumber}/>
                        </View>

                        <View style={styles.inputContainer}>
                            <Icon
                                name={Platform.OS === "ios" ? "ios-construct" : "md-construct"}
                                color="#000"
                                size={25}
                                style={{marginTop:8, marginLeft:7}}
                            />
                            <TextInput style={styles.inputs} placeholder='Nse Registration Code' onChangeText={handleChange('nsecode')} value={values.nsecode}/>
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
        marginTop:10,
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
        paddingLeft: 5,
        fontFamily: 'minion',
    },
    inputIcon:{
      width:30,
      height:30,
      marginLeft:5,
      justifyContent: 'center',
      color: '#000',
      marginTop: 6
    },
      submit:{
        width: 250,
        alignSelf: 'center',
        marginBottom: 20,
        padding: 25,
      }
});