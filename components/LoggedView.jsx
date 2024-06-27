import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { auth } from '../database'
import { black, pureBlack, pureWhite, white } from '../utility/colors'
import { useNavigation } from "@react-navigation/native";
import { FontAwesome6 } from '@expo/vector-icons';

export default function LoggedView({ darkmode, setDarkmode }) {
    const navigation = useNavigation()

    const handleLogout = () => {
        auth.signOut()
    }

    function ManageNewsButton() {
        return (
            <TouchableOpacity style={{ ...styles.button, backgroundColor: darkmode ? pureBlack : pureWhite }} activeOpacity={0.7} onPress={() => handleOpenLink()}>
                <Text style={{ ...styles.buttonText, color: darkmode ? pureWhite : pureBlack }}><FontAwesome6 name="newspaper" ize={16} color={darkmode ? white : black} /> MANAGE THE NEWS</Text>
            </TouchableOpacity>
        )
    }
    function ManageSettingsButton() {
        return (
            <TouchableOpacity style={{ ...styles.button, backgroundColor: darkmode ? pureBlack : pureWhite }} activeOpacity={0.7} onPress={() => handleOpenSettings()}>
                <Text style={{ ...styles.buttonText, color: darkmode ? pureWhite : pureBlack }}><FontAwesome6 name="gear" size={16} color={darkmode ? white : black} /> SETTINGS</Text>
            </TouchableOpacity>
        )
    }
    function DisplayAnalyticsButton() {
        return (
            <TouchableOpacity style={{ ...styles.button, backgroundColor: darkmode ? pureBlack : pureWhite }} activeOpacity={0.7} onPress={() => handleOpenAnalytics()}>
                <Text style={{ ...styles.buttonText, color: darkmode ? pureWhite : pureBlack }}><FontAwesome6 name="chart-simple" size={16} color={darkmode ? white : black} /> ANALYTICS</Text>
            </TouchableOpacity>
        )
    }

    const handleOpenLink = () => {
        navigation.navigate("NewsUploader", { darkmode: darkmode });
    };

    const handleOpenSettings = () => {
        navigation.navigate("Settings", { defaultMode: darkmode })
    }

    const handleOpenAnalytics = () => {
        navigation.navigate("Analytics", { darkmode: darkmode })
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
                    {auth.currentUser && auth.currentUser.uid === 'ZERdxxCRYGhdSzasPVgy74UudcZ2' ? <ManageNewsButton /> : null}
                    {auth.currentUser && auth.currentUser.uid === 'ZERdxxCRYGhdSzasPVgy74UudcZ2' ? <DisplayAnalyticsButton /> : null}
                    <TouchableOpacity style={{ ...styles.button, backgroundColor: darkmode ? pureBlack : pureWhite }} activeOpacity={0.7} onPress={() => handleLogout()}>
                        <Text style={{ ...styles.buttonText, color: darkmode ? pureWhite : pureBlack }}><FontAwesome6 name="right-from-bracket" size={16} color={darkmode ? white : black} /> LOGOUT</Text>
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