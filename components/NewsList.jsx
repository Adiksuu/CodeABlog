import React from 'react'
import NewsNote from './NewsNote'

export default function NewsList({ darkmode }) {
  const notes = [
    {
      header: 'Update v1.1.0',
      title: 'The application will soon leave the test phase (BETA), I am currently working on a new version of the application (v1.1.0), for which you will be able to receive a pre-release version within a few days. Below is an (incomplete) record of everything changed in v1.1.0',
      date: '13.06.2024',
      category: 'New update',
      icon: 'chart-line'
    }
  ]

  return (
    <>
      {notes.map((note, key) => <NewsNote key={key} card={note} darkmode={darkmode} />)}
    </>
  )
}