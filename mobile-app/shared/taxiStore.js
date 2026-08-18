let taxis = [

  {
    id: '1',
    registration: 'CAA123NC',
    driverId: '1',
    capacity: 15,
    rank: 'Kimberley Taxi Rank',
    status: 'Waiting',
  },

  {
    id: '2',
    registration: 'CAA456NC',
    driverId: '2',
    capacity: 15,
    rank: 'Kimberley Taxi Rank',
    status: 'Loading',
  },

  {
    id: '3',
    registration: 'CAA789NC',
    driverId: '3',
    capacity: 21,
    rank: 'Galeshewe Taxi Rank',
    status: 'Available',
  },

];

export function getTaxiStore() {

  return taxis;

}

export function setTaxiStore(updatedTaxis) {

  taxis = updatedTaxis;

}