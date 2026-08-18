import React from 'react';
import { View, StyleSheet } from 'react-native';

import AppText from './AppText';
import colors from '../../theme/colors';

export default function Avatar({
  name = '',
  size = 52,
}) {
  const initials = name
    .split(' ')
    .map((item) => item[0])
    .join('')
    .substring(0, 2)
    .toUpperCase();

  return (
    <View
      style={[
        styles.avatar,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
        },
      ]}
    >
      <AppText
        variant="headingSmall"
        style={styles.text}
      >
        {initials}
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  avatar: {
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    color: '#fff',
  },
});