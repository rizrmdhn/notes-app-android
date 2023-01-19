/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/no-extraneous-dependencies */
import {StyleSheet, View} from 'react-native';
import {Provider} from 'react-redux';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import store from './redux/store';
import {BACKGROUND_COLOR_PRIMARY} from './utils/colors';
import NotesPage from './pages/Notes/NotesPage';
import NoteDetailsPage from './pages/NoteDetails/NoteDetailsPage';
import NotesAdd from './pages/NotesAdd/NotesAdd';

const Stack = createStackNavigator();

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR_PRIMARY,
    overflow: 'scroll',
  },
});

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.appContainer}>
        <Provider store={store}>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen
                name="NotesPage"
                component={NotesPage}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="NoteDetails"
                component={NoteDetailsPage}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="AddNewNote"
                component={NotesAdd}
                options={{headerShown: false}}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </Provider>
      </View>
    </SafeAreaProvider>
  );
}
