import React from 'react';

import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import colors from '../../theme/colors';

export default function PassengerQueueCard({ item }) {

  function getStatusColor() {

    switch (item.status) {

      case 'Loading':
        return '#F59E0B';

      case 'Departed':
        return '#10B981';

      case 'Waiting':
        return '#2563EB';

      default:
        return '#6B7280';

    }

  }

  return (

    <View style={styles.card}>

      <View style={styles.header}>

        <Text style={styles.position}>

          #{item.position}

        </Text>

        <View
          style={[
            styles.statusBadge,
            {
              backgroundColor: getStatusColor(),
            },
          ]}
        >

          <Text style={styles.statusText}>

            {item.status}

          </Text>

        </View>

      </View>

      <Text style={styles.registration}>

        🚖 {item.registration}

      </Text>

      <View style={styles.divider} />

      <Text style={styles.label}>

        Available Seats

      </Text>

      <Text style={styles.value}>

        💺 {item.availableSeats}

      </Text>

      <Text style={styles.label}>

        Passengers

      </Text>

      <Text style={styles.value}>

        👥 {item.passengers}

      </Text>

      <Text style={styles.label}>

        Taxi Rank

      </Text>

      <Text style={styles.value}>

        📍 {item.rank}

      </Text>

      <Text style={styles.label}>

        Checked In

      </Text>

      <Text style={styles.value}>

        {item.checkedIn ? '✅ Yes' : '❌ No'}

      </Text>

    </View>

  );

}

const styles = StyleSheet.create({

  card: {
    backgroundColor: colors.surface,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 18,
    marginBottom: 18,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  position: {
    color: colors.primary,
    fontSize: 24,
    fontWeight: '900',
  },

  statusBadge: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
  },

  statusText: {
    color: '#FFF',
    fontWeight: '800',
    fontSize: 12,
  },

  registration: {
    color: colors.white,
    fontSize: 20,
    fontWeight: '800',
    marginTop: 15,
  },

  divider: {
    height: 1,
    backgroundColor: colors.border,
    marginVertical: 16,
  },

  label: {
    color: colors.textSecondary,
    fontSize: 12,
    marginTop: 8,
  },

  value: {
    color: colors.white,
    fontSize: 15,
    fontWeight: '700',
    marginTop: 4,
  },

});