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
import DriverCard from '../../components/cards/DriverCard';

import useOwnerDrivers from '../../hooks/useOwnerDrivers';

import {
  deleteDriver,
} from '../../services/ownerDriverService';

import colors from '../../theme/colors';

export default function MyDriversScreen({

  navigation,

}) {

  const {

    drivers,

    loading,

    refresh,

  } = useOwnerDrivers();

  function handleAddDriver() {

    navigation.navigate('AddDriver');

  }

  function handleEdit(driver) {

    navigation.navigate(

      'EditDriver',

      {

        driver,

      }

    );

  }

  function handleDelete(driver) {

    Alert.alert(

      'Delete Driver',

      `Are you sure you want to delete ${driver.fullName}?`,

      [

        {

          text:'Cancel',

          style:'cancel',

        },

        {

          text:'Delete',

          style:'destructive',

          onPress:async()=>{

            await deleteDriver(driver.id);

            refresh();

          }

        }

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

        data={drivers}

        keyExtractor={(item)=>item.id}

        showsVerticalScrollIndicator={false}

        contentContainerStyle={styles.container}

        onRefresh={refresh}

        refreshing={loading}

        ListHeaderComponent={

          <View>

            <Text style={styles.title}>

              My Drivers

            </Text>

            <Text style={styles.subtitle}>

              Manage all drivers linked to your taxis.

            </Text>

            <PrimaryButton

              title="ADD DRIVER"

              onPress={handleAddDriver}

            />

            <View style={styles.space}/>

          </View>

        }

        renderItem={({item})=>(

          <DriverCard

            driver={item}

            onEdit={handleEdit}

            onDelete={handleDelete}

          />

        )}

        ListEmptyComponent={

          <View style={styles.emptyContainer}>

            <Text style={styles.emptyTitle}>

              No Drivers Found

            </Text>

            <Text style={styles.emptySubtitle}>

              Add your first driver to begin managing your taxis.

            </Text>

          </View>

        }

      />

    </AppContainer>

  );

}

const styles = StyleSheet.create({

  container:{

    padding:20,

    paddingBottom:40,

  },

  loader:{

    flex:1,

    justifyContent:'center',

  },

  title:{

    color:colors.white,

    fontSize:30,

    fontWeight:'900',

  },

  subtitle:{

    color:colors.textSecondary,

    marginTop:6,

    marginBottom:20,

    fontSize:15,

  },

  space:{

    height:20,

  },

  emptyContainer:{

    marginTop:100,

    alignItems:'center',

    justifyContent:'center',

  },

  emptyTitle:{

    color:colors.white,

    fontSize:20,

    fontWeight:'800',

  },

  emptySubtitle:{

    marginTop:10,

    textAlign:'center',

    color:colors.placeholder,

    fontSize:14,

    lineHeight:22,

    paddingHorizontal:20,

  },

});