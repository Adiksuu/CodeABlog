import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'
import { black, pureBlack, pureWhite, white } from '../utility/colors'

export default function AnalyticsCard({ darkmode, name, value }) {
    return (
        <View style={{ ...styles.itemContainer, backgroundColor: darkmode ? pureBlack : pureWhite }}>
            <View style={styles.statusIndicator} />
            <View style={styles.contentContainer}>
                <View>
                    <Text style={{ ...styles.title, color: darkmode ? pureWhite : pureBlack }}><AntDesign name="user" size={20} color={darkmode ? white : black} /></Text>
                    <Text style={styles.description}>{name}</Text>
                    <Text style={styles.updated}>{value}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: "row",
        padding: 16,
        borderRadius: 8,
    },
    statusIndicator: {
        width: 10,
        borderTopLeftRadius: 12,
        borderBottomLeftRadius: 12,
        backgroundColor: '#1da1e8'
    },
    contentContainer: {
        flex: 1,
        paddingLeft: 16,
    },
    title: {
        fontSize: 16,
        fontFamily: "Poppins_600SemiBold",
        marginBottom: 4,
    },
    description: {
        fontSize: 14,
        color: "#7d7d7d",
        fontWeight: "600",
        marginBottom: 12,
    },
    updated: {
        fontSize: 18,
        color: "#7d7d7d",
        fontFamily: "Nunito_700Bold",
    },
});
