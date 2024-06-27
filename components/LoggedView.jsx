import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { auth } from '../database'
import { pureBlack, pureWhite } from '../utility/colors'
import { useNavigation } from "@react-navigation/native";

export default function LoggedView({ darkmode, setDarkmode }) {
    const navigation = useNavigation()

    const handleLogout = () => {
        auth.signOut()
    }

    function ManageNewsButton() {
        return (
            <TouchableOpacity style={{ ...styles.button, backgroundColor: darkmode ? pureBlack : pureWhite }} activeOpacity={0.7} onPress={() => handleOpenLink()}>
                <Text style={{ ...styles.buttonText, color: darkmode ? pureWhite : pureBlack }}>MANAGE THE NEWS</Text>
            </TouchableOpacity>
        )
    }
    function ManageSettingsButton() {
        return (
            <TouchableOpacity style={{ ...styles.button, backgroundColor: darkmode ? pureBlack : pureWhite }} activeOpacity={0.7} onPress={() => handleOpenSettings()}>
                <Text style={{ ...styles.buttonText, color: darkmode ? pureWhite : pureBlack }}>SETTINGS</Text>
            </TouchableOpacity>
        )
    }

    const handleOpenLink = () => {
        navigation.navigate("NewsUploader", { darkmode: darkmode });
    };

    const handleOpenSettings = () => {
        navigation.navigate("Settings", { defaultMode: darkmode })
    }

    return (
        <View>
            <View style={styles.textContainer}>
                <Text style={{ ...styles.welcomeText, color: darkmode ? pureWhite : pureBlack }}>You are already logged in</Text>
                <Text style={styles.descriptionText}>You have already logged in, now you have access to more features of the application. If you want, you can log out</Text>
            </View>
            <View>
                <View style={{ gap: 8 }}>
                    <ManageSettingsButton />
                    {auth.currentUser.uid === 'ZERdxxCRYGhdSzasPVgy74UudcZ2' ? <ManageNewsButton /> : null}
                    <TouchableOpacity style={{ ...styles.button, backgroundColor: darkmode ? pureBlack : pureWhite }} activeOpacity={0.7} onPress={() => handleLogout()}>
                        <Text style={{ ...styles.buttonText, color: darkmode ? pureWhite : pureBlack }}>LOGOUT</Text>
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
        textAlign: "left",
        color: "#7d7d7d"
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
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
    },
})