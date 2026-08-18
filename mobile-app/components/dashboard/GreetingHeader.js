import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import colors from '../../theme/colors';

export default function GreetingHeader({
  greeting,
  name,
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>
        👋 {greeting}
      </Text>

      <Text style={styles.name}>
        {name}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({

  container:{
    marginBottom:28,
  },

  greeting:{
    color:colors.textSecondary,
    fontSize:18,
  },

  name:{
    color:colors.white,
    fontSize:34,
    fontWeight:'900',
    marginTop:5,
  },

});