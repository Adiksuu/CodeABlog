import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

export default function Header({ navigation }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.circleIcon} activeOpacity={0.7}>
                <Ionicons name="arrow-back" size={20} color="black" />
            </TouchableOpacity>
            <Text style={styles.text}>Project Info</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 24,
        paddingVertical: 16,
        backgroundColor: "#fff",
        height: 100
    },
    circleIcon: {
        backgroundColor: "#f3f3f3",
        height: 35,
        width: 35,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 999
    },
    text: {
        color: "#0f0f0f",
        fontSize: 18,
        fontFamily: 'Nunito_600SemiBold'
    }
})