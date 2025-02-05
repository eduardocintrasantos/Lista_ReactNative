import React, {useState} from "react";

import {Text, View, Image, TouchableOpacity, Alert, ActivityIndicator} from "react-native"

import { style } from "./styles";
import Logo from '../../assets/check.png'
import {MaterialIcons, Octicons} from '@expo/vector-icons'
import { themas } from "../../global/themes";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export default function Login (){
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [loading,setLoading] = useState(false);
    const [showPassword,setShowPassword] = useState(true);

    async function getLogin() {
        try {
            setLoading(true)

            if(!email || !password) {
                return Alert.alert('Atenção', 'Informe os campos obrigatórios!')
            }

            setTimeout(()=> {
                if(email == 'eduardo' && password == '123') {
                    Alert.alert('Logado com sucesso!')
                } else {
                    Alert.alert('Email ou senha incorreto!')
                }
                setLoading(false)
            }, 3000)

        } catch(error) {
            console.log(error)
        } 
    }

    return (
        <View style={style.container}>
            <View style={style.boxTop}>
                <Image source={Logo} style={style.logo} resizeMode="contain"></Image>
                <Text style={style.titulo}>Bem vindo de volta!</Text>
            </View>
            <View style={style.boxMid}>
                <Input 
                    value={email}
                    onChangeText={setEmail}
                    title="ENDEREÇO DE E-MAIL"
                    IconRigth={MaterialIcons}
                    iconRigthName="email"
                />
                <Input 
                    value={password}
                    onChangeText={setPassword}
                    title="SENHA"
                    IconRigth={Octicons}
                    iconRigthName={showPassword?"eye-closed":"eye"}
                    secureTextEntry={showPassword}
                    onIconRigthPress={()=>setShowPassword(!showPassword)}
                />
            </View>
            <View style={style.boxBotton}>
                <Button 
                    text="Entrar"
                    loading={loading}
                    onPress={() => getLogin()}
                />
            </View>
            <Text style={style.textBotton}>Não tem conta? <Text style={{color:themas.colors.primaty}}>Crie agora</Text>.</Text>
        </View>
    )
}