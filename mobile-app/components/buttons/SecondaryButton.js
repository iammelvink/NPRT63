import React from 'react';

import {
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

import colors from '../../theme/colors';

export default function SecondaryButton({

  title,

  onPress,

  disabled = false,

  style,

}) {

  return (

    <TouchableOpacity

      activeOpacity={0.85}

      disabled={disabled}

      onPress={onPress}

      style={[

        styles.button,

        disabled && styles.disabled,

        style,

      ]}

    >

      <Text style={styles.text}>

        {title}

      </Text>

    </TouchableOpacity>

  );

}

const styles = StyleSheet.create({

  button: {

    height: 56,

    borderRadius: 16,

    borderWidth: 2,

    borderColor: colors.primary,

    justifyContent: 'center',

    alignItems: 'center',

    backgroundColor: 'transparent',

  },

  disabled: {

    opacity: 0.5,

  },

  text: {

    color: colors.primary,

    fontSize: 16,

    fontWeight: '800',

    letterSpacing: 1,

  },

});