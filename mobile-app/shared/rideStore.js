let rides = [

  {
    id: '1',

    taxiId: '1',

    taxiRegistration: 'CAA123NC',

    driverId: '1',

    driverName: 'John Smith',

    route: 'Kimberley → Galeshewe',

    passengers: 18,

    fare: 18,

    revenue: 324,

    departureTime: '07:30',

    arrivalTime: '08:05',

    status: 'Completed',

    date: '2026-07-13',

  },

  {
    id: '2',

    taxiId: '2',

    taxiRegistration: 'CAA456NC',

    driverId: '2',

    driverName: 'Peter Daniels',

    route: 'Kimberley → Roodepan',

    passengers: 15,

    fare: 18,

    revenue: 270,

    departureTime: '08:15',

    arrivalTime: '08:55',

    status: 'Completed',

    date: '2026-07-13',

  },

];

export function getRideStore() {

  return rides;

}

export function setRideStore(updatedRides) {

  rides = updatedRides;

}