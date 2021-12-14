import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {useSelector} from "react-redux";

export default function BreadDetailScreen() {
    const bread = useSelector(state => state.breads.selected)
    return (
        <View style={style.container}>
            <Text style={style.title}>{bread.name}</Text>
            <Text>{bread.descripcion}</Text>
            <Text>${bread.price}</Text>
            <Text>{bread.weight}</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1
    },
    title: {
        fontFamily: 'OpenSansBold',
        fontSize: 22,
    }
})
