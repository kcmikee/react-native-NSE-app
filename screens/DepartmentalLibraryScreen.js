import React from 'react'
import {SafeAreaView, StyleSheet, Text, View,Image, ScrollView, TouchableHighlight, Platform } from 'react-native'
 
import Icon from "react-native-vector-icons/Ionicons";


const DepartmentalLibraryScreen = props => {
    return (
        <View style={styles.screen}>
            {/* Background Image */}
            <Image style={styles.bgImage} source={require('../assets/images/DepartmentalLibrary.PNG.png')} />
            
            {/* Back Button, Title and Notification icon */}
            <View style={styles.header}>
                <View style={styles.left}>
                    <TouchableHighlight style={styles.links1} onPress={()=> props.navigation.navigate('Newsfeed')}>
                        <Icon
                            name={Platform.OS === "ios" ? "ios-undo" : "md-undo"}
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

            {/* Those 3circular images  */}
            <View style={styles.trio}>
                <View style={styles.one}>
                    <View style={styles.oneImgC}>
                        <Image style={styles.oneImg} source={require('../assets/images/ProfilePic2.PNG')} />
                    </View>
                    <View style={styles.oneText}>
                        <Text style={{color:'#fff',fontSize: 18,}}>@ lady J</Text>
                        <Text style={{fontWeight:'bold',fontFamily: 'segoe script',color:'#fff'}}>NSE No: ******</Text>
                    </View>
                </View>

                <View style={styles.duo}>
                    <View style={styles.duoImgC}>
                        <Image style={styles.duoImg} source={require('../assets/images/marbles.jpg')} />
                    </View>
                </View>

                <View style={styles.tre}>
                <View style={styles.treImgC}>
                    <Image style={styles.treImg} source={require('../assets/download.jpg')} />
                </View>
                    <View style={styles.treIcon}>
                        <TouchableHighlight style={styles.links1} onPress={()=> props.navigation.navigate('/')}>                           
                            <Icon
                                name={Platform.OS === "ios" ? "ios-folder" : "md-folder"}
                                color="#fff"
                                size={25}
                            />
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.links1} onPress={()=> props.navigation.navigate('/')}>                           
                            <Icon
                                name={Platform.OS === "ios" ? "ios-download" : "md-download"}
                                color="#fff"
                                size={25}
                            />
                        </TouchableHighlight>                   
                    </View>
                </View>
            </View>

            {/* Scroll view for the item. N/B:The scrolling is sideways */}
            <ScrollView horizontal={true}>
            <View style={styles.imgList}>
                <View style={styles.imgcontainer}>
                    <TouchableHighlight style={styles.scroll} onPress={()=> props.navigation.navigate('/')}>
                        <Image style={styles.Imagescroll} source={require('../assets/department/1(1).jpg')} />
                    </TouchableHighlight >
                    <TouchableHighlight style={styles.scroll} onPress={()=> props.navigation.navigate('/')}>
                        <Image style={styles.Imagescroll} source={require('../assets/department/1(2).jpg')} />
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.scroll} onPress={()=> props.navigation.navigate('/')}>
                        <Image style={styles.Imagescroll} source={require('../assets/department/1(3).jpg')} />
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.scroll} onPress={()=> props.navigation.navigate('/')}>
                        <Image style={styles.Imagescroll} source={require('../assets/department/1(4).jpg')} />
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.scroll} onPress={()=> props.navigation.navigate('/')}>
                        <Image style={styles.Imagescroll} source={require('../assets/department/1(5).jpg')} />
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.scroll} onPress={()=> props.navigation.navigate('/')}>
                        <Image style={styles.Imagescroll} source={require('../assets/department/1(6).jpg')} />
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.scroll} onPress={()=> props.navigation.navigate('/')}>
                        <Image style={styles.Imagescroll} source={require('../assets/department/1(7).jpg')} />
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.scroll} onPress={()=> props.navigation.navigate('/')}>
                        <Image style={styles.Imagescroll} source={require('../assets/department/1(8).jpg')} />
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.scroll} onPress={()=> props.navigation.navigate('/')}>
                        <Image style={styles.Imagescroll} source={require('../assets/department/1(9).jpg')} />
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.scroll} onPress={()=> props.navigation.navigate('/')}>
                        <Image style={styles.Imagescroll} source={require('../assets/department/sexy.jpg')} />
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.scroll} onPress={()=> props.navigation.navigate('/')}>
                        <Image style={styles.Imagescroll} source={require('../assets/department/1(3).jpg')} />
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.scroll} onPress={()=> props.navigation.navigate('/')}>
                        <Image style={styles.Imagescroll} source={require('../assets/department/1(3).jpg')} />
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.scroll} onPress={()=> props.navigation.navigate('/')}>
                        <Image style={styles.Imagescroll} source={require('../assets/department/1(3).jpg')} />
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.scroll} onPress={()=> props.navigation.navigate('/')}>
                        <Image style={styles.Imagescroll} source={require('../assets/department/1(3).jpg')} />
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.scroll} onPress={()=> props.navigation.navigate('/')}>
                        <Image style={styles.Imagescroll} source={require('../assets/department/1(3).jpg')} />
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.scroll} onPress={()=> props.navigation.navigate('/')}>
                        <Image style={styles.Imagescroll} source={require('../assets/department/1(3).jpg')} />
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.scroll} onPress={()=> props.navigation.navigate('/')}>
                        <Image style={styles.Imagescroll} source={require('../assets/department/1(3).jpg')} />
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.scroll} onPress={()=> props.navigation.navigate('/')}>
                        <Image style={styles.Imagescroll} source={require('../assets/department/1(3).jpg')} />
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.scroll} onPress={()=> props.navigation.navigate('/')}>
                        <Image style={styles.Imagescroll} source={require('../assets/department/1(3).jpg')} />
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.scroll} onPress={()=> props.navigation.navigate('/')}>
                        <Image style={styles.Imagescroll} source={require('../assets/department/1(3).jpg')} />
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.scroll} onPress={()=> props.navigation.navigate('/')}>
                        <Image style={styles.Imagescroll} source={require('../assets/department/1(3).jpg')} />
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.scroll} onPress={()=> props.navigation.navigate('/')}>
                        <Image style={styles.Imagescroll} source={require('../assets/department/1(3).jpg')} />
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.scroll} onPress={()=> props.navigation.navigate('/')}>
                        <Image style={styles.Imagescroll} source={require('../assets/department/1(3).jpg')} />
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.scroll} onPress={()=> props.navigation.navigate('/')}>
                        <Image style={styles.Imagescroll} source={require('../assets/department/1(3).jpg')} />
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.scroll} onPress={()=> props.navigation.navigate('/')}>
                        <Image style={styles.Imagescroll} source={require('../assets/department/1(3).jpg')} />
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.scroll} onPress={()=> props.navigation.navigate('/')}>
                        <Image style={styles.Imagescroll} source={require('../assets/department/1(3).jpg')} />
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.scroll} onPress={()=> props.navigation.navigate('/')}>
                        <Image style={styles.Imagescroll} source={require('../assets/department/1(3).jpg')} />
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.scroll} onPress={()=> props.navigation.navigate('/')}>
                        <Image style={styles.Imagescroll} source={require('../assets/department/1(3).jpg')} />
                    </TouchableHighlight>
                    
                </View>
            </View>
            </ScrollView>
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
    trio:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10,
        paddingBottom:20,
        borderBottomColor: '#555555',
        borderBottomWidth: 2,

    },
    one:{
        width: '25%',
        paddingLeft: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    oneImgC:{
        width:80,
        height:80,
        borderRadius: 40,
        overflow: 'hidden',
    },
    oneImg:{
        height:80,
        width:80,
        borderRadius: 40,
    },
    duo:{
        width:'50%',
        // paddingLeft:27,
        justifyContent: 'center',
        alignItems: 'center',
    },
    duoImgC:{
        width:120,
        height:120,
        borderRadius: 60,
    },
    duoImg:{
        width:120,
        height:120,
        borderRadius: 60,
    },
    tre:{
        width: '25%',
        paddingRight: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    treImgC:{
        width:80,
        height:80,
        borderRadius: 40,
        overflow: 'hidden',
    },
    treImg:{
        height:80,
        width:80,
        borderRadius: 40,
    },
    treIcon:{
        flexDirection: 'row',
    },
    imgList:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 15,
        height:'100%',
        width: '100%',
        borderRadius:10,

    },
    imgcontainer:{
        flexDirection: 'column',
        height:'100%',
        width:100,
        flexWrap: 'wrap',
        paddingBottom: 6,
    }, 
    Imagescroll:{
        height:120,
        width:100,
        borderRadius: 10,
    },
    scroll:{
        paddingTop: 10,
        paddingLeft:10
    }
})
