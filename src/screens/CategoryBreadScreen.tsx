import React, {useEffect} from "react";
import {StyleSheet, View} from "react-native";
import {useNavigation, useRoute} from "@react-navigation/native";
import BreadItem from "../Components/BreadItem";
import {useDispatch, useSelector} from "react-redux";
import {filteredBread, selectBread} from "../store/actions/BreadAction";


export default function CategoryBreadScreen(props: any) {
    const navigation = useNavigation()
    const route = useRoute()
    const dispatch = useDispatch()
    const breadFilter = useSelector(state => state.breads.filteredBreads)
    const category = useSelector(state => state.categories.selected)

    useEffect(() => {
        dispatch(filteredBread(category.id))
    }, [])

    const handlerSelectedBread = (value) =>{
        dispatch(selectBread(value.id))
        navigation.navigate('Detail')
    }

    const breadMap = () => {
        return breadFilter.map((value, index) => {
            return <BreadItem bread={value} navigate={() => handlerSelectedBread(value)} key={index}/>
        })
    }

    return (
        <View style={style.container}>
            {breadMap()}
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        alignItems: "center",
        flex: 1
    }
})
