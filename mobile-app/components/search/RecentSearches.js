import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import colors from '../../theme/colors';

export default function RecentSearches({
  searches = [],
  onSelect,
}) {
  if (searches.length === 0) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Recent Searches
      </Text>

      {searches.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.item}
          onPress={() => onSelect(item)}
        >
          <Text style={styles.text}>
            {item}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 25,
  },

  title: {
    color: colors.white,
    fontSize: 20,
    fontWeight: '800',
    marginBottom: 15,
  },

  item: {
    backgroundColor: colors.surface,
    borderRadius: 14,
    padding: 14,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: colors.border,
  },

  text: {
    color: colors.textSecondary,
    fontSize: 15,
  },
});