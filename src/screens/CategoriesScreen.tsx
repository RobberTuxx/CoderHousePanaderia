import React from "react";
import {FlatList, StyleSheet, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import GridItem from "../Components/GridItem";
import {useDispatch, useSelector} from "react-redux";
import {selectCategory} from "../store/actions/CategoryActions";

export default function CategoriesScreen() {
    const categories = useSelector(state => state.categories.categories)
    const dispatch = useDispatch()
    const navigation = useNavigation()

    const handlerSelectedCategory = (item: any) => {
        dispatch(selectCategory(item.id))
        navigation.navigate('Bread', {
            name: item.title
        })
    }
    return (
        <View style={style.container}>
            <FlatList numColumns={2} data={categories} renderItem={({item}) => {
                return <GridItem item={item} onSelected={()=> handlerSelectedCategory(item)}/>
            }
            }/>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1
    }
})
