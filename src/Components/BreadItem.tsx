import React from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";

export interface Bread {
    id: string,
    categoria: number
    name: string
    descripcion: string
    weight: string
    price: number
    quanty: number
}

 interface BreadItemProps {
    bread: Bread
    navigate: () => void
}

export default function BreadItem(props: BreadItemProps) {

    return (
        <TouchableOpacity style={style.container} onPress={props.navigate}>
            <View style={{marginLeft: 20}}>
                <Text style={style.textName}>{props.bread.name}</Text>
                <Text>${props.bread.price}</Text>
                <Text>{props.bread.weight}</Text>
            </View>

        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    container: {
        backgroundColor: '#d3d3d3',
        width: 360,
        height: 80,
        marginVertical: 15
    },
    textName: {
        fontFamily: 'OpenSansBold',
        fontSize: 16
    }
})
