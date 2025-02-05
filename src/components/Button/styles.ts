import {  StyleSheet } from "react-native";
import { themas } from "../../global/themes";

export const style = StyleSheet.create({
    button: {
        width:200,
        height:50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: themas.colors.primaty,
        borderRadius: 40,
        // gerador de box shadow react native
        shadowColor: "#000000",
        shadowOffset: {
        width: 0,
        height: 7,
        },
        shadowOpacity:  0.21,
        shadowRadius: 7.68,
        elevation: 10
    },
    textButton: {
        fontSize: 16,
        color: '#FFFF',
        fontWeight: 'bold'
    },
})