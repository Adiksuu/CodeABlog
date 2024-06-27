import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { black, pureBlack, pureWhite, white } from '../utility/colors'
import { Octicons } from '@expo/vector-icons';
import { auth, database } from '../database';

export default function Comment({ card, darkmode, projectID }) {
    const handleDeleteCard = () => {
        const ID = card.id

        database.ref(`projects/${projectID}/comments/comment_${ID}/`).remove()
    }

    function ProjectRemoveButton() {
        return (
            <TouchableOpacity onPress={() => handleDeleteCard()}>
                <Octicons name="trash" size={16} color={darkmode ? white : black} />
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            <View style={{ ...styles.commentBox, backgroundColor: darkmode ? pureBlack : pureWhite }}>
                <View style={styles.top}>
                    <Text style={{ ...styles.channelName, color: darkmode ? pureWhite : pureBlack }}>{card.name}</Text>
                    {auth.currentUser.uid === card.uid || auth.currentUser.uid === 'ZERdxxCRYGhdSzasPVgy74UudcZ2' ? <ProjectRemoveButton /> : null}
                </View>
                <Text style={{ ...styles.comment, color: darkmode ? pureWhite : pureBlack }}>{card.text}</Text>
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
    top: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})