// Redux
import { useDispatch } from 'react-redux';
import { loginUser } from '@services/auth';

// Hooks
import { useForm } from 'react-hook-form';

// Utils
// import { yupResolver } from '@hookform/resolvers/yup';
// import useAuthSchema from '@utils/schemas/auth';

// Utils
import config from '@config/index';
import Swal from 'sweetalert2';
import { setItemInLocalStorage, setItemInSessionStorage } from '@utils/window';
import useLocalStorage from './useLocalStorage';

import { loginRequest } from '@actions/auth';
import { useRouter } from 'next/router';
// import { loginRequest, setModalLogin, setDropdownSidebar, setModalForgivePassword } from '@actions/auth';

const useLogin = () => {
  // const { signInSchema } = useAuthSchema();
  const router = useRouter();
  const {
    reset,
    watch,
    register,
    formState: { errors, isDirty, isValid },
    handleSubmit,
  } = useForm({ mode: 'onChange' });
  // } = useForm({ resolver: yupResolver(signInSchema), mode: 'onChange' });
  const dispatch = useDispatch();

  const [skCleanupLogged, setSkCleanupLogged] = useLocalStorage('skCleanupLogged', '');

  // Login User
  const onSubmit = async (payload: any) => {
    console.log({ payload });
    const { message, success, data } = await loginUser(payload);
    if (success && data) {
      console.log({ data });
      setSkCleanupLogged(data);
      dispatch(loginRequest(data));
      router.push('/');
      // dispatch(setModalLogin(false));
      // dispatch(setDropdownSidebar(false));
    } else {
      reset();
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `${message} !`,
        timer: 5000,
      });
    }
  };

  const handleLogin = () => {
    // dispatch(setModalLogin(false));
  };

  const handleClickForgivePassword = () => {
    handleLogin();
    // dispatch(setModalForgivePassword(true));
  };

  return {
    errors,
    isDirty,
    isValid,
    watch,
    onSubmit,
    register,
    handleSubmit,
    handleLogin,
    handleClickForgivePassword,
  };
};

export default useLogin;
