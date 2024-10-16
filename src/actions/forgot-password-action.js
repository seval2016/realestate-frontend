import { forgotPassword } from '@/services/forgot-password-service';
import { response } from '@/helpers/form-validation';

export const forgotPasswordAction = async (prevState, formData) => {
  try {
    const fields = Object.fromEntries(formData); 
    const res = await forgotPassword(fields.email); 
    const data = await res.json();

    if (!res.ok) {
      return response(false, data.message || 'Error while sending reset code.');
    }

    return response(true, 'Reset code sent to your email!');
  } catch (err) {
    return response(false, 'Something went wrong.');
  }
};
