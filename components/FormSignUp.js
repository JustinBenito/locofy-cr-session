import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import EmailInput from "./EmailInput";
import PassComponent from "./PassComponent";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const FormSignUp = () => {
  return (
    <View style={styles.formSignUp}>
      <View style={styles.inputFieldParent}>
        <EmailInput />
        <PassComponent />
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
  );
};

const styles = StyleSheet.create({
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
});

export default FormSignUp;
