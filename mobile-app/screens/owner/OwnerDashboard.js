import React from 'react';

import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from 'react-native';

import AppContainer from '../../components/layout/AppContainer';
import PremiumCard from '../../components/cards/PremiumCard';
import PrimaryButton from '../../components/buttons/PrimaryButton';
import ActivityFeed from '../../components/dashboard/ActivityFeed';

import useOwnerDashboard from '../../hooks/useOwnerDashboard';

import colors from '../../theme/colors';

export default function OwnerDashboard({

  navigation,

}) {

  const {

    dashboard,

    loading,

    refresh,

  } = useOwnerDashboard();

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

        showsVerticalScrollIndicator={false}

        contentContainerStyle={styles.container}

      >

        <Text style={styles.title}>

          Taxi Rank Operations Center

        </Text>

        <Text style={styles.subtitle}>

          Monitor your fleet, drivers and daily operations.

        </Text>

        {/* Fleet Summary */}

        <PremiumCard>

          <Text style={styles.cardTitle}>

            Fleet Summary

          </Text>

          <View style={styles.row}>

            <View style={styles.metric}>

              <Text style={styles.metricValue}>

                {dashboard.totalTaxis}

              </Text>

              <Text style={styles.metricLabel}>

                Registered Taxis

              </Text>

            </View>

            <View style={styles.metric}>

              <Text style={styles.metricValue}>

                {dashboard.totalDrivers}

              </Text>

              <Text style={styles.metricLabel}>

                Drivers

              </Text>

            </View>

          </View>

        </PremiumCard>

        {/* Taxi Status */}

        <PremiumCard>

          <Text style={styles.cardTitle}>

            Taxi Status

          </Text>

          <View style={styles.statusRow}>

            <View style={styles.statusCard}>

              <Text style={styles.statusNumber}>

                {dashboard.active}

              </Text>

              <Text style={styles.statusText}>

                Active

              </Text>

            </View>

            <View style={styles.statusCard}>

              <Text style={styles.statusNumber}>

                {dashboard.waiting}

              </Text>

              <Text style={styles.statusText}>

                Waiting

              </Text>

            </View>

          </View>

          <View style={styles.statusRow}>

            <View style={styles.statusCard}>

              <Text style={styles.statusNumber}>

                {dashboard.loading}

              </Text>

              <Text style={styles.statusText}>

                Loading

              </Text>

            </View>

            <View style={styles.statusCard}>

              <Text style={styles.statusNumber}>

                {dashboard.offline}

              </Text>

              <Text style={styles.statusText}>

                Offline

              </Text>

            </View>

          </View>

        </PremiumCard>

        {/* Revenue */}

        <PremiumCard>

          <Text style={styles.cardTitle}>

            Today's Revenue

          </Text>

          <Text style={styles.money}>

            R {dashboard.earnings.toLocaleString()}

          </Text>

          <Text style={styles.smallText}>

            Revenue analytics coming soon.

          </Text>

        </PremiumCard>

        {/* Trips */}

        <PremiumCard>

          <Text style={styles.cardTitle}>

            Today's Trips

          </Text>

          <Text style={styles.money}>

            {dashboard.trips}

          </Text>

          <Text style={styles.smallText}>

            Trip history module coming soon.

          </Text>

        </PremiumCard>

        {/* Quick Actions */}

        <Text style={styles.sectionTitle}>

          Quick Actions

        </Text>

        <PrimaryButton

          title="MANAGE TAXIS"

          onPress={() => navigation.navigate('MyTaxis')}

        />

        <View style={styles.space} />

        <PrimaryButton

          title="MANAGE DRIVERS"

          onPress={() => navigation.navigate('MyDrivers')}

        />

        {/* Recent Activity */}

        <ActivityFeed />

      </ScrollView>

    </AppContainer>

  );

}

const styles = StyleSheet.create({

  container: {

    padding: 20,

    paddingBottom: 60,

  },

  loader: {

    flex: 1,

    justifyContent: 'center',

  },

  title: {

    color: colors.white,

    fontSize: 32,

    fontWeight: '900',

  },

  subtitle: {

    color: colors.textSecondary,

    fontSize: 15,

    marginTop: 8,

    marginBottom: 25,

  },

  cardTitle: {

    color: colors.white,

    fontSize: 19,

    fontWeight: '800',

    marginBottom: 18,

  },

  row: {

    flexDirection: 'row',

    justifyContent: 'space-around',

  },

  metric: {

    alignItems: 'center',

  },

  metricValue: {

    color: colors.primary,

    fontSize: 36,

    fontWeight: '900',

  },

  metricLabel: {

    color: colors.textSecondary,

    marginTop: 8,

    fontSize: 14,

  },

  statusRow: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    marginBottom: 15,

  },

  statusCard: {

    width: '48%',

    backgroundColor: colors.background,

    borderRadius: 18,

    paddingVertical: 18,

    alignItems: 'center',

  },

  statusNumber: {

    color: colors.primary,

    fontSize: 28,

    fontWeight: '900',

  },

  statusText: {

    color: colors.textSecondary,

    marginTop: 6,

    fontSize: 14,

  },

  money: {

    color: colors.primary,

    fontSize: 36,

    fontWeight: '900',

  },

  smallText: {

    color: colors.textSecondary,

    marginTop: 8,

    fontSize: 14,

  },

  sectionTitle: {

    color: colors.white,

    fontSize: 24,

    fontWeight: '900',

    marginTop: 25,

    marginBottom: 18,

  },

  space: {

    height: 15,

  },

});