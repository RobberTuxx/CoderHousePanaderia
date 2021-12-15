import React from "react";
import {View, Text, StyleSheet} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {Bread} from "./BreadItem";
import {useDispatch} from "react-redux";
import {removeItem} from "../store/actions/CartActions";

interface CartItemProps {
    breadCart: Bread
}

export default function CartItem(props: CartItemProps  ){
    const dispatch = useDispatch()

    const handlerDeleteItemCar = () => dispatch(removeItem(props.breadCart.id))

    return(
        <View style={style.container}>
            <View style={{flex:9}}>
                <Text style={style.title}>{props.breadCart.name}</Text>
                <Text>Cantidad {props.breadCart.quanty}</Text>
                <Text>{props.breadCart.weight}</Text>
            </View>
            <View style={{flex:1, justifyContent: "flex-end"}}>
                <Ionicons name={'trash'} size={24} color={'#d2d2d2'} onPress={handlerDeleteItemCar}/>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        flex:1,
        borderBottomWidth:1,
        borderBottomColor: 'gray',
        flexDirection:"row",
        marginHorizontal:15,
        marginVertical:15
    },
    title: {
        fontFamily: 'OpenSansBold',
        fontSize:16
    }
})
