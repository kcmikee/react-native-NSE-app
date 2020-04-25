import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  Platform,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const ProfileScreen = (props) => {
  return (
    <View style={styles.screeen}>
      <Image style={styles.bgImage} source={require('../assets/images/WALLPAPER.png')} />

      <View style={styles.topnav}>
        <View style={styles.leftHeader}>
          <Text onpress={() => navigation.navigate("/")} style={styles.logo}>
            Profile
          </Text>
        </View>
      </View>
      <View style={styles.pro1}>
        <Image
          style={styles.img}
          source={require("../assets/images/ProfilePic.PNG.png")}
        />
        <View style={styles.pro2}>
          <View style={styles.pro3}>
            <Text style={styles.pro4}>@Mary_J</Text>
          </View>
          <View style={styles.pro5}>
            <TouchableHighlight
              onPress={() => props.navigation.navigate("Update")}
            >
              <Text style={styles.edit}>Edit Profile</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
      <View style={styles.bio}>
        <Text style={styles.bio2}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          pariatur iusto amet quis nesciunt illo reiciendis ut quas fugiat, iure
          quod
        </Text>
      </View>
      <View style={styles.details}>
        <View style={styles.sub}>
          <View style={styles.sub1}>
            <Icon
              name={Platform.OS === "ios" ? "ios-person" : "md-person"}
              color="#000"
              size={25}
            />
          </View>
          <View style={styles.sub2}>
            <Text style={styles.text}>Ian Ayodele Joselph</Text>
          </View>
        </View>
        <View style={styles.sub}>
          <View style={styles.sub1}>
            <Icon
              name={Platform.OS === "ios" ? "ios-mail" : "md-mail"}
              color="#000"
              size={25}
            />
          </View>
          <View style={styles.sub2}>
            <Text style={styles.text}>IanAyodele@gmail.com</Text>
          </View>
        </View>
        <View style={styles.sub}>
          <View style={styles.sub1}>
            <Icon
              name={Platform.OS === "ios" ? "ios-business" : "md-business"}
              color="#000"
              size={25}
            />
          </View>
          <View style={styles.sub2}>
            <Text style={styles.text}>Marine Department</Text>
          </View>
        </View>
        <View style={styles.sub}>
          <View style={styles.sub1}>
            <Icon
              name={Platform.OS === "ios" ? "ios-school" : "md-school"}
              color="#000"
              size={25}
            />
          </View>
          <View style={styles.sub2}>
            <Text style={styles.text}>cot/1251/2015</Text>
          </View>
        </View>
        <View style={styles.sub}>
          <View style={styles.sub1}>
            <Icon
              name={Platform.OS === "ios" ? "ios-cog" : "md-cog"}
              color="#000"
              size={25}
            />
          </View>
          <View style={styles.sub2}>
            <Text style={styles.text}>246421</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  bgImage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  topnav: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "transparent",
    paddingTop: 5,
  },
  logo: {
    fontWeight: "bold",
    fontSize: 20,
    fontFamily: "segoePrint",
    padding:15,
    color: "#000",
  },
  leftHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
    paddingTop: 8,
  },
  rightHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
  },
  links: {
    paddingRight: 14,
  },
  pro1: {
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingLeft: 10,
    marginTop: 20,
  },
  img: {
    width: 80,
    height: 80,
    marginRight: 40,
    borderRadius: 40,
  },
  pro2: {},
  pro3: {},
  pro4: {
    fontWeight: "bold",
    fontFamily: "minion",
    fontSize: 18,
    alignSelf: "center",
  },
  pro5: {
    borderWidth: 1,
    borderColor: "#bebebe",
    width: 200,
    backgroundColor: "transparent",
    padding: 6,
  },
  edit: {
    fontFamily: "minion",
    color: "#000",
    alignSelf: "center",
    fontSize: 17,
  },
  bio: {
    padding: 10,
    borderColor: "#bebebe",
    borderBottomWidth: 3,
    paddingBottom: 10,
  },
  bio2: {
    fontFamily: "minion",
    textAlign: "justify",
    fontSize: 16,
  },
  details: {
    marginLeft: 20,
    marginTop: 15,
  },
  sub: {
    flexDirection: "row",
    paddingTop: 15,
    paddingBottom: 15,
    borderBottomColor: "#bebebe",
    borderBottomWidth: 2,
  },
  sub1: {},
  sub2: {
    marginLeft: 40,
  },
  text: {
    fontSize: 20,
    fontFamily: "minion",
  },
});
