import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import CategoriesScreen from "./screens/CategoriesScreen";
import CategoryBreadScreen from "./screens/CategoryBreadScreen";
import BreadDetailScreen from "./screens/BreadDetailScreen";
import {COLORS} from "./constants/Colors";
import CartScreen from "./screens/CartScreen";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {StyleSheet, Text, View} from 'react-native'
import {Ionicons} from '@expo/vector-icons';
import Register from "./screens/Register";
import {useSelector} from "react-redux";

export default function Navigator() {
    const user = useSelector(state => state.auth.userId)
    const styleHeader = {
        headerStyle: {
            backgroundColor: COLORS.primary
        },
        headerTintColor: 'white',
        headerTitleStyle: {
            fontWeight: "bold"
        }
    }
    const CartStack = createNativeStackNavigator()
    const ShopStack = createNativeStackNavigator()
    const AuthStack = createNativeStackNavigator()
    const Tab = createBottomTabNavigator()

    function AuthStackRender() {
        return (
            <AuthStack.Navigator screenOptions={{headerShown:false}}>
                <AuthStack.Screen name={'Register'} component={Register}/>
            </AuthStack.Navigator>
        )
    }

    function ShopStackRender() {
        return <ShopStack.Navigator screenOptions={styleHeader}>
            <ShopStack.Screen name={'Home'} component={CategoriesScreen} options={{title: 'Mi pan'}}/>
            <ShopStack.Screen name={'Bread'} component={CategoryBreadScreen}
                              options={({route}) => ({title: route.params?.name})}/>
            <ShopStack.Screen name={'Detail'} component={BreadDetailScreen}
                              options={({route}) => ({title: route.params?.bread.name})}/>
        </ShopStack.Navigator>
    }

    function CartStackRender() {
        return (
            <CartStack.Navigator screenOptions={styleHeader}>
                <CartStack.Screen name={'Cart'} component={CartScreen}/>
            </CartStack.Navigator>
        )
    }

    return (
        <NavigationContainer>
            {
                user ? <Tab.Navigator
                        screenOptions={{headerShown: false, tabBarShowLabel: false, tabBarStyle: style.tabBar}}>
                        <Tab.Screen name={'Shop'} component={ShopStackRender} options={{
                            tabBarIcon: ({focused}) => (
                                <View style={style.item}>
                                    <Ionicons name={'md-home'} size={24} color={focused ? 'green' : 'black'}/>
                                    <Text>Tienda</Text>
                                </View>
                            )
                        }}/>
                        <Tab.Screen name={'Cart'} component={CartStackRender} options={{
                            tabBarIcon: ({focused}) => (
                                <View style={style.item}>
                                    <Ionicons name={'md-cart'} size={24} color={focused ? 'green' : 'black'}/>
                                    <Text>Carrito</Text>
                                </View>
                            )
                        }}/>
                    </Tab.Navigator> :
                    AuthStackRender()
            }

        </NavigationContainer>
    )
}

const style = StyleSheet.create({
    tabBar: {
        shadowColor: '#7f5df0',
        shadowOffset: {width: 0, height: 10},
        shadowOpacity: 0.25,
        shadowRadius: 0.25,
        elevation: 5,
        position: "absolute",
        bottom: 25,
        left: 20,
        right: 20,
        borderRadius: 15,
        height: 90,
    },
    item: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})
