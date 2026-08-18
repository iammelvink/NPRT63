import { useEffect, useState } from 'react';

import { getTaxiRank } from '../services/mock/taxiRankService';

export default function useTaxiRank(id) {

  const [rank, setRank] = useState(null);

  const [loading, setLoading] = useState(true);

  async function loadRank() {

    try {

      setLoading(true);

      const response = await getTaxiRank(id);

      setRank(response);

    }

    catch (error) {

      console.log(error);

    }

    finally {

      setLoading(false);

    }

  }

  useEffect(() => {

    loadRank();

  }, [id]);

  return {

    rank,

    loading,

    refresh: loadRank,

  };

}