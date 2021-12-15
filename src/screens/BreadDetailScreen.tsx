import React from "react";
import {Button, StyleSheet, Text, View} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {addItem} from "../store/actions/CartActions";

export default function BreadDetailScreen() {
    const bread = useSelector(state => state.breads.selected)
    const dispatch = useDispatch()

    const handlerAddItemCart = () => dispatch(addItem(bread))
    return (
        <View style={style.container}>
            <Text style={style.title}>{bread.name}</Text>
            <Text>{bread.descripcion}</Text>
            <Text>${bread.price}</Text>
            <Text>{bread.weight}</Text>
            <Button title={'Agregar al carrito'} onPress={handlerAddItemCart}/>
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
