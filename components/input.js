import React from 'react';
import {  TextInput, StyleSheet } from 'react-native';

const Input = () => {
    return (
        <TextInput style={styles.inputs} />
    )
};

const styles=StyleSheet.create({
    inputs:{
        height:50,
        // borderBottomColor: '#000',
        flex:1,
        padding: 20,
        color: '#7e7e7e',
        fontSize: 25,
        fontWeight: 800,
        fontFamily: 'verdana',
        textAlign: 'center',
    },
    inputIcon:{
      width:30,
      height:30,
      marginLeft:15,
      justifyContent: 'center'
    },
});

export default Input
