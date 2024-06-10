import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { black, pureBlack, pureWhite, white } from '../utility/colors'

export default function Header({ navigation, darkmode, text }) {
    return (
        <View style={{...styles.container, backgroundColor: darkmode ? pureBlack : pureWhite}}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={{...styles.circleIcon, backgroundColor: darkmode ? black : white}} activeOpacity={0.7}>
                <Ionicons name="arrow-back" size={20} color={darkmode ? pureWhite : pureBlack} />
            </TouchableOpacity>
            <Text style={{...styles.text, color: darkmode ? pureWhite : pureBlack}}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 24,
        paddingVertical: 16,
        height: 100
    },
    circleIcon: {
        height: 35,
        width: 35,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 999
    },
    text: {
        fontSize: 18,
        fontFamily: 'Nunito_600SemiBold'
    }
})