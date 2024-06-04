import { View, StyleSheet, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../components/Header';
import CardDetails from '../components/CardDetails';
import { black, white } from '../utility/colors';
import { auth, database } from '../database';


export default function Cards({ route, navigation }) {
    const { card } = route.params;

    const [darkmode, setDarkmode] = useState(false)
    useEffect(() => {
        setInterval(async () => {
            if (!auth.currentUser) {
                setDarkmode(false)
                return
            }

            const snapshot = await database.ref(`users/${auth.currentUser.uid}/`).once('value')
            setDarkmode(snapshot.val().darkmode)

        }, 0);
    }, [])

    return (
        <View style={{backgroundColor: darkmode ? black : white}}>
            <Header navigation={navigation} darkmode={darkmode} />
            <ScrollView style={styles.container}>
                <CardDetails card={card} darkmode={darkmode} />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        marginBottom: 220
    },
});