import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { black, pureBlack, pureWhite, white } from '../utility/colors'
import { database } from '../database'

export default function UploadingForm({ darkmode }) {
    const [header, setHeader] = useState('')
    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('')
    const [icon, setIcon] = useState('')

    const handlePost = async () => {
        const date = new Date()

        const data = {
            header: header,
            title: title,
            date: `${date.getDate().toString().padStart(2, '0')}.${(date.getMonth() + 1).toString().padStart(2, '0')}.${date.getFullYear()}`,
            category: category,
            icon: icon
        }

        const count = (await database.ref(`news/`).once('value')).numChildren()

        await database.ref(`news/${count + 1}`).set(data)
        setHeader('')
        setTitle('')
        setCategory('')
        setIcon('')
    }

    return (
        <View>
            <View style={styles.textContainer}>
                <Text style={{ ...styles.welcomeText, color: darkmode ? pureWhite : pureBlack }}>Upload the news</Text>
                <Text style={styles.descriptionText}>Complete the form below and submit to send it</Text>
            </View>
            <View style={{ ...styles.form, backgroundColor: darkmode ? pureBlack : pureWhite }}>
                <View style={styles.inputView}>
                    <Text style={{ ...styles.inputText, color: darkmode ? pureWhite : pureBlack }}>Header:</Text>
                    <TextInput placeholder='News header...' placeholderTextColor={darkmode ? pureWhite : pureBlack} value={header} onChangeText={(e) => { setHeader(e) }} style={{ ...styles.input, backgroundColor: darkmode ? black : white, color: darkmode ? pureWhite : pureBlack }} />
                </View>
                <View style={styles.inputView}>
                    <Text style={{ ...styles.inputText, color: darkmode ? pureWhite : pureBlack }}>Title:</Text>
                    <TextInput placeholder='News title...' placeholderTextColor={darkmode ? pureWhite : pureBlack} value={title} onChangeText={(e) => { setTitle(e) }} style={{ ...styles.input, backgroundColor: darkmode ? black : white, color: darkmode ? pureWhite : pureBlack }} />
                </View>
                <View style={styles.inputView}>
                    <Text style={{ ...styles.inputText, color: darkmode ? pureWhite : pureBlack }}>Category:</Text>
                    <TextInput placeholder='News category...' placeholderTextColor={darkmode ? pureWhite : pureBlack} value={category} onChangeText={(e) => { setCategory(e) }} style={{ ...styles.input, backgroundColor: darkmode ? black : white, color: darkmode ? pureWhite : pureBlack }} />
                </View>
                <View style={styles.inputView}>
                    <Text style={{ ...styles.inputText, color: darkmode ? pureWhite : pureBlack }}>Icon:</Text>
                    <TextInput placeholder='News icon...' placeholderTextColor={darkmode ? pureWhite : pureBlack} value={icon} onChangeText={(e) => { setIcon(e) }} style={{ ...styles.input, backgroundColor: darkmode ? black : white, color: darkmode ? pureWhite : pureBlack }} />
                </View>
                <View style={styles.inputView}>
                    <TouchableOpacity style={{ ...styles.inputButton, backgroundColor: darkmode ? black : white }} activeOpacity={0.7} onPress={() => handlePost()}>
                        <Text style={{ ...styles.inputButtonText, color: darkmode ? pureWhite : pureBlack }}>SEND</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    textContainer: {
        alignItems: "left",
        paddingVertical: 20
    },
    welcomeText: {
        fontSize: 22,
        fontFamily: 'Poppins_600SemiBold'
    },
    descriptionText: {
        fontSize: 16,
        marginTop: 10,
        fontFamily: 'Poppins_400Regular',
        textAlign: "left",
        color: '#7d7d7d'
    },
    form: {
        padding: 16,
        borderRadius: 8,
        flexDirection: 'column',
        gap: 8
    },
    inputView: {
        gap: 4
    },
    inputText: {
        fontFamily: 'Poppins_500Medium'
    },
    input: {
        borderRadius: 4,
        paddingHorizontal: 12,
        paddingVertical: 4,
        fontFamily: 'Poppins_400Regular',
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputButton: {
        borderRadius: 4,
        padding: 8,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputButtonText: {
        fontSize: 14,
        fontFamily: 'Nunito_600SemiBold'
    },
})