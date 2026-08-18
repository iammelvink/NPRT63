import React, {
  useCallback,
  useState,
} from 'react';

import {
  ActivityIndicator,
  Alert,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {
  useFocusEffect,
} from '@react-navigation/native';

import AppContainer
  from '../../components/layout/AppContainer';

import PremiumCard
  from '../../components/cards/PremiumCard';

import InfoRow
  from '../../components/common/InfoRow';

import PrimaryButton
  from '../../components/buttons/PrimaryButton';

import {
  getPassengerLoadingData,
  addPassenger,
  removePassenger,
} from '../../services/marshal/passengerLoadingService';

import colors from '../../theme/colors';

export default function PassengerLoadingScreen({
  navigation,
}) {

  const [queue, setQueue] = useState([]);

  const [loading, setLoading] = useState(true);

  async function loadData() {

    try {

      setLoading(true);

      const data =
        await getPassengerLoadingData();

      setQueue(data);

    }

    catch (error) {

      Alert.alert(
        'Error',
        error.message ||
          'Unable to load passenger information.'
      );

    }

    finally {

      setLoading(false);

    }

  }

  useFocusEffect(

    useCallback(() => {

      loadData();

    }, [])

  );

  async function handleAddPassenger(taxi) {

    try {

      const result =
        await addPassenger(taxi.id);

      await loadData();

      if (result.full) {

        Alert.alert(
          'Taxi Full',
          `${taxi.registration} has reached its passenger capacity.`
        );

      }

    }

    catch (error) {

      Alert.alert(
        'Unable to Add Passenger',
        error.message
      );

    }

  }

  async function handleRemovePassenger(taxi) {

    try {

      await removePassenger(taxi.id);

      await loadData();

    }

    catch (error) {

      Alert.alert(
        'Unable to Remove Passenger',
        error.message
      );

    }

  }

  function renderTaxi({ item }) {

    const passengers =
      Number(item.passengers || 0);

    const capacity =
      Number(item.capacity || 0);

    const remaining =
      Math.max(capacity - passengers, 0);

    const isFull =
      passengers >= capacity;

    return (

      <PremiumCard>

        <View style={styles.header}>

          <View>

            <Text style={styles.registration}>

              🚖 {item.taxi.registration}

            </Text>

            <Text style={styles.position}>

              Queue Position #{item.position}

            </Text>

          </View>

          <View
            style={[
              styles.status,
              isFull
                ? styles.fullStatus
                : styles.loadingStatus,
            ]}
          >

            <Text style={styles.statusText}>

              {isFull ? 'FULL' : item.status}

            </Text>

          </View>

        </View>

        <InfoRow
          label="Driver"
          value={
            item.driver?.fullName ||
            item.taxi.driverName ||
            'Assigned Driver'
          }
        />

        <InfoRow
          label="Capacity"
          value={`${capacity} Seater`}
        />

        <InfoRow
          label="Passengers"
          value={`${passengers} / ${capacity}`}
        />

        <InfoRow
          label="Seats Remaining"
          value={String(remaining)}
        />

        <View style={styles.passengerBox}>

          <Text style={styles.passengerCount}>

            {passengers}

          </Text>

          <Text style={styles.passengerLabel}>

            PASSENGERS

          </Text>

        </View>

        <View style={styles.buttons}>

          <View style={styles.buttonHalf}>

            <PrimaryButton
              title="− PASSENGER"
              onPress={() =>
                handleRemovePassenger(item.taxi)
              }
              disabled={passengers <= 0}
            />

          </View>

          <View style={styles.buttonGap} />

          <View style={styles.buttonHalf}>

            <PrimaryButton
              title="+ PASSENGER"
              onPress={() =>
                handleAddPassenger(item.taxi)
              }
              disabled={isFull}
            />

          </View>

        </View>

        {isFull && (

          <View style={styles.fullMessage}>

            <Text style={styles.fullMessageText}>

              ✓ TAXI IS FULL AND READY FOR DISPATCH

            </Text>

          </View>

        )}

      </PremiumCard>

    );

  }

  if (loading) {

    return (

      <AppContainer>

        <ActivityIndicator
          size="large"
          color={colors.primary}
          style={styles.loader}
        />

      </AppContainer>

    );

  }

  return (

    <AppContainer>

      <FlatList

        data={queue}

        keyExtractor={(item) => item.id}

        showsVerticalScrollIndicator={false}

        contentContainerStyle={styles.container}

        refreshing={loading}

        onRefresh={loadData}

        ListHeaderComponent={

          <View>

            <Text style={styles.title}>

              Passenger Loading

            </Text>

            <Text style={styles.subtitle}>

              Manage passengers boarding each taxi
              in the live queue.

            </Text>

          </View>

        }

        ListEmptyComponent={

          <View style={styles.empty}>

            <Text style={styles.emptyIcon}>

              🚖

            </Text>

            <Text style={styles.emptyTitle}>

              No Taxis in Queue

            </Text>

            <Text style={styles.emptyText}>

              Check a driver into the queue first.

            </Text>

            <PrimaryButton
              title="DRIVER CHECK-IN"
              onPress={() =>
                navigation.navigate('DriverCheckIn')
              }
              style={styles.emptyButton}
            />

          </View>

        }

        renderItem={renderTaxi}

      />

    </AppContainer>

  );

}

const styles = StyleSheet.create({

  loader: {

    flex: 1,

    justifyContent: 'center',

  },

  container: {

    padding: 20,

    paddingBottom: 40,

  },

  title: {

    color: colors.white,

    fontSize: 30,

    fontWeight: '900',

    marginBottom: 8,

  },

  subtitle: {

    color: colors.textSecondary,

    fontSize: 15,

    lineHeight: 22,

    marginBottom: 25,

  },

  header: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'flex-start',

  },

  registration: {

    color: colors.white,

    fontSize: 21,

    fontWeight: '900',

  },

  position: {

    color: colors.textSecondary,

    marginTop: 6,

    fontSize: 13,

  },

  status: {

    paddingHorizontal: 12,

    paddingVertical: 6,

    borderRadius: 20,

  },

  loadingStatus: {

    backgroundColor: '#F59E0B',

  },

  fullStatus: {

    backgroundColor: '#10B981',

  },

  statusText: {

    color: '#FFFFFF',

    fontSize: 11,

    fontWeight: '900',

  },

  passengerBox: {

    alignItems: 'center',

    justifyContent: 'center',

    marginTop: 25,

    marginBottom: 20,

    paddingVertical: 18,

    backgroundColor: colors.surface,

    borderRadius: 18,

    borderWidth: 1,

    borderColor: colors.border,

  },

  passengerCount: {

    color: colors.primary,

    fontSize: 42,

    fontWeight: '900',

  },

  passengerLabel: {

    color: colors.textSecondary,

    fontSize: 11,

    fontWeight: '800',

    marginTop: 3,

  },

  buttons: {

    flexDirection: 'row',

    alignItems: 'center',

  },

  buttonHalf: {

    flex: 1,

  },

  buttonGap: {

    width: 10,

  },

  fullMessage: {

    marginTop: 15,

    padding: 14,

    borderRadius: 14,

    backgroundColor: '#10B981',

    alignItems: 'center',

  },

  fullMessageText: {

    color: '#FFFFFF',

    fontSize: 12,

    fontWeight: '900',

    textAlign: 'center',

  },

  empty: {

    alignItems: 'center',

    marginTop: 80,

    paddingHorizontal: 20,

  },

  emptyIcon: {

    fontSize: 50,

    marginBottom: 15,

  },

  emptyTitle: {

    color: colors.white,

    fontSize: 21,

    fontWeight: '900',

  },

  emptyText: {

    color: colors.textSecondary,

    fontSize: 14,

    marginTop: 8,

    textAlign: 'center',

  },

  emptyButton: {

    width: '100%',

    marginTop: 25,

  },

});