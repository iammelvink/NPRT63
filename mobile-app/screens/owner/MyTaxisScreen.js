import React from 'react';

import {
  ActivityIndicator,
  Alert,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import AppContainer from '../../components/layout/AppContainer';
import PrimaryButton from '../../components/buttons/PrimaryButton';
import TaxiCard from '../../components/cards/TaxiCard';

import useOwnerTaxis from '../../hooks/useOwnerTaxis';
import useOwnerDrivers from '../../hooks/useOwnerDrivers';

import {
  deleteTaxi,
} from '../../services/ownerService';

import colors from '../../theme/colors';

export default function MyTaxisScreen({

  navigation,

}) {

  const {

    taxis,

    loading,

    refresh,

  } = useOwnerTaxis();

  const {

    drivers,

  } = useOwnerDrivers();

  function getDriver(driverId) {

    return drivers.find(

      driver => driver.id === driverId

    );

  }

  function handleAddTaxi() {

    navigation.navigate('AddTaxi');

  }

  function handleEditTaxi(taxi) {

    navigation.navigate(

      'EditTaxi',

      {

        taxi,

      }

    );

  }

  function handleAssignDriver(taxi) {

    navigation.navigate(

      'AssignDriver',

      {

        taxi,

      }

    );

  }

  function handleDeleteTaxi(taxi) {

    Alert.alert(

      'Delete Taxi',

      `Delete ${taxi.registration}?`,

      [

        {

          text: 'Cancel',

          style: 'cancel',

        },

        {

          text: 'Delete',

          style: 'destructive',

          onPress: async () => {

            try {

              await deleteTaxi(taxi.id);

              refresh();

            }

            catch {

              Alert.alert(

                'Error',

                'Unable to delete taxi.'

              );

            }

          },

        },

      ]

    );

  }

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

      <FlatList

        data={taxis}

        keyExtractor={(item) => item.id}

        showsVerticalScrollIndicator={false}

        refreshing={loading}

        onRefresh={refresh}

        contentContainerStyle={styles.container}

        ListHeaderComponent={

          <View>

            <Text style={styles.title}>

              My Fleet

            </Text>

            <Text style={styles.subtitle}>

              Manage all taxis registered under your account.

            </Text>

            <PrimaryButton

              title="REGISTER NEW TAXI"

              onPress={handleAddTaxi}

            />

            <View style={styles.space} />

          </View>

        }

        renderItem={({ item }) => (

          <TaxiCard

            taxi={item}

            driver={getDriver(item.driverId)}

            onEdit={handleEditTaxi}

            onDelete={handleDeleteTaxi}

            onAssignDriver={handleAssignDriver}

          />

        )}

        ListEmptyComponent={

          <View style={styles.emptyContainer}>

            <Text style={styles.emptyTitle}>

              No Taxis Registered

            </Text>

            <Text style={styles.emptySubtitle}>

              Register your first taxi to begin managing your fleet.

            </Text>

            <View style={{ marginTop: 25 }}>

              <PrimaryButton

                title="REGISTER FIRST TAXI"

                onPress={handleAddTaxi}

              />

            </View>

          </View>

        }

      />

    </AppContainer>

  );

}

const styles = StyleSheet.create({

  container: {

    padding: 20,

    paddingBottom: 50,

  },

  loader: {

    flex: 1,

    justifyContent: 'center',

  },

  title: {

    color: colors.white,

    fontSize: 32,

    fontWeight: '900',

  },

  subtitle: {

    color: colors.textSecondary,

    fontSize: 15,

    marginTop: 6,

    marginBottom: 20,

  },

  space: {

    height: 20,

  },

  emptyContainer: {

    marginTop: 120,

    justifyContent: 'center',

    alignItems: 'center',

  },

  emptyTitle: {

    color: colors.white,

    fontSize: 24,

    fontWeight: '900',

  },

  emptySubtitle: {

    marginTop: 10,

    color: colors.placeholder,

    fontSize: 15,

    textAlign: 'center',

    lineHeight: 24,

    paddingHorizontal: 30,

  },

});