import React from 'react';

import {
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import AppContainer from '../../components/layout/AppContainer';

import RideCard from '../../components/cards/RideCard';

import useRideHistory from '../../hooks/useRideHistory';

import colors from '../../theme/colors';

export default function RideHistoryScreen() {

  const {

    rides,

    refreshing,

    refresh,

  } = useRideHistory();

  return (

    <AppContainer>

      <FlatList

        data={rides}

        keyExtractor={(item)=>item.id}

        refreshing={refreshing}

        onRefresh={refresh}

        showsVerticalScrollIndicator={false}

        contentContainerStyle={styles.container}

        ListHeaderComponent={

          <>

            <Text style={styles.title}>

              Ride History

            </Text>

            <Text style={styles.subtitle}>

              Completed taxi trips and earnings.

            </Text>

          </>

        }

        renderItem={({item})=>(

          <RideCard

            ride={item}

          />

        )}

        ListEmptyComponent={

          <View style={styles.empty}>

            <Text style={styles.emptyTitle}>

              No Ride History

            </Text>

            <Text style={styles.emptyText}>

              Completed rides will appear here.

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

  title:{

    color:colors.white,

    fontSize:32,

    fontWeight:'900',

  },

  subtitle:{

    color:colors.textSecondary,

    marginTop:8,

    marginBottom:25,

    fontSize:15,

  },

  empty:{

    marginTop:100,

    alignItems:'center',

  },

  emptyTitle:{

    color:colors.white,

    fontWeight:'900',

    fontSize:22,

  },

  emptyText:{

    color:colors.textSecondary,

    marginTop:8,

    textAlign:'center',

    fontSize:15,

  },

});