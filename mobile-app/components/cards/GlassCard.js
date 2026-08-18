import React from 'react';
import { View, StyleSheet } from 'react-native';

import colors from '../../theme/colors';
import spacing from '../../theme/spacing';

export default function GlassCard({ children, style }) {
  return (
    <View style={[styles.card, style]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'rgba(15,23,42,0.88)',
    borderRadius: spacing.radiusLarge,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
    padding: spacing.lg,

    shadowColor: '#000',
    shadowOpacity: 0.35,
    shadowRadius: 16,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    elevation: 12,
  },
});