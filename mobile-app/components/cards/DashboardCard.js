import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../../theme/colors';

export default function DashboardCard({
  title,
  value,
  subtitle,
  icon,
}) {
  return (
    <View style={styles.card}>
      <Text style={styles.icon}>{icon}</Text>

      <Text style={styles.title}>
        {title}
      </Text>

      <Text style={styles.value}>
        {value}
      </Text>

      <Text style={styles.subtitle}>
        {subtitle}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({

  card: {

    flex: 1,

    backgroundColor: colors.surface,

    borderRadius: 18,

    padding: 18,

    margin: 8,

    borderWidth: 1,

    borderColor: colors.border,

  },

  icon: {

    fontSize: 28,

    marginBottom: 12,

  },

  title: {

    color: colors.textSecondary,

    fontSize: 13,

  },

  value: {

    color: colors.white,

    fontSize: 24,

    fontWeight: '800',

    marginTop: 5,

  },

  subtitle: {

    color: colors.placeholder,

    marginTop: 6,

    fontSize: 12,

  },

});