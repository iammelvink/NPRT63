import { saveToken, removeToken } from '../utils/storage';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/*
|--------------------------------------------------------------------------
| Demo Users
|--------------------------------------------------------------------------
|
| These simulate users until we connect Firebase.
|
*/

const demoUsers = [
  {
    id: 1,
    fullName: 'Demo Passenger',
    cellphone: '0711111111',
    password: '123456',
    role: 'passenger',
  },
  {
    id: 2,
    fullName: 'Demo Marshal',
    cellphone: '0722222222',
    password: '123456',
    role: 'marshal',
    rankName: 'Kimberley Taxi Rank',
  },
  {
    id: 3,
    fullName: 'Demo Owner',
    cellphone: '0733333333',
    password: '123456',
    role: 'owner',
    rankName: 'Kimberley Taxi Rank',
  },
  {
    id: 4,
    fullName: 'System Administrator',
    cellphone: '0700000000',
    password: 'admin123',
    role: 'admin',
  },
];

/*
|--------------------------------------------------------------------------
| Login
|--------------------------------------------------------------------------
*/

export async function login(cellphone, password) {

  await delay(1200);

  const user = demoUsers.find(

    (item) =>

      item.cellphone === cellphone &&
      item.password === password

  );

  if (!user) {

    throw new Error(
      'Invalid cellphone number or password.'
    );

  }

  const token = `ERANK_${user.role.toUpperCase()}_TOKEN`;

  await saveToken(token);

  return {

    token,

    user,

  };

}

/*
|--------------------------------------------------------------------------
| Passenger Registration
|--------------------------------------------------------------------------
*/

export async function registerPassenger(data) {

  await delay(1200);

  const exists = demoUsers.find(

    user => user.cellphone === data.cellphone

  );

  if (exists) {

    throw new Error(
      'A user with this cellphone number already exists.'
    );

  }

  const user = {

    id: Date.now(),

    fullName: data.fullName,

    cellphone: data.cellphone,

    password: data.password,

    role: 'passenger',

  };

  demoUsers.push(user);

  return user;

}

/*
|--------------------------------------------------------------------------
| Marshal Registration
|--------------------------------------------------------------------------
*/

export async function registerMarshal(data) {

  await delay(1200);

  const exists = demoUsers.find(

    user => user.cellphone === data.cellphone

  );

  if (exists) {

    throw new Error(
      'A user with this cellphone number already exists.'
    );

  }

  const user = {

    id: Date.now(),

    fullName: data.fullName,

    cellphone: data.cellphone,

    password: data.password,

    role: 'marshal',

    rankName: data.rankName,

  };

  demoUsers.push(user);

  return user;

}

/*
|--------------------------------------------------------------------------
| Owner Registration
|--------------------------------------------------------------------------
*/

export async function registerOwner(data) {

  await delay(1200);

  const exists = demoUsers.find(

    user => user.cellphone === data.cellphone

  );

  if (exists) {

    throw new Error(
      'A user with this cellphone number already exists.'
    );

  }

  const user = {

    id: Date.now(),

    fullName: data.fullName,

    cellphone: data.cellphone,

    password: data.password,

    role: 'owner',

    rankName: data.rankName,

  };

  demoUsers.push(user);

  return user;

}

/*
|--------------------------------------------------------------------------
| Logout
|--------------------------------------------------------------------------
*/

export async function logout() {

  await removeToken();

}