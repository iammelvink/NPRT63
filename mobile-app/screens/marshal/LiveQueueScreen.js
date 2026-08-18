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
} from 'react-native';

import {
  useFocusEffect,
} from '@react-navigation/native';

import AppContainer
  from '../../components/layout/AppContainer';

import QueueCard
  from '../../components/cards/QueueCard';

import {
  getManagedQueue,
  dispatchTaxi,
  moveTaxiToFront,
  removeTaxiFromQueue,
} from '../../services/marshal/queueManagementService';

import {
  getTaxiStore,
} from '../../shared/taxiStore';

import {
  getDriverStore,
} from '../../shared/driverStore';

import colors from '../../theme/colors';

export default function LiveQueueScreen({
  navigation,
}) {

  const [queue, setQueue] = useState([]);

  const [loading, setLoading] = useState(true);

  async function loadQueue() {

    try {

      setLoading(true);

      const managedQueue =
        await getManagedQueue();

      const taxis =
        getTaxiStore();

      const drivers =
        getDriverStore();

      const enrichedQueue =
        managedQueue.map(item => {

          const taxi = taxis.find(
            taxiItem =>
              taxiItem.id === item.taxiId
          );

          const driver = drivers.find(
            driverItem =>
              driverItem.id === taxi?.driverId
          );

          return {

            ...item,

            taxi,

            driver,

          };

        });

      setQueue(enrichedQueue);

    }

    catch (error) {

      Alert.alert(
        'Queue Error',
        error.message ||
          'Unable to load the live queue.'
      );

    }

    finally {

      setLoading(false);

    }

  }

  useFocusEffect(

    useCallback(() => {

      loadQueue();

    }, [])

  );

  async function handleLoad(item) {

    navigation.navigate(
      'PassengerLoading'
    );

  }

  async function handleDepart(item) {

    const taxi =
      item.taxi;

    if (!taxi) {

      Alert.alert(
        'Error',
        'Taxi information is unavailable.'
      );

      return;

    }

    Alert.alert(

      'Dispatch Taxi',

      `Dispatch ${taxi.registration}?`,

      [

        {

          text: 'Cancel',

          style: 'cancel',

        },

        {

          text: 'Dispatch',

          onPress: async () => {

            try {

              await dispatchTaxi(
                taxi.id
              );

              Alert.alert(
                'Taxi Dispatched',
                `${taxi.registration} has departed the rank.`
              );

              await loadQueue();

            }

            catch (error) {

              Alert.alert(
                'Cannot Dispatch',
                error.message
              );

            }

          },

        },

      ]

    );

  }

  async function handleMoveFront(item) {

    const taxi =
      item.taxi;

    if (!taxi) {
      return;
    }

    Alert.alert(

      'Move Taxi to Front',

      `Move ${taxi.registration} to position #1?`,

      [

        {

          text: 'Cancel',

          style: 'cancel',

        },

        {

          text: 'Move',

          onPress: async () => {

            try {

              await moveTaxiToFront(
                taxi.id
              );

              await loadQueue();

            }

            catch (error) {

              Alert.alert(
                'Unable to Move Taxi',
                error.message
              );

            }

          },

        },

      ]

    );

  }

  async function handleRemove(item) {

    const taxi =
      item.taxi;

    if (!taxi) {
      return;
    }

    Alert.alert(

      'Remove Taxi',

      `Remove ${taxi.registration} from the queue?`,

      [

        {

          text: 'Cancel',

          style: 'cancel',

        },

        {

          text: 'Remove',

          style: 'destructive',

          onPress: async () => {

            try {

              await removeTaxiFromQueue(
                taxi.id
              );

              await loadQueue();

            }

            catch (error) {

              Alert.alert(
                'Unable to Remove Taxi',
                error.message
              );

            }

          },

        },

      ]

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

        keyExtractor={
          item => item.id
        }

        showsVerticalScrollIndicator={false}

        contentContainerStyle={
          styles.container
        }

        onRefresh={loadQueue}

        refreshing={loading}

        ListHeaderComponent={

          <Text style={styles.title}>

            Live Queue

          </Text>

        }

        ListEmptyComponent={

          <Text style={styles.empty}>

            No taxis waiting.

          </Text>

        }

        renderItem={({ item }) => (

          <QueueCard

            item={item}

            onLoad={handleLoad}

            onDepart={handleDepart}

            onMoveFront={
              handleMoveFront
            }

            onRemove={
              handleRemove
            }

          />

        )}

      />

    </AppContainer>

  );

}

const styles = StyleSheet.create({

  container: {

    padding: 20,

    paddingBottom: 40,

  },

  loader: {

    flex: 1,

    justifyContent: 'center',

  },

  title: {

    color: colors.white,

    fontSize: 30,

    fontWeight: '900',

    marginBottom: 20,

  },

  empty: {

    color: colors.textSecondary,

    textAlign: 'center',

    marginTop: 100,

    fontSize: 16,

  },

});