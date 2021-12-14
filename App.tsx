import React from 'react';
import {StyleSheet} from 'react-native';
import {useFonts} from "expo-font";
import AppLoading from "expo-app-loading/build/AppLoadingNativeWrapper";
import Navigator from "./src/Navigator";
import {Provider} from "react-redux";
import store from "./src/store";

export default function App() {
    const [loaded] = useFonts({
        OpenSansRegular: require('./assets/fonts/OpenSans-Regular.ttf'),
        OpenSansBold: require('./assets/fonts/OpenSans-Bold.ttf'),
    });

    if (!loaded) return <AppLoading/>

    return (
        <Provider store={store}>
            <Navigator/>
        </Provider>
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
