import { View, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import { black, white } from '../utility/colors';
import Header from '../components/Header';
import UploadingForm from '../components/UploadingForm';

export default function NewsUploader({ route, navigation }) {
    const { darkmode } = route.params;

    return (
        <View style={{ flex: 1, backgroundColor: darkmode ? black : white }}>
            <Header navigation={navigation} darkmode={darkmode} text={"Uploading"} />
            <ScrollView style={styles.content}>
                <UploadingForm darkmode={darkmode} />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        padding: 20,
        marginBottom: 120
    },
})