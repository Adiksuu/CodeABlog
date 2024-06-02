import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native'
import React from 'react'
import { FontAwesome6 } from '@expo/vector-icons'

export default function CardDetails({ card }) {
    const handleOpenLink = () => {
        Linking.openURL(card.description)
    };

    return (
        <>
            <View style={styles.cardInfo}>
                <Text style={styles.cardTitle}>{card.title}</Text>
                <View style={[styles.statusIndicator, { backgroundColor: card.color }]} />
            </View>
            <View>
                <Text style={styles.cardDescription}>{card.largeDescription}</Text>
            </View>
            <View style={styles.cardLinks}>
                <TouchableOpacity style={styles.iconCircle} activeOpacity={0.7} onPress={() => handleOpenLink(card.description)}>
                    <FontAwesome6 name={"globe"} size={16} color={"#0f0f0f"} />
                    <Text style={styles.linkName}>Check Project</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconCircle} activeOpacity={0.7}>
                    <FontAwesome6 name={"wrench"} size={16} color={"#0f0f0f"} />
                    <Text style={styles.linkName}>Modified: {card.updated}</Text>
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