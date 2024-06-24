import { View, Text } from 'react-native'
import React from 'react'
import { black, white } from '../utility/colors';
import Header from '../components/Header';

export default function NewsUploader({ route, navigation }) {
    const { darkmode } = route.params;

    return (
        <View style={{ flex: 1, backgroundColor: darkmode ? black : white }}>
            <Header navigation={navigation} darkmode={darkmode} text={"Uploading"} />
        </View>
    )
}