import React from 'react';
import { View, StyleSheet } from 'react-native';

import AppText from '../common/AppText';

import spacing from '../../theme/spacing';

export default function ScreenHeader({
  title,
  subtitle,
}) {
  return (
    <View style={styles.container}>
      <AppText variant="headingLarge">
        {title}
      </AppText>

      {subtitle ? (
        <AppText
          variant="bodyMedium"
          style={styles.subtitle}
        >
          {subtitle}
        </AppText>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: spacing.xl,
  },

  subtitle: {
    marginTop: 6,
  },
});