import React from 'react';

import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native';

import AppContainer from '../../../components/layout/AppContainer';
import InfoCard from '../../../components/rank/InfoCard';
import ActionButtons from '../../../components/rank/ActionButtons';

import useTaxiRank from '../../../hooks/useTaxiRank';

import colors from '../../../theme/colors';

export default function TaxiRankDetailsScreen({

  route,

  navigation,

}) {

  const { rankId } = route.params;

  const {

    rank,

    loading,

  } = useTaxiRank(rankId);

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

      <ScrollView

        contentContainerStyle={styles.container}

        showsVerticalScrollIndicator={false}

      >

        <Text style={styles.title}>

          {rank.name}

        </Text>

        <InfoCard
          icon="🚖"
          title="Available Taxis"
          value={rank.taxis.toString()}
        />

        <InfoCard
          icon="📍"
          title="Live Queue"
          value={rank.queue.toString()}
        />

        <InfoCard
          icon="👨"
          title="Current Driver"
          value={rank.driver}
        />

        <InfoCard
          icon="🚐"
          title="Taxi Registration"
          value={rank.registration}
        />

        <InfoCard
          icon="💰"
          title="Fare"
          value={rank.fare}
        />

        <InfoCard
          icon="🕘"
          title="Last Taxi Departure"
          value={rank.lastTaxi}
        />

        <InfoCard
          icon="🕐"
          title="Operating Hours"
          value={rank.operatingHours}
        />

        <InfoCard
          icon="🛡️"
          title="Safety Status"
          value={rank.safety}
        />

        <InfoCard
          icon="📞"
          title="Contact Number"
          value={rank.contact}
        />

        <InfoCard
          icon="📍"
          title="Rank Address"
          value={rank.address}
        />

        <ActionButtons
          navigation={navigation}
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