import React from "react";
import {FlatList, StyleSheet, Text, View} from "react-native";
import {CART} from "../data/Cart";
import CartItem from "../Components/CartItem";

export default function CartScreen() {

    return (
        <View style={{flex: 1}}>
            <FlatList data={CART} renderItem={({item}) => {
                return <CartItem breadCart={item}/>
            }}/>
            <View style={style.comfirm}>
                <Text style={{flex: 1, marginLeft:10}}>Confirmar</Text>
                <Text style={style.total}>Total: $12000</Text>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    comfirm: {
        backgroundColor: '#d3d3d3',
        flexDirection: 'row',
        marginBottom: 150,
        height: 60,
        marginHorizontal:10,
        borderRadius:12,
        alignItems:"center"
    },
    total: {
        fontFamily: 'OpenSansBold',
        flex:1,
        textAlign: "right",
        marginRight:10
    }
})
