import React, { useEffect, useRef } from 'react';
import {
  Animated,
  StyleSheet,
  View,
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import AppLogo from '../../components/branding/AppLogo';

import colors from '../../theme/colors';

export default function SplashScreen({ navigation }) {

  const opacity = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(0.85)).current;

  useEffect(() => {

    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 1200,
        useNativeDriver: true,
      }),

      Animated.spring(scale, {
        toValue: 1,
        friction: 5,
        tension: 60,
        useNativeDriver: true,
      }),

    ]).start();

    const timer = setTimeout(() => {
      navigation.replace('Login');
    }, 2500);

    return () => clearTimeout(timer);

  }, []);

  return (

    <LinearGradient
      colors={[
        colors.background,
        '#071A35',
        '#0D47A1',
      ]}
      style={styles.container}
    >

      <Animated.View
        style={{
          opacity,
          transform: [{ scale }],
        }}
      >

        <AppLogo />

      </Animated.View>

    </LinearGradient>

  );

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

});