import React from 'react';
import { Text, StyleSheet } from 'react-native';

import colors from '../../theme/colors';

export default function AppText({
  children,
  style,
  variant = 'body',
}) {
  return (
    <Text
      style={[
        styles[variant] || styles.body,
        style,
      ]}
    >
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  headingLarge: {
    fontSize: 28,
    fontWeight: '800',
    color: colors.white,
  },

  heading: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.white,
  },

  bodyMedium: {
    fontSize: 16,
    color: colors.textSecondary,
    marginTop: 8,
  },

  body: {
    fontSize: 16,
    color: colors.white,
  },
});