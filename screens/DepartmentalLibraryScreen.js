import React from 'react'
import { StyleSheet, Text, View,Image, ScrollView,TouchableHighlight,Platform } from 'react-native'

import Icon from "react-native-vector-icons/Ionicons";


const DepartmentalLibraryScreen = () => {
    return (
        <View style={styles.screen}>
            <Image style={styles.bgImage} source={require('../assets/images/Departmental Library.PNG.png')} />
            
            <View style={styles.header}>
                <View style={styles.left}>
                    <TouchableHighlight style={styles.links1} onPress={()=> props.navigation.navigate('/')}>
                        <Icon
                            name={Platform.OS === "ios" ? "ios-menu" : "md-menu"}
                            color="#fff"
                            size={25}
                        />
                    </TouchableHighlight>
                    <Text onpress={()=> props.navigation.navigate('Newsfeed')} style={styles.logo}>Departmental Library</Text> 
                </View>
                <View style={styles.right}>
                    <TouchableHighlight style={styles.links1} onPress={()=> props.navigation.navigate('/')}>                           
                        <Icon
                            name={Platform.OS === "ios" ? "ios-notifications" : "md-notifications"}
                            color="#fff"
                            size={25}
                        />
                    </TouchableHighlight>
                </View>
            </View>


        </View>
    )
}

export default DepartmentalLibraryScreen

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
        backgroundColor: 'transparent'
    },
    logo:{
        fontWeight: 'bold',
        fontSize: 20,
        fontFamily: 'segoe script',
        marginTop:13,
        color: '#fff'
    },
    left:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
    },
    right:{
        paddingTop: 20,
    },
    links1:{
        padding:14
    },

})
