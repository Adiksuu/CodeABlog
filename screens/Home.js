import { View, Text, StyleSheet, ScrollView, Animated } from 'react-native';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import HeaderImage from '../components/HeaderImage';
import CardList from '../components/CardList';
import Socials from '../components/Socials';
import { useFocusEffect } from '@react-navigation/native';
import { black, pureBlack, pureWhite, white } from '../utility/colors';
import { auth, database } from '../database';

export default function Home() {
    const fadeAnim = useRef(new Animated.Value(0.3)).current;

    useFocusEffect(
        useCallback(() => {
            fadeAnim.setValue(0.3);
            Animated.timing(
                fadeAnim,
                {
                    toValue: 1,
                    duration: 300,
                    useNativeDriver: true
                }
            ).start();
            return () => fadeAnim.setValue(0.3);
        }, [fadeAnim])
    );

    const [alreadyLogged, setAlreadyLogged] = useState(false);
    const [darkmode, setDarkmode] = useState(false)

    useEffect(() => {
        setInterval(async () => {
            if (!auth.currentUser) return

            const snapshot = await database.ref(`users/${auth.currentUser.uid}/`).once('value')
            setDarkmode(snapshot.val().darkmode)

        }, 1000);
    }, [])

    useEffect(() => {
        if (alreadyLogged) return;

        setInterval(() => {
            setAlreadyLogged(auth.currentUser ? true : false);
        }, 1000);
    }, []);

    return (
        <View style={{ flex: 1, backgroundColor: darkmode ? black : white }}>
            <HeaderImage />
            <Animated.ScrollView style={{ ...styles.container, opacity: fadeAnim }}>
                <View style={styles.textContainer}>
                    <Text style={{...styles.welcomeText, color: darkmode ? pureWhite : pureBlack}}>Explore the World of my Projects!</Text>
                    <Text style={styles.descriptionText}>Browse the my featured projects, you can learn more about them on my github page, click the project box to open the specific project website</Text>
                </View>
                <CardList darkmode={darkmode} />
                <View style={styles.textContainer}>
                    <Socials darkmode={darkmode} />
                </View>
            </Animated.ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    welcomeText: {
        fontSize: 22,
        fontFamily: 'Poppins_600SemiBold',
    },
    descriptionText: {
        fontSize: 16,
        marginTop: 10,
        fontFamily: 'Poppins_400Regular',
        textAlign: "left",
        color: "#7d7d7d"
    },
    container: {
        flex: 1,
        marginBottom: 120,
    },
    textContainer: {
        alignItems: "left",
        padding: 20
    },
});
