import React from 'react';

import {

  ActivityIndicator,

  ScrollView,

  StyleSheet,

  Text,

} from 'react-native';

import AppContainer from '../../components/layout/AppContainer';

import InfoCard from '../../components/rank/InfoCard';

import colors from '../../theme/colors';

import useDriverStatus from '../../hooks/useDriverStatus';

export default function DriverQueueStatusScreen() {

  const {

    data: driver,

    loading,

    error,

    refresh,

  } = useDriverStatus();

  if (loading || !driver) {

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

      <ScrollView

        contentContainerStyle={styles.container}

      >

        <Text style={styles.title}>

          Driver Status

        </Text>

        <InfoCard

          icon="🚖"

          title="Taxi Registration"

          value={driver.registration}

        />

        <InfoCard

          icon="👤"

          title="Driver"

          value={driver.driverName}

        />

        <InfoCard

          icon="🔢"

          title="Queue Position"

          value={driver.queuePosition.toString()}

        />

        <InfoCard

          icon="👥"

          title="Passengers"

          value={`${driver.passengers}/${driver.capacity}`}

        />

        <InfoCard

          icon="🟢"

          title="Status"

          value={driver.status}

        />

        <InfoCard

          icon="⏱"

          title="Estimated Turn"

          value={driver.estimatedTurn}

        />

        <InfoCard

          icon="📍"

          title="Taxi Rank"

          value={driver.rank}

        />

      </ScrollView>

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

    marginBottom: 25,

  },

});