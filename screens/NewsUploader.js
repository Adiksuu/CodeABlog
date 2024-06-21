import { View, Text } from 'react-native'
import React from 'react'

export default function NewsUploader({ route, navigation }) {
    const { darkmode } = route.params;

    return (
        <View>
            <Text>NewsUploader</Text>
        </View>
    )
}