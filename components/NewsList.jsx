import React from 'react'
import NewsNote from './NewsNote'
import { StyleSheet, View } from 'react-native'

export default function NewsList({ darkmode }) {
  const notes = [
    {
      header: 'Pre-release versions',
      title: 'Some functionalities may be slightly changed after the full version is released. This is a version that is not fully developed and may contain errors, please let us know',
      date: '14.06.2024',
      category: 'Information',
      icon: 'circle-info'
    },
    {
      header: 'Update v1.1.0',
      title: 'The application will soon leave the test phase (BETA), I am currently working on a new version of the application (v1.1.0), for which you will be able to receive a pre-release version within a few days.',
      date: '13.06.2024',
      category: 'New update',
      icon: 'chart-line'
    },
  ]

  return (
    <View style={styles.container}>
      {notes.map((note, key) => <NewsNote key={key} card={note} darkmode={darkmode} />)}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    gap: 16,
    marginHorizontal: 4
  }
})