/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */
import {
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableOpacity,
  Dimensions,
  TextInput,
  ToastAndroid,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {showFormattedDate} from '../../utils/notesData';
import {
  BACKGROUND_COLOR_PRIMARY,
  BACKGROUND_COLOR_SECONDARY,
  BORDER_COLOR,
  FONT_COLOR,
} from '../../utils/colors';
import {
  IconArchive,
  IconBack,
  IconCalendarMuted,
  IconDelete,
  IconFolderMuted,
  IconVerticalMenu,
} from '../../assets';
import {archiveNote, deleteNote, editNotes} from '../../redux/listsSlice';

const windowWidth = Dimensions.get('window').width;
const WindowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  detailsContainer: {
    flex: 1,
    overflow: 'scroll',
    backgroundColor: BACKGROUND_COLOR_PRIMARY,
  },
  detailsContainerHeader: {
    width: windowWidth * 0.05,
    marginTop: 10,
    marginLeft: 10,
  },
  detailsContainerBody: {
    height: WindowHeight * 1,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 20,
  },
  detailsTitle: {
    marginTop: 10,
    marginLeft: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: 'Montserrat-ExtraBold',
    fontSize: 25,
    color: FONT_COLOR,
  },
  detailsDate: {
    flexDirection: 'row',
    marginTop: 25,
    marginLeft: 10,
    borderBottomColor: BORDER_COLOR,
    borderBottomWidth: 1,
  },
  date: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 15,
    color: FONT_COLOR,
    marginTop: -2,
    marginBottom: 10,
    marginLeft: 25,
    marginRight: 10,
  },
  dateData: {
    fontFamily: 'Montserrat-LightItalic',
    fontSize: 15,
    color: FONT_COLOR,
    marginTop: -2,
    marginBottom: 10,
    marginLeft: 55,
    marginRight: 10,
  },
  detailsBody: {
    height: WindowHeight * 0.5,
    flexWrap: 'wrap',
    marginTop: 25,
    marginLeft: 10,
  },
  body: {
    width: windowWidth * 0.9,
    fontFamily: 'Montserrat-Regular',
    fontSize: 15,
    color: FONT_COLOR,
  },
  detailsLocation: {
    flexDirection: 'row',
    marginTop: 25,
    marginLeft: 10,
    borderBottomColor: BORDER_COLOR,
    borderBottomWidth: 1,
  },
  location: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 15,
    color: FONT_COLOR,
    marginTop: -2,
    marginLeft: 25,
    marginBottom: 10,
    marginRight: 10,
  },
  locationText: {
    fontFamily: 'Montserrat-LightItalic',
    fontSize: 15,
    color: FONT_COLOR,
    marginTop: -2,
    marginLeft: 25,
    marginBottom: 10,
    marginRight: 10,
  },
  dropDownMenu: {
    position: 'absolute',
    top: 30,
    left: -120,
    width: windowWidth * 0.35,
    backgroundColor: '#333333',
    borderRadius: 10,
  },
  dropDownMenuOption1: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  dropDownMenuOption1Text: {
    marginLeft: 20,
    fontFamily: 'Montserrat-Regular',
    fontSize: 15,
    color: FONT_COLOR,
  },
  dropDownMenuOption2: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  dropDownMenuOption2Text: {
    marginLeft: 20,
    fontFamily: 'Montserrat-Regular',
    fontSize: 15,
    color: FONT_COLOR,
  },
  editData: {
    marginTop: 20,
    width: windowWidth * 0.4,
    height: WindowHeight * 0.05,
    alignSelf: 'flex-end',
    backgroundColor: BACKGROUND_COLOR_SECONDARY,
  },
  editDataText: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 15,
    color: FONT_COLOR,
    alignSelf: 'center',
    marginTop: 5,
  },
});

export default function NoteDetailsPage() {
  // for storing the data of the note
  const [notesData, setNotesData] = useState([]);
  const [body, setBody] = useState('');

  // for storing the data of the note
  const viewData = useSelector(state => state.data.viewData);
  useEffect(() => {
    setNotesData(viewData);
    setBody(viewData.body);
  }, [viewData]);

  const dispatch = useDispatch();
  const navigation = useNavigation();

  // for showing and hiding the drop down menu
  const [visible, setVisible] = useState(false);
  // for showing and hiding the edit button
  const [, setEditMode] = useState(false);

  // animation for button
  const opacity = useState(new Animated.Value(0))[0];

  function fadeInButton() {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }

  function fadeOutButton() {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }

  const unArchiveButton = () => {
    dispatch(
      archiveNote({
        id: notesData.id,
      }),
    );
    setVisible(!visible);
  };

  const archiveButton = () => {
    dispatch(
      archiveNote({
        id: notesData.id,
      }),
    );
    setVisible(!visible);
  };

  const editBodyData = text => {
    setBody(text);
    if (text === notesData.body) {
      setEditMode(false);
      fadeOutButton();
    } else {
      setEditMode(true);
      fadeInButton();
    }
  };

  const deleteButton = () => {
    dispatch(
      deleteNote({
        id: notesData.id,
      }),
    );
    navigation.navigate('NotesPage');
  };

  const editButton = () => {
    if (body === '') {
      Alert.alert('Empty Note', 'Please enter some text to save the note');
    } else if (body === notesData.body) {
      Alert.alert('No Changes', 'Please edit the note to save the changes');
    } else {
      dispatch(
        editNotes({
          id: notesData.id,
          title: notesData.title,
          body,
          archived: notesData.archived,
        }),
      );
      ToastAndroid.show('Changes Saved', ToastAndroid.SHORT);
    }
  };

  return (
    <View style={styles.detailsContainer}>
      <TouchableOpacity onPress={() => navigation.navigate('NotesPage')}>
        <View style={styles.detailsContainerHeader}>
          <IconBack />
        </View>
      </TouchableOpacity>
      <View style={styles.detailsContainerBody}>
        <View style={styles.detailsTitle}>
          <View style={styles.detailsTitleText}>
            <Text style={styles.title}>{notesData.title}</Text>
          </View>
          <TouchableOpacity
            style={styles.detailsTitleMenu}
            onPress={() => setVisible(!visible)}>
            <IconVerticalMenu width={32} height={32} fillColor={FONT_COLOR} />
            {visible === true ? (
              <View style={styles.dropDownMenu}>
                {notesData.archived === false ? (
                  <TouchableOpacity onPress={archiveButton}>
                    <View style={styles.dropDownMenuOption1}>
                      <IconArchive
                        width={18}
                        height={32}
                        fillColor={FONT_COLOR}
                      />
                      <Text style={styles.dropDownMenuOption1Text}>
                        Archive
                      </Text>
                    </View>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity onPress={unArchiveButton}>
                    <View style={styles.dropDownMenuOption1}>
                      <IconArchive
                        width={18}
                        height={32}
                        fillColor={FONT_COLOR}
                      />
                      <Text style={styles.dropDownMenuOption1Text}>
                        UnArchive
                      </Text>
                    </View>
                  </TouchableOpacity>
                )}
                <TouchableOpacity onPress={deleteButton}>
                  <View style={styles.dropDownMenuOption2}>
                    <IconDelete width={18} height={32} fillColor={FONT_COLOR} />
                    <Text style={styles.dropDownMenuOption2Text}>Delete</Text>
                  </View>
                </TouchableOpacity>
              </View>
            ) : null}
          </TouchableOpacity>
        </View>
        <View style={styles.detailsDate}>
          <IconCalendarMuted width={16} height={16} />
          <Text style={styles.date}>Date</Text>
          <Text style={styles.dateData}>
            {showFormattedDate(notesData.createdAt)}
          </Text>
        </View>
        <View style={styles.detailsLocation}>
          <IconFolderMuted width={16} height={16} />
          <Text style={styles.location}>Location</Text>
          {notesData.archived === true ? (
            <Text style={styles.locationText}>Archived</Text>
          ) : (
            <Text style={styles.locationText}>Active</Text>
          )}
        </View>
        <View style={styles.detailsBody}>
          <TextInput
            editable
            multiline
            numberOfLines={5}
            style={styles.body}
            value={body}
            onChangeText={editBodyData}
          />
        </View>
        <Animated.View style={{opacity}}>
          <TouchableOpacity style={styles.editData} onPress={editButton}>
            <Text style={styles.editDataText}>Save Changes</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </View>
  );
}
