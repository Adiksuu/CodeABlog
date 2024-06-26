import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { black, pureBlack, pureWhite, white } from '../utility/colors'
import { auth, database } from '../database'

export default function ChangePassword({ darkmode }) {
    const [password, setPassword] = useState('')

    const handleChangePassword = () => {
        auth.currentUser.updatePassword(password).then(async () => {
            await database.ref(`users/${auth.currentUser.uid}/`).update({password: password})

            setPassword('')
        }).catch((error) => {
            console.log('Something went wrong with User login', error)
        })
    }

    return (
        <View style={{ ...styles.settings, backgroundColor: darkmode ? pureBlack : pureWhite }}>
            <View style={styles.textContainer}>
                <Text style={{ ...styles.welcomeText, color: darkmode ? pureWhite : pureBlack }}>Change account password:</Text>
            </View>
            <View style={styles.pickerContainer}>
                <TextInput placeholder='New password...' placeholderTextColor={darkmode ? pureWhite : pureBlack} secureTextEntry value={password} onChangeText={(e) => { setPassword(e) }} style={{ ...styles.input, backgroundColor: darkmode ? black : white, color: darkmode ? pureWhite : pureBlack }} />
                <TouchableOpacity style={{ ...styles.inputButton, backgroundColor: darkmode ? black : white }} activeOpacity={0.7} onPress={() => handleChangePassword()}>
                    <Text style={{ ...styles.inputButtonText, color: darkmode ? pureWhite : pureBlack }}>Confirm</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    settings: {
        borderRadius: 4,
        padding: 16,
        marginBottom: 24
    },
    textContainer: {
        alignItems: "left",
    },
    welcomeText: {
        fontSize: 15,
        fontFamily: 'Poppins_600SemiBold'
    },
    pickerContainer: {
        borderRadius: 8,
        marginVertical: 16,
        gap: 8
    },
    input: {
        borderRadius: 4,
        paddingHorizontal: 16,
        fontFamily: 'Poppins_400Regular',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50
    },
    inputButton: {
        borderRadius: 4,
        padding: 8,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputButtonText: {
        fontSize: 14,
        fontFamily: 'Nunito_600SemiBold'
    },
})