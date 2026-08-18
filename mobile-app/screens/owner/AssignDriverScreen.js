import React, { useEffect, useState } from 'react';

import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  Alert,
  View,
} from 'react-native';

import AppContainer from '../../components/layout/AppContainer';
import PremiumCard from '../../components/cards/PremiumCard';
import PrimaryButton from '../../components/buttons/PrimaryButton';

import {
  getOwnerDrivers,
} from '../../services/ownerDriverService';

import {
  assignDriver,
} from '../../services/ownerService';

import colors from '../../theme/colors';

export default function AssignDriverScreen({

  route,
  navigation,

}) {

  const { taxi } = route.params;

  const [drivers, setDrivers] = useState([]);

  const [selectedDriver, setSelectedDriver] = useState(
    taxi.driverId || ''
  );

  const [loading, setLoading] = useState(false);

  useEffect(() => {

    loadDrivers();

  }, []);

  async function loadDrivers() {

    try {

      const response = await getOwnerDrivers();

      setDrivers(response);

    }

    catch (error) {

      console.log(error);

      Alert.alert(
        'Error',
        'Unable to load drivers.'
      );

    }

  }

  async function handleSave() {

    if (!selectedDriver) {

      Alert.alert(
        'Driver Required',
        'Please select a driver.'
      );

      return;

    }

    try {

      setLoading(true);

      await assignDriver(
        taxi.id,
        selectedDriver
      );

      Alert.alert(
        'Success',
        'Driver assigned successfully.',
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
        'Unable to assign driver.'
      );

    }

    finally {

      setLoading(false);

    }

  }

  function renderDriver({ item }) {

    const selected = selectedDriver === item.id;

    return (

      <TouchableOpacity
        activeOpacity={0.85}
        onPress={() => setSelectedDriver(item.id)}
      >

        <PremiumCard
          style={[
            styles.card,
            selected && styles.selected,
          ]}
        >

          <Text style={styles.name}>
            {item.fullName}
          </Text>

          <Text style={styles.info}>
            📞 {item.cellphone}
          </Text>

          <Text style={styles.info}>
            🪪 {item.licenseNumber}
          </Text>

        </PremiumCard>

      </TouchableOpacity>

    );

  }

  return (

    <AppContainer>

      <FlatList

        data={drivers}

        keyExtractor={(item) => item.id}

        showsVerticalScrollIndicator={false}

        contentContainerStyle={styles.container}

        ListHeaderComponent={

          <>

            <Text style={styles.title}>
              Assign Driver
            </Text>

            <PremiumCard>

              <Text style={styles.label}>
                Taxi Registration
              </Text>

              <Text style={styles.value}>
                {taxi.registration}
              </Text>

              <Text style={styles.label}>
                Capacity
              </Text>

              <Text style={styles.value}>
                {taxi.capacity} Seater
              </Text>

              <Text style={styles.label}>
                Taxi Rank
              </Text>

              <Text style={styles.value}>
                {taxi.rank}
              </Text>

            </PremiumCard>

            <Text style={styles.section}>
              Select Driver
            </Text>

          </>

        }

        renderItem={renderDriver}

        ListFooterComponent={

          <View style={styles.footer}>

            <PrimaryButton
              title="ASSIGN DRIVER"
              loading={loading}
              onPress={handleSave}
            />

          </View>

        }

      />

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
    marginBottom: 20,

  },

  section: {

    color: colors.white,
    fontSize: 22,
    fontWeight: '800',
    marginTop: 25,
    marginBottom: 15,

  },

  label: {

    color: colors.textSecondary,
    fontSize: 12,
    marginTop: 8,

  },

  value: {

    color: colors.white,
    fontWeight: '700',
    fontSize: 16,
    marginTop: 4,

  },

  card: {

    marginBottom: 15,

  },

  selected: {

    borderWidth: 2,
    borderColor: colors.primary,

  },

  name: {

    color: colors.white,
    fontSize: 18,
    fontWeight: '800',

  },

  info: {

    color: colors.textSecondary,
    marginTop: 8,
    fontSize: 14,

  },

  footer: {

    marginTop: 20,

  },

});