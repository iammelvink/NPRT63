import React from 'react';

import {

  ScrollView,

  StyleSheet,

  Text,

} from 'react-native';

import AppContainer from '../../components/layout/AppContainer';

import EarningsCard from '../../components/cards/EarningsCard';

import useOwnerEarnings from '../../hooks/useOwnerEarnings';

import colors from '../../theme/colors';

export default function EarningsScreen() {

  const {

    earnings,

  } = useOwnerEarnings();

  return (

    <AppContainer>

      <ScrollView

        contentContainerStyle={styles.container}

        showsVerticalScrollIndicator={false}

      >

        <Text style={styles.title}>

          Earnings

        </Text>

        <EarningsCard

          icon="💰"

          title="Total Revenue"

          value={`R ${earnings.totalRevenue.toLocaleString()}`}

        />

        <EarningsCard

          icon="🚖"

          title="Completed Trips"

          value={earnings.totalTrips}

        />

        <EarningsCard

          icon="🧍"

          title="Passengers"

          value={earnings.totalPassengers}

        />

        <EarningsCard

          icon="📈"

          title="Average Revenue / Trip"

          value={`R ${earnings.averageTripRevenue.toFixed(2)}`}

        />

        <EarningsCard

          icon="👥"

          title="Average Passengers / Trip"

          value={earnings.averagePassengers.toFixed(1)}

        />

      </ScrollView>

    </AppContainer>

  );

}

const styles = StyleSheet.create({

  container:{

    padding:20,

    paddingBottom:40,

  },

  title:{

    color:colors.white,

    fontSize:32,

    fontWeight:'900',

    marginBottom:25,

  },

});