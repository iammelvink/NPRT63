import React from 'react';
import { View, StyleSheet } from 'react-native';

import AppText from '../common/AppText';
import PrimaryButton from '../buttons/PrimaryButton';

export default function ErrorState({
  title,
  message,
  onRetry,
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

      <PrimaryButton
        title="Try Again"
        onPress={onRetry}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
  },

  message: {
    marginVertical: 20,
    textAlign: 'center',
  },
});