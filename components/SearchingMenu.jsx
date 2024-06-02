import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';
import React from 'react'

export default function SearchingMenu({ searchCard, setSearchCard }) {
    return (
        <View style={styles.container}>
            <TextInput placeholder='Search project...' value={searchCard} onChangeText={(e) => setSearchCard(e)} style={styles.input}  />
            <TouchableOpacity style={styles.iconCircle} activeOpacity={1}>
                <FontAwesome5 name="search" size={16} color="#666" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        marginBottom: 8,
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        flex: 1,
        width: "100%",
        height: 50,
        backgroundColor: '#fff',
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        paddingHorizontal: 16,
        fontFamily: 'Poppins_500Medium',
        color: "#0f0f0f"
    },
    iconCircle: {
        backgroundColor: '#fff',
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    }
})