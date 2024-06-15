import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native'
import React, { useEffect, useState } from 'react'
import { black, pureBlack, pureWhite, white } from '../utility/colors'
import { FontAwesome6 } from '@expo/vector-icons'
import { currentVersion } from '../utility/versionCheck'
import { database } from '../database'

export default function NewVersionPopup({ darkmode }) {
    const [latestVersion, setlatestVersion] = useState(currentVersion)

    useEffect(() => {
        const fetchData = async () => {
            const snapshot = await database.ref('app/').once('value');
            setlatestVersion(snapshot.val().latestVersion);
        };
    
        fetchData();
    }, []);

    const handleUpdate = async () => {
        const snapshot = await database.ref('app/').once('value')
        const link = snapshot.val().updateLink

        Linking.openURL(link)
    }

    return (
        <View style={{ ...styles.container, backgroundColor: darkmode ? pureBlack : pureWhite }}>
            <Text style={{ ...styles.text, color: darkmode ? white : black }}>New version is available to download</Text>
            <TouchableOpacity style={{...styles.button, backgroundColor: darkmode ? black : white}} activeOpacity={0.8} onPress={() => handleUpdate()}>
                <FontAwesome6 name="download" size={12} color={darkmode ? white : black} />
                <Text style={{...styles.textButton, color: darkmode ? pureWhite : pureBlack}}>Download</Text>
            </TouchableOpacity>
            <Text style={{ ...styles.text, color: darkmode ? white : black }}>{currentVersion} {"->"} {latestVersion}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 120,
        left: 0,
        right: 0,
        margin: 'auto',
        padding: 16,
        elevation: 2,
        width: '100%',
        // height: 70,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontFamily: 'Nunito_600SemiBold',
        fontSize: 12
    },
    button: {
        flexDirection: 'row',
        gap: 8,
        margin: 8,
        height: 30,
        paddingHorizontal: 16,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textButton: {
        fontFamily: 'Nunito_700Bold',
        fontSize: 12
    }
})