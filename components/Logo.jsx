import { View, StyleSheet, Image } from 'react-native'
import React from 'react'

export default function Logo() {
    return (
        <View style={styles.images}>
            <Image source={require('../assets/logo.png')} style={styles.image} />
        </View>
    )
}

const styles = StyleSheet.create({
    images: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 9999
    },
})