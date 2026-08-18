import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import colors from '../../theme/colors';

export default function DestinationCard({
  destination,
  onPress,
}) {

  return (

    <TouchableOpacity
      activeOpacity={0.9}
      style={styles.card}
      onPress={() => onPress(destination)}
    >

      <View style={styles.header}>

        <View style={styles.iconContainer}>

          <Ionicons
            name="location"
            size={22}
            color={colors.primary}
          />

        </View>

        <View style={styles.info}>

          <Text style={styles.name}>
            {destination.name}
          </Text>

          <Text style={styles.text}>
            🚖 Available Taxis: {destination.taxis}
          </Text>

          <Text style={styles.text}>
            👨 Driver: {destination.driver}
          </Text>

          <Text style={styles.text}>
            🚐 Taxi: {destination.registration}
          </Text>

          <Text style={styles.text}>
            💵 Fare: {destination.fare}
          </Text>

          <Text style={styles.text}>
            🕘 Last Taxi: {destination.lastTaxi}
          </Text>

        </View>

      </View>

      <Ionicons
        name="chevron-forward"
        size={22}
        color={colors.placeholder}
      />

    </TouchableOpacity>

  );

}

const styles = StyleSheet.create({

  card: {

    backgroundColor: colors.surface,

    borderRadius: 18,

    borderWidth: 1,

    borderColor: colors.border,

    padding: 16,

    marginBottom: 14,

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

  },

  header: {

    flexDirection: 'row',

    flex: 1,

  },

  iconContainer: {

    width: 50,

    height: 50,

    borderRadius: 25,

    backgroundColor: colors.background,

    justifyContent: 'center',

    alignItems: 'center',

  },

  info: {

    marginLeft: 15,

    flex: 1,

  },

  name: {

    color: colors.white,

    fontWeight: '800',

    fontSize: 17,

    marginBottom: 8,

  },

  text: {

    color: colors.textSecondary,

    marginBottom: 3,

    fontSize: 13,

  },

});