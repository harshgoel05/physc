import * as yup from "yup";
export const userSchema = yup.object().shape({
  name: yup.string().trim().required(),
  email: yup.string().email().lowercase().trim().required(),
  license_id: yup.string().trim(),
  password: yup.string().required(),
  address: yup.string(),
  education: yup.string().trim(),
  designation: yup.string().trim(),
  hospital: yup.string(),
  specialization: yup.string(),
  awards: yup.array().default(function () {
    return [];
  }),
  stories: yup.array().default(function () {
    return [];
  }),
  notifications: yup.array().default(function () {
    return [];
  }),
  meetings: yup.array().default(function () {
    return [];
  }),
  notes: yup.array().default(function () {
    return [];
  }),
  moms: yup.array().default(function () {
    return [];
  }),
  contribution: yup
    .number()
    .integer()
    .default(function () {
      return 0;
    }),
  created_at: yup.number().default(function () {
    return +new Date();
  }),
});

export const loginBodySchema = yup.object().shape({
  email: yup.string().email().lowercase().required(),
  password: yup.string().required(),
});
