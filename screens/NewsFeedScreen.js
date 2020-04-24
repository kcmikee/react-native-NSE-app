import React from 'react'
import { Dimensions, StyleSheet, Text, View, Platform, Image,TouchableHighlight, ScrollView } from 'react-native'
import Icon from "react-native-vector-icons/Ionicons";


var width=Dimensions.get('window').width
const NewsFeedScreen = ({navigation}) => {
    return (
        <View style={styles.screen}>
            {/* Background Image */}
            {/* <Image style={styles.bgImage} source={require('../assets/images/WALLPAPER.png')} /> */}
            <Image style={styles.bgImage} source={require('../assets/bg/close-up-of-wooden-plank-326311.jpg')} />

            {/* Header:Menu Button, Title etc */}
            <View style={styles.header}>

                {/* Menu and Title */}
                <View style={styles.left}>
                    <TouchableHighlight style={styles.links1} onPress={()=> navigation.openDrawer()}>
                        <Icon
                            name={Platform.OS === "ios" ? "ios-menu" : "md-menu"}
                            color="#000"
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
                            color="#000"
                            size={25}
                        />
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.links1} onPress={()=> navigation.navigate('/')}>
                        <Icon
                            name={Platform.OS === "ios" ? "ios-search" : "md-search"}
                            color="#000"
                            size={25}
                        />
                    </TouchableHighlight>
                </View>
            </View>

            {/* Newsfeed */}
            <ScrollView>
                <View style={styles.feeds}>
                    {/* Contains text on the left */}
                    <View style={styles.feedsText}>
                        <View style={styles.feedsUpdates}>
                                <Text style={styles.bold}> New Update!!! </Text>
                                <Text style={styles.engine}>The Engineering Body</Text>
                        </View>
                        <View stlye={styles.feedBody}>
                            <Text style={styles.body}> 
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
                            <Image style={styles.circle} source={require('../assets/images/ProfilePic.PNG.png')} />
                        </View>
                    </View>
                </View>
                <View style={styles.feeds}>
                    {/* Contains text on the left */}
                    <View style={styles.feedsText}>
                        <View style={styles.feedsUpdates}>
                                <Text style={styles.bold}> New Update!!! </Text>
                                <Text style={styles.engine}>The Engineering Body</Text>
                        </View>
                        <View stlye={styles.feedBody}>
                            <Text style={styles.body}> 
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
                            <Image style={styles.circle} source={require('../assets/images/ProfilePic.PNG.png')} />
                        </View>
                    </View>
                </View>
    <View style={styles.feeds}>
                    {/* Contains text on the left */}
                    <View style={styles.feedsText}>
                        <View style={styles.feedsUpdates}>
                                <Text style={styles.bold}> New Update!!! </Text>
                                <Text style={styles.engine}>The Engineering Body</Text>
                        </View>
                        <View stlye={styles.feedBody}>
                            <Text style={styles.body}> 
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
                            <Image style={styles.circle} source={require('../assets/images/ProfilePic.PNG.png')} />
                        </View>
                    </View>
                </View>
    <View style={styles.feeds}>
                    {/* Contains text on the left */}
                    <View style={styles.feedsText}>
                        <View style={styles.feedsUpdates}>
                                <Text style={styles.bold}> New Update!!! </Text>
                                <Text style={styles.engine}>The Engineering Body</Text>
                        </View>
                        <View stlye={styles.feedBody}>
                            <Text style={styles.body}> 
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
                            <Image style={styles.circle} source={require('../assets/images/ProfilePic.PNG.png')} />
                        </View>
                    </View>
                </View>
    <View style={styles.feeds}>
                    {/* Contains text on the left */}
                    <View style={styles.feedsText}>
                        <View style={styles.feedsUpdates}>
                                <Text style={styles.bold}> New Update!!! </Text>
                                <Text style={styles.engine}>The Engineering Body</Text>
                        </View>
                        <View stlye={styles.feedBody}>
                            <Text style={styles.body}> 
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
                            <Image style={styles.circle} source={require('../assets/images/ProfilePic.PNG.png')} />
                        </View>
                    </View>
                </View>
    <View style={styles.feeds}>
                    {/* Contains text on the left */}
                    <View style={styles.feedsText}>
                        <View style={styles.feedsUpdates}>
                                <Text style={styles.bold}> New Update!!! </Text>
                                <Text style={styles.engine}>The Engineering Body</Text>
                        </View>
                        <View stlye={styles.feedBody}>
                            <Text style={styles.body}> 
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
                            <Image style={styles.circle} source={require('../assets/images/ProfilePic.PNG.png')} />
                        </View>
                    </View>
                </View>
    <View style={styles.feeds}>
                    {/* Contains text on the left */}
                    <View style={styles.feedsText}>
                        <View style={styles.feedsUpdates}>
                                <Text style={styles.bold}> New Update!!! </Text>
                                <Text style={styles.engine}>The Engineering Body</Text>
                        </View>
                        <View stlye={styles.feedBody}>
                            <Text style={styles.body}> 
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
                            <Image style={styles.circle} source={require('../assets/images/ProfilePic.PNG.png')} />
                        </View>
                    </View>
                </View>
    <View style={styles.feeds}>
                    {/* Contains text on the left */}
                    <View style={styles.feedsText}>
                        <View style={styles.feedsUpdates}>
                                <Text style={styles.bold}> New Update!!! </Text>
                                <Text style={styles.engine}>The Engineering Body</Text>
                        </View>
                        <View stlye={styles.feedBody}>
                            <Text style={styles.body}> 
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
                            <Image style={styles.circle} source={require('../assets/images/ProfilePic.PNG.png')} />
                        </View>
                    </View>
                </View>
    <View style={styles.feeds}>
                    {/* Contains text on the left */}
                    <View style={styles.feedsText}>
                        <View style={styles.feedsUpdates}>
                                <Text style={styles.bold}> New Update!!! </Text>
                                <Text style={styles.engine}>The Engineering Body</Text>
                        </View>
                        <View stlye={styles.feedBody}>
                            <Text style={styles.body}> 
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
                            <Image style={styles.circle} source={require('../assets/images/ProfilePic.PNG.png')} />
                        </View>
                    </View>
                </View>
    <View style={styles.feeds}>
                    {/* Contains text on the left */}
                    <View style={styles.feedsText}>
                        <View style={styles.feedsUpdates}>
                                <Text style={styles.bold}> New Update!!! </Text>
                                <Text style={styles.engine}>The Engineering Body</Text>
                        </View>
                        <View stlye={styles.feedBody}>
                            <Text style={styles.body}> 
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
                            <Image style={styles.circle} source={require('../assets/images/ProfilePic.PNG.png')} />
                        </View>
                    </View>
                </View>


            
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
        backgroundColor: '#fff',
        borderBottomWidth: 2,
        borderBottomColor: '#bebebe',
    },
    logo:{
        fontWeight: 'bold',
        fontSize: 20,
        fontFamily: 'segoePrint',
        marginTop:5,
        color: '#000',
        marginLeft:5

    },
    left:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding:5,
    },
    right:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5
    },
    links1:{
        padding:8
    },
    links:{
        paddingBottom:5,      
    },
    // nav:{
    //     width:'100%',
    //     height: 30,
    //     flexDirection: 'row',
    //     backgroundColor: '#f0f0f0',
    //     justifyContent: 'space-evenly',
    // },
    // navlinks:{
    //     paddingBottom: 14,
    //     paddingTop:5,
    //     fontFamily: 'minion',
    // },   
    feeds:{
        flexDirection: 'row',
        backgroundColor: '#fff',
        width:'100%',
        alignSelf: 'center',
        padding:15,
        borderRadius: 8,
        borderWidth:2,
        borderColor:'#bebebe',
        margin:5
    },
    feedsText:{
        width: '80%',
        justifyContent: 'flex-start',
        left:-10
    },
    feedsUpdates:{
        flexDirection: 'row',
        left:-6,
    },
    bold:{
        fontWeight: 'bold', 
        fontFamily: 'minion',
        paddingLeft:6,
        fontSize: 16,
    },
    engine:{
        fontWeight: 'normal', 
        fontFamily: 'minion',
        fontSize: 16,
    },
    body:{
        textAlign: 'justify',
    },
    feedsIcon:{
        flexDirection: 'row',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        top:8,
        left:-20
    },
    feedsImage:{
        width: '20%',
        marginLeft: 10,
    },
    circle:{
        borderRadius: 32.5, 
        width: 65, 
        height: 65
    },
})
