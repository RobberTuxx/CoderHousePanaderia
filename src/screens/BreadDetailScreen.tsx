import React from "react";
import {Text, View, StyleSheet} from "react-native";

export default function BreadDetailScreen(){
    return(
        <View style={style.container}>
            <Text>Bread detail screen</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        alignItems:"center",
        justifyContent:"center",
        flex:1
    }
})
