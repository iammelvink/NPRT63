import { useEffect, useState } from 'react';

import { getMarshalQRCode } from '../services/mock/qrService';

export default function useMarshalQRCode() {

  const [qrData, setQrData] = useState(null);

  const [loading, setLoading] = useState(true);

  async function loadQRCode() {

    try {

      setLoading(true);

      const response = await getMarshalQRCode();

      setQrData(response);

    }

    catch (error) {

      console.log(error);

    }

    finally {

      setLoading(false);

    }

  }

  useEffect(() => {

    loadQRCode();

  }, []);

  return {

    qrData,

    loading,

    refresh: loadQRCode,

  };

}