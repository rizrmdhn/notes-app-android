/* eslint-disable react/prop-types */
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {BACKGROUND_COLOR_SECONDARY, FONT_COLOR} from '../../utils/colors';
import {showFormattedDate} from '../../utils/notesData';

const windowWidth = Dimensions.get('window').width;
const WindowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  card: {
    alignSelf: 'center',
    width: windowWidth * 0.9,
    height: WindowHeight * 0.2,
    backgroundColor: BACKGROUND_COLOR_SECONDARY,
    borderRadius: 10,
    overflow: 'hidden',
    margin: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  cardTitle: {
    marginTop: 10,
    marginLeft: 10,
  },
  title: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 15,
    color: FONT_COLOR,
  },
  cardDate: {
    marginTop: 10,
    marginLeft: 10,
  },
  date: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 15,
    color: FONT_COLOR,
  },
  cardBody: {
    height: WindowHeight * 0.09,
    marginTop: 10,
    marginLeft: 10,
  },
  body: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 15,
    color: FONT_COLOR,
  },
});

export default function NoteItem({id, title, createdAt, body, archived}) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        navigation.navigate('NoteDetails', {
          notesData: {
            id,
            title,
            createdAt,
            body,
            archived,
          },
        })
      }>
      <View style={styles.cardTitle}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.cardDate}>
        <Text style={styles.date}>{showFormattedDate(createdAt)}</Text>
      </View>
      <View style={styles.cardBody}>
        <Text style={styles.body}>{body}</Text>
      </View>
    </TouchableOpacity>
  );
}
