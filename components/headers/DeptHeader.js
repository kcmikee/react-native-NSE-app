import React from 'react'
import { StyleSheet, Text, View, TouchableHighlight, Platform  } from 'react-native'

const RegHeader = () => {
    return (
        <View style={styles.header}>
                <View style={styles.left}>
                    <TouchableHighlight style={styles.links1} onPress={()=> props.navigation.navigate('Newsfeed')}>
                        <Icon
                            name={Platform.OS === "ios" ? "ios-arrow-back" : "md-arrow-back"}
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
    )
}

export default RegHeader

const styles = StyleSheet.create({
    header:{
        flexDirection: 'row',
        justifyContent:'space-between',
        backgroundColor: 'transparent',
        paddingTop: 10,
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
        paddingTop: 10,
    },
    right:{
        paddingTop: 10,
    },
    links1:{
        padding:14
    },
})
