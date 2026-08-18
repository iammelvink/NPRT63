import { useEffect, useState } from 'react';

import {
  searchDestinations,
  getPopularDestinations,
} from '../services/mock/searchService';

export default function useSearch() {

  const [query, setQuery] = useState('');

  const [results, setResults] = useState([]);

  const [popular, setPopular] = useState([]);

  const [loading, setLoading] = useState(false);

  async function loadPopular() {

    try {

      const response = await getPopularDestinations();

      setPopular(response);

    } catch (error) {

      console.log(error);

    }

  }

  async function search(value) {

    try {

      setLoading(true);

      setQuery(value);

      const response = await searchDestinations(value);

      setResults(response);

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }

  }

  useEffect(() => {

    loadPopular();

    search('');

  }, []);

  return {

    query,

    results,

    popular,

    loading,

    search,

  };

}