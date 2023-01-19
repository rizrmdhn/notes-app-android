import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import {IconEmptyNote} from '../../assets';
import {BACKGROUND_COLOR_PRIMARY, FONT_COLOR} from '../../utils/colors';

const windowWidth = Dimensions.get('window').width;
const WindowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  emptyNoteContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: BACKGROUND_COLOR_PRIMARY,
    width: windowWidth,
    height: WindowHeight * 0.8,
  },
  emptyNoteSubTitle: {
    marginTop: 16,
  },
  emptyNoteSubTitleText: {
    fontFamily: 'Roboto',
    fontSize: 20,
    color: FONT_COLOR,
    textAlign: 'center',
  },
});

export default function EmptyNote() {
  return (
    <View style={styles.emptyNoteContainer}>
      <IconEmptyNote width={64} height={64} fillColor={FONT_COLOR} />
      <View style={styles.emptyNoteSubTitle}>
        <Text style={styles.emptyNoteSubTitleText}>Note is empty.</Text>
        <Text style={styles.emptyNoteSubTitleText}>Please add new Note or Archive a Note.</Text>
      </View>
    </View>
  );
}
