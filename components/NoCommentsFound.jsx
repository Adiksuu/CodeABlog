import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { pureBlack, pureWhite } from '../utility/colors'

export default function NoCommentsFound({ darkmode }) {
    return (
        <View>
            <View style={styles.textContainer}>
                <Text style={{ ...styles.welcomeText, color: darkmode ? pureWhite : pureBlack }}>There are no comments</Text>
                <Text style={styles.descriptionText}>We couldn't find any comments for this project, be the first to write something</Text>
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
})