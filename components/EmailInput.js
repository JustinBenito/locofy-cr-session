import * as React from "react";
import { Text, StyleSheet, TextInput, View } from "react-native";
import { Padding, Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const EmailInput = () => {
  return (
    <View>
      <Text style={styles.searchForAddress}>Input Your Email</Text>
      <TextInput
        style={[styles.inputFieldChild, styles.inputLayout]}
        placeholder="just@gmail.com"
        keyboardType="default"
        secureTextEntry={false}
      />
      <TextInput style={[styles.inputFieldItem, styles.inputLayout]} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputLayout: {
    marginTop: 8,
    padding: Padding.p_base,
    alignItems: "center",
    flexDirection: "row",
    height: 58,
    width: 327,
    borderWidth: 1,
    borderColor: Color.primary100,
    borderStyle: "solid",
    borderRadius: Border.br_21xl,
  },
  searchForAddress: {
    fontSize: FontSize.size_base,
    lineHeight: 22,
    fontWeight: "500",
    fontFamily: FontFamily.mediumTextMedium,
    color: Color.primary100,
    textAlign: "center",
  },
  inputFieldChild: {
    justifyContent: "space-between",
  },
  inputFieldItem: {
    display: "none",
  },
});

export default EmailInput;
