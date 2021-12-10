import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {useFonts} from "expo-font";
import AppLoading from "expo-app-loading/build/AppLoadingNativeWrapper";
import Navigator from "./src/Navigator";

export default function App() {
  const [loaded] = useFonts({
    OpenSansRegular: require('./assets/fonts/OpenSans-Regular.ttf'),
    OpenSansBold: require('./assets/fonts/OpenSans-Bold.ttf'),
  });

  if (!loaded) <AppLoading/>

  return (
   <Navigator/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
