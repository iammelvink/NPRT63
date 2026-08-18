import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import ScreenContainer from '../../components/layout/ScreenContainer';
import PrimaryCard from '../../components/cards/PrimaryCard';
import PrimaryButton from '../../components/buttons/PrimaryButton';

import colors from '../../theme/colors';
import spacing from '../../theme/spacing';

export default function RegisterScreen({ navigation }) {

  return (

    <ScreenContainer>

      <View style={styles.container}>

        <PrimaryCard>

          <Text style={styles.title}>
            Create Account
          </Text>

          <Text style={styles.subtitle}>
            Select your account type
          </Text>

          <PrimaryButton
            title="PASSENGER"
            onPress={() =>
              navigation.navigate('PassengerRegister')
            }
          />

          <View style={styles.space} />

          <PrimaryButton
            title="MARSHAL"
            onPress={() =>
              navigation.navigate('MarshalRegister')
            }
          />

          <View style={styles.space} />

          <PrimaryButton
            title="TAXI OWNER"
            onPress={() =>
              navigation.navigate('OwnerRegister')
            }
          />

        </PrimaryCard>

      </View>

    </ScreenContainer>

  );

}

const styles = StyleSheet.create({

  container: {

    flex: 1,

    justifyContent: 'center',

    padding: spacing.lg,

  },

  title: {

    fontSize: 28,

    fontWeight: '800',

    color: colors.white,

    marginBottom: 8,

    textAlign: 'center',

  },

  subtitle: {

    color: colors.textSecondary,

    textAlign: 'center',

    marginBottom: 30,

  },

  space: {

    height: 15,

  },

});