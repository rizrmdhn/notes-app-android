/* eslint-disable react/prop-types */
import {StyleSheet, View, ScrollView} from 'react-native';
import React from 'react';
import NoteItem from './NoteItem';
import EmptyNote from '../EmptyNote/EmptyNote';

const styles = StyleSheet.create({
  NoteContainer: {
    flex: 1,
    overflow: 'scroll',
    marginTop: 10,
    marginBottom: 10,
  },
});

export default function NoteContainer({lists}) {
  return (
    <ScrollView>
      {lists.length !== 0 ? (
        <View style={styles.NoteContainer}>
          {lists.map(list => (
            <NoteItem
              key={list.id}
              id={list.id}
              lists={list}
              title={list.title}
              createdAt={list.createdAt}
              body={list.body}
              archived={list.archived}
            />
          ))}
        </View>
      ) : (
        <EmptyNote />
      )}
    </ScrollView>
  );
}
