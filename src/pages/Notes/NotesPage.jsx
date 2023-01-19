/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable no-multi-assign */
/* eslint-disable react/no-unused-state */
/* eslint-disable no-param-reassign */
/* eslint-disable no-useless-return */
/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable react/prop-types */
/* eslint-disable no-else-return */
/* eslint-disable react/destructuring-assignment */
import {StyleSheet, View} from 'react-native';
import React, {Component} from 'react';
import {getInitialData} from '../../utils/notesData';
import NoteContainer from '../../components/NoteContainer/NoteContainer';
import {BACKGROUND_COLOR_PRIMARY} from '../../utils/colors';
import AddNoteButton from '../../components/AddNoteButton/AddNoteButton';
import NoteHeader from '../../components/NoteHeader/NoteHeader';

const styles = StyleSheet.create({
  notesPage: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR_PRIMARY,
    overflow: 'scroll',
  },
});

export default class NotesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: getInitialData(),
      unFilteredLists: getInitialData(),
    };

    this.onSearchTypeSelect = this.onSearchTypeSelect.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.route.params?.addData !== this.props.route.params?.addData) {
      if (
        this.props.route?.params?.addData === null ||
        this.props.route?.params?.addData === undefined
      ) {
        return;
      } else {
        const {title, body} = this.props.route.params?.addData;
        const {lists} = this.state;
        const {unFilteredLists} = this.state;
        const newNote = {
          id: +new Date(),
          title,
          body,
          createdAt: Date.now(),
          archived: false,
        };
        this.setState({
          lists: [...lists, newNote],
          unFilteredLists: [...unFilteredLists, newNote],
        });
      }
    }

    if (
      prevProps.route.params?.setThisIdToArchived !==
      this.props.route.params?.setThisIdToArchived
    ) {
      if (
        this.props.route?.params?.setThisIdToArchived === null ||
        this.props.route?.params?.setThisIdToArchived === undefined
      ) {
        return;
      } else {
        const {lists} = this.state;
        const {unFilteredLists} = this.state;
        const {setThisIdToArchived} = this.props.route.params;
        const newLists = lists.map(list => {
          if (list.id === setThisIdToArchived) {
            list.archived = true;
          }
          return list;
        });
        const newUnFilteredLists = unFilteredLists.map(list => {
          if (list.id === setThisIdToArchived) {
            list.archived = true;
          }
          return list;
        });
        this.setState({
          lists: newLists,
          unFilteredLists: newUnFilteredLists,
        });
      }
    }

    if (
      prevProps.route.params?.setThisIdToDelete !==
      this.props.route.params?.setThisIdToDelete
    ) {
      if (
        this.props.route?.params?.setThisIdToDelete === null ||
        this.props.route?.params?.setThisIdToDelete === undefined
      ) {
        return;
      } else {
        const {lists} = this.state;
        const {unFilteredLists} = this.state;
        const {setThisIdToDelete} = this.props.route.params;
        const newLists = lists.filter(list => list.id !== setThisIdToDelete);
        const newUnFilteredLists = unFilteredLists.filter(
          list => list.id !== setThisIdToDelete,
        );
        this.setState({
          lists: newLists,
          unFilteredLists: newUnFilteredLists,
        });
      }
    }
  }

  onSearchTypeSelect = searchType => {
    const {unFilteredLists} = this.state;
    const defaultValue = (this.state.lists = this.state.unFilteredLists);
    if (searchType === 'All') {
      this.setState({
        lists: defaultValue,
      });
    } else if (searchType === 'Archived') {
      const archivedLists = unFilteredLists.filter(
        list => list.archived === true,
      );
      this.setState({
        lists: archivedLists,
      });
    } else if (searchType === 'Active') {
      this.setState({
        lists: defaultValue,
      });
      const unarchivedLists = unFilteredLists.filter(
        list => list.archived === false,
      );
      // console.log(unarchivedLists);
      this.setState({
        lists: unarchivedLists,
      });
    }
  };

  render() {
    return (
      <View style={styles.notesPage}>
        <NoteHeader onSearchTypeSelect={this.onSearchTypeSelect} />
        <NoteContainer lists={this.state.lists} />
        <AddNoteButton />
      </View>
    );
  }
}
