import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { pureBlack, pureWhite } from '../utility/colors'

export default function Selector({ darkmode, setSelectedView, selectedView }) {
    const handleChangeView = (view) => {
        setSelectedView(view)
    }

    const selection = [
        {
            name: 'Projects'
        },
        {
            name: 'News'
        }
    ]

    return (
        <View style={styles.container}>
            <TouchableOpacity style={{...styles.box, ...styles.box_1, backgroundColor: darkmode ? pureBlack : pureWhite}} onPress={() => handleChangeView(selection[0].name)} activeOpacity={0.7}>
                <Text style={{...styles.boxText, color: selectedView === selection[0].name ? "#1da1e8" : darkmode ? pureWhite : pureBlack}}>{selection[0].name}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{...styles.box, ...styles.box_2, backgroundColor: darkmode ? pureBlack : pureWhite}} onPress={() => handleChangeView(selection[1].name)} activeOpacity={0.7}>
                <Text style={{...styles.boxText, color: selectedView === selection[1].name ? "#1da1e8" : darkmode ? pureWhite : pureBlack}}>{selection[1].name}</Text>
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
    box: {
        gap: 8,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        height: 50,
        width: '50%'
    },
    box_1: {
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
    },
    box_2: {
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
    },
    boxText: {
        fontSize: 14,
        fontFamily: 'Poppins_500Medium',
    }
})