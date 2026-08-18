const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

let taxis = [

  {
    id: '1',
    registration: 'CAA123NC',
    driver: 'John Smith',
    cell: '0821234567',
    capacity: 15,
    rank: 'Kimberley Taxi Rank',
    status: 'Waiting',
  },

  {
    id: '2',
    registration: 'CAA456NC',
    driver: 'Peter Daniels',
    cell: '0834567890',
    capacity: 15,
    rank: 'Kimberley Taxi Rank',
    status: 'Loading',
  },

  {
    id: '3',
    registration: 'CAA789NC',
    driver: 'Samuel Molefe',
    cell: '0849876543',
    capacity: 21,
    rank: 'Galeshewe Taxi Rank',
    status: 'Available',
  },

];

export async function getOwnerTaxis() {

  await delay(300);

  return [...taxis];

}

export async function addTaxi(taxi) {

  await delay(300);

  const newTaxi = {

    id: Date.now().toString(),

    registration: taxi.registration,

    driver: taxi.driver,

    cell: taxi.cell,

    capacity: Number(taxi.capacity),

    rank: taxi.rank,

    status: 'Waiting',

  };

  taxis.unshift(newTaxi);

  return newTaxi;

}

export async function deleteTaxi(id) {

  await delay(300);

  taxis = taxis.filter(item => item.id !== id);

}

export async function updateTaxi(updatedTaxi){

    await delay(300);

    taxis=taxis.map(item=>{

        if(item.id===updatedTaxi.id){

            return{

                ...updatedTaxi,

            };

        }

        return item;

    });

    return updatedTaxi;

}