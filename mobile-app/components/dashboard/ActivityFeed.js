import React from 'react';

import {

  FlatList,

  Text,

  StyleSheet,

} from 'react-native';

import ActivityCard from '../cards/ActivityCard';

import useActivityFeed from '../../hooks/useActivityFeed';

import colors from '../../theme/colors';

export default function ActivityFeed() {

  const {

    activities,

  } = useActivityFeed();

  return (

    <>

      <Text style={styles.title}>

        Recent Activity

      </Text>

      <FlatList

        data={activities}

        keyExtractor={(item) => item.id}

        scrollEnabled={false}

        renderItem={({ item }) => (

          <ActivityCard

            activity={item}

          />

        )}

      />

    </>

  );

}

const styles = StyleSheet.create({

  title: {

    color: colors.white,

    fontSize: 24,

    fontWeight: '900',

    marginTop: 30,

    marginBottom: 18,

  },

});