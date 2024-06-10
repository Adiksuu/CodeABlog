import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';
import React from 'react'
import { pureBlack, pureWhite } from '../utility/colors';

export default function SearchingMenu({ searchCard, setSearchCard, darkmode }) {
    return (
        <View style={styles.container}>
            <TextInput placeholder='Search project...' value={searchCard} placeholderTextColor={darkmode ? pureWhite : pureBlack} onChangeText={(e) => setSearchCard(e)} style={{...styles.input, backgroundColor: darkmode ? pureBlack : pureWhite, color: darkmode ? pureWhite : pureBlack }}  />
            <TouchableOpacity style={{...styles.iconCircle, backgroundColor: darkmode ? pureBlack : pureWhite}} activeOpacity={1}>
                <FontAwesome5 name="search" size={16} color={darkmode ? pureWhite : pureBlack} />
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
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        paddingHorizontal: 16,
        fontFamily: 'Poppins_500Medium',
    },
    iconCircle: {
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