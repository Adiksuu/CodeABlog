import { View, Text, ScrollView, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../components/Header';
import { auth, database } from '../database';
import { black, pureBlack, pureWhite, white } from '../utility/colors';
import { FontAwesome5 } from '@expo/vector-icons';
import Comment from '../components/Comment';
import NoCommentsFound from '../components/NoCommentsFound';

export default function Comments({ route, navigation }) {
  const { id } = route.params;

  const [darkmode, setDarkmode] = useState(false)

  useEffect(() => {
    setInterval(async () => {
      if (!auth.currentUser) return

      const snapshot = await database.ref(`users/${auth.currentUser.uid}/`).once('value')
      setDarkmode(snapshot.val().darkmode)

    }, 100);
  }, [])

  const [commentText, setCommentText] = useState('')

  const [comments, setComments] = useState([])

  useEffect(() => {
    const commentsRef = database.ref(`projects/${id}/comments/`);
    commentsRef.on('value', (snapshot) => {
      if (!snapshot.exists) return
      const commentsArray = [];
      snapshot.forEach((childSnapshot) => {
        const comment = {
          name: childSnapshot.val().name,
          text: childSnapshot.val().text,
          date: childSnapshot.val().date
        };
        commentsArray.push(comment);
      });
      setComments(commentsArray);
    });
  }, [id]);

  const handleCreateComment = async (text) => {
    if (text.trim() == '') return

    const date = new Date()

    const data = {
      name: auth.currentUser.email,
      text: text,
      date: `${date.getDate().toString().padStart(2, '0')}.${(date.getMonth() + 1).toString().padStart(2, '0')}.${date.getFullYear()}`
    }

    await database.ref(`projects/${id}/comments/comment_${Math.floor(Math.random() * 999999)}`).set(data)
    setCommentText('')
  }

  return (
    <View style={{ flex: 1, backgroundColor: darkmode ? black : white }}>
      <Header navigation={navigation} darkmode={darkmode} text={"Comments"} />
      <ScrollView style={styles.content}>
        <View style={styles.comments}>{comments.length > 0 ? comments.map((card, key) => <Comment key={key} card={card} darkmode={darkmode} />) : <NoCommentsFound darkmode={darkmode} />}</View>
      </ScrollView>
      <View style={{ ...styles.inputView, backgroundColor: darkmode ? black : white }}>
        <TextInput placeholder='Create comment' placeholderTextColor={darkmode ? pureWhite : pureBlack} value={commentText} onChangeText={(e) => setCommentText(e)} style={{ ...styles.input, backgroundColor: darkmode ? pureBlack : pureWhite, color: darkmode ? white : black }} />
        <TouchableOpacity style={{ ...styles.iconCircle, backgroundColor: darkmode ? pureBlack : pureWhite }} activeOpacity={1} onPress={() => handleCreateComment(commentText)}>
          <FontAwesome5 name="plus" size={16} color={darkmode ? pureWhite : pureBlack} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    padding: 20
  },
  comments: {
    flexDirection: 'column',
    gap: 4,
    marginBottom: 20
  },
  inputView: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    paddingTop: 20
  },
  iconCircle: {
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    flex: 1,
    width: "100%",
    height: 50,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
    paddingHorizontal: 16,
    fontFamily: 'Poppins_500Medium',
    backgroundColor: white,
    marginBottom: 120
  },
})