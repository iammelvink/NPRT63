import React from 'react';
import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';

import colors from '../../theme/colors';

export default function PrimaryButton({
  title,
  onPress,
  loading = false,
  disabled = false,
  style,
}) {
  const isDisabled = loading || disabled;

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      disabled={isDisabled}
      onPress={onPress}
      style={[
        styles.button,
        isDisabled && styles.disabled,
        style,
      ]}
    >
      {loading ? (
        <ActivityIndicator color="#FFFFFF" />
      ) : (
        <Text style={styles.text}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({

  button: {

    height: 58,

    backgroundColor: colors.primary,

    borderRadius: 16,

    justifyContent: 'center',

    alignItems: 'center',

    shadowColor: colors.primary,

    shadowOpacity: 0.45,

    shadowRadius: 15,

    shadowOffset: {

      width: 0,

      height: 8,

    },

    elevation: 10,

  },

  disabled: {

    opacity: 0.55,

  },

  text: {

    color: '#FFFFFF',

    fontWeight: '800',

    fontSize: 17,

    letterSpacing: 1,

  },

});