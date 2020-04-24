import React from "react";
import {
    Dimensions,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TouchableHighlight,
    Platform,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

var width = Dimensions.get("window").width;
const DepartmentalLibraryScreen = (props) => {
    return (
        <View style={styles.screen}>
            {/* Background Image */}
            <Image style={styles.bgImage} source={require('../assets/images/DepartmentalLibrary.PNG.png')} />

            {/* Back Button, Title and Notification icon */}
            <View style={styles.header}>
                <View style={styles.left}>
                    {/* <TouchableHighlight style={styles.links1} onPress={()=> props.navigation.navigate('Newsfeed')}>
                        <Icon
                            name={Platform.OS === "ios" ? "ios-arrow-back" : "md-arrow-back"}
                            color="#000"
                            size={25}
                        />
                    </TouchableHighlight> */}
                    <Text
                        onpress={() => props.navigation.navigate("Newsfeed")}
                        style={styles.logo}
                    >
                        Departmental Library
          </Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                    <TouchableHighlight
                        style={styles.links1}
                        onPress={() => props.navigation.navigate("/")}
                    >
                        <Icon
                            name={
                                Platform.OS === "ios" ? "ios-notifications" : "md-notifications"
                            }
                            color="#fff"
                            size={25}
                        />
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={styles.links1}
                        onPress={() => props.navigation.navigate("/")}
                    >
                        <Icon
                            name={Platform.OS === "ios" ? "ios-add" : "md-add"}
                            color="#fff"
                            size={25}
                        />
                    </TouchableHighlight>
                </View>
            </View>

            {/* Scroll view for the item.  */}
            <ScrollView>
                <View style={styles.imgList}>
                    <View style={styles.imgcontainer}>
                        <View
                            style={styles.scroll}
                            onPress={() => props.navigation.navigate("/")}
                        >
                            <TouchableHighlight
                                onPress={() => props.navigation.navigate("/")}
                                style={styles.Imagescroll}
                            >
                                <Image
                                    style={styles.Imagescroll}
                                    source={require("../assets/department/1(1).jpg")}
                                />
                            </TouchableHighlight>
                            <View style={styles.author}>
                                <Text style={styles.title}>The Mistake</Text>
                                <Text style={styles.name}>Esenwa Michael</Text>
                            </View>
                        </View>
                        <View style={styles.scroll}>
                            <TouchableHighlight
                                onPress={() => props.navigation.navigate("/")}
                                style={styles.Imagescroll}
                            >
                                <Image
                                    style={styles.Imagescroll}
                                    source={require("../assets/department/1(2).jpg")}
                                />
                            </TouchableHighlight>
                            <View style={styles.author}>
                                <Text style={styles.title}>The Mistake</Text>
                                <Text style={styles.name}>Esenwa Michael</Text>
                            </View>
                        </View>
                        <View style={styles.scroll}>
                            <TouchableHighlight
                                onPress={() => props.navigation.navigate("/")}
                                style={styles.Imagescroll}
                            >
                                <Image
                                    style={styles.Imagescroll}
                                    source={require("../assets/department/1(3).jpg")}
                                />
                            </TouchableHighlight>
                            <View style={styles.author}>
                                <Text style={styles.title}>The Mistake</Text>
                                <Text style={styles.name}>Esenwa Michael</Text>
                            </View>
                        </View>
                        <View style={styles.scroll}>
                            <TouchableHighlight
                                onPress={() => props.navigation.navigate("/")}
                                style={styles.Imagescroll}
                            >
                                <Image
                                    style={styles.Imagescroll}
                                    source={require("../assets/department/1(4).jpg")}
                                />
                            </TouchableHighlight>
                            <View style={styles.author}>
                                <Text style={styles.title}>The Mistake</Text>
                                <Text style={styles.name}>Esenwa Michael</Text>
                            </View>
                        </View>
                        <View style={styles.scroll}>
                            <TouchableHighlight
                                onPress={() => props.navigation.navigate("/")}
                                style={styles.Imagescroll}
                            >
                                <Image
                                    style={styles.Imagescroll}
                                    source={require("../assets/department/sexy.jpg")}
                                />
                            </TouchableHighlight>
                            <View style={styles.author}>
                                <Text style={styles.title}>The Mistake</Text>
                                <Text style={styles.name}>Esenwa Michael</Text>
                            </View>
                        </View>
                        <View style={styles.scroll}>
                            <TouchableHighlight
                                onPress={() => props.navigation.navigate("/")}
                                style={styles.Imagescroll}
                            >
                                <Image
                                    style={styles.Imagescroll}
                                    source={require("../assets/department/1(1).jpg")}
                                />
                            </TouchableHighlight>
                            <View style={styles.author}>
                                <Text style={styles.title}>The Mistake</Text>
                                <Text style={styles.name}>Esenwa Michael</Text>
                            </View>
                        </View>
                        <View style={styles.scroll}>
                            <TouchableHighlight
                                onPress={() => props.navigation.navigate("/")}
                                style={styles.Imagescroll}
                            >
                                <Image
                                    style={styles.Imagescroll}
                                    source={require("../assets/department/1(9).jpg")}
                                />
                            </TouchableHighlight>
                            <View style={styles.author}>
                                <Text style={styles.title}>The Mistake</Text>
                                <Text style={styles.name}>Esenwa Michael</Text>
                            </View>
                        </View>
                        <View style={styles.scroll}>
                            <TouchableHighlight
                                onPress={() => props.navigation.navigate("/")}
                                style={styles.Imagescroll}
                            >
                                <Image
                                    style={styles.Imagescroll}
                                    source={require("../assets/department/1(1).jpg")}
                                />
                            </TouchableHighlight>
                            <View style={styles.author}>
                                <Text style={styles.title}>The Mistake</Text>
                                <Text style={styles.name}>Esenwa Michael</Text>
                            </View>
                        </View>
                        <View style={styles.scroll}>
                            <TouchableHighlight
                                onPress={() => props.navigation.navigate("/")}
                                style={styles.Imagescroll}
                            >
                                <Image
                                    style={styles.Imagescroll}
                                    source={require("../assets/department/1(3).jpg")}
                                />
                            </TouchableHighlight>
                            <View style={styles.author}>
                                <Text style={styles.title}>The Mistake</Text>
                                <Text style={styles.name}>Esenwa Michael</Text>
                            </View>
                        </View>
                        <View style={styles.scroll}>
                            <TouchableHighlight
                                onPress={() => props.navigation.navigate("/")}
                                style={styles.Imagescroll}
                            >
                                <Image
                                    style={styles.Imagescroll}
                                    source={require("../assets/department/sexy.jpg")}
                                />
                            </TouchableHighlight>
                            <View style={styles.author}>
                                <Text style={styles.title}>The Mistake</Text>
                                <Text style={styles.name}>Esenwa Michael</Text>
                            </View>
                        </View>
                        <View style={styles.scroll}>
                            <TouchableHighlight
                                onPress={() => props.navigation.navigate("/")}
                                style={styles.Imagescroll}
                            >
                                <Image
                                    style={styles.Imagescroll}
                                    source={require("../assets/department/1(5).jpg")}
                                />
                            </TouchableHighlight>
                            <View style={styles.author}>
                                <Text style={styles.title}>The Mistake</Text>
                                <Text style={styles.name}>Esenwa Michael</Text>
                            </View>
                        </View>
                        <View style={styles.scroll}>
                            <TouchableHighlight
                                onPress={() => props.navigation.navigate("/")}
                                style={styles.Imagescroll}
                            >
                                <Image
                                    style={styles.Imagescroll}
                                    source={require("../assets/department/1(6).jpg")}
                                />
                            </TouchableHighlight>
                            <View style={styles.author}>
                                <Text style={styles.title}>The Mistake</Text>
                                <Text style={styles.name}>Esenwa Michael</Text>
                            </View>
                        </View>
                        <View style={styles.scroll}>
                            <TouchableHighlight
                                onPress={() => props.navigation.navigate("/")}
                                style={styles.Imagescroll}
                            >
                                <Image
                                    style={styles.Imagescroll}
                                    source={require("../assets/department/1(4).jpg")}
                                />
                            </TouchableHighlight>
                            <View style={styles.author}>
                                <Text style={styles.title}>The Mistake</Text>
                                <Text style={styles.name}>Esenwa Michael</Text>
                            </View>
                        </View>
                        <View style={styles.scroll}>
                            <TouchableHighlight
                                onPress={() => props.navigation.navigate("/")}
                                style={styles.Imagescroll}
                            >
                                <Image
                                    style={styles.Imagescroll}
                                    source={require("../assets/department/1(2).jpg")}
                                />
                            </TouchableHighlight>
                            <View style={styles.author}>
                                <Text style={styles.title}>The Mistake</Text>
                                <Text style={styles.name}>Esenwa Michael</Text>
                            </View>
                        </View>
                        <View style={styles.scroll}>
                            <TouchableHighlight
                                onPress={() => props.navigation.navigate("/")}
                                style={styles.Imagescroll}
                            >
                                <Image
                                    style={styles.Imagescroll}
                                    source={require("../assets/department/1(9).jpg")}
                                />
                            </TouchableHighlight>
                            <View style={styles.author}>
                                <Text style={styles.title}>The Mistake</Text>
                                <Text style={styles.name}>Esenwa Michael</Text>
                            </View>
                        </View>
                        <View style={styles.scroll}>
                            <TouchableHighlight
                                onPress={() => props.navigation.navigate("/")}
                                style={styles.Imagescroll}
                            >
                                <Image
                                    style={styles.Imagescroll}
                                    source={require("../assets/department/1(8).jpg")}
                                />
                            </TouchableHighlight>
                            <View style={styles.author}>
                                <Text style={styles.title}>The Mistake</Text>
                                <Text style={styles.name}>Esenwa Michael</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default DepartmentalLibraryScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        // backgroundColor:'#fff'
    },
    bgImage: {
        flex: 1,
        position: "absolute",
        width: "100%",
        height: "100%",
        justifyContent: "center",
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "transparent",
        paddingTop: 5,
        borderBottomWidth: 2,
        borderBottomColor: "#bebebe",
    },
    logo: {
        fontWeight: "bold",
        fontSize: 20,
        fontFamily: "segoePrint",
        marginTop: 13,
        marginLeft: 10,
        color: "#fff",
    },
    left: {
        flexDirection: "row",
        justifyContent: "space-between",
        // paddingTop: 10,
    },
    right: {
        paddingTop: 10,
    },
    links1: {
        padding: 14,
    },

    // imgList:{
    //     justifyContent: 'center',
    //     alignItems: 'center',
    // },
    imgcontainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: 'space-evenly'
    },
    scroll: {
        height: 250,
        width: width / 3 - 9,
        borderRadius: 10,
        margin: 3,
    },
    Imagescroll: {
        height: "85%",
        width: "100%",
        borderRadius: 10,
    },
    author: {
        height: "5%",
        flexDirection: "column",
        marginTop: -22,
    },
    title: {
        fontFamily: "minion",
        fontWeight: "bold",
        alignSelf: "center",
        color: '#fff'
    },
    name: {
        fontFamily: "minion",
        color: '#fff',
        alignSelf: "center",
    },
});
