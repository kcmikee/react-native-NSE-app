import React from 'react'
import { Image, StyleSheet, Text, View, Platform,TouchableHighlight, ImageBackground, ScrollView } from 'react-native'
import Icon from "react-native-vector-icons/Ionicons";

const ElibraryScreen = ({navigation}) => {
    return (
            <View style={styles.screen}>
                {/* background image */}
                <Image style={styles.bgImage} source={require('../assets/images/WallpapereLibrary.PNG.png')} />

                {/* Top Nav */}
                <View style={styles.topnav}>
                    <View style={styles.leftHeader}>
                        <TouchableHighlight style={styles.links} onPress={()=> navigation.navigate('Newsfeed')}>
                            <Icon
                                name={Platform.OS === "ios" ? "ios-undo" : "md-undo"}
                                color="#fff"
                                size={25}
                            />
                        </TouchableHighlight>
                        <Text onpress={()=> navigation.navigate('/')} style={styles.logo}>eHUB</Text> 
                    </View>
                    <View style={styles.rightHeader}>
                        <TouchableHighlight style={styles.links} onPress={()=> navigation.navigate('/')}>
                            <Icon
                                name={Platform.OS === "ios" ? "ios-download" : "md-download"}
                                color="#fff"
                                size={25}
                            />
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.links} onPress={()=> navigation.navigate('/')}>
                            <Icon
                                name={Platform.OS === "ios" ? "ios-notifications" : "md-notifications"}
                                color="#fff"
                                size={25}
                            />
                        </TouchableHighlight>
                    </View>
                </View>

                {/* Mid section */}   
                <View style={styles.elib}>
                    <View style={styles.flatImg}>
                        <ImageBackground source={require('../assets/images/ProfilePic2.PNG')} style={styles.imagebg}>
                            <Text style={styles.libs}>E-LIBRARY</Text>
                        </ImageBackground>
                    </View>
                    <View style={styles.flatIcon}>
                        <View>
                            <Icon
                                name={Platform.OS === "ios" ? "ios-folder" : "md-folder"}
                                color="#fff"
                                size={25}
                            />
                        </View>
                    </View>
                </View>
            
            {/* The list of Items */}
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
                            <Text style={styles.listText} onPress={()=> navigation.navigate('/')}>Departmental Library</Text> 
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
                                    name={Platform.OS === "ios" ? "ios-mail" : "md-mail"}
                                    color="#fff"
                                    size={25}
                                />
                            </TouchableHighlight>
                            <Text style={styles.listText} onPress={()=> navigation.navigate('/')}>Featured</Text> 
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
                                    name={Platform.OS === "ios" ? "ios-code" : "md-code"}
                                    color="#fff"
                                    size={25}
                                />
                            </TouchableHighlight>
                            <Text style={styles.listText} onPress={()=> navigation.navigate('/')}>Data Science</Text> 
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
                                    name={Platform.OS === "ios" ? "ios-hourglass" : "md-hourglass"}
                                    color="#fff"
                                    size={25}
                                />
                            </TouchableHighlight>
                            <Text style={styles.listText} onPress={()=> navigation.navigate('/')}>Math & Logic</Text> 
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
                                    name={Platform.OS === "ios" ? "ios-cog" : "md-cog"}
                                    color="#fff"
                                    size={25}
                                />
                            </TouchableHighlight>
                            <Text style={styles.listText} onPress={()=> navigation.navigate('/')}>Mechanics</Text> 
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
                                    name={Platform.OS === "ios" ? "ios-flask" : "md-flask"}
                                    color="#fff"
                                    size={25}
                                />
                            </TouchableHighlight>
                            <Text style={styles.listText} onPress={()=> navigation.navigate('/')}>Chemistry</Text> 
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
                                    name={Platform.OS === "ios" ? "ios-nuclear" : "md-nuclear"}
                                    color="#fff"
                                    size={25}
                                />
                            </TouchableHighlight>
                            <Text style={styles.listText} onPress={()=> navigation.navigate('/')}>Petroleum & Natural Gas</Text> 
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
                                    name={Platform.OS === "ios" ? "ios-construct" : "md-construct"}
                                    color="#fff"
                                    size={25}
                                />
                            </TouchableHighlight>
                            <Text style={styles.listText} onPress={()=> navigation.navigate('/')}>Electrical Machines</Text> 
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
                                    name={Platform.OS === "ios" ? "ios-boat" : "md-boat"}
                                    color="#fff"
                                    size={25}
                                />
                            </TouchableHighlight>
                            <Text style={styles.listText} onPress={()=> navigation.navigate('/')}>Naval Achitecture</Text> 
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
                                    name={Platform.OS === "ios" ? "logo-buffer" : "logo-buffer"}
                                    color="#fff"
                                    size={25}
                                />
                            </TouchableHighlight>
                            <Text style={styles.listText} onPress={()=> navigation.navigate('/')}>Departmental Library</Text> 
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

export default ElibraryScreen

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
    topnav:{
        flexDirection: 'row',
        justifyContent:'space-between',
    },
    logo:{
        fontWeight: 'bold',
        fontSize: 20,
        fontFamily: 'segoe script',
        marginTop:15,
        color: '#fff'
    },
    leftHeader:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
    },
    rightHeader:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 25,
    },
    links:{
        padding: 14,
    },
    elib:{
        flexDirection: 'row',
        borderRadius:15,
        borderColor:'#sffffff',
        borderWidth: 1,
    },
    flatImg:{
        width: "80%",
        height:65,

    },
    flatIcon:{
        alignItems: 'center',
        padding:15
    },
    imagebg:{
        flex:1, 
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    libs:{
        color:'grey',
        fontSize: 30, 
        fontWeight:'bold',
        alignSelf: 'center'
    },
    list:{
        borderBottomColor: '#555555',
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
        marginTop: 12,
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
