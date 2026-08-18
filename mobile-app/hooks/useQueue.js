import { useCallback, useState } from 'react';

import { useFocusEffect } from '@react-navigation/native';

import {

  getQueue,

} from '../services/queueService';

export default function useQueue() {

  const [queue, setQueue] = useState([]);

  const [loading, setLoading] = useState(true);

  async function loadQueue() {

    try {

      setLoading(true);

      const response = await getQueue();

      setQueue(response);

    }

    catch (error) {

      console.log(error);

    }

    finally {

      setLoading(false);

    }

  }

  useFocusEffect(

    useCallback(() => {

      loadQueue();

    }, [])

  );

  return {

    queue,

    loading,

    refresh: loadQueue,

  };

}