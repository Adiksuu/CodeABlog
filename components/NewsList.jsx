import React, { useEffect, useState } from 'react'
import NewsNote from './NewsNote'
import { StyleSheet, View } from 'react-native'
import { database } from '../database';

export default function NewsList({ darkmode }) {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    if (notes.length != 0) return

    const notesRef = database.ref(`news/`);
    notesRef.on('value', (snapshot) => {
      if (!snapshot.exists) return
      const notesArray = [];
      snapshot.forEach((childSnapshot) => {
        const note = {
          header: childSnapshot.val().header,
          title: childSnapshot.val().title,
          date: childSnapshot.val().date,
          category: childSnapshot.val().category,
          icon: childSnapshot.val().icon,
        };
        notesArray.push(note);
      });
      setNotes(notesArray);
    });
  });

  return (
    <View style={styles.container}>
      {notes.reverse().map((note, key) => <NewsNote key={key} card={note} darkmode={darkmode} />)}
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