import { View, StyleSheet } from 'react-native'
import React from 'react'
import { Picker } from '@react-native-picker/picker';

export default function SortingMenu({ sortOption, setSortOption }) {
    return (
        <View style={styles.pickerContainer}>
            <Picker
                selectedValue={sortOption}
                onValueChange={(itemValue) => setSortOption(itemValue)}
                style={styles.picker}
            >
                <Picker.Item label="A-Z" value="abc" />
                <Picker.Item label="Modification date" value="updated" />
            </Picker>
        </View>
    )
}

const styles = StyleSheet.create({
    pickerContainer: {
        width: "100%",
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 8,
        overflow: 'hidden',
        marginBottom: 16
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
    },
    picker: {
        width: "100%",
        height: "100%",
        color: "#0f0f0f",
    },
});