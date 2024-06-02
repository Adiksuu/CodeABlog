import { View, Text, StyleSheet, ScrollView, Animated } from 'react-native';
import React, { useCallback, useRef } from 'react';
import HeaderImage from '../components/HeaderImage';
import CardList from '../components/CardList';
import Socials from '../components/Socials';
import { useFocusEffect } from '@react-navigation/native';

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

    return (
        <View style={{ flex: 1 }}>
            <HeaderImage />
            <Animated.ScrollView style={{...styles.container, opacity: fadeAnim}}>
                <View style={styles.textContainer}>
                    <Text style={styles.welcomeText}>Explore the World of my Projects!</Text>
                    <Text style={styles.descriptionText}>Browse the my featured projects, you can learn more about them on my github page, click the project box to open the specific project website</Text>
                </View>
                <CardList />
                <View style={styles.textContainer}>
                    <Socials />
                </View>
            </Animated.ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    welcomeText: {
        fontSize: 22,
        fontFamily: 'Poppins_600SemiBold'
    },
    descriptionText: {
        fontSize: 16,
        marginTop: 10,
        fontFamily: 'Poppins_400Regular',
        textAlign: "left"
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
