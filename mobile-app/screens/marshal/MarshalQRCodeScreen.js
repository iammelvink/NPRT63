import React from 'react';

import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import QRCode from 'react-native-qrcode-svg';

import AppContainer from '../../components/layout/AppContainer';
import PrimaryButton from '../../components/buttons/PrimaryButton';

import colors from '../../theme/colors';

import useMarshalQRCode from '../../hooks/useMarshalQRCode';

export default function MarshalQRCodeScreen({ navigation }) {

  const {
    qrData,
    loading,
    refresh,
  } = useMarshalQRCode();

  if (loading) {

    return (
      <AppContainer>
        <ActivityIndicator
          size="large"
          color={colors.primary}
          style={styles.loader}
        />
      </AppContainer>
    );

  }

  return (

    <AppContainer>

      <View style={styles.container}>

        <Text style={styles.title}>
          Driver Check-In QR Code
        </Text>

        <Text style={styles.subtitle}>
          Drivers must scan this QR code when they physically arrive at the taxi rank.
        </Text>

        <View style={styles.qrContainer}>

          <QRCode
            value={JSON.stringify(qrData)}
            size={240}
          />

        </View>

        <Text style={styles.rank}>
          {qrData.rankName}
        </Text>

        <Text style={styles.info}>
          Marshal: {qrData.marshalName}
        </Text>

        <Text style={styles.info}>
          Rank ID: {qrData.rankId}
        </Text>

        <Text style={styles.info}>
          Generated: {new Date(qrData.generatedAt).toLocaleTimeString()}
        </Text>

        <View style={styles.buttonSpacing}>

          <PrimaryButton
            title="REFRESH QR CODE"
            onPress={refresh}
          />

        </View>

        <View style={styles.buttonSpacing}>

          <PrimaryButton
            title="SIMULATE DRIVER SCAN"
            onPress={() => navigation.navigate('DriverCheckIn')}
          />

        </View>

      </View>

    </AppContainer>

  );

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  loader: {
    flex: 1,
    justifyContent: 'center',
  },

  title: {
    fontSize: 28,
    fontWeight: '900',
    color: colors.white,
    textAlign: 'center',
    marginBottom: 10,
  },

  subtitle: {
    color: colors.textSecondary,
    textAlign: 'center',
    marginBottom: 25,
    lineHeight: 22,
  },

  qrContainer: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 20,
    marginBottom: 25,
  },

  rank: {
    color: colors.primary,
    fontSize: 22,
    fontWeight: '800',
    marginBottom: 8,
  },

  info: {
    color: colors.white,
    fontSize: 16,
    marginBottom: 6,
  },

  buttonSpacing: {
    width: '100%',
    marginTop: 15,
  },

});