import {
  getDriverStore,
  setDriverStore,
} from '../shared/driverStore';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export async function getOwnerDrivers() {

  await delay(300);

  return [...getDriverStore()];

}

export async function getDriverById(id) {

  await delay(300);

  return getDriverStore().find(
    driver => driver.id === id
  );

}

export async function addDriver(driver) {

  await delay(300);

  const drivers = getDriverStore();

  const newDriver = {

    id: Date.now().toString(),

    fullName: driver.fullName,

    cellphone: driver.cellphone,

    licenseNumber: driver.licenseNumber || '',

  };

  drivers.unshift(newDriver);

  setDriverStore(drivers);

  return newDriver;

}

export async function updateDriver(updatedDriver) {

  await delay(300);

  const drivers = getDriverStore().map(item =>

    item.id === updatedDriver.id

      ? {

          ...item,

          ...updatedDriver,

        }

      : item

  );

  setDriverStore(drivers);

  return updatedDriver;

}

export async function deleteDriver(id) {

  await delay(300);

  const drivers = getDriverStore().filter(

    driver => driver.id !== id

  );

  setDriverStore(drivers);

}

export async function getUnassignedDrivers() {

  await delay(300);

  return [...getDriverStore()];

}