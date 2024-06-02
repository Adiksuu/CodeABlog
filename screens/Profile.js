import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import HeaderImage from '../components/HeaderImage'
import { auth } from '../database';
import LoginForm from '../components/LoginForm';
import LoggedView from '../components/LoggedView';

export default function Profile() {

  const [alreadyLogged, setAlreadyLogged] = useState(false);

  useEffect(() => {
    if (alreadyLogged) return;

    setInterval(() => {
      setAlreadyLogged(auth.currentUser ? true : false);
    }, 1000);
  }, []);

  function UserLogin() {
    return (
      <LoginForm />
    )
  }

  return (
    <View style={{ flex: 1 }}>
      <HeaderImage />
      <ScrollView style={styles.container}>
        {alreadyLogged ? <LoggedView /> : <UserLogin />}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginBottom: 240
  },
})