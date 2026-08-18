import React from 'react';

import {
  View,
  TextInput,
  StyleSheet,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import colors from '../../theme/colors';

export default function SearchBar({

  value,

  onChangeText,

}) {

  return (

    <View style={styles.container}>

      <Ionicons
        name="search"
        size={22}
        color={colors.placeholder}
      />

      <TextInput

        value={value}

        onChangeText={onChangeText}

        placeholder="Search destination..."

        placeholderTextColor={colors.placeholder}

        style={styles.input}

      />

    </View>

  );

}

const styles = StyleSheet.create({

  container: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: colors.surface,

    borderRadius: 16,

    paddingHorizontal: 16,

    height: 58,

    borderWidth: 1,

    borderColor: colors.border,

    marginBottom: 20,

  },

  input: {

    flex: 1,

    color: colors.white,

    fontSize: 16,

    marginLeft: 12,

  },

});