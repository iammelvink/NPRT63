import * as yup from 'yup';

/*
|--------------------------------------------------------------------------
| Login Validation
|--------------------------------------------------------------------------
*/

export const loginSchema = yup.object({

  cellphone: yup
    .string()
    .trim()
    .required('Cell number is required.')
    .matches(
      /^[0-9]{10}$/,
      'Please enter a valid 10-digit cell number.'
    ),

  password: yup
    .string()
    .required('Password is required.')
    .min(
      6,
      'Password must contain at least 6 characters.'
    ),

});

/*
|--------------------------------------------------------------------------
| Passenger Registration
|--------------------------------------------------------------------------
*/

export const passengerRegisterSchema = yup.object({

  fullName: yup
    .string()
    .trim()
    .required('Full name is required.'),

  cellphone: yup
    .string()
    .trim()
    .required('Cell number is required.')
    .matches(
      /^[0-9]{10}$/,
      'Please enter a valid 10-digit cell number.'
    ),

  password: yup
    .string()
    .required('Password is required.')
    .min(
      6,
      'Password must contain at least 6 characters.'
    ),

});

/*
|--------------------------------------------------------------------------
| Marshal Registration
|--------------------------------------------------------------------------
*/

export const marshalRegisterSchema = yup.object({

  fullName: yup
    .string()
    .trim()
    .required('Full name is required.'),

  cellphone: yup
    .string()
    .trim()
    .required('Cell number is required.')
    .matches(
      /^[0-9]{10}$/,
      'Please enter a valid 10-digit cell number.'
    ),

  rankName: yup
    .string()
    .trim()
    .required('Taxi rank name is required.'),

  password: yup
    .string()
    .required('Password is required.')
    .min(
      6,
      'Password must contain at least 6 characters.'
    ),

});

/*
|--------------------------------------------------------------------------
| Owner Registration
|--------------------------------------------------------------------------
*/

export const ownerRegisterSchema = yup.object({

  fullName: yup
    .string()
    .trim()
    .required('Full name is required.'),

  cellphone: yup
    .string()
    .trim()
    .required('Cell number is required.')
    .matches(
      /^[0-9]{10}$/,
      'Please enter a valid 10-digit cell number.'
    ),

  rankName: yup
    .string()
    .trim()
    .required('Taxi rank name is required.'),

  password: yup
    .string()
    .required('Password is required.')
    .min(
      6,
      'Password must contain at least 6 characters.'
    ),

});