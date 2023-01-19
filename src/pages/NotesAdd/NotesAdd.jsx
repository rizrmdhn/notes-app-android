/* eslint-disable react/prop-types */
import { StyleSheet, View } from 'react-native'
import {useNavigation} from '@react-navigation/native';
import React from 'react'
import { BACKGROUND_COLOR_PRIMARY } from '../../utils/colors'
import AddNewNote from '../../components/AddNewNote/AddNewNote'

const styles = StyleSheet.create({
    notesAddContainer: {
        flex: 1,
        overflow: 'scroll',
        backgroundColor: BACKGROUND_COLOR_PRIMARY,
    },
})

export default function NotesAdd({addnote}) {
    const navigation = useNavigation()
  return (
    <View style={styles.notesAddContainer}>
      <AddNewNote addnote={addnote} navigation={navigation} />
    </View>
  )
}

