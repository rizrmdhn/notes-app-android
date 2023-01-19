/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/prop-types */
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {IconArchive, IconEmptyNote} from '../../assets';
import {FONT_COLOR, FONT_MUTED} from '../../utils/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  text: isFocused => ({
    fontSize: 13,
    color: isFocused ? FONT_COLOR : FONT_MUTED,
    marginTop: 8,
  }),
});

export default function TabItem({label, isFocused, onPress, onLongPress}) {
  const Icon = () => {
    if (label === 'Active') {
      return isFocused ? (
        <IconEmptyNote width={24} height={24} fillColor={FONT_COLOR} />
      ) : (
        <IconEmptyNote width={24} height={24} fillColor={FONT_MUTED} />
      );
    }
    if (label === 'Archive') {
      return isFocused ? (
        <IconArchive width={24} height={24} fillColor={FONT_COLOR} />
      ) : (
        <IconArchive width={24} height={24} fillColor={FONT_MUTED} />
      );
    }
    return <IconEmptyNote width={24} height={24} fillColor={FONT_MUTED} />;
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}>
      <Icon />
      <Text style={styles.text(isFocused)}>{label}</Text>
    </TouchableOpacity>
  );
}
