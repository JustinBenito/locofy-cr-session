import * as React from "react";
import { Text, StyleSheet, TextInput, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const PassComponent = () => {
  return (
    <View style={styles.component2}>
      <Text style={styles.password}>Input Your Password</Text>
      <TextInput style={styles.component2Child} secureTextEntry={true} />
    </View>
  );
};

const styles = StyleSheet.create({
  password: {
    fontSize: FontSize.size_base,
    lineHeight: 22,
    fontWeight: "500",
    fontFamily: FontFamily.mediumTextMedium,
    color: Color.primary100,
    textAlign: "center",
  },
  component2Child: {
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
  component2: {
    marginTop: 8,
  },
});

export default PassComponent;
