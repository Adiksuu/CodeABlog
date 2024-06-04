import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CardOptions from "./CardOptions";
import { auth } from "../database";
import { pureBlack, pureWhite } from "../utility/colors";

export default function Card({ item, darkmode }) {
  const navigation = useNavigation();

  const handleOpenLink = () => {
    navigation.navigate("Cards", { card: item });
  };

  const [alreadyLogged, setAlreadyLogged] = useState(false);

  useEffect(() => {
    if (alreadyLogged) return;

    setInterval(() => {
      setAlreadyLogged(auth.currentUser ? true : false);
    }, 1000);
  }, []);

  return (
    <View style={{...styles.itemContainer, backgroundColor: darkmode ? pureBlack : pureWhite}}>
      <View style={[styles.statusIndicator, { backgroundColor: item.color }]} />
      <View style={styles.contentContainer}>
        <TouchableOpacity onPress={handleOpenLink} activeOpacity={0.5}>
          <Text style={{...styles.title, color: darkmode ? pureWhite : pureBlack}}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
          <Text style={styles.updated}>Modified: {item.updated}</Text>
        </TouchableOpacity>
        {alreadyLogged ? <CardOptions item={item} darkmode={darkmode} /> : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    marginVertical: 8,
    padding: 16,
    borderRadius: 8,
  },
  statusIndicator: {
    width: 10,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
  },
  contentContainer: {
    flex: 1,
    paddingLeft: 16,
  },
  title: {
    fontSize: 16,
    fontFamily: "Poppins_600SemiBold",
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: "#7d7d7d",
    fontWeight: "600",
    marginBottom: 12,
  },
  updated: {
    fontSize: 12,
    color: "#7d7d7d",
    fontFamily: "Nunito_700Bold",
  },
});
