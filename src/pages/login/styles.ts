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
    titleInput: {
        fontSize:13,
        marginLeft:5,
        color:themas.colors.gray,
        marginTop:20
    },
    boxInput: {
        width: '100%',
        height: 40,
        borderRadius: 40,
        marginTop: 10,
        borderWidth: 1,
        flexDirection: 'row'
    },
    boxBotton: {
        height: Dimensions.get('window').height/3,
        width: '100%',
        
        //backgroundColor: 'blue'
    },
})