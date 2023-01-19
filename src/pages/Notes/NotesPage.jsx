/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable import/no-extraneous-dependencies */
import {StyleSheet, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {BACKGROUND_COLOR_PRIMARY, BORDER_COLOR} from '../../utils/colors';
import AddNoteButton from '../../components/AddNoteButton/AddNoteButton';
import NoteHeader from '../../components/NoteHeader/NoteHeader';
import NoteActive from '../NotesCondition/NoteActive';
import NoteArchived from '../NotesCondition/NoteArchived';
import BottomTabNavigator from '../../components/BottomTabNavigator/BottomTabNavigator';

const styles = StyleSheet.create({
  notesPage: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR_PRIMARY,
    overflow: 'scroll',
  },
});

const Tab = createBottomTabNavigator();

export default function NotesPage() {
  return (
    <View style={styles.notesPage}>
      <NoteHeader />
      <Tab.Navigator
        tabBar={props => <BottomTabNavigator {...props} />}
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            borderTopColor: BORDER_COLOR,
            backgroundColor: BACKGROUND_COLOR_PRIMARY,
          },
        }}>
        <Tab.Screen name="Active" component={NoteActive} />
        <Tab.Screen name="Archive" component={NoteArchived} />
      </Tab.Navigator>
      <AddNoteButton />
    </View>
  );
}
