import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import DestinationCard from './DestinationCard';
import colors from '../../theme/colors';

export default function PopularDestinations({
  destinations,
  onSelect,
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Popular Destinations
      </Text>

      {destinations.map((item) => (
        <DestinationCard
          key={item.id}
          destination={item}
          onPress={onSelect}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },

  title: {
    color: colors.white,
    fontSize: 20,
    fontWeight: '800',
    marginBottom: 15,
  },
});