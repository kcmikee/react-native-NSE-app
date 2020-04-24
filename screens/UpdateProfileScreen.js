import React from "react";
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  Platform,
  TouchableHighlight,
  Image,
  Button,
  
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { Formik } from 'formik'


const UpdateProfileScreen = () => {
  return (
    <View style={styles.screen}>
      {/* <Image style={styles.bgImage} source={require('../assets/images/WallpapereLibrary.PNG.png')} /> */}
      <View style={styles.topnav}>
        <View style={styles.leftHeader}>
          {/* <TouchableHighlight
            style={styles.links}
            onPress={() => navigation.navigate("/")}
          >
            <Icon
              name={Platform.OS === "ios" ? "ios-close" : "md-close"}
              color="red"
              size={25}
            /> */}
          {/* </TouchableHighlight> */}
          <Text onpress={() => navigation.navigate("/")} style={styles.logo}>
            Edit Profile
          </Text>
        </View>
        {/* <View style={styles.rightHeader}>
          <TouchableHighlight
            style={styles.links}
            onPress={() => navigation.navigate("/")}
          >
            <Icon
              name={Platform.OS === "ios" ? "ios-checkmark" : "md-checkmark"}
              color="green"
              size={25}
            />
          </TouchableHighlight>
        </View> */}
      </View>
      <View style={styles.up}>
        <View style={{alignSelf: 'center',}}>
          <Image
            style={styles.img}
            source={require("../assets/images/ProfilePic.PNG.png")}
          />
          <TouchableHighlight
            style={styles.blue}
            onPress={() => navigation.navigate("/")}
          >
            <Text style={{color: '#0430ff',}}>Change Photo</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.details}>
          <Formik
            initialValues={{
              name: "",
              email: "",
              bio:"",
              department: "",
              matnumber: "",
              nsecode: "",
            }}
            onSubmit={(values) => console.log(values)}
          >
            {({ handleChange, handleSubmit, values }) => (
              <View style={styles.align}>
                <View style={styles.inputContainer}>
                  <Icon
                    name={Platform.OS === "ios" ? "ios-person" : "md-person"}
                    color="#000"
                    size={25}
                    style={{ marginTop: 8, marginLeft: 7 }}
                  />
                  <TextInput
                    style={styles.inputs}
                    onChangeText={handleChange("name")}
                    value={values.name}
                    placeholder="Full Name"
                  />
                </View>

                <View style={styles.inputContainer}>
                  <Icon
                    name={Platform.OS === "ios" ? "ios-mail" : "md-mail"}
                    color="#000"
                    size={25}
                    style={{ marginTop: 8, marginLeft: 7 }}
                  />
                  <TextInput
                    style={styles.inputs}
                    placeholder="Email"
                    keyboardType="email-address"
                    onChangeText={handleChange("email")}
                    value={values.email}
                  />
                </View>

                <View style={styles.inputContainer}>
                  <Icon
                    name={Platform.OS === "ios" ? "ios-school" : "md-school"}
                    color="#000"
                    size={25}
                    style={{ marginTop: 8, marginLeft: 7 }}
                  />
                  <TextInput
                    style={styles.inputs}
                    multiline
                    placeholder="Bio"
                    onChangeText={handleChange("bio")}
                    value={values.bio}
                  />
                </View>

                <View style={styles.inputContainer}>
                  <Icon
                    name={
                      Platform.OS === "ios" ? "ios-business" : "md-business"
                    }
                    color="#000"
                    size={25}
                    style={{ marginTop: 8, marginLeft: 7 }}
                  />
                  <TextInput
                    style={styles.inputs}
                    placeholder="Department"
                    onChangeText={handleChange("department")}
                    value={values.department}
                  />
                </View>

                <View style={styles.inputContainer}>
                  <Icon
                    name={Platform.OS === "ios" ? "ios-school" : "md-school"}
                    color="#000"
                    size={25}
                    style={{ marginTop: 8, marginLeft: 7 }}
                  />
                  <TextInput
                    style={styles.inputs}
                    placeholder="Matric Number"
                    onChangeText={handleChange("matnumber")}
                    value={values.matnumber}
                  />
                </View>

                <View style={styles.inputContainer}>
                  <Icon
                    name={
                      Platform.OS === "ios" ? "ios-construct" : "md-construct"
                    }
                    color="#000"
                    size={25}
                    style={{ marginTop: 8, marginLeft: 7 }}
                  />
                  <TextInput
                    style={styles.inputs}
                    placeholder="Nse Registration Code"
                    onChangeText={handleChange("nsecode")}
                    value={values.nsecode}
                  />
                </View>
                <View style={styles.submit}>
                  <Button title="Submit" onPress={handleSubmit} />
                </View>
              </View>
            )}
          </Formik>
        </View>
      </View>
    </View>
  );
};

export default UpdateProfileScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  bgImage: {
    flex: 1,
    position: "absolute",
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },
  topnav: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "transparent",
  },
  logo: {
    fontWeight: "bold",
    fontSize: 20,
    fontFamily: "segoePrint",
    // marginTop:15,
    marginLeft: 10,
    marginTop:4,
    color: "#000",
  },
  leftHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
  },
  rightHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
  },
  links: {
    padding: 14,
  },
  up:{
    justifyContent: 'center',
    flex:1,
  },
  blue: {
    top:3,
  },
  img: {
    width: 80,
    height: 80,
    // marginRight: 40,
    borderRadius: 40,
  },
  labels:{
    fontWeight:'bold',
    fontSize: 18,
    color: '#0430ff',
    flex: 1,
},
align:{
    marginTop:10,
},
inputContainer: {
    borderColor: '#cdcdcd',
    backgroundColor: '#fff',
    borderRadius:12,
    borderWidth: 1,
    width: 300,
    marginBottom:10,
    flexDirection: 'row',
    alignSelf:'center'
  },
  inputs:{
    height:45,
    width: 300,
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
    paddingLeft: 5,
    fontFamily: 'minion',
},
inputIcon:{
  width:30,
  height:30,
  marginLeft:5,
  justifyContent: 'center',
  color: '#000',
  marginTop: 6
},
  submit:{
    width: 250,
    alignSelf: 'center',
    marginBottom: 20,
    padding: 25,
  }
});
