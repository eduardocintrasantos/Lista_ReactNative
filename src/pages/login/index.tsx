import React from "react";

import {Text, View, Image, TextInput, Button} from "react-native"

import { style } from "./styles";
import Logo from '../../assets/check.png'

export default function Login (){
    return (
        <View style={style.container}>
            <View style={style.boxTop}>
                <Image source={Logo} style={style.logo} resizeMode="contain"></Image>
                <Text style={style.titulo}>Bem vindo de volta!</Text>
            </View>
            <View style={style.boxMid}>
                <Text style={style.titleInput}>ENDEREÇO DE E-MAIL</Text>
                <View style={style.boxInput}>
                    <TextInput></TextInput>   
                    <Text>img</Text> 
                </View>
                <Text style={style.titleInput}>SENHA</Text>
                <View style={style.boxInput}>
                    <TextInput></TextInput>
                    <Text>img2</Text>
                </View>
            </View>
            <View style={style.boxBotton}>
                <Button title="Entrar"></Button>
            </View>
        </View>
    )
}