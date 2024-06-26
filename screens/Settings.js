import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { black, pureBlack, pureWhite, white } from '../utility/colors';
import Header from '../components/Header';
import SettingsComponent from '../components/Settings'
import { auth, database } from '../database';

export default function Settings({ navigation }) {
    const [darkmode, setDarkmode] = useState(false)

    useEffect(() => {
        setInterval(async () => {
            if (!auth.currentUser) return

            const snapshot = await database.ref(`users/${auth.currentUser.uid}/`).once('value')
            setDarkmode(snapshot.val().darkmode)

        }, 100);
    }, [])

    return (
        <View style={{ flex: 1, backgroundColor: darkmode ? black : white }}>
            <Header navigation={navigation} darkmode={darkmode} text={"Settings"} />
            <ScrollView style={styles.content}>
                <View style={styles.textContainer}>
                    <Text style={{ ...styles.welcomeText, color: darkmode ? pureWhite : pureBlack }}>Manage your account settings</Text>
                    {/* <Text style={styles.descriptionText}>You have already logged in, now you have access to more features of the application. If you want, you can log out</Text> */}
                </View>
                <View>
                    <SettingsComponent darkmode={darkmode} setDarkmode={setDarkmode} />
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        padding: 20,
        marginBottom: 120
    },
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
})