import React from 'react';

import {
  View,
  StyleSheet,
} from 'react-native';

import PrimaryButton from '../buttons/PrimaryButton';

export default function ActionButtons({

  navigation,

}) {

  return (

    <View style={styles.container}>

      <PrimaryButton

        title="GET DIRECTIONS"

        onPress={() => {

          navigation.navigate('Directions');

        }}

      />

      <View style={styles.space} />

      <PrimaryButton

        title="VIEW SAFETY ALERTS"

        onPress={() => {

          navigation.navigate('SafetyAlerts');

        }}

      />

      <View style={styles.space} />

      <PrimaryButton

        title="VIEW NEWS"

        onPress={() => {

          navigation.navigate('News');

        }}

      />

    </View>

  );

}

const styles = StyleSheet.create({

  container: {

    marginTop: 20,

  },

  space: {

    height: 15,

  },

});