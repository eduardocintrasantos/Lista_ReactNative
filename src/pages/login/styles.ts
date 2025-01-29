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
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        backgroundColor:themas.colors.lightGray,
        borderColor:themas.colors.lightGray
    },
    input: {
        height: '100%',
        width: '90%',
        //backgroundColor: 'red',
        borderRadius: 40,
    },
    boxBotton: {
        height: Dimensions.get('window').height/3,
        width: '100%',
        //backgroundColor: 'blue'
        alignItems:'center',
        //justifyContent: 'center'
    },
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
    textBotton: {
        color: themas.colors.gray,
        fontSize: 14
    },

})