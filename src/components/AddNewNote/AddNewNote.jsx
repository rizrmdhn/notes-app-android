/* eslint-disable react/prop-types */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Dimensions,
  Alert,
  TouchableOpacity,
} from 'react-native';
import React, {Component} from 'react';
import {
  BACKGROUND_COLOR_PRIMARY,
  BACKGROUND_COLOR_SECONDARY,
  FONT_COLOR,
  FONT_MUTED,
} from '../../utils/colors';
import {IconBack} from '../../assets';

const WindowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  addNoteContainer: {
    flex: 1,
    overflow: 'scroll',
    backgroundColor: BACKGROUND_COLOR_PRIMARY,
  },
  addNoteContainerHeader: {
    width: windowWidth * 0.05,
    marginTop: 10,
    marginLeft: 10,
  },
  addNoteContainerHeaderTitle: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
  },
  addNewTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 25,
    color: FONT_COLOR,
  },
  maxCharTitle: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 15,
    color: FONT_COLOR,
    textAlign: 'right',
    marginRight: 15,
  },
  addNoteContainerTitle: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
    borderColor: FONT_COLOR,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderRadius: 5,
  },
  addNoteContainerBody: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    borderColor: FONT_COLOR,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderRadius: 5,
  },
  titleInput: {
    marginLeft: 10,
    fontFamily: 'Montserrat-Regular',
    fontSize: 15,
    color: FONT_MUTED,
  },
  bodyInput: {
    height: WindowHeight * 0.25,
    marginLeft: 10,
    fontFamily: 'Montserrat-Regular',
    fontSize: 15,
    color: FONT_MUTED,
  },
  addNoteContainerButton: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
});

export default class AddNewNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      limit: 50,
    };

    this.onBackButton = this.onBackButton.bind(this);
    this.onSubmitChangeEventHandler =
      this.onSubmitChangeEventHandler.bind(this);
  }

  onBackButton() {
    this.props.navigation.navigate('NotesPage');
  }

  onSubmitChangeEventHandler() {
    if (this.state.title === '' || this.state.body === '') {
      Alert.alert('Form is empty', 'Please fill the form');
    } else {
      this.props.navigation.navigate('NotesPage', {
        addData: {
          title: this.state.title,
          body: this.state.body,
        },
      });
    }
  }

  render() {
    return (
      <View style={styles.addNoteContainer}>
        <TouchableOpacity onPress={this.onBackButton}>
          <View style={styles.addNoteContainerHeader}>
            <IconBack />
          </View>
        </TouchableOpacity>
        <View style={styles.addNoteContainerHeaderTitle}>
          <Text style={styles.addNewTitle}>Add New Note</Text>
        </View>
        <View style={styles.maxCharTitle}>
          <Text style={{color: FONT_COLOR, alignSelf: 'flex-end'}}>
            Sisa Karakter Judul: {this.state.title.length}/{this.state.limit}
          </Text>
        </View>
        <View style={styles.addNoteContainerTitle}>
          <TextInput
            style={styles.titleInput}
            placeholder="Ini adalah judul ..."
            placeholderTextColor={FONT_MUTED}
            defaultValue={this.state.title}
            onChangeText={text => this.setState({title: text})}
            maxLength={this.state.limit}
          />
        </View>
        <View style={styles.addNoteContainerBody}>
          <TextInput
            style={styles.bodyInput}
            placeholder="Tuliskan Catatanmu di sini ..."
            placeholderTextColor={FONT_MUTED}
            defaultValue={this.state.body}
            onChangeText={text => this.setState({body: text})}
          />
        </View>
        <View style={styles.addNoteContainerButton}>
          <Button
            onPress={this.onSubmitChangeEventHandler}
            color={BACKGROUND_COLOR_SECONDARY}
            title="Add Note"
          />
        </View>
      </View>
    );
  }
}
