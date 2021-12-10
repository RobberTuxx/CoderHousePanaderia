import React from "react";
import {Text, View, StyleSheet, Button} from "react-native";
import {useNavigation} from "@react-navigation/native";

export default function CategoriesScreen(){
    const navigation = useNavigation()
    return(
        <View style={style.container}>
            <Text>Categories screen</Text>
            <Button title={'ir a productos'} onPress={()=>{navigation.navigate('Bread')}}/>
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
