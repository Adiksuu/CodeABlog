import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { pureBlack, pureWhite } from '../utility/colors'

export default function Comment({ card, darkmode }) {
    return (
        <View style={styles.container}>
            <View style={{...styles.commentBox, backgroundColor: darkmode ? pureBlack : pureWhite}}>
                <Text style={{...styles.channelName, color: darkmode ? pureWhite : pureBlack}}>{card.name}</Text>
                <Text style={{...styles.comment, color: darkmode ? pureWhite : pureBlack}}>{card.text}</Text>
                <Text style={styles.timeAgo}>{card.date}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    commentBox: {
        padding: 16,
        borderRadius: 8,
        flex: 1,
    },
    channelName: {
        fontFamily: 'Poppins_500Medium',
        fontSize: 10
    },
    comment: {
        marginTop: 5,
        fontSize: 14,
        fontFamily: 'Poppins_500Medium',
    },
    timeAgo: {
        fontSize: 12,
        color: '#7d7d7d',
        textAlign: 'right',
        fontFamily: 'Nunito_600SemiBold'
    },
})