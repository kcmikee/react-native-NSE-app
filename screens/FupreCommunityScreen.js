import React from 'react'
import { StyleSheet, Text, View,Image, Platform, ScrollView, TouchableHighlight } from 'react-native'

import Icon from "react-native-vector-icons/Ionicons";

const FupreCommunityScreen = ({navigation}) => {
    return (
        <View style={styles.screen}>
            {/* Background Image */}
            <Image style={styles.bgImage} source={require('../assets/images/MaskGroup8.png')} />
            
            {/* Header:Back button, Title and the rest */}
            <View style={styles.header}>
                <View style={styles.left}>
                    {/* <TouchableHighlight style={styles.links1} onPress={()=> navigation.navigate('Newsfeed')}>
                        <Icon
                            name={Platform.OS === "ios" ? "ios-arrow-back" : "md-arrow-back"}
                            color="#fff"
                            size={25}
                        />
                    </TouchableHighlight> */}
                    <Text onpress={()=> navigation.navigate('/')} style={styles.logo}>eHUB Community</Text> 
                </View>
                <View style={styles.right}>
                    <TouchableHighlight style={styles.links1} onPress={()=> navigation.navigate('/')}>                           
                        <Icon
                            name={Platform.OS === "ios" ? "ios-notifications" : "md-notifications"}
                            color="#fff"
                            size={25}
                        />
                    </TouchableHighlight>
                </View>
            </View>

            {/* List */}
            <ScrollView>
                <View style={styles.list}>
                    <View style={styles.leftSide}>
                            <TouchableHighlight style={styles.listCon} onPress={()=> navigation.navigate('/')}>
                                <Icon
                                    name={Platform.OS === "ios" ? "ios-book" : "md-book"}
                                    color="#fff"
                                    size={25}
                                />
                            </TouchableHighlight>
                            <Text style={styles.listText} onPress={()=> navigation.navigate('/')}>News Recommendation</Text> 
                    </View>
                    <View style={styles.rightSide}>
                        <TouchableHighlight style={styles.rightcon} onPress={()=> navigation.navigate('/')}>
                            <Icon
                                name={Platform.OS === "ios" ? "ios-arrow-round-forward" : "md-arrow-round-forward"}
                                color="#fff"
                                size={25}
                            />
                        </TouchableHighlight>
                    </View>
                </View>

                <View style={styles.list}>
                    <View style={styles.leftSide}>
                            <TouchableHighlight style={styles.listCon} onPress={()=> navigation.navigate('/')}>
                                <Icon
                                    name={Platform.OS === "ios" ? "ios-grid" : "md-grid"}
                                    color="#fff"
                                    size={25}
                                />
                            </TouchableHighlight>
                            <Text style={styles.listText} onPress={()=> navigation.navigate('/')}>Event & Programs</Text> 
                    </View>
                    <View style={styles.rightSide}>
                        <TouchableHighlight style={styles.rightcon} onPress={()=> navigation.navigate('/')}>
                            <Icon
                                name={Platform.OS === "ios" ? "ios-arrow-round-forward" : "md-arrow-round-forward"}
                                color="#fff"
                                size={25}
                            />
                        </TouchableHighlight>
                    </View>
                </View>

                <View style={styles.list}>
                    <View style={styles.leftSide}>
                            <TouchableHighlight style={styles.listCon} onPress={()=> navigation.navigate('/')}>
                                <Icon
                                    name={Platform.OS === "ios" ? "ios-people" : "md-people"}
                                    color="#fff"
                                    size={25}
                                />
                            </TouchableHighlight>
                            <Text style={styles.listText} onPress={()=> navigation.navigate('/')}>Forums & Groups </Text> 
                    </View>
                    <View style={styles.rightSide}>
                        <TouchableHighlight style={styles.rightcon} onPress={()=> navigation.navigate('/')}>
                            <Icon
                                name={Platform.OS === "ios" ? "ios-arrow-round-forward" : "md-arrow-round-forward"}
                                color="#fff"
                                size={25}
                            />
                        </TouchableHighlight>
                    </View>
                </View>

                <View style={styles.list}>
                    <View style={styles.leftSide}>
                            <TouchableHighlight style={styles.listCon} onPress={()=> navigation.navigate('/')}>
                                <Icon
                                    name={Platform.OS === "ios" ? "ios-archive" : "md-archive"}
                                    color="#fff"
                                    size={25}
                                />
                            </TouchableHighlight>
                            <Text style={styles.listText} onPress={()=> navigation.navigate('/')}>Promotions</Text> 
                    </View>
                    <View style={styles.rightSide}>
                        <TouchableHighlight style={styles.rightcon} onPress={()=> navigation.navigate('/')}>
                            <Icon
                                name={Platform.OS === "ios" ? "ios-arrow-round-forward" : "md-arrow-round-forward"}
                                color="#fff"
                                size={25}
                            />
                        </TouchableHighlight>
                    </View>
                </View>
                <View style={styles.list}>
                    <View style={styles.leftSide}>
                            <TouchableHighlight style={styles.listCon} onPress={()=> navigation.navigate('/')}>
                                <Icon
                                    name={Platform.OS === "ios" ? "ios-easel" : "md-easel"}
                                    color="#fff"
                                    size={25}
                                />
                            </TouchableHighlight>
                            <Text style={styles.listText} onPress={()=> navigation.navigate('/')}>Programs</Text> 
                    </View>
                    <View style={styles.rightSide}>
                        <TouchableHighlight style={styles.rightcon} onPress={()=> navigation.navigate('/')}>
                            <Icon
                                name={Platform.OS === "ios" ? "ios-arrow-round-forward" : "md-arrow-round-forward"}
                                color="#fff"
                                size={25}
                            />
                        </TouchableHighlight>
                    </View>
                </View>
                <View style={styles.list}>
                    <View style={styles.leftSide}>
                            <TouchableHighlight style={styles.listCon} onPress={()=> navigation.navigate('/')}>
                                <Icon
                                    name={Platform.OS === "ios" ? "ios-list" : "md-list"}
                                    color="#fff"
                                    size={25}
                                />
                            </TouchableHighlight>
                            <Text style={styles.listText} onPress={()=> navigation.navigate('/')}>College News</Text> 
                    </View>
                    <View style={styles.rightSide}>
                        <TouchableHighlight style={styles.rightcon} onPress={()=> navigation.navigate('/')}>
                            <Icon
                                name={Platform.OS === "ios" ? "ios-arrow-round-forward" : "md-arrow-round-forward"}
                                color="#fff"
                                size={25}
                            />
                        </TouchableHighlight>
                    </View>
                </View>
                <View style={styles.list}>
                    <View style={styles.leftSide}>
                            <TouchableHighlight style={styles.listCon} onPress={()=> navigation.navigate('/')}>
                                <Icon
                                    name={Platform.OS === "ios" ? "ios-list" : "md-list"}
                                    color="#fff"
                                    size={25}
                                />
                            </TouchableHighlight>
                            <Text style={styles.listText} onPress={()=> navigation.navigate('/')}>Departmental News</Text> 
                    </View>
                    <View style={styles.rightSide}>
                        <TouchableHighlight style={styles.rightcon} onPress={()=> navigation.navigate('/')}>
                            <Icon
                                name={Platform.OS === "ios" ? "ios-arrow-round-forward" : "md-arrow-round-forward"}
                                color="#fff"
                                size={25}
                            />
                        </TouchableHighlight>
                    </View>
                </View>
                <View style={styles.list}>
                    <View style={styles.leftSide}>
                            <TouchableHighlight style={styles.listCon} onPress={()=> navigation.navigate('/')}>
                                <Icon
                                    name={Platform.OS === "ios" ? "ios-list" : "md-list"}
                                    color="#fff"
                                    size={25}
                                />
                            </TouchableHighlight>
                            <Text style={styles.listText} onPress={()=> navigation.navigate('/')}>Fupre News</Text> 
                    </View>
                    <View style={styles.rightSide}>
                        <TouchableHighlight style={styles.rightcon} onPress={()=> navigation.navigate('/')}>
                            <Icon
                                name={Platform.OS === "ios" ? "ios-arrow-round-forward" : "md-arrow-round-forward"}
                                color="#fff"
                                size={25}
                            />
                        </TouchableHighlight>
                    </View>
                </View>
                <View style={styles.list}>
                    <View style={styles.leftSide}>
                            <TouchableHighlight style={styles.listCon} onPress={()=> navigation.navigate('/')}>
                                <Icon
                                    name={Platform.OS === "ios" ? "ios-list" : "md-list"}
                                    color="#fff"
                                    size={25}
                                />
                            </TouchableHighlight>
                            <Text style={styles.listText} onPress={()=> navigation.navigate('/')}>The Nation</Text> 
                    </View>
                    <View style={styles.rightSide}>
                        <TouchableHighlight style={styles.rightcon} onPress={()=> navigation.navigate('/')}>
                            <Icon
                                name={Platform.OS === "ios" ? "ios-arrow-round-forward" : "md-arrow-round-forward"}
                                color="#fff"
                                size={25}
                            />
                        </TouchableHighlight>
                    </View>
                </View>
                <View style={styles.list}>
                    <View style={styles.leftSide}>
                            <TouchableHighlight style={styles.listCon} onPress={()=> navigation.navigate('/')}>
                                <Icon
                                    name={Platform.OS === "ios" ? "ios-globe" : "md-globe"}
                                    color="#fff"
                                    size={25}
                                />
                            </TouchableHighlight>
                            <Text style={styles.listText} onPress={()=> navigation.navigate('/')}>NSE To The World</Text> 
                    </View>
                    <View style={styles.rightSide}>
                        <TouchableHighlight style={styles.rightcon} onPress={()=> navigation.navigate('/')}>
                            <Icon
                                name={Platform.OS === "ios" ? "ios-arrow-round-forward" : "md-arrow-round-forward"}
                                color="#fff"
                                size={25}
                            />
                        </TouchableHighlight>
                    </View>
                </View>

             </ScrollView>
        </View>
    )
}

export default FupreCommunityScreen

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
        // backgroundColor: '#fff',
        backgroundColor: 'transparent',
        paddingTop: 5,
        borderBottomColor: '#bebebe',
        borderBottomWidth:2
    },
    logo:{
        fontWeight: 'bold',
        fontSize: 20,
        fontFamily: 'segoePrint',
        // marginTop:13,
        // color: '#000',
        color:'#fff',
        marginLeft:10
    },
    left:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 5,
    },
    right:{
        // paddingTop: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    links1:{
        padding:14
    },
    list:{
        borderBottomColor: '#747474',
        borderBottomWidth: 2,
        flexDirection: 'row',
        position:'relative'
    },
    leftSide:{
        flexDirection: 'row',
        padding: 14,
        width: '80%'
    },
    rightSide:{
        alignItems: 'flex-end',
    },
    listCon:{
        marginTop: 1,
        borderRadius: 30,
        padding: 10,
        borderColor:'#fff',
        borderWidth: 2,
    },
    listText:{
        padding: 12,
        color: '#fff',
        fontSize: 17,
        letterSpacing:1,
    },
    rightcon:{
        paddingTop: 25,
        paddingLeft: 25,
    }
})
