import React, { useCallback, useState } from 'react';

import {
  FlatList,
  StyleSheet,
  Text,
  Alert,
  ActivityIndicator,
} from 'react-native';

import { useFocusEffect } from '@react-navigation/native';

import AppContainer from '../../components/layout/AppContainer';
import PremiumCard from '../../components/cards/PremiumCard';
import InfoRow from '../../components/common/InfoRow';
import PrimaryButton from '../../components/buttons/PrimaryButton';

import {
  getOwnerTaxis,
} from '../../services/ownerTaxiService';

import {
  driverCheckIn,
} from '../../services/marshal/driverCheckInService';

import {
  getDriverStore,
} from '../../shared/driverStore';

import colors from '../../theme/colors';

export default function DriverCheckInScreen({ navigation }) {

  const [taxis, setTaxis] = useState([]);

  const [loading, setLoading] = useState(true);

  async function loadTaxis() {

    setLoading(true);

    const taxiList = await getOwnerTaxis();

    const drivers = getDriverStore();

    const available = taxiList.map(taxi => {

      const driver = drivers.find(

        d => d.id === taxi.driverId

      );

      return {

        ...taxi,

        driver,

      };

    });

    setTaxis(available);

    setLoading(false);

  }

  useFocusEffect(

    useCallback(() => {

      loadTaxis();

    }, [])

  );

  async function handleCheckIn(taxi) {

    if (!taxi.driverId) {

      Alert.alert(

        'No Driver Assigned',

        'Assign a driver before checking this taxi into the queue.'

      );

      return;

    }

    try {

      await driverCheckIn(taxi.id);

      Alert.alert(

        'Success',

        `${taxi.registration} checked into the queue.`,

        [

          {

            text: 'VIEW LIVE QUEUE',

            onPress: () => navigation.navigate('LiveQueue'),

          },

        ]

      );

    }

    catch (error) {

      Alert.alert(

        'Error',

        error.message || 'Unable to check in taxi.'

      );

    }

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

        data={taxis}

        keyExtractor={(item) => item.id}

        contentContainerStyle={styles.container}

        showsVerticalScrollIndicator={false}

        ListHeaderComponent={

          <Text style={styles.title}>

            Driver Check-In

          </Text>

        }

        renderItem={({ item }) => (

          <PremiumCard>

            <Text style={styles.registration}>

              🚖 {item.registration}

            </Text>

            <InfoRow

              label="Driver"

              value={

                item.driver

                  ? item.driver.fullName

                  : 'Not Assigned'

              }

            />

            <InfoRow

              label="Taxi Rank"

              value={item.rank}

            />

            <InfoRow

              label="Capacity"

              value={`${item.capacity} Seater`}

            />

            <InfoRow

              label="Status"

              value={item.status}

            />

            <PrimaryButton

              title="CHECK INTO QUEUE"

              onPress={() => handleCheckIn(item)}

              style={styles.button}

            />

          </PremiumCard>

        )}

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

    marginBottom: 20,

  },

  registration: {

    color: colors.white,

    fontSize: 22,

    fontWeight: '900',

    marginBottom: 15,

  },

  button: {

    marginTop: 20,

  },

});