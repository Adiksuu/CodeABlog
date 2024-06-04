import { View, Text, TouchableOpacity, StyleSheet, Linking } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons'
import { black, pureBlack, pureWhite, white } from '../utility/colors'

export default function SponsorButton({ darkmode }) {
    const handleOpenLink = () => {
        Linking.openURL('https://patreon.com/Adiksuu')
    }

    return (
        <View>
            <TouchableOpacity activeOpacity={0.7} style={{...styles.button, backgroundColor: darkmode ? pureBlack : pureWhite}} onPress={() => handleOpenLink()}>
                <FontAwesome5 name='patreon' size={16} color={darkmode ? white : black} />
                <Text style={{...styles.buttonText, color: darkmode ? white : black}}>Sponsor Me</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 12,
        width: "100%",
        height: 40,
        borderRadius: 4,
    },
    buttonText: {
        fontSize: 16,
        fontFamily: 'Nunito_600SemiBold'
    },
})