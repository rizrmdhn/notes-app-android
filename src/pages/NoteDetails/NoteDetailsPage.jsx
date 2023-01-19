/* eslint-disable react/prop-types */
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
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
    fontFamily: 'Montserrat-Bold',
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
    fontFamily: 'Montserrat-Regular',
    fontSize: 15,
    color: FONT_COLOR,
    marginTop: -2,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 10,
  },
  detailsBody: {
    marginTop: 25,
    marginLeft: 10,
  },
  body: {
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
    fontFamily: 'Montserrat-Regular',
    fontSize: 15,
    color: FONT_COLOR,
    marginTop: -2,
    marginLeft: 20,
    marginBottom: 10,
    marginRight: 10,
  },
  dropDownMenu: {
    position: 'absolute',
    top: 30,
    left: -100,
    width: windowWidth * 0.3,
    backgroundColor: BACKGROUND_COLOR_SECONDARY,
    borderRadius: 10,
    visible: true,
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
});

export default function NoteDetailsPage({route}) {
  const navigation = useNavigation();

  const [visible, setVisible] = React.useState(false);

  const archiveButton = () => {
    navigation.navigate('NotesPage', {
      setThisIdToArchived: route.params.notesData.id,
    });
    setVisible(!visible);
  };

  const deleteButton = () => {
    navigation.navigate('NotesPage', {
      setThisIdToDelete: route.params.notesData.id,
    });
    setVisible(!visible);
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
            <Text style={styles.title}>{route.params.notesData.title}</Text>
          </View>
          <TouchableOpacity
            style={styles.detailsTitleMenu}
            onPress={() => setVisible(!visible)}>
            <IconVerticalMenu width={32} height={32} fillColor={FONT_COLOR} />
            {visible === true ? (
              <View style={styles.dropDownMenu}>
                <TouchableOpacity onPress={archiveButton}>
                  <View style={styles.dropDownMenuOption1}>
                    <IconArchive
                      width={18}
                      height={32}
                      fillColor={FONT_COLOR}
                    />
                    <Text style={styles.dropDownMenuOption1Text}>Archive</Text>
                  </View>
                </TouchableOpacity>
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
          <Text style={styles.date}>
            {showFormattedDate(route.params.notesData.createdAt)}
          </Text>
        </View>
        <View style={styles.detailsLocation}>
          <IconFolderMuted width={16} height={16} />
          <Text style={styles.location}>Location</Text>
          {route.params.notesData.archived === true ? (
            <Text style={styles.location}>Archived</Text>
          ) : (
            <Text style={styles.location}>Active</Text>
          )}
        </View>
        <View style={styles.detailsBody}>
          <Text style={styles.body}>{route.params.notesData.body}</Text>
        </View>
      </View>
    </View>
  );
}
