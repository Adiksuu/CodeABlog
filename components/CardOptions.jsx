import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { AntDesign, FontAwesome6 } from '@expo/vector-icons'
import { auth, database } from '../database'
import { black, white } from '../utility/colors'
import { useFocusEffect, useNavigation } from '@react-navigation/native'

export default function CardOptions({ item, darkmode }) {
    const navigation = useNavigation();

    const handleOpenComments = () => {
        navigation.navigate("Comments", { id: item.id });
    };

    const [cardLiked, setCardLiked] = useState(false)
    const [cardLikes, setCardLikes] = useState(0)

    const [cardComments, setCardComments] = useState(0)

    const handleLikeCard = async () => {
        setCardLiked(!cardLiked);

        const snapshotPath = `projects/${item.id}/`;
        const snapshot = await database.ref(snapshotPath).once('value');

        let currentLikes = snapshot.exists() && snapshot.val().likes ? snapshot.val().likes : 0;
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

        const newLikes = snapshot.exists() && snapshot.val().likes ? snapshot.val().likes : 0
        setCardLikes(newLikes)

        const UID = auth.currentUser.uid
        const likedPath = `projects/${item.id}/likedby/${UID}`
        const likedSnapshot = await database.ref(likedPath).once('value')

        const isLiked = likedSnapshot.val() ? likedSnapshot.val().liked : false
        setCardLiked(isLiked)
    }

    const handleLoadComments = async () => {
        const snapshotPath = `projects/${item.id}/comments/`;
        const snapshot = await database.ref(snapshotPath).once('value')

        const newComments = snapshot.val() ? snapshot.numChildren() : 0
        setCardComments(newComments)
    }

    useFocusEffect(() => {
        handleLoadLikes()
        handleLoadComments()
    })

    return (
        <View style={styles.options}>
            <TouchableOpacity style={{ ...styles.optionsButton, backgroundColor: darkmode ? black : white }} activeOpacity={0.7} onPress={() => handleLikeCard()}>
                <AntDesign name={cardLiked ? 'like1' : 'like2'} size={20} color={darkmode ? white : black} />
                <Text style={{ ...styles.optionsText, color: darkmode ? white : black }}>{cardLikes} Likes</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ ...styles.optionsButton, backgroundColor: darkmode ? black : white }} activeOpacity={0.7} onPress={handleOpenComments}>
                <FontAwesome6 name="message" size={16} color={darkmode ? white : black} />
                <Text style={{ ...styles.optionsText, color: darkmode ? white : black }}>{cardComments} Comments</Text>
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
