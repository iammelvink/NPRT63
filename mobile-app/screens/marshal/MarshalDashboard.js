import React from 'react';

import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from 'react-native';

import AppContainer from '../../components/layout/AppContainer';
import DashboardCard from '../../components/cards/DashboardCard';
import PrimaryButton from '../../components/buttons/PrimaryButton';

import useMarshalDashboard from '../../hooks/useMarshalDashboard';

import colors from '../../theme/colors';

export default function MarshalDashboard({ navigation }) {

  const {
    data,
    loading,
  } = useMarshalDashboard();

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
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >

        <Text style={styles.greeting}>
          Welcome,
        </Text>

        <Text style={styles.name}>
          {data.marshalName}
        </Text>

        <Text style={styles.rank}>
          {data.rankName}
        </Text>

        <View style={styles.row}>

          <DashboardCard
            icon="🚖"
            title="Queue"
            value={String(data.stats.queue)}
            subtitle="Taxis"
          />

          <DashboardCard
            icon="🟠"
            title="Loading"
            value={String(data.stats.loading)}
            subtitle="Taxis"
          />

        </View>

        <View style={styles.row}>

          <DashboardCard
            icon="🚕"
            title="Departed"
            value={String(data.stats.departed)}
            subtitle="Today"
          />

          <DashboardCard
            icon="✅"
            title="Full"
            value={String(data.stats.full)}
            subtitle="Ready"
          />

        </View>

        <Text style={styles.section}>
          Queue Management
        </Text>

        <PrimaryButton
          title="DRIVER CHECK-IN"
          onPress={() =>
            navigation.navigate('DriverCheckIn')
          }
        />

        <View style={styles.space} />

        <PrimaryButton
          title="PASSENGER LOADING"
          onPress={() =>
            navigation.navigate('PassengerLoading')
          }
        />

        <View style={styles.space} />

        <PrimaryButton
          title="LIVE QUEUE"
          onPress={() =>
            navigation.navigate('LiveQueue')
          }
        />

        <View style={styles.space} />

        <PrimaryButton
          title="QR CODE"
          onPress={() =>
            navigation.navigate('MarshalQRCode')
          }
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

  greeting: {

    color: colors.textSecondary,

    fontSize: 18,

  },

  name: {

    color: colors.white,

    fontSize: 32,

    fontWeight: '900',

    marginTop: 5,

  },

  rank: {

    color: colors.primary,

    marginTop: 5,

    marginBottom: 25,

  },

  row: {

    flexDirection: 'row',

  },

  section: {

    color: colors.white,

    fontSize: 22,

    fontWeight: '900',

    marginTop: 30,

    marginBottom: 20,

  },

  space: {

    height: 15,

  },

});