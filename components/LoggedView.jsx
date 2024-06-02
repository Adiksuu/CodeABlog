import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { auth } from '../database'

export default function LoggedView() {
    const handleLogout = () => {
        auth.signOut()
    }

    return (
        <View>
            <View style={styles.textContainer}>
                <Text style={styles.welcomeText}>You are already logged in</Text>
                <Text style={styles.descriptionText}>You have already logged in, now you have access to more features of the application. If you want, you can log out</Text>
            </View>
            <View>
                <View>
                    <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={() => handleLogout()}>
                        <Text style={styles.buttonText}>LOGOUT</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    textContainer: {
        alignItems: "left",
        paddingVertical: 20
    },
    welcomeText: {
        fontSize: 22,
        fontFamily: 'Poppins_600SemiBold'
    },
    descriptionText: {
        fontSize: 16,
        marginTop: 10,
        fontFamily: 'Poppins_400Regular',
        textAlign: "left"
    },
    button: {
        backgroundColor: '#fff',
        height: 50,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#0f0f0f',
        fontSize: 14,
        fontFamily: 'Nunito_600SemiBold'
    }
})