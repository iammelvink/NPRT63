import React from 'react';

import { View, StyleSheet } from 'react-native';

import DashboardCard from '../cards/DashboardCard';

export default function StatsGrid({

  dashboard,

}) {

  return (

    <>

      <View style={styles.row}>

        <DashboardCard

          icon="🚖"

          title="Available Taxis"

          value={dashboard.availableTaxis.toString()}

          subtitle="Ready To Load"

        />

        <DashboardCard

          icon="📍"

          title="Live Queue"

          value={dashboard.liveQueue.toString()}

          subtitle="Currently Waiting"

        />

      </View>

      <View style={styles.row}>

        <DashboardCard

          icon="🕐"

          title="Operating Hours"

          value={dashboard.operatingHours}

          subtitle="Today's Schedule"

        />

        <DashboardCard

          icon="🕘"

          title="Last Taxi"

          value={dashboard.lastTaxiDeparture}

          subtitle="Last Recorded Departure"

        />

      </View>

    </>

  );

}

const styles = StyleSheet.create({

  row: {

    flexDirection: 'row',

  },

});