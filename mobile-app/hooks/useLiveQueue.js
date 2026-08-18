import { useEffect, useState } from 'react';

import {

  getLiveQueue,

  driverCheckIn,

  skipDriver,

  markLoading,

  markFull,

  departTaxi,

} from '../services/mock/liveQueueService';

export default function useLiveQueue() {

  const [queue, setQueue] = useState([]);

  const [loading, setLoading] = useState(true);

  async function loadQueue() {

    try {

      setLoading(true);

      const response = await getLiveQueue();

      setQueue(response);

    }

    finally {

      setLoading(false);

    }

  }

  async function checkIn(driver) {

    await driverCheckIn(driver);

    await loadQueue();

  }

  async function skip(id) {

    await skipDriver(id);

    await loadQueue();

  }

  async function loadingTaxi(id) {

    await markLoading(id);

    await loadQueue();

  }

  async function fullTaxi(id) {

    await markFull(id);

    await loadQueue();

  }

  async function depart(id) {

    await departTaxi(id);

    await loadQueue();

  }

  useEffect(() => {

    loadQueue();

  }, []);

  return {

    queue,

    loading,

    refresh: loadQueue,

    checkIn,

    skip,

    loadingTaxi,

    fullTaxi,

    depart,

  };

}