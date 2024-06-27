import { View, Text, TouchableOpacity, StyleSheet, Linking } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FontAwesome6 } from '@expo/vector-icons'
import { pureBlack, pureWhite } from '../utility/colors'
import { database } from '../database'

export default function CardOthers({ darkmode, card }) {
    const [totalViews, setTotalViews] = useState(0)

    useEffect(() => {
        if (totalViews !== 0) return
        const fetch = async () => {
            const snapshot = await database.ref(`projects/${card.id}`).once('value')
            setTotalViews(snapshot.val().views || 0)
        }

        fetch()
    })

    const handleOpenLink = (link) => {
        Linking.openURL(link)
    }

    return (
        <View style={styles.cardLinks}>
            <TouchableOpacity style={{ ...styles.iconCircle, backgroundColor: darkmode ? pureBlack : pureWhite }} activeOpacity={0.7}>
                <FontAwesome6 name={"eye"} size={16} color={darkmode ? pureWhite : pureBlack} />
                <Text style={{ ...styles.linkName, color: darkmode ? pureWhite : pureBlack }}>Views: {totalViews}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ ...styles.iconCircle, backgroundColor: darkmode ? pureBlack : pureWhite }} activeOpacity={0.7} onPress={() => handleOpenLink(card.github)}>
                <FontAwesome6 name={"github"} size={16} color={darkmode ? pureWhite : pureBlack} />
                <Text style={{ ...styles.linkName, color: darkmode ? pureWhite : pureBlack }}>Repository</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    iconCircle: {
        backgroundColor: '#fff',
        borderRadius: 4,
        width: "48%",
        height: 40,
        alignItems: 'center',
        flexDirection: "row",
        gap: 8,
        justifyContent: 'center'
    },
    cardLinks: {
        gap: 4,
        marginTop: 16,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    linkName: {
        fontFamily: 'Nunito_600SemiBold'
    }
})