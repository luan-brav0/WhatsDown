import { useState } from 'react';
import { Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import Chat from "./src/components/Chat"
import Navbar from "./src/components/Navbar"

export default function App() {
  const [author, setAuthor] = useState<string | null>(null)
  return (
    <SafeAreaView style={styles.container}>
      <Navbar />
      <Chat author={author} setAuthor={setAuthor} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#222',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
});
