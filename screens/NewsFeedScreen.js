import React from 'react'
import { SafeAreaView, StyleSheet, Text, View, Platform, Image,TouchableHighlight, ScrollView } from 'react-native'
import Icon from "react-native-vector-icons/Ionicons";

const NewsFeedScreen = ({navigation}) => {
    return (
        <View style={styles.screen}>
            {/* Background Image */}
            <Image style={styles.bgImage} source={require('../assets/images/WALLPAPER.png')} />

            {/* Header:Menu Button, Title etc */}
            <View style={styles.header}>

                {/* Menu and Title */}
                <View style={styles.left}>
                    <TouchableHighlight style={styles.links1} onPress={()=> navigation.openDrawer()}>
                        <Icon
                            name={Platform.OS === "ios" ? "ios-menu" : "md-menu"}
                            color="#fff"
                            size={25}
                        />
                    </TouchableHighlight>
                    <TouchableHighlight  onPress={()=> navigation.navigate('Login')}>
                        <Text onpress={()=> navigation.navigate('Login')} style={styles.logo}>eHUB</Text> 
                    </TouchableHighlight>
                </View>

                {/* Notification and search  */}
                <View style={styles.right}>
                    <TouchableHighlight style={styles.links1} onPress={()=> navigation.navigate('/')}>                           
                        <Icon
                            name={Platform.OS === "ios" ? "ios-notifications" : "md-notifications"}
                            color="#fff"
                            size={25}
                        />
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.links1} onPress={()=> navigation.navigate('/')}>
                        <Icon
                            name={Platform.OS === "ios" ? "ios-search" : "md-search"}
                            color="#fff"
                            size={25}
                        />
                    </TouchableHighlight>
                </View>
            </View>

            {/* Tiny NavBar */}
            <View style={styles.nav}>
                <TouchableHighlight style={styles.navlinks} onPress={()=> navigation.navigate('/')}>
                    <Text style={{fontWeight:'bold'}} style={{fontFamily: 'minion',}}> Just In </Text>
                </TouchableHighlight> 
                <TouchableHighlight style={styles.navlinks} onPress={()=> navigation.navigate('/')}>
                    <Text style={{fontFamily: 'minion',}}> Top Stories </Text>
                </TouchableHighlight> 
                <TouchableHighlight style={styles.navlinks} onPress={()=> navigation.navigate('Department')}>
                    <Text style={{fontFamily: 'minion',}}> Department </Text>
                </TouchableHighlight> 
                <TouchableHighlight style={styles.navlinks} onPress={()=> navigation.navigate('/')}>
                    <Text style={{fontFamily: 'minion',}}> Programs </Text>
                </TouchableHighlight> 
                <TouchableHighlight style={styles.navlinks} onPress={()=> navigation.navigate('Community')}>
                    <Text style={{fontFamily: 'minion',}}> Community </Text>
                </TouchableHighlight> 
                <Icon
                    name={Platform.OS === "ios" ? "ios-add" : "md-add"}
                    color="#000"
                    size={25}
                />   
            </View>

            {/* Newsfeed */}
            <ScrollView>
            <View style={styles.feeds}>

                {/* Contains text on the left */}
                <View style={styles.feedsText}>
                    <View style={styles.feedsUpdates}>
                            <Text style={{fontWeight: 'bold', fontFamily: 'minion',}}> New Update!!! </Text>
                            <Text style={{fontWeight: 'normal', fontFamily: 'minion',}}>The Engineering Body</Text>
                    </View>
                    <View stlye={styles.feedBody}>
                        <Text style={{textAlign: 'justify', }}> 
                           Lorem, ipsum dolor sit amet consectetur adipisicing elit.ecto ab. Tenetur, libero! Velit aliquid quibusdam quas.
                        </Text>
                    </View>
                    <View style={styles.feedsIcon}>
                         <TouchableHighlight style={styles.links} onPress={()=> navigation.navigate('/')}>
                            <Icon
                                name={Platform.OS === "ios" ? "ios-globe" : "md-globe"}
                                color="#000"
                                size={25}
                            />
                        </TouchableHighlight> 
                        <TouchableHighlight style={styles.links} onPress={()=> navigation.navigate('/')}>
                            <Icon
                                name={Platform.OS === "ios" ? "ios-share" : "md-share"}
                                color="#000"
                                size={25}
                            />
                        </TouchableHighlight> 
                        <TouchableHighlight style={styles.links} onPress={()=> navigation.navigate('/')}>
                            <Icon
                                name={Platform.OS === "ios" ? "ios-thumbs-up" : "md-thumbs-up"}
                                color="#000"
                                size={25}
                            />
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.links} onPress={()=> navigation.navigate('/')}>
                            <Icon
                                name={Platform.OS === "ios" ? "ios-thumbs-down" : "md-thumbs-down"}
                                color="#000"
                                size={25}
                            />
                        </TouchableHighlight> 
                        <TouchableHighlight style={styles.links} onPress={()=> navigation.navigate('/')}>
                            <Icon
                                name={Platform.OS === "ios" ? "ios-time" : "md-time"}
                                color="#000"
                                size={25}
                            />
                        </TouchableHighlight> 
                    </View>
                </View>
                
                {/* Contains the image on the right */}
                <View style={styles.feedsImage}>
                    <View style={{flexDirection: 'row'}}>
                        <Icon
                            name={Platform.OS === "ios" ? "ios-add" : "md-add"}
                            color="#000"
                            size={20}
                        />
                        <TouchableHighlight style={styles.links} onPress={()=> navigation.navigate('/')}>
                            <Text> Follow </Text>
                        </TouchableHighlight>
                    </View>
                    <View >
                        <Image style={{borderRadius: 15, width: 65, height: 95}} source={require('../assets/images/ProfilePic.PNG.png')} />
                    </View>
                </View>
            </View>

            <Text> {'\n'} </Text>

            <View style={styles.feeds}>
                <View style={styles.feedsText}>
                    <View style={styles.feedsUpdates}>
                        <Text style={{fontWeight: 'bold', fontFamily: 'minion',}}> New Update!!! </Text>
                        <Text style={{fontWeight: 'normal', fontFamily: 'minion',}}>The Engineering Body</Text>
                    </View>
                    <View stlye={styles.feedBody}>
                        <Text style={{textAlign: 'justify',}}> 
                           Lorem, ipsum dolor sit amet consectetur adipisicing elit.ecto ab. Tenetur, libero! Velit aliquid quibusdam quas.
                        </Text>
                    </View>
                    <View style={styles.feedsIcon}>
                         <TouchableHighlight style={styles.links} onPress={()=> navigation.navigate('/')}>
                            <Icon
                                name={Platform.OS === "ios" ? "ios-globe" : "md-globe"}
                                color="#000"
                                size={25}
                            />
                        </TouchableHighlight> 
                        <TouchableHighlight style={styles.links} onPress={()=> navigation.navigate('/')}>
                            <Icon
                                name={Platform.OS === "ios" ? "ios-share" : "md-share"}
                                color="#000"
                                size={25}
                            />
                        </TouchableHighlight> 
                        <TouchableHighlight style={styles.links} onPress={()=> navigation.navigate('/')}>
                            <Icon
                                name={Platform.OS === "ios" ? "ios-thumbs-up" : "md-thumbs-up"}
                                color="#000"
                                size={25}
                            />
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.links} onPress={()=> navigation.navigate('/')}>
                            <Icon
                                name={Platform.OS === "ios" ? "ios-thumbs-down" : "md-thumbs-down"}
                                color="#000"
                                size={25}
                            />
                        </TouchableHighlight> 
                        <TouchableHighlight style={styles.links} onPress={()=> navigation.navigate('/')}>
                            <Icon
                                name={Platform.OS === "ios" ? "ios-time" : "md-time"}
                                color="#000"
                                size={25}
                            />
                        </TouchableHighlight> 
                    </View>
                </View>
                <View style={styles.feedsImage}>
                    <View style={{flexDirection: 'row'}}>
                        <Icon
                            name={Platform.OS === "ios" ? "ios-add" : "md-add"}
                            color="#000"
                            size={20}
                        />
                        <TouchableHighlight style={styles.links} onPress={()=> navigation.navigate('/')}>
                            <Text> Follow </Text>
                        </TouchableHighlight>
                    </View>
                    <View >
                        <Image style={{borderRadius: 15, width: 65, height: 95}} source={require('../assets/images/ProfilePic.PNG.png')} />
                    </View>
                </View>
            </View>

            <Text> {'\n'} </Text>

            <View style={styles.feeds}>
                <View style={styles.feedsText}>
                    <View style={styles.feedsUpdates}>
                        <Text style={{fontWeight: 'bold', fontFamily: 'minion',}}> New Update!!! </Text>
                        <Text style={{fontWeight: 'normal', fontFamily: 'minion',}}>The Engineering Body</Text>
                    </View>
                    <View stlye={styles.feedBody}>
                        <Text style={{textAlign: 'justify',}}> 
                           Lorem, ipsum dolor sit amet consectetur adipisicing elit.ecto ab. Tenetur, libero! Velit aliquid quibusdam quas.
                        </Text>
                    </View>
                    <View style={styles.feedsIcon}>
                         <TouchableHighlight style={styles.links} onPress={()=> navigation.navigate('/')}>
                            <Icon
                                name={Platform.OS === "ios" ? "ios-globe" : "md-globe"}
                                color="#000"
                                size={25}
                            />
                        </TouchableHighlight> 
                        <TouchableHighlight style={styles.links} onPress={()=> navigation.navigate('/')}>
                            <Icon
                                name={Platform.OS === "ios" ? "ios-share" : "md-share"}
                                color="#000"
                                size={25}
                            />
                        </TouchableHighlight> 
                        <TouchableHighlight style={styles.links} onPress={()=> navigation.navigate('/')}>
                            <Icon
                                name={Platform.OS === "ios" ? "ios-thumbs-up" : "md-thumbs-up"}
                                color="#000"
                                size={25}
                            />
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.links} onPress={()=> navigation.navigate('/')}>
                            <Icon
                                name={Platform.OS === "ios" ? "ios-thumbs-down" : "md-thumbs-down"}
                                color="#000"
                                size={25}
                            />
                        </TouchableHighlight> 
                        <TouchableHighlight style={styles.links} onPress={()=> navigation.navigate('/')}>
                            <Icon
                                name={Platform.OS === "ios" ? "ios-time" : "md-time"}
                                color="#000"
                                size={25}
                            />
                        </TouchableHighlight> 
                    </View>
                </View>
                <View style={styles.feedsImage}>
                    <View style={{flexDirection: 'row'}}>
                        <Icon
                            name={Platform.OS === "ios" ? "ios-add" : "md-add"}
                            color="#000"
                            size={20}
                        />
                        <TouchableHighlight style={styles.links} onPress={()=> navigation.navigate('/')}>
                            <Text> Follow </Text>
                        </TouchableHighlight>
                    </View>
                    <View >
                        <Image style={{borderRadius: 15, width: 65, height: 95}} source={require('../assets/images/ProfilePic.PNG.png')} />
                    </View>
                </View>
            </View>

            <Text> {'\n'} </Text>

            <View style={styles.feeds}>
                <View style={styles.feedsText}>
                    <View style={styles.feedsUpdates}>
                        <Text style={{fontWeight: 'bold', fontFamily: 'minion',}}> New Update!!! </Text>
                        <Text style={{fontWeight: 'normal', fontFamily: 'minion',}}>The Engineering Body</Text>
                    </View>
                    <View stlye={styles.feedBody}>
                        <Text style={{textAlign: 'justify',}}> 
                           Lorem, ipsum dolor sit amet consectetur adipisicing elit.ecto ab. Tenetur, libero! Velit aliquid quibusdam quas.
                        </Text>
                    </View>
                    <View style={styles.feedsIcon}>
                         <TouchableHighlight style={styles.links} onPress={()=> navigation.navigate('/')}>
                            <Icon
                                name={Platform.OS === "ios" ? "ios-globe" : "md-globe"}
                                color="#000"
                                size={25}
                            />
                        </TouchableHighlight> 
                        <TouchableHighlight style={styles.links} onPress={()=> navigation.navigate('/')}>
                            <Icon
                                name={Platform.OS === "ios" ? "ios-share" : "md-share"}
                                color="#000"
                                size={25}
                            />
                        </TouchableHighlight> 
                        <TouchableHighlight style={styles.links} onPress={()=> navigation.navigate('/')}>
                            <Icon
                                name={Platform.OS === "ios" ? "ios-thumbs-up" : "md-thumbs-up"}
                                color="#000"
                                size={25}
                            />
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.links} onPress={()=> navigation.navigate('/')}>
                            <Icon
                                name={Platform.OS === "ios" ? "ios-thumbs-down" : "md-thumbs-down"}
                                color="#000"
                                size={25}
                            />
                        </TouchableHighlight> 
                        <TouchableHighlight style={styles.links} onPress={()=> navigation.navigate('/')}>
                            <Icon
                                name={Platform.OS === "ios" ? "ios-time" : "md-time"}
                                color="#000"
                                size={25}
                            />
                        </TouchableHighlight> 
                    </View>
                </View>
                <View style={styles.feedsImage}>
                    <View style={{flexDirection: 'row'}}>
                        <Icon
                            name={Platform.OS === "ios" ? "ios-add" : "md-add"}
                            color="#000"
                            size={20}
                        />
                        <TouchableHighlight style={styles.links} onPress={()=> navigation.navigate('/')}>
                            <Text> Follow </Text>
                        </TouchableHighlight>
                    </View>
                    <View >
                        <Image style={{borderRadius: 15, width: 65, height: 95}} source={require('../assets/images/ProfilePic.PNG.png')} />
                    </View>
                </View>
            </View>

            <Text> {'\n'} </Text>

            <View style={styles.feeds}>
                <View style={styles.feedsText}>
                    <View style={styles.feedsUpdates}>
                        <Text style={{fontWeight: 'bold', fontFamily: 'minion',}}> New Update!!! </Text>
                        <Text style={{fontWeight: 'normal', fontFamily: 'minion',}}>The Engineering Body</Text>
                    </View>
                    <View stlye={styles.feedBody}>
                        <Text style={{textAlign: 'justify',}}> 
                           Lorem, ipsum dolor sit amet consectetur adipisicing elit.ecto ab. Tenetur, libero! Velit aliquid quibusdam quas.
                        </Text>
                    </View>
                    <View style={styles.feedsIcon}>
                         <TouchableHighlight style={styles.links} onPress={()=> navigation.navigate('/')}>
                            <Icon
                                name={Platform.OS === "ios" ? "ios-globe" : "md-globe"}
                                color="#000"
                                size={25}
                            />
                        </TouchableHighlight> 
                        <TouchableHighlight style={styles.links} onPress={()=> navigation.navigate('/')}>
                            <Icon
                                name={Platform.OS === "ios" ? "ios-share" : "md-share"}
                                color="#000"
                                size={25}
                            />
                        </TouchableHighlight> 
                        <TouchableHighlight style={styles.links} onPress={()=> navigation.navigate('/')}>
                            <Icon
                                name={Platform.OS === "ios" ? "ios-thumbs-up" : "md-thumbs-up"}
                                color="#000"
                                size={25}
                            />
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.links} onPress={()=> navigation.navigate('/')}>
                            <Icon
                                name={Platform.OS === "ios" ? "ios-thumbs-down" : "md-thumbs-down"}
                                color="#000"
                                size={25}
                            />
                        </TouchableHighlight> 
                        <TouchableHighlight style={styles.links} onPress={()=> navigation.navigate('/')}>
                            <Icon
                                name={Platform.OS === "ios" ? "ios-time" : "md-time"}
                                color="#000"
                                size={25}
                            />
                        </TouchableHighlight> 
                    </View>
                </View>
                <View style={styles.feedsImage}>
                    <View style={{flexDirection: 'row'}}>
                        <Icon
                            name={Platform.OS === "ios" ? "ios-add" : "md-add"}
                            color="#000"
                            size={20}
                        />
                        <TouchableHighlight style={styles.links} onPress={()=> navigation.navigate('/')}>
                            <Text> Follow </Text>
                        </TouchableHighlight>
                    </View>
                    <View >
                        <Image style={{borderRadius: 15, width: 65, height: 95}} source={require('../assets/images/ProfilePic.PNG.png')} />
                    </View>
                </View>
            </View>

            <Text> {'\n'} </Text>

            <View style={styles.feeds}>
                <View style={styles.feedsText}>
                    <View style={styles.feedsUpdates}>
                        <Text style={{fontWeight: 'bold', fontFamily: 'minion',}}> New Update!!!  </Text>
                        <Text style={{fontWeight: 'normal', fontFamily: 'minion',}}>The Engineering Body</Text>
                    </View>
                    <View stlye={styles.feedBody}>
                        <Text style={{textAlign: 'justify',}}> 
                           Lorem, ipsum dolor sit amet consectetur adipisicing elit.ecto ab. Tenetur, libero! Velit aliquid quibusdam quas.
                        </Text>
                    </View>
                    <View style={styles.feedsIcon}>
                         <TouchableHighlight style={styles.links} onPress={()=> navigation.navigate('/')}>
                            <Icon
                                name={Platform.OS === "ios" ? "ios-globe" : "md-globe"}
                                color="#000"
                                size={25}
                            />
                        </TouchableHighlight> 
                        <TouchableHighlight style={styles.links} onPress={()=> navigation.navigate('/')}>
                            <Icon
                                name={Platform.OS === "ios" ? "ios-share" : "md-share"}
                                color="#000"
                                size={25}
                            />
                        </TouchableHighlight> 
                        <TouchableHighlight style={styles.links} onPress={()=> navigation.navigate('/')}>
                            <Icon
                                name={Platform.OS === "ios" ? "ios-thumbs-up" : "md-thumbs-up"}
                                color="#000"
                                size={25}
                            />
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.links} onPress={()=> navigation.navigate('/')}>
                            <Icon
                                name={Platform.OS === "ios" ? "ios-thumbs-down" : "md-thumbs-down"}
                                color="#000"
                                size={25}
                            />
                        </TouchableHighlight> 
                        <TouchableHighlight style={styles.links} onPress={()=> navigation.navigate('/')}>
                            <Icon
                                name={Platform.OS === "ios" ? "ios-time" : "md-time"}
                                color="#000"
                                size={25}
                            />
                        </TouchableHighlight> 
                    </View>
                </View>
                <View style={styles.feedsImage}>
                    <View style={{flexDirection: 'row'}}>
                        <Icon
                            name={Platform.OS === "ios" ? "ios-add" : "md-add"}
                            color="#000"
                            size={20}
                        />
                        <TouchableHighlight style={styles.links} onPress={()=> navigation.navigate('/')}>
                            <Text> Follow </Text>
                        </TouchableHighlight>
                    </View>
                    <View >
                        <Image style={{borderRadius: 15, width: 65, height: 95}} source={require('../assets/images/ProfilePic.PNG.png')} />
                    </View>
                </View>
            </View>

            <Text> {'\n'} </Text>


            </ScrollView>

        </View>
    )
}

export default NewsFeedScreen

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
        backgroundColor: '#9d9d9d'
    },
    logo:{
        fontWeight: 'bold',
        fontSize: 20,
        fontFamily: 'segoeScript',
        marginTop:13,
        color: '#fff'
    },
    left:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
    },
    right:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
    },
    links1:{
        padding:14
    },
    links:{
        paddingBottom:13,
        
    },
    nav:{
        width:'100%',
        height: 30,
        flexDirection: 'row',
        backgroundColor: '#f0f0f0',
        justifyContent: 'space-evenly',
    },
    navlinks:{
        paddingBottom: 14,
        paddingTop:5,
        fontFamily: 'minion',
    },   
    feeds:{
        flexDirection: 'row',
        paddingLeft: 14,
        paddingLeft: 14,
        backgroundColor: '#c9c9c9'
    },
    feedsText:{
        width: '70%',
        paddingTop: 8,
    },
    feedsUpdates:{
        flexDirection: 'row',
    },
    feedsIcon:{
        flexDirection: 'row',
        width: '60%',
        flexDirection: 'row',
        width: '60%',
        justifyContent: 'space-evenly',
       paddingBottom: 5,
    },
    feedsImage:{
        width: '20%',
        marginLeft: 20,
        paddingBottom: 2,
        marginTop: 2,
    },
})
