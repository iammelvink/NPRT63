import React from 'react';

import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import PremiumCard from './PremiumCard';
import InfoRow from '../common/InfoRow';

import colors from '../../theme/colors';

export default function RideCard({

  ride,

}) {

  return (

    <PremiumCard>

      <View style={styles.header}>

        <View>

          <Text style={styles.registration}>

            🚖 {ride.taxiRegistration}

          </Text>

          <Text style={styles.route}>

            {ride.route}

          </Text>

        </View>

        <View style={styles.badge}>

          <Text style={styles.badgeText}>

            {ride.status}

          </Text>

        </View>

      </View>

      <InfoRow

        label="Driver"

        value={ride.driverName}

      />

      <InfoRow

        label="Passengers"

        value={ride.passengers}

      />

      <InfoRow

        label="Fare"

        value={`R ${ride.fare}`}

      />

      <InfoRow

        label="Revenue"

        value={`R ${ride.revenue}`}

      />

      <InfoRow

        label="Departure"

        value={ride.departureTime}

      />

      <InfoRow

        label="Arrival"

        value={ride.arrivalTime}

      />

      <InfoRow

        label="Date"

        value={ride.date}

      />

    </PremiumCard>

  );

}

const styles = StyleSheet.create({

  header:{

    flexDirection:'row',

    justifyContent:'space-between',

    alignItems:'center',

    marginBottom:18,

  },

  registration:{

    color:colors.white,

    fontWeight:'900',

    fontSize:22,

  },

  route:{

    color:colors.textSecondary,

    marginTop:5,

    fontSize:14,

  },

  badge:{

    backgroundColor:'#00D26A',

    borderRadius:20,

    paddingHorizontal:14,

    paddingVertical:7,

  },

  badgeText:{

    color:'#fff',

    fontWeight:'800',

  },

});