import React from 'react';

import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import colors from '../../theme/colors';

export default function InfoCard({

  title,

  value,

  icon,

}) {

  return (

    <View style={styles.card}>

      <Text style={styles.icon}>
        {icon}
      </Text>

      <Text style={styles.title}>
        {title}
      </Text>

      <Text style={styles.value}>
        {value}
      </Text>

    </View>

  );

}

const styles = StyleSheet.create({

  card: {

    backgroundColor: colors.surface,

    borderRadius: 18,

    padding: 18,

    marginBottom: 16,

    borderWidth: 1,

    borderColor: colors.border,

  },

  icon: {

    fontSize: 28,

    marginBottom: 10,

  },

  title: {

    color: colors.textSecondary,

    fontSize: 13,

  },

  value: {

    marginTop: 5,

    color: colors.white,

    fontWeight: '800',

    fontSize: 20,

  },

});