import { View, TouchableOpacity, StyleSheet, Linking, Text } from 'react-native'
import { FontAwesome6 } from '@expo/vector-icons';
import React from 'react'

export default function Socials() {
    const socials = [
        {
            icon: 'github',
            link: 'https://github.com/Adiksuu'
        },
        {
            icon: 'patreon',
            link: 'https://patreon.com/Adiksuu'
        },
        {
            icon: 'globe',
            link: 'https://codeadiksuuweb.netlify.app'
        },
        {
            icon: 'youtube',
            link: 'https://youtube.com/@codeadiksuu'
        },
    ]

    const handleOpenLink = (link) => {
        Linking.openURL(link)
    }

    function Social({ social }) {
        return (
            <TouchableOpacity style={styles.iconCircle} activeOpacity={0.7} onPress={() => handleOpenLink(social.link)}>
                <FontAwesome6 name={social.icon} size={16} color={"#0f0f0f"} />
            </TouchableOpacity>
        )
    }

    return (
        <>
            <Text style={styles.welcomeText}>Check my Socials</Text>
            <Text style={styles.welcomeDescriptionText}>If you are interested in my activities, see also my social media</Text>
            <View style={styles.container}>
                {socials.map((social, i) => <Social social={social} key={i} />)}
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    welcomeText: {
        fontSize: 22,
        fontFamily: 'Poppins_600SemiBold'
    },
    welcomeDescriptionText: {
        fontSize: 16,
        marginTop: 10,
        fontFamily: 'Poppins_400Regular',
        textAlign: "left"
    },
    container: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: 8,
        marginTop: 20
    },
    iconCircle: {
        backgroundColor: '#fff',
        borderRadius: 4,
        width: "100%",
        height: 40,
        alignItems: 'center',
        justifyContent: 'center'
    }
})