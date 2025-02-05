import { Dimensions, StyleSheet } from "react-native";
import { themas } from "../../global/themes";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    boxTop: {
        height: Dimensions.get('window').height/3,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: 80,
        height: 80,
    },
    titulo: {
        fontWeight: 'bold',
        marginTop: 40,
        fontSize: 20
    },
    boxMid: {
        height: Dimensions.get('window').height/3,
        width: '100%',
        //backgroundColor: 'green',
        paddingHorizontal: 37
    },
    boxBotton: {
        height: Dimensions.get('window').height/3,
        width: '100%',
        //backgroundColor: 'blue'
        alignItems:'center',
        //justifyContent: 'center'
    },
    textBotton: {
        color: themas.colors.gray,
        fontSize: 14
    },

})