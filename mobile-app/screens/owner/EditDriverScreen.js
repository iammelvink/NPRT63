import React, { useState } from 'react';

import {
  ScrollView,
  StyleSheet,
  Text,
  Alert,
} from 'react-native';

import AppContainer from '../../components/layout/AppContainer';
import PrimaryCard from '../../components/cards/PrimaryCard';
import PrimaryInput from '../../components/inputs/PrimaryInput';
import PrimaryButton from '../../components/buttons/PrimaryButton';

import { updateDriver } from '../../services/ownerDriverService';

import colors from '../../theme/colors';

export default function EditDriverScreen({

  route,

  navigation,

}) {

  const { driver } = route.params;

  const [fullName, setFullName] = useState(driver.fullName);

  const [cellphone, setCellphone] = useState(driver.cellphone);

  const [loading, setLoading] = useState(false);

  async function handleUpdate() {

    if (!fullName.trim()) {

      Alert.alert(
        'Validation',
        'Please enter the driver name.'
      );

      return;

    }

    if (!cellphone.trim()) {

      Alert.alert(
        'Validation',
        'Please enter the cellphone number.'
      );

      return;

    }

    try {

      setLoading(true);

      await updateDriver({

        ...driver,

        fullName,

        cellphone,

      });

      Alert.alert(

        'Success',

        'Driver updated successfully.',

        [

          {

            text: 'OK',

            onPress: () => navigation.goBack(),

          },

        ]

      );

    }

    catch (error) {

      Alert.alert(

        'Error',

        'Unable to update driver.'

      );

    }

    finally {

      setLoading(false);

    }

  }

  return (

    <AppContainer>

      <ScrollView

        contentContainerStyle={styles.container}

        showsVerticalScrollIndicator={false}

      >

        <Text style={styles.title}>

          Edit Driver

        </Text>

        <PrimaryCard>

          <PrimaryInput

            label="Driver Full Name"

            value={fullName}

            onChangeText={setFullName}

            placeholder="Enter Full Name"

          />

          <PrimaryInput

            label="Cellphone Number"

            value={cellphone}

            onChangeText={setCellphone}

            keyboardType="phone-pad"

            placeholder="Enter Cellphone Number"

          />

          <PrimaryButton

            title="SAVE CHANGES"

            loading={loading}

            onPress={handleUpdate}

          />

        </PrimaryCard>

      </ScrollView>

    </AppContainer>

  );

}

const styles = StyleSheet.create({

  container: {

    padding: 20,

    paddingBottom: 40,

  },

  title: {

    color: colors.white,

    fontSize: 30,

    fontWeight: '900',

    marginBottom: 25,

  },

});