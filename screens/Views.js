import React from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Platform,
  Image,
  TouchableHighlight,
  ScrollView,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { Formik } from "formik";

var width = Dimensions.get("window").width;
const Views = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      {/* Background Image */}
      <Image
        style={styles.bgImage}
        source={require("../assets/bg/close-up-of-wooden-plank-326311.jpg")}
      />

      {/* Header:Menu Button, Title etc */}
      <View style={styles.header}>
        {/* Menu and Title */}
        <View style={styles.left}>
          <TouchableHighlight
            style={styles.links1}
            onPress={() => navigation.navigate("Newsfeed")}
          >
            <Icon
	      style={{paddingTop:5}}
              name={Platform.OS === "ios" ? "ios-arrow-back" : "md-arrow-back"}
              color="#000"
              size={25}
            />
          </TouchableHighlight>
          <TouchableHighlight onPress={() => navigation.navigate("Login")}>
            <Text style={styles.logo}>Feed</Text>
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
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.ecto
                ab. Tenetur, libero! Velit aliquid quibusdam quas.
              </Text>
            </View>

            <View style={styles.feedsIcon}>
              <View style={styles.links}>
                <TouchableHighlight
                  //   style={styles.links}
                  onPress={() => navigation.navigate("/")}
                >
                  <Icon
                    name={
                      Platform.OS === "ios" ? "ios-thumbs-up" : "md-thumbs-up"
                    }
                    color="#000"
                    size={25}
                  />
                </TouchableHighlight>
                <Text style={styles.likesSub}>604</Text>
              </View>
              <View style={styles.links}>
                <TouchableHighlight
                  //   style={styles.links}
                  onPress={() => navigation.navigate("/")}
                >
                  <Icon
                    name={
                      Platform.OS === "ios"
                        ? "ios-thumbs-down"
                        : "md-thumbs-down"
                    }
                    color="#000"
                    size={25}
                  />
                </TouchableHighlight>
                <Text style={styles.likesSub}>604</Text>
              </View>

              <View style={styles.links}>
                <TouchableHighlight
                  //   style={styles.links}
                  onPress={() => navigation.navigate("/")}
                >
                  <Icon
                    name={Platform.OS === "ios" ? "ios-repeat" : "md-repeat"}
                    color="#000"
                    size={25}
                  />
                </TouchableHighlight>
                <Text style={styles.likesSub}>704</Text>
              </View>

              <View style={styles.links}>
                <TouchableHighlight
                  //   style={styles.links}
                  onPress={() => navigation.navigate("/")}
                >
                  <Icon
                    name={
                      Platform.OS === "ios"
                        ? "ios-chatbubbles"
                        : "md-chatbubbles"
                    }
                    color="#000"
                    size={25}
                  />
                </TouchableHighlight>
                <Text style={styles.likesSub}>14</Text>
              </View>
            </View>
          </View>
          {/* Contains the image on the right */}
          <View style={styles.feedsImage}>
            <View style={{ flexDirection: "row" }}>
              <Icon
                name={Platform.OS === "ios" ? "ios-add" : "md-add"}
                color="#000"
                size={20}
              />
              <TouchableHighlight
                style={styles.links}
                onPress={() => navigation.navigate("/")}
              >
                <Text> Follow </Text>
              </TouchableHighlight>
            </View>
            <View>
              <Image
                style={styles.circle}
                source={require("../assets/images/ProfilePic.PNG.png")}
              />
            </View>
            <View style={styles.date}>
              <Text style={styles.dateSub}>6.51 AM. 24/4/2020</Text>
            </View>
          </View>
        </View>
        <View style={styles.comments}>
          <Text style={styles.commentHeader}>Comments</Text>

          <View style={styles.feeds}>
            {/* Contains text on the left */}

            <View style={styles.feedsText}>
              <View style={styles.feedsUpdates}>
                <Text style={styles.bold}>Prototype </Text>
                <Text style={styles.engine}>@testingApp</Text>
              </View>
              <View stlye={styles.feedBody}>
                <Text style={styles.body}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.ecto
                  ab. Tenetur, libero! Velit aliquid quibusdam quas.
                </Text>
              </View>

              <View style={styles.feedsIcon}>
                <View style={styles.links}>
                  <TouchableHighlight
                    //   style={styles.links}
                    onPress={() => navigation.navigate("/")}
                  >
                    <Icon
                      name={
                        Platform.OS === "ios" ? "ios-thumbs-up" : "md-thumbs-up"
                      }
                      color="#000"
                      size={25}
                    />
                  </TouchableHighlight>
                  <Text style={styles.likesSub}>604</Text>
                </View>
                <View style={styles.links}>
                  <TouchableHighlight
                    //   style={styles.links}
                    onPress={() => navigation.navigate("/")}
                  >
                    <Icon
                      name={
                        Platform.OS === "ios"
                          ? "ios-thumbs-down"
                          : "md-thumbs-down"
                      }
                      color="#000"
                      size={25}
                    />
                  </TouchableHighlight>
                  <Text style={styles.likesSub}>604</Text>
                </View>

                <View style={styles.links}>
                  <TouchableHighlight
                    //   style={styles.links}
                    onPress={() => navigation.navigate("/")}
                  >
                    <Icon
                      name={Platform.OS === "ios" ? "ios-repeat" : "md-repeat"}
                      color="#000"
                      size={25}
                    />
                  </TouchableHighlight>
                  <Text style={styles.likesSub}>704</Text>
                </View>

                <View style={styles.links}>
                  <TouchableHighlight
                    //   style={styles.links}
                    onPress={() => navigation.navigate("/")}
                  >
                    <Icon
                      name={
                        Platform.OS === "ios"
                          ? "ios-chatbubbles"
                          : "md-chatbubbles"
                      }
                      color="#000"
                      size={25}
                    />
                  </TouchableHighlight>
                  <Text style={styles.likesSub}>14</Text>
                </View>
              </View>
            </View>
            {/* Contains the image on the right */}
            <View style={styles.feedsImage}>
              <View style={{ flexDirection: "row" }}>
                <Icon
                  name={Platform.OS === "ios" ? "ios-add" : "md-add"}
                  color="#000"
                  size={20}
                />
                <TouchableHighlight
                  style={styles.links}
                  onPress={() => navigation.navigate("/")}
                >
                  <Text> Follow </Text>
                </TouchableHighlight>
              </View>
              <View>
                <Image
                  style={styles.circle}
                  source={require("../assets/images/ProfilePic.PNG.png")}
                />
              </View>
              <View style={styles.date}>
                <Text style={styles.dateSub}>6.51 AM. 24/4/2020</Text>
              </View>
            </View>
          </View>

          <View style={styles.feeds}>
            {/* Contains text on the left */}

            <View style={styles.feedsText}>
              <View style={styles.feedsUpdates}>
                <Text style={styles.bold}>Prototype </Text>
                <Text style={styles.engine}>@testingApp</Text>
              </View>
              <View stlye={styles.feedBody}>
                <Text style={styles.body}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.ecto
                  ab. Tenetur, libero! Velit aliquid quibusdam quas.
                </Text>
              </View>

              <View style={styles.feedsIcon}>
                <View style={styles.links}>
                  <TouchableHighlight
                    //   style={styles.links}
                    onPress={() => navigation.navigate("/")}
                  >
                    <Icon
                      name={
                        Platform.OS === "ios" ? "ios-thumbs-up" : "md-thumbs-up"
                      }
                      color="#000"
                      size={25}
                    />
                  </TouchableHighlight>
                  <Text style={styles.likesSub}>604</Text>
                </View>
                <View style={styles.links}>
                  <TouchableHighlight
                    //   style={styles.links}
                    onPress={() => navigation.navigate("/")}
                  >
                    <Icon
                      name={
                        Platform.OS === "ios"
                          ? "ios-thumbs-down"
                          : "md-thumbs-down"
                      }
                      color="#000"
                      size={25}
                    />
                  </TouchableHighlight>
                  <Text style={styles.likesSub}>604</Text>
                </View>

                <View style={styles.links}>
                  <TouchableHighlight
                    //   style={styles.links}
                    onPress={() => navigation.navigate("/")}
                  >
                    <Icon
                      name={Platform.OS === "ios" ? "ios-repeat" : "md-repeat"}
                      color="#000"
                      size={25}
                    />
                  </TouchableHighlight>
                  <Text style={styles.likesSub}>704</Text>
                </View>

                <View style={styles.links}>
                  <TouchableHighlight
                    //   style={styles.links}
                    onPress={() => navigation.navigate("/")}
                  >
                    <Icon
                      name={
                        Platform.OS === "ios"
                          ? "ios-chatbubbles"
                          : "md-chatbubbles"
                      }
                      color="#000"
                      size={25}
                    />
                  </TouchableHighlight>
                  <Text style={styles.likesSub}>14</Text>
                </View>
              </View>
            </View>
            {/* Contains the image on the right */}
            <View style={styles.feedsImage}>
              <View style={{ flexDirection: "row" }}>
                <Icon
                  name={Platform.OS === "ios" ? "ios-add" : "md-add"}
                  color="#000"
                  size={20}
                />
                <TouchableHighlight
                  style={styles.links}
                  onPress={() => navigation.navigate("/")}
                >
                  <Text> Follow </Text>
                </TouchableHighlight>
              </View>
              <View>
                <Image
                  style={styles.circle}
                  source={require("../assets/images/ProfilePic.PNG.png")}
                />
              </View>
              <View style={styles.date}>
                <Text style={styles.dateSub}>6.51 AM. 24/4/2020</Text>
              </View>
            </View>
          </View>

          <View style={styles.feeds}>
            {/* Contains text on the left */}

            <View style={styles.feedsText}>
              <View style={styles.feedsUpdates}>
                <Text style={styles.bold}>Prototype </Text>
                <Text style={styles.engine}>@testingApp</Text>
              </View>
              <View stlye={styles.feedBody}>
                <Text style={styles.body}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.ecto
                  ab. Tenetur, libero! Velit aliquid quibusdam quas.
                </Text>
              </View>

              <View style={styles.feedsIcon}>
                <View style={styles.links}>
                  <TouchableHighlight
                    //   style={styles.links}
                    onPress={() => navigation.navigate("/")}
                  >
                    <Icon
                      name={
                        Platform.OS === "ios" ? "ios-thumbs-up" : "md-thumbs-up"
                      }
                      color="#000"
                      size={25}
                    />
                  </TouchableHighlight>
                  <Text style={styles.likesSub}>604</Text>
                </View>
                <View style={styles.links}>
                  <TouchableHighlight
                    //   style={styles.links}
                    onPress={() => navigation.navigate("/")}
                  >
                    <Icon
                      name={
                        Platform.OS === "ios"
                          ? "ios-thumbs-down"
                          : "md-thumbs-down"
                      }
                      color="#000"
                      size={25}
                    />
                  </TouchableHighlight>
                  <Text style={styles.likesSub}>604</Text>
                </View>

                <View style={styles.links}>
                  <TouchableHighlight
                    //   style={styles.links}
                    onPress={() => navigation.navigate("/")}
                  >
                    <Icon
                      name={Platform.OS === "ios" ? "ios-repeat" : "md-repeat"}
                      color="#000"
                      size={25}
                    />
                  </TouchableHighlight>
                  <Text style={styles.likesSub}>704</Text>
                </View>

                <View style={styles.links}>
                  <TouchableHighlight
                    //   style={styles.links}
                    onPress={() => navigation.navigate("/")}
                  >
                    <Icon
                      name={
                        Platform.OS === "ios"
                          ? "ios-chatbubbles"
                          : "md-chatbubbles"
                      }
                      color="#000"
                      size={25}
                    />
                  </TouchableHighlight>
                  <Text style={styles.likesSub}>14</Text>
                </View>
              </View>
            </View>
            {/* Contains the image on the right */}
            <View style={styles.feedsImage}>
              <View style={{ flexDirection: "row" }}>
                <Icon
                  name={Platform.OS === "ios" ? "ios-add" : "md-add"}
                  color="#000"
                  size={20}
                />
                <TouchableHighlight
                  style={styles.links}
                  onPress={() => navigation.navigate("/")}
                >
                  <Text> Follow </Text>
                </TouchableHighlight>
              </View>
              <View>
                <Image
                  style={styles.circle}
                  source={require("../assets/images/ProfilePic.PNG.png")}
                />
              </View>
              <View style={styles.date}>
                <Text style={styles.dateSub}>6.51 AM. 24/4/2020</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      <Formik
        initialValues={{
          name: "Comment",
        }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleSubmit, values }) => (
          <View styles={styles.bottomView}>
            <View style={{flexDirection: 'row',}}>
            <TextInput
              style={styles.inputs}
              onChangeText={handleChange("Comment")}
              value={values.Comment}
              placeholder="Reply this post"
              placeholderTextColor="#000"
            />
            <TouchableHighlight onPress={handleSubmit} style={styles.submit}>
              <Icon
                name={Platform.OS === "ios" ? "ios-send" : "md-send"}
                color="#000"
                size={25}
              />
            </TouchableHighlight>
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default Views;

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
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    borderBottomWidth: 2,
    borderBottomColor: "#bebebe",
  },
  logo: {
    fontWeight: "bold",
    fontSize: 20,
    fontFamily: "segoePrint",
    paddingTop: 10,
    color: "#000",
    marginLeft: 5,
  },
  left: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
    paddingTop: 15,
  },
  links1: {
    padding: 8,
  },
  links: {
    paddingBottom: 5,
  },
  feeds: {
    flexDirection: "row",
    backgroundColor: "#fff",
    width: "100%",
    alignSelf: "center",
    padding: 15,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#bebebe",
    margin: 5,
  },
  feedsText: {
    width: "80%",
    justifyContent: "flex-start",
    left: -10,
  },
  feedsUpdates: {
    flexDirection: "row",
    left: -6,
  },
  bold: {
    fontWeight: "bold",
    fontFamily: "minion",
    paddingLeft: 6,
    fontSize: 16,
  },
  engine: {
    fontWeight: "normal",
    fontFamily: "minion",
    fontSize: 16,
  },
  body: {
    textAlign: "justify",
  },
  feedsIcon: {
    flexDirection: "row",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    top: 8,
    left: -20,
  },
  feedsImage: {
    width: "20%",
    marginLeft: 10,
  },
  circle: {
    borderRadius: 32.5,
    width: 65,
    height: 65,
  },
  bottomView: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    position: "absolute",
    backgroundColor: "#fff",
    bottom: 0,
    
  },
  inputs: {
    backgroundColor: "#fff",
    borderTopColor: '#bebebe',
    borderTopWidth: 2,
    height: 50,
    color: "#000",
    fontFamily: "minion",
    fontSize: 18,
    paddingLeft: 10,
    width:'90%'
  },
  submit:{
      width:'10%',
      backgroundColor: '#fff',
      justifyContent: 'center',
      borderTopColor: '#bebebe',
      borderTopWidth: 2,
      paddingRight: 10,
  },
  comments: {
    backgroundColor: "#fff",
    marginTop: 2,
    borderTopStartRadius: 8,
    borderTopEndRadius: 8,
  },
  commentHeader: {
    marginLeft: 10,
    color: "#000",
    fontWeight: "bold",
    fontSize: 20,
    fontFamily: "segoePrint",
  },
  date: {
    flexDirection: "row",
    marginLeft: 2,
  },
});
