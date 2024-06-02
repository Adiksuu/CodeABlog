import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { AntDesign, FontAwesome6 } from '@expo/vector-icons'
import { auth, database } from '../database'

export default function CardOptions({ item }) {
    const [cardLiked, setCardLiked] = useState(false)
    const [cardLikes, setCardLikes] = useState(0)

    const handleLikeCard = async () => {
        setCardLiked(!cardLiked);
    
        const snapshotPath = `projects/${item.id}/`;
        const snapshot = await database.ref(snapshotPath).once('value');
    
        let currentLikes = snapshot.val() ? snapshot.val().likes : 0;
        let newLikes = cardLiked ? currentLikes - 1 : currentLikes + 1;    
        setCardLikes(newLikes)
        await database.ref(snapshotPath).update({ 'likes': newLikes });

        const UID = auth.currentUser.uid
        const likedPath = `projects/${item.id}/likedby/${UID}`

        const isLiked = !cardLiked
        await database.ref(likedPath).update({ 'liked': isLiked })
    }

    const handleLoadLikes = async () => {
        const snapshotPath = `projects/${item.id}/`;
        const snapshot = await database.ref(snapshotPath).once('value');

        const newLikes = snapshot.val() ? snapshot.val().likes : 0
        setCardLikes(newLikes)

        const UID = auth.currentUser.uid
        const likedPath = `projects/${item.id}/likedby/${UID}`
        const likedSnapshot = await database.ref(likedPath).once('value')

        const isLiked = likedSnapshot.val() ? likedSnapshot.val().liked : false
        setCardLiked(isLiked)
    }

    useEffect(() => {
        handleLoadLikes()
    }, [auth.currentUser])

    return (
        <View style={styles.options}>
            <TouchableOpacity style={styles.optionsButton} activeOpacity={0.7} onPress={() => handleLikeCard()}>
                <AntDesign name={cardLiked ? 'like1' : 'like2'} size={20} color="black" />
                <Text style={styles.optionsText}>{cardLikes} Likes</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionsButton} activeOpacity={0.7}>
                <FontAwesome6 name="question" size={16} color="black" />
                <Text style={styles.optionsText}>Soon...</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    options: {
        marginTop: 8,
        flexDirection: 'row',
        gap: 16
    },
    optionsButton: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        backgroundColor: '#f3f3f3',
        padding: 8,
        borderRadius: 4,
        flex: 1,
    },
    optionsText: {
        color: '#0f0f0f',
        fontFamily: 'Nunito_700Bold'
    }
});
