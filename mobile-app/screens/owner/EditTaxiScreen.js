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

import {
  updateTaxi,
} from '../../services/ownerService';

import colors from '../../theme/colors';

export default function EditTaxiScreen({

  route,
  navigation,

}) {

  const { taxi } = route.params;

  const [registration, setRegistration] = useState(
    taxi.registration
  );

  const [make, setMake] = useState(
    taxi.make || 'Toyota'
  );

  const [model, setModel] = useState(
    taxi.model || 'Quantum'
  );

  const [year, setYear] = useState(
    (taxi.year || new Date().getFullYear()).toString()
  );

  const [color, setColor] = useState(
    taxi.color || 'White'
  );

  const [capacity, setCapacity] = useState(
    taxi.capacity.toString()
  );

  const [rank, setRank] = useState(
    taxi.rank
  );

  const [loading, setLoading] = useState(false);

  async function handleUpdate() {

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

      await updateTaxi({

        ...taxi,

        registration: registration.trim().toUpperCase(),

        make: make.trim(),

        model: model.trim(),

        year: Number(year),

        color: color.trim(),

        capacity: Number(capacity),

        rank: rank.trim(),

      });

      Alert.alert(

        'Success',

        'Taxi updated successfully.',

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

        'Unable to update taxi.'

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

          Edit Taxi

        </Text>

        <Text style={styles.subtitle}>

          Update your taxi information.

        </Text>

        <PremiumCard>

          <PrimaryInput

            label="Registration Number"

            value={registration}

            onChangeText={setRegistration}

            autoCapitalize="characters"

            placeholder="CAA123NC"

          />

          <PrimaryInput

            label="Vehicle Make"

            value={make}

            onChangeText={setMake}

            placeholder="Toyota"

          />

          <PrimaryInput

            label="Vehicle Model"

            value={model}

            onChangeText={setModel}

            placeholder="Quantum"

          />

          <PrimaryInput

            label="Year"

            value={year}

            keyboardType="numeric"

            onChangeText={setYear}

            placeholder="2024"

          />

          <PrimaryInput

            label="Colour"

            value={color}

            onChangeText={setColor}

            placeholder="White"

          />

          <PrimaryInput

            label="Passenger Capacity"

            value={capacity}

            keyboardType="numeric"

            onChangeText={setCapacity}

            placeholder="15"

          />

          <PrimaryInput

            label="Taxi Rank"

            value={rank}

            onChangeText={setRank}

            placeholder="Kimberley Taxi Rank"

          />

          <PrimaryButton

            title="SAVE CHANGES"

            loading={loading}

            onPress={handleUpdate}

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