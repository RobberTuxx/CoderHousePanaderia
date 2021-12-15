import React, {useState} from "react";
import {Button, Text, TextInput, TouchableOpacity, View, StyleSheet} from "react-native";
import {useDispatch} from "react-redux";
import {signup} from "../store/actions/AuthReducer";
import Input from "../Components/Input";

export default function Register(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const handlerRegister = () => {
        dispatch(signup(email,password))
    }

    return(
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.title}>Registro</Text>
                <Text style={styles.subtitle}>Email</Text>
                <Input value={email} setValue={setEmail} validateInputEmail/>
                <Text style={styles.subtitle}>Password</Text>
                <Input value={password} setValue={setPassword} secure/>
                <TouchableOpacity style={styles.button} onPress={handlerRegister}>
                    <Text>REGISTRARME</Text>
                </TouchableOpacity>
                <Text style={{marginVertical:10}}>YA TIENES UNA CUENTA?</Text>
                <Button title={'Ingresar'} onPress={()=>{}}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#d2d2d2',
        justifyContent:"center",
        alignItems:"center",
    },
    card: {
        width: '80%',
        backgroundColor: 'white',
        borderRadius:15,
        justifyContent:"center",
        alignItems:"center",
        paddingVertical:10,
    },
    title:{
        fontSize:22,
        marginVertical:15,
        fontFamily: 'OpenSansBold',
    },
    subtitle:{
        fontSize:16,
        width: '90%',
        fontFamily: 'OpenSansBold',
    },
    textInput:{
        width:'90%',
        height:40,
        borderBottomColor: '#d4d4d4',
        borderBottomWidth: 1,
    },
    button: {
        width: '90%',
        alignItems:"center",
        justifyContent:"center",
        height:40,
        backgroundColor: 'aqua',
        marginVertical:8
    }
})
