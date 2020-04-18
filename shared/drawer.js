import React from 'react'
import {Image, StyleSheet,Platform, View,ImageBackground,TouchableHighlight, } from 'react-native'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import Icon from "react-native-vector-icons/Ionicons";
import { Drawer, Caption, Title, Paragraph, Text, TouchableRipple, Switch} from 'react-native-paper'


export function DrawerContent(props){
    return(
        <View style={styles.screen}>
            <ImageBackground style={styles.background} source={require('../assets/images/Menu eHUB.PNG.png')}>
                <DrawerContentScrollView>
                    {/* Contains the ehub and notification bell */}
                    <View style={styles.header}>
                        <View style={styles.left}>
                            <Text onpress={()=> props.navigation.navigate('Newsfeed')} style={styles.logo}>eHUB</Text> 
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
                    {/* Contains the Profile section */}
                    <View style={styles.mid}>
                        <Image style={styles.midImage} source={require('../assets/images/Profile Pic2.PNG')} />
                        <View style={styles.nse}>
                            <Image style={styles.nseImg} source={require('../assets/download.jpg')} />
                        </View>
                        <View style={styles.midText}>
                            <View style={{flexDirection: 'row',}}>
                                <Text style={{color:'#fff', fontSize: 14}}>NSE Number: </Text>
                                <Text style={{color:'#e1e1e1', fontSize: 14,}}>*****</Text>
                            </View>
                            <View style={{flexDirection: 'row',}}>
                                <Text style={{color:'#fff', fontSize: 14}}>@Username: </Text>
                                <Text style={{color:'#e1e1e1', fontSize: 14,}}>kosohills</Text>
                            </View>
                            <View style={{flexDirection: 'row',}}>
                                <Text style={{color:'#fff', fontSize: 14}}>Department: </Text>
                                <Text style={{color:'#e1e1e1', fontSize: 14,}}>Petroleum</Text>
                            </View>
                            <View style={{flexDirection: 'row',}}>
                                <Text style={{color:'#fff', fontSize: 14}}>Level:</Text>
                                <Text style={{color:'#e1e1e1', fontSize: 14,}}>100L</Text>
                            </View>
                        </View>
                    </View>
                    {/* Contains the links */}
                    <View styles={styles.list}>
                        <DrawerItem style={{borderBottomWidth:1, borderBottomColor:'#bebebe'}}
                            icon={() => (
                                <Icon name={Platform.OS === "ios" ? "ios-stats" : "md-stats"}
                                    color='#fff'
                                    size={25} />
                            )}
                            label={()=>(
                                <Text style={{color: '#fff'}}>Trending</Text>
                            )}
                            onPress={()=>{}}
                        />
                        <DrawerItem style={{borderBottomWidth:1, borderBottomColor:'#bebebe'}}
                            icon={() => (
                                <Icon name={Platform.OS === "ios" ? "ios-mail" : "md-mail"}
                                    color='#fff'
                                    size={25} />
                            )}
                            label={()=>(
                                <Text style={{color: '#fff'}}>Inbox</Text>
                            )}
                            onPress={()=>{}}
                        />
                        <DrawerItem style={{borderBottomWidth:1, borderBottomColor:'#bebebe'}}
                            icon={() => (
                                <Icon name={Platform.OS === "ios" ? "ios-bookmark" : "md-bookmark"}
                                    color='#fff'
                                    size={25} />
                            )}
                            label={()=>(
                                <Text style={{color: '#fff'}}>My Favourite</Text>
                            )}
                            onPress={()=>{}}
                        />
                        <DrawerItem style={{borderBottomWidth:1, borderBottomColor:'#bebebe'}}
                            icon={() => (
                                <Icon name={Platform.OS === "ios" ? "ios-download" : "md-download"}
                                    color='#fff'
                                    size={25} />
                            )}
                            label={()=>(
                                <Text style={{color: '#fff'}}>Download</Text>
                            )}
                            onPress={()=>{}}
                        />
                        <DrawerItem style={{borderBottomWidth:1, borderBottomColor:'#bebebe'}}
                            icon={() => (
                                <Icon name={Platform.OS === "ios" ? "ios-business" : "md-business"}
                                    color='#fff'
                                    size={25} />
                            )}
                            label={()=>(
                                <Text style={{color: '#fff'}}>Departmental Toolkit</Text>
                            )}
                            onPress={()=>{props.navigation.navigate('Department')}}
                        />
                        <DrawerItem style={{borderBottomWidth:1, borderBottomColor:'#bebebe'}}
                            icon={() => (
                                <Icon name={Platform.OS === "ios" ? "ios-book" : "md-book"}
                                    color='#fff'
                                    size={25} />
                            )}
                            label={()=>(
                                <Text style={{color: '#fff'}}>E-Library</Text>
                            )}
                            onPress={()=>{props.navigation.navigate('Elibrary')}}
                        />
                        <DrawerItem style={{borderBottomWidth:1, borderBottomColor:'#bebebe'}}
                            icon={() => (
                                <Icon name={Platform.OS === "ios" ? "ios-cog" : "md-cog"}
                                    color='#fff'
                                    size={25} />
                            )}
                            label={()=>(
                                <Text style={{color: '#fff'}}>Engineering News</Text>
                            )}
                            onPress={()=>{props.navigation.navigate('Newsfeed')}}
                        />
                        <DrawerItem style={{borderBottomWidth:1, borderBottomColor:'#bebebe'}}
                            icon={() => (
                                <Icon name={Platform.OS === "ios" ? "ios-cloud" : "md-cloud"}
                                    color='#fff'
                                    size={25} />
                            )}
                            label={()=>(
                                <Text style={{color: '#fff'}}>Offline Reader</Text>
                            )}
                            onPress={()=>{}}
                        />
                        <DrawerItem style={{borderBottomWidth:1, borderBottomColor:'#bebebe'}}
                            icon={() => (
                                <Icon name={Platform.OS === "ios" ? "ios-construct" : "md-construct"}
                                    color='#fff'
                                    size={25} />
                            )}
                            label={()=>(
                                <Text style={{color: '#fff'}}>Community</Text>
                            )}
                            onPress={()=>{props.navigation.navigate('Community')}}
                        />
                        <DrawerItem style={{borderBottomWidth:1, borderBottomColor:'#bebebe'}}
                            icon={() => (
                                <Icon name={Platform.OS === "ios" ? "ios-star" : "md-star"}
                                    color='#fff'
                                    size={25} />
                            )}
                            label={()=>(
                                <Text style={{color: '#fff'}}>Ratings & FeedBacks</Text>
                            )}
                            onPress={()=>{props.navigation.navigate('')}}
                        />
                            
                    </View>
                </DrawerContentScrollView>

                {/* The sign out section */}
                <Drawer.Section style={styles.bottomDrawerSection}>
                    <DrawerItem 
                        icon={() => (
                            <Icon name={Platform.OS === "ios" ? "ios-exit" : "md-exit"}
                                color='#fff'
                                size={25} />
                        )}
                        label={()=>(
                            <Text style={{color: '#fff'}}>Sign Out</Text>
                        )}
                        onPress={()=>{}}
                    />
                </Drawer.Section>
            </ImageBackground>
        </View>
    )
}
const styles =StyleSheet.create({
    screen:{
        flex: 1
    },
    background:{
        resizeMode:"cover",
        justifyContent: 'center',
        flex: 1,
    },
    header:{
        flexDirection: 'row',
        justifyContent:'space-between',
        paddingTop:10,
        marginBottom: 10,
    },
    logo:{
        fontWeight: 'bold',
        fontSize: 20,
        fontFamily: 'segoe script',
        color: '#fff',
    },
    left:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft:10,
    },
    right:{
        paddingRight: 30,
    },
    mid:{
        borderRadius: 15,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        borderColor:'#fff',
        borderWidth:2,
        marginBottom: 10,
    },
    midImage:{
        flex: 1,
        position: 'absolute',
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        padding:25 ,
        borderRadius: 15,
    },
    nse:{
        height: 55,
        width: 55,
        borderRadius: 5, 
        paddingTop: 25,

    },
    nseImg:{
        height: 55,
        width: 55,
        borderRadius: 10,
    },
    midText:{
        padding: 25,
    },

    
    
})