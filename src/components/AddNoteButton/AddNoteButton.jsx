import {StyleSheet, View, TouchableOpacity, Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {IconAdd} from '../../assets';
import {BACKGROUND_COLOR_PRIMARY} from '../../utils/colors';

const windowWidth = Dimensions.get('window').width;
const WindowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  addNoteButton: {
    width: windowWidth * 0.1,
    height: WindowHeight * 0.06,
    borderRadius: 50,
    backgroundColor: BACKGROUND_COLOR_PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    right: 20,
    borderWidth: 2,
    borderColor: 'white',
  },
});

export default function AddNoteButton() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('AddNewNote')}>
      <View style={styles.addNoteButton}>
        <IconAdd />
      </View>
    </TouchableOpacity>
  );
}
