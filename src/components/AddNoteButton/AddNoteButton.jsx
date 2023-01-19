import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {IconAdd} from '../../assets';
import {BACKGROUND_COLOR_PRIMARY} from '../../utils/colors';


const styles = StyleSheet.create({
  addNoteButton: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: BACKGROUND_COLOR_PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 80,
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
