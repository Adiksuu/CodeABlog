import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import { black, pureBlack, pureWhite, white } from '../utility/colors'
import AnalyticsDashboard from '../components/AnalyticsDashboard'

export default function Analytics({ route, navigation }) {
    const { darkmode } = route.params

    return (
        <View style={{ flex: 1, backgroundColor: darkmode ? black : white }}>
            <Header navigation={navigation} darkmode={darkmode} text={"Analytics"} />
            <ScrollView style={styles.content}>
                <View style={styles.textContainer}>
                    <Text style={{ ...styles.welcomeText, color: darkmode ? pureWhite : pureBlack }}>Check the app Analytics</Text>
                    <Text style={styles.descriptionText}>Below you will find the most important application statistics and more</Text>
                </View>
                <AnalyticsDashboard darkmode={darkmode} />
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