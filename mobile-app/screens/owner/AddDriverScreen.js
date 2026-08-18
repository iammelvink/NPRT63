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

import { addDriver } from '../../services/ownerDriverService';

import colors from '../../theme/colors';

export default function AddDriverScreen({

  navigation,

}) {

  const [fullName, setFullName] = useState('');

  const [cellphone, setCellphone] = useState('');

  const [loading, setLoading] = useState(false);

  async function handleSave() {

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

        'Please enter the driver cellphone number.'

      );

      return;

    }

    try {

      setLoading(true);

      await addDriver({

        fullName,

        cellphone,

        assignedTaxi: '',

      });

      Alert.alert(

        'Success',

        'Driver added successfully.',

        [

          {

            text:'OK',

            onPress:()=>navigation.goBack(),

          },

        ]

      );

    }

    catch(error){

      Alert.alert(

        'Error',

        'Unable to add driver.'

      );

    }

    finally{

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

          Add Driver

        </Text>

        <PrimaryCard>

          <PrimaryInput

            label="Driver Full Name"

            placeholder="Enter Full Name"

            value={fullName}

            onChangeText={setFullName}

          />

          <PrimaryInput

            label="Cellphone Number"

            placeholder="Enter Cellphone Number"

            keyboardType="phone-pad"

            value={cellphone}

            onChangeText={setCellphone}

          />

          <PrimaryButton

            title="SAVE DRIVER"

            loading={loading}

            onPress={handleSave}

          />

        </PrimaryCard>

      </ScrollView>

    </AppContainer>

  );

}

const styles = StyleSheet.create({

  container:{

    padding:20,

    paddingBottom:40,

  },

  title:{

    color:colors.white,

    fontSize:30,

    fontWeight:'900',

    marginBottom:25,

  },

});