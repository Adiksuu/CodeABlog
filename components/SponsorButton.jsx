import { View, Text, TouchableOpacity, StyleSheet, Linking } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons'

export default function SponsorButton() {
    const handleOpenLink = () => {
        Linking.openURL('https://patreon.com/Adiksuu')
    }

    return (
        <View>
            <TouchableOpacity activeOpacity={0.7} style={styles.button} onPress={() => handleOpenLink()}>
                <FontAwesome5 name='patreon' size={16} />
                <Text style={styles.buttonText}>Sponsor Me</Text>
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
        backgroundColor: "#fff",
        width: "100%",
        height: 40,
        borderRadius: 4,
    },
    buttonText: {
        fontSize: 16,
        color: "#0f0f0f",
        fontFamily: 'Nunito_600SemiBold'
    },
})