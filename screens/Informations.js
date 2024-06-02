import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import HeaderImage from '../components/HeaderImage'
import Socials from '../components/Socials'
import Logo from '../components/Logo'
import SponsorButton from '../components/SponsorButton'

export default function Informations() {
    return (
        <View>
            <HeaderImage />
            <ScrollView style={styles.container}>
                <Logo />
                <View>
                    <Text style={styles.authorText}>CodeAdiksuu</Text>
                    <View style={[styles.statusIndicator]} />
                </View>
                <SponsorButton />
                <View style={styles.description}>
                    <Text style={styles.descriptionText}>I specialize in web development using various technologies. For example, this website was created with React.js, a popular JavaScript library for building user interfaces known for its component-based architecture and virtual DOM. My name is Kacper, better known online as CodeAdiksuu. I come from Poland and create websites using technologies like React.js and Node.js. If you need a website and lack the skills to create one, feel free to reach out, and we can work something out :D</Text>
                </View>
                <View>
                    <Socials />
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        marginBottom: 240
    },
    authorText: {
        textAlign: "center",
        marginVertical: 10,
        fontSize: 20,
        fontFamily: 'Poppins_600SemiBold'
    },
    description: {
        marginVertical: 10
    },
    descriptionText: {
        fontSize: 16,
        color: "#0f0f0f",
        backgroundColor: "#fff",
        padding: 16,
        fontFamily: 'Poppins_400Regular',
    },
    statusIndicator: {
        width: "100%",
        height: 12,
        borderRadius: 9999,
        marginBottom: 24,
        backgroundColor: "#1da1e8"
    },
})