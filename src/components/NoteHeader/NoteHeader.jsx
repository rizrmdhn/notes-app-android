/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
import {StyleSheet, Text, View, Dimensions, TextInput} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';
import {
  BACKGROUND_COLOR_PRIMARY,
  BACKGROUND_COLOR_SECONDARY,
  FONT_COLOR,
  FONT_MUTED,
} from '../../utils/colors';
import {searchNotes} from '../../redux/listsSlice';

const windowWidth = Dimensions.get('window').width;
const WindowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  containerHeader: {
    width: windowWidth,
    height: WindowHeight * 0.08,
    backgroundColor: BACKGROUND_COLOR_PRIMARY,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerTitle: {
    marginTop: 10,
    marginLeft: 10,
    fontFamily: 'Montserrat-Bold',
    fontSize: 25,
    color: 'white',
  },
  searchNotes: {
    marginTop: 10,
    marginRight: 20,
    width: windowWidth * 0.4,
    height: WindowHeight * 0.06,
    backgroundColor: BACKGROUND_COLOR_SECONDARY,
    borderRadius: 10,
    color: FONT_COLOR,
    paddingLeft: 10,
  },
});

export default function NoteHeader() {
  const dispatch = useDispatch();

  const searchNotesDatas = text => {
    dispatch(
      searchNotes({
        searchText: text,
      }),
    );
  };

  return (
    <View style={styles.containerHeader}>
      <Text style={styles.headerTitle}>Notes App</Text>
      <TextInput
        style={styles.searchNotes}
        onChangeText={searchNotesDatas}
        placeholderTextColor={FONT_MUTED}
        placeholder="Search Notes ..."
      />
    </View>
  );
}
