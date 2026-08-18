import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import colors from '../../theme/colors';

export default function AppLogo() {

  return (

    <View style={styles.container}>

      <View style={styles.circle}>

        <Text style={styles.icon}>
          🚖
        </Text>

      </View>

      <Text style={styles.title}>
        E-RANK
      </Text>

      <Text style={styles.subtitle}>
        Next Generation Taxi Platform
      </Text>

    </View>

  );

}

const styles = StyleSheet.create({

  container: {

    alignItems: 'center',

  },

  circle: {

    width: 110,

    height: 110,

    borderRadius: 55,

    backgroundColor: colors.primary,

    justifyContent: 'center',

    alignItems: 'center',

    marginBottom: 25,

    shadowColor: '#000',

    shadowOpacity: 0.45,

    shadowRadius: 15,

    shadowOffset: {

      width: 0,

      height: 8,

    },

    elevation: 12,

  },

  icon: {

    fontSize: 52,

  },

  title: {

    fontSize: 40,

    fontWeight: '900',

    color: colors.white,

    letterSpacing: 2,

  },

  subtitle: {

    marginTop: 10,

    color: colors.textSecondary,

    fontSize: 15,

    letterSpacing: 1,

  },

});