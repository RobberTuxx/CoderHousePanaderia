import React from "react";
import {Text, View, StyleSheet, Button} from "react-native";
import {useNavigation} from "@react-navigation/native";


export default function CategoryBreadScreen(props:any){
    const navigation = useNavigation()
    return(
        <View style={style.container}>

            <Text>Category bread screen</Text>
            <Button title={'ir a detalle'} onPress={()=>{ // @ts-ignore
                navigation.navigate('Detail')}}/>
            <Button title={'regresar'} onPress={()=>{navigation.goBack()}}/>
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
