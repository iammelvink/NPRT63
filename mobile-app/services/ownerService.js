import {
    getTaxiStore,
    setTaxiStore,
} from '../shared/taxiStore';

import {
    createTaxi,
} from '../shared/models/taxiModel';

const delay = (ms) =>
    new Promise(resolve => setTimeout(resolve, ms));

export async function getOwnerTaxis() {

    await delay(300);

    return [...getTaxiStore()];

}

export async function getTaxiById(id) {

    await delay(300);

    return getTaxiStore().find(
        taxi => taxi.id === id
    );

}

export async function addTaxi(data) {

    await delay(300);

    const taxis = getTaxiStore();

    const taxi = createTaxi(data);

    taxis.unshift(taxi);

    setTaxiStore(taxis);

    return taxi;

}

export async function updateTaxi(updatedTaxi) {

    await delay(300);

    const taxis = getTaxiStore().map(item =>

        item.id === updatedTaxi.id

            ? {

                  ...item,

                  ...updatedTaxi,

                  updatedAt: new Date().toISOString(),

              }

            : item

    );

    setTaxiStore(taxis);

    return updatedTaxi;

}

export async function deleteTaxi(id) {

    await delay(300);

    const taxis = getTaxiStore().filter(

        taxi => taxi.id !== id

    );

    setTaxiStore(taxis);

}

export async function assignDriver(

    taxiId,

    driverId,

) {

    await delay(300);

    const taxis = getTaxiStore().map(item =>

        item.id === taxiId

            ? {

                  ...item,

                  driverId,

                  updatedAt: new Date().toISOString(),

              }

            : item

    );

    setTaxiStore(taxis);

}

export async function updateTaxiStatus(

    taxiId,

    status,

) {

    await delay(300);

    const taxis = getTaxiStore().map(item =>

        item.id === taxiId

            ? {

                  ...item,

                  status,

                  updatedAt: new Date().toISOString(),

              }

            : item

    );

    setTaxiStore(taxis);

}