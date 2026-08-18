import { useState, useCallback } from 'react';

import { useFocusEffect } from '@react-navigation/native';

import {

    getReadableError,

    logError,

} from '../utils/errorHandler';

export default function useDataLoader(

    loader,

    {

        initialData = null,

        autoLoad = true,

        screen = 'Unknown',

    } = {}

) {

    const [data, setData] = useState(initialData);

    const [loading, setLoading] = useState(autoLoad);

    const [refreshing, setRefreshing] = useState(false);

    const [error, setError] = useState(null);

    const load = useCallback(async (isRefresh = false) => {

        try {

            if (isRefresh) {

                setRefreshing(true);

            } else {

                setLoading(true);

            }

            setError(null);

            const response = await loader();

            setData(response);

        }

        catch (err) {

            logError(err, screen);

            setError(

                getReadableError(err)

            );

        }

        finally {

            setLoading(false);

            setRefreshing(false);

        }

    }, [loader, screen]);

    useFocusEffect(

        useCallback(() => {

            if (autoLoad) {

                load();

            }

        }, [load, autoLoad])

    );

    return {

        data,

        loading,

        refreshing,

        error,

        refresh: () => load(true),

        retry: () => load(),

        setData,

    };

}