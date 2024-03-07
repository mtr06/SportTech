import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import SplashScreen from "react-native-splash-screen";
import React, { useEffect } from "react";

export default function App() {
  // useEffect(() => {
  //   setTimeout(() => {
  //     SplashScreen.show();
  //   }, 500);
  // }, []);

  return (
    <View style={styles.container}>
      <Text>Welcome to Sport Tech!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
