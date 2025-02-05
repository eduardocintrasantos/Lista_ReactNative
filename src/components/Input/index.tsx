import React, { forwardRef, useState } from 'react';
import { View, Text, TextInput, TextInputProps, TouchableOpacity } from 'react-native';
import { style } from "./styles";
import {themas} from '../../global/themes';

import {MaterialIcons, FontAwesome, Octicons} from '@expo/vector-icons'

type IconComponent = React.ComponentType<React.ComponentProps<typeof MaterialIcons>> |
                     React.ComponentType<React.ComponentProps<typeof FontAwesome>> |
                     React.ComponentType<React.ComponentProps<typeof Octicons>>;

type Props = TextInputProps & {
    IconLeft?: IconComponent,
    IconRigth?: IconComponent,
    IconLeftName?: string,
    iconRigthName?: string,
    title?: string,
    onIconLeftPress?: () => void,
    onIconRigthPress?: () => void
}

export const Input = forwardRef((Props: Props, ref) => {
    
    const {IconLeft, IconRigth, IconLeftName, iconRigthName, title, onIconLeftPress, onIconRigthPress, ...rest} = Props

    const calculateSizeWidth = () => {
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