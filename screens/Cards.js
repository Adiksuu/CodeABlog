import { View, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import Header from '../components/Header';
import CardDetails from '../components/CardDetails';


export default function Cards({ route, navigation }) {
    const { card } = route.params;

    return (
        <View>
            <Header navigation={navigation} />
            <ScrollView style={styles.container}>
                <CardDetails card={card} />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        marginBottom: 220
    },
});