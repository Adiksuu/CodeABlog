import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export default function TabIcon({ name, label, focused, iconComponent: Icon }) {
  return (
    <View style={styles.iconParent}>
      <Icon name={name} size={22} color={focused ? "#0f0f0f" : "#bcbcbc"} />
      <Text style={{ fontSize: 14, color: focused ? "#0f0f0f" : "#bcbcbc", fontFamily: 'Nunito_600SemiBold' }}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  iconParent: {
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },
});