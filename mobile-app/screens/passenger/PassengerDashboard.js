import React from 'react';

import {
  ScrollView,
  StyleSheet,
  ActivityIndicator,
  Text,
} from 'react-native';

import AppContainer from '../../components/layout/AppContainer';

import GreetingHeader from '../../components/dashboard/GreetingHeader';
import SearchCard from '../../components/dashboard/SearchCard';
import StatsGrid from '../../components/dashboard/StatsGrid';
import NewsCard from '../../components/dashboard/NewsCard';
import QuickActions from '../../components/dashboard/QuickActions';

import PassengerQueueCard from '../../components/cards/PassengerQueueCard';

import colors from '../../theme/colors';

import usePassengerDashboard from '../../hooks/usePassengerDashboard';

export default function PassengerDashboard() {

  const {

    data,

    loading,

  } = usePassengerDashboard();

  if (loading || !data) {

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

        showsVerticalScrollIndicator={false}

        contentContainerStyle={styles.container}

      >

        <GreetingHeader

          greeting={data.greeting}

          name={data.passengerName}

        />

        <SearchCard

          onPress={() => {}}

        />

        <StatsGrid

          dashboard={data.dashboard}

        />

        <Text style={styles.sectionTitle}>

          🚖 Live Queue

        </Text>

        {

          data.queue.length === 0 ? (

            <Text style={styles.emptyText}>

              No taxis are currently available.

            </Text>

          ) : (

            data.queue.map(item => (

              <PassengerQueueCard

                key={item.id}

                item={item}

              />

            ))

          )

        }

        <NewsCard

          news={data.news}

        />

        <QuickActions />

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

  sectionTitle: {

    color: colors.white,

    fontSize: 24,

    fontWeight: '900',

    marginTop: 30,

    marginBottom: 18,

  },

  emptyText: {

    color: colors.textSecondary,

    textAlign: 'center',

    marginBottom: 25,

    fontSize: 16,

  },

});