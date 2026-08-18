import React from 'react';
import { View, StyleSheet } from 'react-native';

import AppText from './AppText';
import colors from '../../theme/colors';

export default function StatusChip({
  text,
  color = colors.primary,
}) {
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: color },
      ]}
    >
      <AppText
        variant="caption"
        style={styles.text}
      >
        {text}
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 50,
  },

  text: {
    color: '#fff',
    fontWeight: '700',
  },
});