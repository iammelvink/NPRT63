import React from 'react';
import { View } from 'react-native';
import styles from '../../theme/styles';

export default function Card({ children, style }) {
  return (
    <View
      style={[
        styles.card,
        styles.shadow,
        style,
      ]}
    >
      {children}
    </View>
  );
}