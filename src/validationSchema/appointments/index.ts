import * as yup from 'yup';

export const appointmentValidationSchema = yup.object().shape({
  date: yup.date().required(),
  coach_id: yup.string().nullable().required(),
  player_id: yup.string().nullable().required(),
});
