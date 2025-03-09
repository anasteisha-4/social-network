import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  email: yup.string().email('Enter valid email').required('Field is required'),
  password: yup.string().required('Field is required')
});

export const requiredStringSchema = (fieldName) =>
  yup.object().shape({
    [fieldName]: yup.string().trim().required(`${fieldName} mustn't be empty`)
  });
