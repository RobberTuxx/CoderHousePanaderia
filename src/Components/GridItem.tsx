import React from "react";
import {Text, TouchableOpacity, View, StyleSheet} from "react-native";

interface GridItemProps {
    item: any,
    onSelected: ()=>void
}

export default function GridItem(props: GridItemProps) {
    return (
        <TouchableOpacity style={[styles.container]} onPress={props.onSelected}>
            <View style={[{backgroundColor: props.item.color, }, styles.gridItem]}>
                <Text style={styles.title}>{props.item.title}</Text>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    gridItem: {
        flex:1,
        borderRadius: 6,
        margin: 15,
        height:160,
        width: 160,
        justifyContent: "flex-end",
        alignItems: "flex-end",
    },
    container:{
        borderRadius:6,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset:{
            width:0,
            height:2
        },
        shadowRadius: 6,
        elevation:3,
        padding: 8,
    },
    title:{
        fontFamily:'OpenSansBold'
    }
})
