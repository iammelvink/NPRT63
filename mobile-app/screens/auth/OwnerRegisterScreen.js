import React, { useState } from 'react';

import {
  View,
  Text,
  StyleSheet,
  Alert,
} from 'react-native';

import ScreenContainer from '../../components/layout/ScreenContainer';
import PrimaryCard from '../../components/cards/PrimaryCard';
import PrimaryInput from '../../components/inputs/PrimaryInput';
import PasswordInput from '../../components/inputs/PasswordInput';
import PrimaryButton from '../../components/buttons/PrimaryButton';

import colors from '../../theme/colors';
import spacing from '../../theme/spacing';

import { ownerRegisterSchema } from '../../utils/validators';
import * as AuthService from '../../services/authService';
import { useAuth } from '../../context/AuthContext';

export default function OwnerRegisterScreen() {

  const { login } = useAuth();

  const [fullName, setFullName] = useState('');
  const [cellphone, setCellphone] = useState('');
  const [rankName, setRankName] = useState('');
  const [password, setPassword] = useState('');

  const [errors, setErrors] = useState({});

  const [loading, setLoading] = useState(false);

  async function handleRegister() {

    try {

      setErrors({});

      await ownerRegisterSchema.validate(

        {
          fullName,
          cellphone,
          rankName,
          password,
        },

        {
          abortEarly: false,
        }

      );

      setLoading(true);

      const user = await AuthService.registerOwner({

        fullName,
        cellphone,
        rankName,
        password,

      });

      await login(user);

      Alert.alert(
        'Registration Successful',
        'Welcome to E-RANK!'
      );

    }

    catch (error) {

      if (error.inner) {

        const validationErrors = {};

        error.inner.forEach(item => {

          validationErrors[item.path] = item.message;

        });

        setErrors(validationErrors);

      }

      else {

        Alert.alert(
          'Registration Failed',
          error.message,
        );

      }

    }

    finally {

      setLoading(false);

    }

  }

  return (

    <ScreenContainer>

      <View style={styles.container}>

        <PrimaryCard>

          <Text style={styles.title}>

            Taxi Owner Registration

          </Text>

          <PrimaryInput
            label="Full Name"
            placeholder="Enter Full Name"
            value={fullName}
            onChangeText={setFullName}
            error={errors.fullName}
          />

          <PrimaryInput
            label="Cell Number"
            placeholder="0712345678"
            value={cellphone}
            onChangeText={setCellphone}
            keyboardType="phone-pad"
            error={errors.cellphone}
          />

          <PrimaryInput
            label="Taxi Rank Name"
            placeholder="Kimberley Taxi Rank"
            value={rankName}
            onChangeText={setRankName}
            error={errors.rankName}
          />

          <PasswordInput
            label="Password"
            placeholder="Create Password"
            value={password}
            onChangeText={setPassword}
            error={errors.password}
          />

          <PrimaryButton
            title="REGISTER"
            loading={loading}
            onPress={handleRegister}
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

    color: colors.white,

    fontSize: 26,

    fontWeight: '800',

    marginBottom: 20,

  },

});