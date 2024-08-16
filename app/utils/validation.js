import * as Yup from 'yup';

export const signupvalidationSchema = Yup.object({
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  username: Yup.string().required('Required'),
  // country: Yup.string().required('Required'),
  phoneNo: Yup.string().required('Required'),
  email: Yup.string()
    .matches(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Please enter valid email.',
    )
    .required('Required'),
  password: Yup.string()
    .required('Please enter password.')
    .matches(
      /^(?=.*[A-Z])(?=.*[~!@#$%^&*()/_=+[\]{}|;:,.<>?-])(?=.*[0-9])(?=.*[a-z]).{8,14}$/,
      'Only accept One Uppercase and atleast one special characters and numbers.',
    )
    .min(8, 'Minimum 8 characters is required.'),
});

export const signInValidationSchema = Yup.object({
  identifier: Yup.string().required('Please enter username.'),
  password: Yup.string().required('Please enter password.'),
});
