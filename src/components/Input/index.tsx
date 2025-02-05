import React, { forwardRef, useState } from 'react';
import { View, Text, TextInput, TextInputProps, TouchableOpacity } from 'react-native';
import { style } from "./styles";
import {themas} from '../../global/themes';

import {MaterialIcons, FontAwesome, Octicons} from '@expo/vector-icons'

type IconComponent = React.ComponentType<React.ComponentProps<typeof MaterialIcons>> | // Aqui são importados os modelos de icones
                     React.ComponentType<React.ComponentProps<typeof FontAwesome>> |   // para que seja usado nos inputs
                     React.ComponentType<React.ComponentProps<typeof Octicons>>;


// Adicionando algumas propriedades que serão utilizadas no input, para que possa deixalo dinamico, 
// e passar informações diferentes para cada campo input que venha a criar
type Props = TextInputProps & {  
    IconLeft?: IconComponent,    // aqui é utilizado os icones
    IconRigth?: IconComponent,
    IconLeftName?: string,
    iconRigthName?: string,
    title?: string,
    onIconLeftPress?: () => void,  // o void é utilizado pois aqui será passado uma função, que altera o icone ao ser pressionado
    onIconRigthPress?: () => void
}

export const Input = forwardRef((Props: Props, ref) => {
    
    const {IconLeft, IconRigth, IconLeftName, iconRigthName, title, onIconLeftPress, onIconRigthPress, ...rest} = Props

    const calculateSizeWidth = () => {  // Essa função foi feita para retonar o whidth do input, para que o icone dentro do mesmo, não perca a proporção
        if(IconLeft && IconRigth) {
            return '80%'
        }else if(IconLeft || IconRigth) {
            return '90%'
        }else {
            return '100%'
        }
    }

    return (
        <>
            <Text style={style.titleInput}>{title}</Text>
            <View style={style.boxInput}>
                {IconLeft && IconLeftName &&(
                    <TouchableOpacity onPress={onIconLeftPress}>
                        <IconLeft name={IconLeftName as any} size={20} color={themas.colors.gray} style={style.icon}/>
                    </TouchableOpacity>
                )}
                <TextInput 
                    style={[
                        style.input,
                        {width:calculateSizeWidth()}
                    ]}
                    {...rest}
                /> 
                {IconRigth && iconRigthName &&(
                    <TouchableOpacity onPress={onIconRigthPress}>
                        <IconRigth name={iconRigthName as any} size={20} color={themas.colors.gray} style={style.icon}/>
                    </TouchableOpacity>
                )}
            </View>
        </>
    )
})