import React, { useState } from 'react';

import {
  ScrollView,
  StyleSheet,
  Text,
  Alert,
} from 'react-native';

import AppContainer from '../../components/layout/AppContainer';
import PremiumCard from '../../components/cards/PremiumCard';
import PrimaryInput from '../../components/inputs/PrimaryInput';
import PrimaryButton from '../../components/buttons/PrimaryButton';

import colors from '../../theme/colors';

import {
  addTaxi,
} from '../../services/ownerService';

export default function AddTaxiScreen({ navigation }) {

  const [registration, setRegistration] = useState('');
  const [make, setMake] = useState('Toyota');
  const [model, setModel] = useState('Quantum');
  const [year, setYear] = useState(
    new Date().getFullYear().toString()
  );
  const [color, setColor] = useState('White');
  const [capacity, setCapacity] = useState('');
  const [rank, setRank] = useState('');

  const [loading, setLoading] = useState(false);

  async function handleSave() {

    if (
      !registration.trim() ||
      !capacity.trim() ||
      !rank.trim()
    ) {

      Alert.alert(
        'Missing Information',
        'Please complete all required fields.'
      );

      return;

    }

    try {

      setLoading(true);

      await addTaxi({

        registration: registration.trim().toUpperCase(),

        make: make.trim(),

        model: model.trim(),

        year: Number(year),

        color: color.trim(),

        capacity: Number(capacity),

        rank: rank.trim(),

        driverId: '',

        status: 'Waiting',

        queuePosition: null,

        currentPassengers: 0,

        totalTrips: 0,

        totalRevenue: 0,

      });

      Alert.alert(

        'Taxi Registered',

        'The taxi has been added successfully.',

        [

          {

            text: 'OK',

            onPress: () => navigation.goBack(),

          },

        ]

      );

    }

    catch (error) {

      console.log(error);

      Alert.alert(

        'Error',

        'Something went wrong while saving the taxi.'

      );

    }

    finally {

      setLoading(false);

    }

  }

  return (

    <AppContainer>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
      >

        <Text style={styles.title}>
          Register Taxi
        </Text>

        <Text style={styles.subtitle}>
          Register a new taxi into your fleet.
        </Text>

        <PremiumCard>

          <PrimaryInput
            label="Registration Number"
            placeholder="CAA123NC"
            value={registration}
            onChangeText={setRegistration}
            autoCapitalize="characters"
          />

          <PrimaryInput
            label="Vehicle Make"
            placeholder="Toyota"
            value={make}
            onChangeText={setMake}
          />

          <PrimaryInput
            label="Vehicle Model"
            placeholder="Quantum"
            value={model}
            onChangeText={setModel}
          />

          <PrimaryInput
            label="Year"
            placeholder="2024"
            keyboardType="numeric"
            value={year}
            onChangeText={setYear}
          />

          <PrimaryInput
            label="Colour"
            placeholder="White"
            value={color}
            onChangeText={setColor}
          />

          <PrimaryInput
            label="Passenger Capacity"
            placeholder="15"
            keyboardType="numeric"
            value={capacity}
            onChangeText={setCapacity}
          />

          <PrimaryInput
            label="Taxi Rank"
            placeholder="Kimberley Taxi Rank"
            value={rank}
            onChangeText={setRank}
          />

          <PrimaryButton
            title="REGISTER TAXI"
            loading={loading}
            onPress={handleSave}
          />

        </PremiumCard>

      </ScrollView>

    </AppContainer>

  );

}

const styles = StyleSheet.create({

  container: {

    padding: 20,
    paddingBottom: 50,

  },

  title: {

    color: colors.white,
    fontSize: 30,
    fontWeight: '900',

  },

  subtitle: {

    color: colors.textSecondary,
    fontSize: 15,
    marginTop: 6,
    marginBottom: 25,

  },

});