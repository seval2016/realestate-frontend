import { FORGOT_PASSWORD_API } from '@/helpers/api-routes';

export const forgotPassword = (email) => {
  return fetch(FORGOT_PASSWORD_API, {
    method: 'post',
    body: JSON.stringify({ email }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
