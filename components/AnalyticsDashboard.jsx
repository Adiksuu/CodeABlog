import { View, StyleSheet, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import AnalyticsCard from './AnalyticsCard';
import { database } from '../database';

export default function AnalyticsDashboard({ darkmode }) {
    const [totalUsers, setTotalUsers] = useState(0)

    useEffect(() => {
        const fetchData = async () => {
            if (totalUsers !== 0) return;

            const snapshot = await database.ref(`users/`).once('value');
            setTotalUsers(snapshot.numChildren());
        };

        fetchData();
    }, []);

    return (
        <View style={styles.container}>
            <AnalyticsCard darkmode={darkmode} name="Total users" value={totalUsers} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: 8
    },
});
