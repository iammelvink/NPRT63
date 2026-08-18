import React from 'react';

import {

  View,

  Text,

  StyleSheet,

} from 'react-native';

import PremiumCard from './PremiumCard';

import colors from '../../theme/colors';

export default function ActivityCard({

  activity,

}) {

  function getIcon() {

    switch (activity.type) {

      case 'taxi':

        return '🚖';

      case 'driver':

        return '👨‍✈️';

      case 'marshal':

        return '🚦';

      case 'passenger':

        return '🧍';

      case 'warning':

        return '⚠️';

      default:

        return '📌';

    }

  }

  return (

    <PremiumCard>

      <View style={styles.row}>

        <Text style={styles.icon}>

          {getIcon()}

        </Text>

        <View style={styles.content}>

          <Text style={styles.title}>

            {activity.title}

          </Text>

          <Text style={styles.description}>

            {activity.description}

          </Text>

          <Text style={styles.time}>

            {activity.time}

          </Text>

        </View>

      </View>

    </PremiumCard>

  );

}

const styles = StyleSheet.create({

  row: {

    flexDirection: 'row',

    alignItems: 'flex-start',

  },

  icon: {

    fontSize: 28,

    marginRight: 15,

  },

  content: {

    flex: 1,

  },

  title: {

    color: colors.white,

    fontSize: 17,

    fontWeight: '800',

  },

  description: {

    color: colors.textSecondary,

    marginTop: 5,

    fontSize: 14,

    lineHeight: 20,

  },

  time: {

    color: colors.placeholder,

    marginTop: 10,

    fontSize: 12,

  },

});