import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Icon from "react-native-vector-icons/Ionicons";

const NewsFeedScreen = () => {
    return (
        <View style={styles.screen}>
            <Text>This is the newsfeed
            yarn add react-native-paper
            </Text>
            <Icon
                name="ios-add"
                color="#000"
                size={25}
                />
        </View>
    )
}

export default NewsFeedScreen

const styles = StyleSheet.create({
    screen:{
         flex: 1, 
         alignItems: 'center', 
         justifyContent: 'center' 
    }
})
