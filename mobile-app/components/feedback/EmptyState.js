import React from 'react';
import { View, StyleSheet } from 'react-native';

import AppText from '../common/AppText';

export default function EmptyState({
  title,
  message,
}) {
  return (
    <View style={styles.container}>
      <AppText variant="headingMedium">
        {title}
      </AppText>

      <AppText
        variant="bodyMedium"
        style={styles.message}
      >
        {message}
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },

  message: {
    marginTop: 12,
    textAlign: 'center',
  },
});