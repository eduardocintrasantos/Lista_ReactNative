import React from "react";

import {Text, View, Image, TextInput, Button, TouchableOpacity} from "react-native"

import { style } from "./styles";
import Logo from '../../assets/check.png'
import {MaterialIcons} from '@expo/vector-icons'
import { themas } from "../../global/themes";

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
                    <TextInput style={style.input}></TextInput>   
                    <MaterialIcons
                        name="email"
                        size={20}
                        color={themas.colors.gray}
                    />    

                </View>
                <Text style={style.titleInput}>SENHA</Text>
                <View style={style.boxInput}>
                    <TextInput style={style.input}></TextInput>
                    <MaterialIcons 
                        name="password"
                        size={20}
                        color={themas.colors.gray}
                    />
                </View>
            </View>
            <View style={style.boxBotton}>
                <TouchableOpacity style={style.button}>
                    <Text style={style.textButton}>Entrar</Text>
                </TouchableOpacity>
            </View>
            <Text style={style.textBotton}>Não tem conta? <Text style={{color:themas.colors.primaty}}>Crie agora</Text>.</Text>
        </View>
    )
}