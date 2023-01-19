/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import {
  BACKGROUND_COLOR_PRIMARY,
  BACKGROUND_COLOR_SECONDARY,
  FONT_COLOR,
} from '../../utils/colors';

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
    marginTop: 20,
    marginLeft: 10,
    fontFamily: 'Montserrat-Bold',
    fontSize: 20,
    color: 'white',
  },
  dropDownMenu: {
    borderRadius: 10,
    backgroundColor: BACKGROUND_COLOR_PRIMARY,
  },
  dropDownMenuButton: {
    marginTop: 20,
    marginLeft: 10,
    width: windowWidth * 0.3,
    height: WindowHeight * 0.05,
    borderRadius: 10,
    backgroundColor: BACKGROUND_COLOR_SECONDARY,
  },
  dropDownMenuButtonText: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 15,
    color: FONT_COLOR,
  },
});

export default function NoteHeader({onSearchTypeSelect}) {
  const options = ['All', 'Active', 'Archived'];

  return (
    <View style={styles.containerHeader}>
      <Text style={styles.headerTitle}>Notes App</Text>
      <SelectDropdown
        defaultValue={options[0]}
        buttonStyle={styles.dropDownMenuButton}
        buttonTextStyle={styles.dropDownMenuButtonText}
        dropdownStyle={styles.dropDownMenu}
        rowTextStyle={styles.dropDownMenuButtonText}
        data={options}
        onSelect={onSearchTypeSelect}
      />
    </View>
  );
}
