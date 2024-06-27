import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native'
import React from 'react'
import { FontAwesome6 } from '@expo/vector-icons'
import { black, pureBlack, pureWhite, white } from '../utility/colors';
import { useFocusEffect } from '@react-navigation/native';
import { database } from '../database';
import CardOthers from './CardOthers';

export default function CardDetails({ card, darkmode }) {
    const handleOpenLink = () => {
        Linking.openURL(card.description)
    };

    const handleAddView = async () => {
        const snapshot = await database.ref(`projects/${card.id}/`).once('value')
        const views = snapshot.val().views || 0

        database.ref(`projects/${card.id}/`).update({ views: views + 1 })
    }

    useFocusEffect(() => {
        handleAddView()
    })

    return (
        <>
            <View style={styles.cardInfo}>
                <Text style={{...styles.cardTitle, color: darkmode ? pureWhite : pureBlack}}>{card.title}</Text>
                <View style={[styles.statusIndicator, { backgroundColor: card.color }]} />
            </View>
            <View>
                <Text style={{...styles.cardDescription, backgroundColor: darkmode ? pureBlack : pureWhite, color: darkmode ? pureWhite : pureBlack}}>{card.largeDescription}</Text>
            </View>
            <CardOthers darkmode={darkmode} card={card} />
            <View style={styles.cardLinks}>
                <TouchableOpacity style={{...styles.iconCircle, backgroundColor: darkmode ? pureBlack : pureWhite}} activeOpacity={0.7} onPress={() => handleOpenLink()}>
                    <FontAwesome6 name={"globe"} size={16} color={darkmode ? pureWhite : pureBlack} />
                    <Text style={{...styles.linkName, color: darkmode ? pureWhite : pureBlack}}>Check Project</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{...styles.iconCircle, backgroundColor: darkmode ? pureBlack : pureWhite}} activeOpacity={0.7}>
                    <FontAwesome6 name={"wrench"} size={16} color={darkmode ? pureWhite : pureBlack} />
                    <Text style={{...styles.linkName, color: darkmode ? pureWhite : pureBlack}}>Modified: {card.updated}</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    cardInfo: {
        alignItems: "center",
        gap: 4
    },
    cardTitle: {
        fontSize: 20,
        fontFamily: 'Poppins_600SemiBold'
    },
    cardDescription: {
        fontSize: 16,
        fontFamily: 'Poppins_400Regular',
        backgroundColor: "#fff",
        padding: 16,
        borderRadius: 4
    },
    statusIndicator: {
        width: "100%",
        height: 12,
        borderRadius: 8,
        marginBottom: 24
    },
    iconCircle: {
        backgroundColor: '#fff',
        borderRadius: 4,
        width: "100%",
        height: 40,
        alignItems: 'center',
        flexDirection: "row",
        gap: 8,
        justifyContent: 'center'
    },
    cardLinks: {
        gap: 4,
        marginTop: 16,
        marginBottom: 24
    },
    linkName: {
        fontFamily: 'Nunito_600SemiBold'
    }
})