import * as React from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  TextInput,
  Pressable,
} from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const Login = () => {
  return (
    <ScrollView
      style={styles.login}
      showsVerticalScrollIndicator={true}
      showsHorizontalScrollIndicator={true}
      contentContainerStyle={styles.loginScrollViewContent}
    >
      <View style={styles.frame}>
        <View style={styles.frame1}>
          <View style={styles.logo}>
            <View style={styles.frameParent}>
              <View style={styles.frame2}>
                <Image
                  style={styles.frameIcon}
                  contentFit="cover"
                  source={require("../assets/frame.png")}
                />
                <Image
                  style={styles.frameIcon1}
                  contentFit="cover"
                  source={require("../assets/frame1.png")}
                />
              </View>
              <View style={styles.frame3}>
                <View style={styles.frame4}>
                  <View style={styles.frame5}>
                    <View style={styles.frameChild} />
                  </View>
                  <Image
                    style={styles.frameIcon2}
                    contentFit="cover"
                    source={require("../assets/frame2.png")}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.frame6}>
        <View style={styles.formSignUp}>
          <View style={styles.inputFieldParent}>
            <View style={styles.inputField}>
              <Text style={styles.searchForAddress}>Input Your Email</Text>
              <TextInput
                style={styles.inputFieldChild}
                placeholder="just@gmail.com"
                keyboardType="default"
                secureTextEntry={false}
              />
              <TextInput style={styles.inputFieldItem} />
            </View>
            <View style={styles.component2}>
              <Text style={styles.searchForAddress}>Input Your Password</Text>
              <TextInput
                style={styles.inputFieldChild}
                secureTextEntry={true}
              />
            </View>
          </View>
          <View style={styles.button}>
            <View style={styles.buttonParent}>
              <Text style={styles.button1}>Login With Google</Text>
              <Image
                style={styles.googlelogoIcon}
                contentFit="cover"
                source={require("../assets/googlelogo.png")}
              />
            </View>
          </View>
          <View style={styles.controlsbuttonslightrounded}>
            <Pressable style={styles.button2}>
              <Text style={styles.button3}>Login</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.frame7}>
          <View style={styles.doesntHaveAccount}>
            <Text style={styles.logIn}>Register</Text>
            <Text style={styles.belumPunyaAkun}>Doesn’t have account?</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  loginScrollViewContent: {
    flexDirection: "column",
    paddingHorizontal: 23,
    paddingVertical: 65,
    alignItems: "center",
    justifyContent: "space-between",
  },
  frameIcon: {
    position: "relative",
    width: 190,
    height: 172,
    overflow: "hidden",
  },
  frameIcon1: {
    position: "relative",
    width: 220,
    height: 32,
    overflow: "hidden",
    marginTop: 11,
  },
  frame2: {
    width: 220,
    height: 215,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  frameChild: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 5,
    width: 211,
    height: 49,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 0,
  },
  frame5: {
    position: "absolute",
    top: 134,
    left: -10,
    width: 211,
    height: 49,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  frameIcon2: {
    position: "absolute",
    top: 3,
    left: 47,
    width: 154,
    height: 140,
    overflow: "hidden",
  },
  frame4: {
    position: "relative",
    width: 210,
    height: 190,
    overflow: "hidden",
  },
  frame3: {
    width: 220,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    marginTop: -188,
  },
  frameParent: {
    width: 220,
    height: 215,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 15,
  },
  logo: {
    width: 378,
    height: 267,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  frame1: {
    width: 380,
    height: 296,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  frame: {
    width: 385,
    height: 296,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  searchForAddress: {
    position: "relative",
    fontSize: FontSize.size_base,
    lineHeight: 22,
    fontWeight: "500",
    fontFamily: FontFamily.mediumTextMedium,
    color: Color.primary100,
    textAlign: "center",
  },
  inputFieldChild: {
    borderRadius: Border.br_21xl,
    borderStyle: "solid",
    borderColor: Color.primary100,
    borderWidth: 1,
    width: 327,
    height: 58,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: Padding.p_base,
    marginTop: 8,
  },
  inputFieldItem: {
    borderRadius: Border.br_21xl,
    borderStyle: "solid",
    borderColor: Color.primary100,
    borderWidth: 1,
    width: 327,
    height: 58,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: Padding.p_base,
    display: "none",
    marginTop: 8,
  },
  inputField: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  component2: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginTop: 8,
  },
  inputFieldParent: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  button1: {
    position: "relative",
    fontSize: FontSize.mediumTextRegular_size,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: FontFamily.mediumTextMedium,
    color: Color.base100,
    textAlign: "center",
  },
  googlelogoIcon: {
    position: "relative",
    width: 16,
    height: 16,
    marginLeft: 12,
  },
  buttonParent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  button: {
    borderRadius: Border.br_21xl,
    backgroundColor: Color.base0,
    width: 157,
    height: 38,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: Padding.p_3xs,
    marginTop: 24,
  },
  button3: {
    position: "relative",
    fontSize: FontSize.extraLargeTextRegular_size,
    letterSpacing: -1,
    lineHeight: 26,
    fontFamily: FontFamily.mediumTextRegular,
    color: Color.base0,
    textAlign: "center",
  },
  button2: {
    position: "absolute",
    height: "131.82%",
    width: "117.2%",
    top: "-15.91%",
    right: "-8.6%",
    bottom: "-15.91%",
    left: "-8.6%",
    borderRadius: Border.br_21xl,
    backgroundColor: Color.primary80,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: Padding.p_3xs,
  },
  controlsbuttonslightrounded: {
    position: "relative",
    width: 279,
    height: 44,
    marginTop: 24,
  },
  formSignUp: {
    height: 340,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    marginLeft: 1,
  },
  logIn: {
    position: "relative",
    fontSize: FontSize.mediumTextRegular_size,
    lineHeight: 20,
    fontFamily: FontFamily.mediumTextRegular,
    color: "#3db2ff",
    textAlign: "left",
    width: 75,
  },
  belumPunyaAkun: {
    position: "relative",
    fontSize: FontSize.mediumTextRegular_size,
    lineHeight: 20,
    fontFamily: FontFamily.mediumTextRegular,
    color: "rgba(60, 60, 67, 0.6)",
    textAlign: "left",
    width: 154,
    marginLeft: 4,
  },
  doesntHaveAccount: {
    width: 236,
    height: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  frame7: {
    width: 255,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
    marginTop: 37,
  },
  frame6: {
    width: 329,
    height: 397,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  login: {
    position: "relative",
    backgroundColor: Color.base0,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
});

export default Login;
