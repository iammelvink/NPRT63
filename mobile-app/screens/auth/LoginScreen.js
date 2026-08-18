import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from 'react-native';

import ScreenContainer from '../../components/layout/ScreenContainer';
import Card from '../../components/cards/PrimaryCard';
import AppLogo from '../../components/branding/AppLogo';
import PrimaryInput from '../../components/inputs/PrimaryInput';
import PasswordInput from '../../components/inputs/PasswordInput';
import PrimaryButton from '../../components/buttons/PrimaryButton';

import colors from '../../theme/colors';
import spacing from '../../theme/spacing';

import { loginSchema } from '../../utils/validators';
import * as AuthService from '../../services/authService';
import { useAuth } from '../../context/AuthContext';

export default function LoginScreen({ navigation }) {

  const { login } = useAuth();

  const [cellphone, setCellphone] = useState('');
  const [password, setPassword] = useState('');

  const [errors, setErrors] = useState({});

  const [loading, setLoading] = useState(false);

  async function handleLogin() {

    try {

      setErrors({});

      await loginSchema.validate(
        {
          cellphone,
          password,
        },
        {
          abortEarly: false,
        }
      );

      setLoading(true);

      const response = await AuthService.login(
        cellphone,
        password
      );

      await login(response.user);

    } catch (error) {

      if (error.inner) {

        const validationErrors = {};

        error.inner.forEach(item => {

          validationErrors[item.path] = item.message;

        });

        setErrors(validationErrors);

      } else {

        Alert.alert(
          'Login Failed',
          error.message
        );

      }

    } finally {

      setLoading(false);

    }

  }

  return (

    <ScreenContainer>

      <View style={styles.container}>

        <AppLogo />

        <Card style={styles.card}>

          <Text style={styles.title}>
            Welcome Back
          </Text>

          <Text style={styles.subtitle}>
            Sign in to continue
          </Text>

          <PrimaryInput
            label="Cell Number"
            placeholder="Enter cellphone number"
            value={cellphone}
            onChangeText={setCellphone}
            keyboardType="phone-pad"
            error={errors.cellphone}
          />

          <PasswordInput
            label="Password"
            placeholder="Enter Password"
            value={password}
            onChangeText={setPassword}
            error={errors.password}
          />

          <PrimaryButton
            title="LOGIN"
            loading={loading}
            onPress={handleLogin}
          />

          <TouchableOpacity
            style={styles.link}
            onPress={() => navigation.navigate('ForgotPassword')}
          >

            <Text style={styles.linkText}>
              Forgot Password?
            </Text>

          </TouchableOpacity>

          <TouchableOpacity
            style={styles.link}
            onPress={() => navigation.navigate('Register')}
          >

            <Text style={styles.linkText}>
              Create Account
            </Text>

          </TouchableOpacity>

        </Card>

        <Text style={styles.version}>
          E-RANK MOBILE v1.0.0
        </Text>

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

  card: {

    marginTop: 20,

  },

  title: {

    fontSize: 28,

    fontWeight: '800',

    color: colors.white,

    marginBottom: 5,

  },

  subtitle: {

    color: colors.textSecondary,

    marginBottom: 25,

    fontSize: 15,

  },

  link: {

    marginTop: 18,

    alignItems: 'center',

  },

  linkText: {

    color: colors.secondary,

    fontWeight: '700',

    fontSize: 14,

  },

  version: {

    textAlign: 'center',

    marginTop: 30,

    color: colors.placeholder,

    fontSize: 12,

  },

});