import {StyleSheet, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import NoteContainer from '../../components/NoteContainer/NoteContainer';
import {BACKGROUND_COLOR_PRIMARY} from '../../utils/colors';

const styles = StyleSheet.create({
  noteActiveContainer: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR_PRIMARY,
  },
});

export default function NoteActive() {
  const [lists, setLists] = useState([]);

  const listNote = useSelector(state => state.data.lists);

  useEffect(() => {
    setLists(listNote);
  }, [listNote]);

  const activeNotes = lists.filter(note => note.archived === false);

  return (
    <View style={styles.noteActiveContainer}>
      <NoteContainer lists={activeNotes} />
    </View>
  );
}
