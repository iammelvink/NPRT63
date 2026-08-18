import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import colors from '../../theme/colors';

export default function QueueCard({

  item,

  onLoad,

  onDepart,

  onMoveFront,

  onRemove,

}) {

  const taxi =
    item.taxi;

  const driver =
    item.driver;

  const passengers =
    Number(item.passengers || 0);

  const capacity =
    Number(taxi?.capacity || 0);

  const isFull =
    passengers >= capacity;

  function getStatusColor() {

    switch (item.status) {

      case 'Loading':
        return '#F59E0B';

      case 'Full':
        return '#10B981';

      case 'Departed':
        return '#10B981';

      case 'Offline':
        return '#EF4444';

      default:
        return '#2563EB';

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
              backgroundColor:
                getStatusColor(),
            },
          ]}
        >

          <Text style={styles.statusText}>

            {item.status}

          </Text>

        </View>

      </View>

      <Text style={styles.registration}>

        🚖 {taxi?.registration || 'Unknown Taxi'}

      </Text>

      <View style={styles.divider} />

      <Text style={styles.label}>
        Driver
      </Text>

      <Text style={styles.value}>

        {driver?.fullName ||
          'Not Assigned'}

      </Text>

      <Text style={styles.label}>
        Driver Cell
      </Text>

      <Text style={styles.value}>

        {driver?.cellphone || '-'}

      </Text>

      <Text style={styles.label}>
        Capacity
      </Text>

      <Text style={styles.value}>

        {capacity} Seater

      </Text>

      <Text style={styles.label}>
        Passengers
      </Text>

      <Text style={styles.passengerValue}>

        {passengers} / {capacity}

      </Text>

      <Text style={styles.label}>
        Seats Remaining
      </Text>

      <Text style={styles.value}>

        {Math.max(
          capacity - passengers,
          0
        )}

      </Text>

      <Text style={styles.label}>
        Checked In
      </Text>

      <Text style={styles.value}>

        {item.checkedIn
          ? '✅ Yes'
          : '❌ No'}

      </Text>

      <View style={styles.buttonRow}>

        <TouchableOpacity
          style={styles.loadButton}
          onPress={() =>
            onLoad(item)
          }
        >

          <Text style={styles.buttonText}>
            LOAD
          </Text>

        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.departButton,
            !isFull &&
              styles.disabledButton,
          ]}
          disabled={!isFull}
          onPress={() =>
            onDepart(item)
          }
        >

          <Text style={styles.buttonText}>
            DEPART
          </Text>

        </TouchableOpacity>

      </View>

      <TouchableOpacity
        style={styles.frontButton}
        onPress={() =>
          onMoveFront(item)
        }
      >

        <Text style={styles.buttonText}>

          MOVE TO FRONT

        </Text>

      </TouchableOpacity>

      <TouchableOpacity
        style={styles.removeButton}
        onPress={() =>
          onRemove(item)
        }
      >

        <Text style={styles.buttonText}>

          REMOVE FROM QUEUE

        </Text>

      </TouchableOpacity>

    </View>

  );

}

const styles = StyleSheet.create({

  card: {

    backgroundColor:
      colors.surface,

    borderRadius: 18,

    borderWidth: 1,

    borderColor:
      colors.border,

    padding: 18,

    marginBottom: 18,

  },

  header: {

    flexDirection: 'row',

    justifyContent:
      'space-between',

    alignItems: 'center',

  },

  position: {

    color:
      colors.primary,

    fontSize: 26,

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

    color:
      colors.white,

    fontSize: 21,

    fontWeight: '800',

    marginTop: 15,

  },

  divider: {

    height: 1,

    backgroundColor:
      colors.border,

    marginVertical: 16,

  },

  label: {

    color:
      colors.textSecondary,

    fontSize: 12,

    marginTop: 8,

  },

  value: {

    color:
      colors.white,

    fontSize: 15,

    fontWeight: '700',

    marginTop: 4,

  },

  passengerValue: {

    color:
      colors.primary,

    fontSize: 20,

    fontWeight: '900',

    marginTop: 4,

  },

  buttonRow: {

    flexDirection: 'row',

    marginTop: 22,

  },

  loadButton: {

    flex: 1,

    backgroundColor:
      '#F59E0B',

    paddingVertical: 13,

    borderRadius: 12,

    marginRight: 8,

    alignItems: 'center',

  },

  departButton: {

    flex: 1,

    backgroundColor:
      '#10B981',

    paddingVertical: 13,

    borderRadius: 12,

    marginLeft: 8,

    alignItems: 'center',

  },

  disabledButton: {

    opacity: 0.35,

  },

  frontButton: {

    marginTop: 15,

    backgroundColor:
      colors.primary,

    paddingVertical: 13,

    borderRadius: 12,

    alignItems: 'center',

  },

  removeButton: {

    marginTop: 10,

    backgroundColor:
      '#EF4444',

    paddingVertical: 13,

    borderRadius: 12,

    alignItems: 'center',

  },

  buttonText: {

    color: '#FFF',

    fontWeight: '800',

    fontSize: 14,

  },

});