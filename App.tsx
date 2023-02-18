import { useState } from 'react';
import { Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import Navbar from "./src/components/Navbar"
import Main from "./src/components/Main"

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Navbar />
      <Main />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
