import React, {useEffect, useState} from "react";
import {StyleSheet, Text, TextInput, View} from "react-native";
import {validateEmail} from "../constants/regex";

interface InputProps {
    value: string
    setValue: (value: string) => void
    secure?: boolean
    validateInputEmail?: boolean
}

export default function Input(props: InputProps) {
    const [focus, setFocus] = useState(false)
    const [error, setError] = useState(false)
    const handlerFocus = () => {
        setFocus(true)
    }
    const handlerBlur = () => {
        setFocus(false)
    }
    useEffect(() => {
        if (props.validateInputEmail) setError(!validateEmail(props.value))
    }, [props.value])
    return (
        <View style={{width:'90%'}}>
            <TextInput
                style={focus ? styles.textInputFocus : error? styles.textInputError:  styles.textInput}
                value={props.value}
                onChangeText={props.setValue}
                secureTextEntry={props.secure}
                onFocus={handlerFocus}
                onBlur={handlerBlur}/>
            {error?
            <Text>existe un error</Text>:null}
        </View>

    )
}

const styles = StyleSheet.create({
    textInput: {
        width: '90%',
        height: 40,
        borderBottomColor: '#d4d4d4',
        borderBottomWidth: 1,
    },
    textInputFocus: {
        width: '90%',
        height: 40,
        borderBottomColor: 'aqua',
        borderBottomWidth: 1,
    },
    textInputError: {
        width: '90%',
        height: 40,
        borderBottomColor: 'red',
        borderBottomWidth: 1,
    },
})
