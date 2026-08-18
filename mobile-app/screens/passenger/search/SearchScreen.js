import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

import AppContainer from '../../../components/layout/AppContainer';
import SearchBar from '../../../components/search/SearchBar';
import PopularDestinations from '../../../components/search/PopularDestinations';
import RecentSearches from '../../../components/search/RecentSearches';
import DestinationCard from '../../../components/search/DestinationCard';

import useSearch from '../../../hooks/useSearch';

import colors from '../../../theme/colors';

export default function SearchScreen({ navigation }) {

  const {
    query,
    results,
    popular,
    loading,
    search,
  } = useSearch();

  const [recentSearches, setRecentSearches] = useState([]);

  function handleDestinationSelect(destination) {

    if (!recentSearches.includes(destination.name)) {

      setRecentSearches(previous => [

        destination.name,

        ...previous,

      ]);

    }

    navigation.navigate('TaxiRankDetails', {
      rankId: destination.id,
    });

  }

  function handleRecentSearch(item) {

    search(item);

  }

  return (

    <AppContainer>

      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >

        <SearchBar
          value={query}
          onChangeText={search}
        />

        <RecentSearches
          searches={recentSearches}
          onSelect={handleRecentSearch}
        />

        <PopularDestinations
          destinations={popular}
          onSelect={handleDestinationSelect}
        />

        {

          loading ?

            <ActivityIndicator
              size="large"
              color={colors.primary}
              style={styles.loader}
            />

            :

            results.map(item => (

              <DestinationCard
                key={item.id}
                destination={item}
                onPress={handleDestinationSelect}
              />

            ))

        }

      </ScrollView>

    </AppContainer>

  );

}

const styles = StyleSheet.create({

  container: {

    padding: 20,

    paddingBottom: 40,

  },

  loader: {

    marginTop: 40,

  },

});