import { View, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Picker } from '@react-native-picker/picker';
// import { auth } from '../database';
import { pureBlack, pureWhite } from '../utility/colors';

export default function SortingMenu({ sortOption, setSortOption, darkmode }) {
    // const [alreadyLogged, setAlreadyLogged] = useState(false);

    // useEffect(() => {
    //     if (alreadyLogged) return;

    //     setInterval(() => {
    //         setAlreadyLogged(auth.currentUser ? true : false);
    //     }, 1000);
    // }, []);

    return (
        <View style={styles.pickerContainer}>
            <Picker
                selectedValue={sortOption}
                onValueChange={(itemValue) => setSortOption(itemValue)}
                style={{...styles.picker, backgroundColor: darkmode ? pureBlack : pureWhite, color: darkmode ? pureWhite : pureBlack}}
            >
                <Picker.Item label="A-Z" value="abc" />
                <Picker.Item label="Modification date" value="updated" />
                {/* {alreadyLogged ? <Picker.Item label="Most liked" value="liked" /> : null} */}
            </Picker>
        </View>
    )
}

const styles = StyleSheet.create({
    pickerContainer: {
        width: "100%",
        height: 50,
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
    },
});