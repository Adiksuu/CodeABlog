import { View, Text, ScrollView, StyleSheet, Animated } from 'react-native'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import HeaderImage from '../components/HeaderImage'
import { auth, database } from '../database';
import LoginForm from '../components/LoginForm';
import LoggedView from '../components/LoggedView';
import { useFocusEffect } from '@react-navigation/native';
import { black, white } from '../utility/colors';

export default function Profile() {

  const [alreadyLogged, setAlreadyLogged] = useState(false);

  const fadeAnim = useRef(new Animated.Value(0.3)).current;

    useFocusEffect(
        useCallback(() => {
            fadeAnim.setValue(0.3);
            Animated.timing(
                fadeAnim,
                {
                    toValue: 1,
                    duration: 300,
                    useNativeDriver: true
                }
            ).start();
            return () => fadeAnim.setValue(0.3);
        }, [fadeAnim])
    );

  useEffect(() => {
    if (alreadyLogged) return;

    setInterval(() => {
      setAlreadyLogged(auth.currentUser ? true : false);
    }, 1000);
  }, []);

  const [darkmode, setDarkmode] = useState(false)
  useEffect(() => {
    setInterval(async () => {
        if (!auth.currentUser) return

        const snapshot = await database.ref(`users/${auth.currentUser.uid}/`).once('value')
        setDarkmode(snapshot.val().darkmode)

    }, 1000);
}, [])

  return (
    <View style={{ flex: 1, backgroundColor: darkmode ? black : white }}>
      <HeaderImage />
      <Animated.ScrollView style={{...styles.container, opacity: fadeAnim}}>
        {alreadyLogged ? <LoggedView darkmode={darkmode} /> : <LoginForm darkmode={darkmode} />}
      </Animated.ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginBottom: 120
  },
})