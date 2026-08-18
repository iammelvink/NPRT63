import React from 'react';

import {

  StyleSheet,

  Text,

  View,

} from 'react-native';

import PremiumCard from './PremiumCard';

import colors from '../../theme/colors';

export default function EarningsCard({

  title,

  value,

  icon,

}) {

  return (

    <PremiumCard>

      <View style={styles.row}>

        <Text style={styles.icon}>

          {icon}

        </Text>

        <View>

          <Text style={styles.title}>

            {title}

          </Text>

          <Text style={styles.value}>

            {value}

          </Text>

        </View>

      </View>

    </PremiumCard>

  );

}

const styles = StyleSheet.create({

  row:{

    flexDirection:'row',

    alignItems:'center',

  },

  icon:{

    fontSize:34,

    marginRight:18,

  },

  title:{

    color:colors.textSecondary,

    fontSize:14,

  },

  value:{

    color:colors.white,

    fontSize:28,

    fontWeight:'900',

    marginTop:5,

  },

});