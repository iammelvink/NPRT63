let drivers = [

  {
    id: '1',
    fullName: 'John Smith',
    cellphone: '0821234567',
    licenseNumber: 'DL10001',
  },

  {
    id: '2',
    fullName: 'Peter Daniels',
    cellphone: '0834567890',
    licenseNumber: 'DL10002',
  },

  {
    id: '3',
    fullName: 'Samuel Molefe',
    cellphone: '0849876543',
    licenseNumber: 'DL10003',
  },

];

export function getDriverStore() {

  return drivers;

}

export function setDriverStore(updatedDrivers) {

  drivers = updatedDrivers;

}