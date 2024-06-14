import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { black, pureBlack, pureWhite, white } from '../utility/colors';
import { FontAwesome6 } from '@expo/vector-icons';

export default function NewsNote({ darkmode, card }) {
    return (
        <View style={{ ...styles.container, backgroundColor: darkmode ? pureBlack : pureWhite }}>
            <View style={styles.header}>
                <Text style={{ ...styles.headerText, color: darkmode ? white : black }}>{card.header}</Text>
            </View>
            <Text style={styles.title}>{card.title}</Text>
            <View style={styles.footer}>
                <Text style={styles.date}>Modified: {card.date}</Text>
                <Text style={styles.category}><FontAwesome6 name={card.icon} size={14} color={white} /> {card.category}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 8,
        padding: 16,
        marginHorizontal: 16,
    },
    header: {
        marginBottom: 8,
    },
    headerText: {
        color: '#4A90E2',
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 16,
    },
    title: {
        fontSize: 14,
        fontFamily: 'Poppins_500Medium',
        color: '#7d7d7d',
        marginBottom: 16,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    date: {
        fontSize: 12,
        color: "#7d7d7d",
        fontFamily: "Nunito_700Bold",
    },
    category: {
        backgroundColor: '#4A90E2',
        color: white,
        borderRadius: 4,
        gap: 8,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        paddingHorizontal: 16,
        paddingVertical: 6,
        fontFamily: 'Nunito_600SemiBold'
    },
});