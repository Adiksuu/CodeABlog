import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Picker } from '@react-native-picker/picker'
import { auth, database } from '../database'
import { black, pureBlack, pureWhite, white } from '../utility/colors'

export default function Settings({ darkmode, setDarkmode }) {
    const handleChangeTheme = async (itemValue) => {
        const isDarkmode = itemValue === 'dark' ? true : false
        await database.ref(`users/${auth.currentUser.uid}`).update({ 'darkmode': isDarkmode })
        setDarkmode(isDarkmode)
    }

    return (
        <>
            <View style={{...styles.settings, backgroundColor: darkmode ? pureBlack : pureWhite}}>
                <View style={styles.textContainer}>
                    <Text style={{ ...styles.welcomeText, color: darkmode ? pureWhite : pureBlack }}>Change app theme:</Text>
                </View>
                <View style={styles.pickerContainer}>
                    <Picker
                        selectedValue={darkmode ? "dark" : "light"}
                        onValueChange={(itemValue) => handleChangeTheme(itemValue)}
                        style={{ ...styles.picker, backgroundColor: darkmode ? black : white, color: darkmode ? pureWhite : pureBlack }}
                    >
                        <Picker.Item label="Lightmode" value="light" />
                        <Picker.Item label="Darkmode" value="dark" />
                    </Picker>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    settings: {
        borderRadius: 4,
        padding: 16,
        marginBottom: 24
    },
    textContainer: {
        alignItems: "left",
    },
    welcomeText: {
        fontSize: 15,
        fontFamily: 'Poppins_600SemiBold'
    },
    pickerContainer: {
        width: "100%",
        height: 50,
        borderRadius: 8,
        overflow: 'hidden',
        marginVertical: 16
    },
    picker: {
        width: "100%",
        height: "100%",
    },
})