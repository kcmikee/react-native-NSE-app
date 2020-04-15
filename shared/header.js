import React from 'react'
import { StyleSheet,Text,View } from "react-native";

const Header = () => {
    return(
        <View style={styles.header}>
                <Text style={styles.headerText}>Fupreng</Text>
        </View>
    )
}

const style = StyleSheet.create({
    header:{
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerText:{
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing:1,
    }
});

export default Header