import {

  getRideStore,

} from '../shared/rideStore';

const delay = (ms) =>

  new Promise(resolve => setTimeout(resolve, ms));

export async function getOwnerEarnings() {

  await delay(300);

  const rides = getRideStore();

  const totalRevenue = rides.reduce(

    (sum, ride) => sum + Number(ride.revenue),

    0

  );

  const totalTrips = rides.length;

  const totalPassengers = rides.reduce(

    (sum, ride) => sum + Number(ride.passengers),

    0

  );

  const averageTripRevenue =

    totalTrips === 0

      ? 0

      : totalRevenue / totalTrips;

  const averagePassengers =

    totalTrips === 0

      ? 0

      : totalPassengers / totalTrips;

  return {

    totalRevenue,

    totalTrips,

    totalPassengers,

    averageTripRevenue,

    averagePassengers,

    rides,

  };

}