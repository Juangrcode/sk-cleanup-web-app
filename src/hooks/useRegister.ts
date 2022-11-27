// import { useEffect } from 'react'
// Redux
import { useDispatch } from "react-redux";

import { registerUser } from "@services/auth";

// Hooks
import { useForm } from "react-hook-form";
// import useAuthSchema from '@utils/schemas/auth';
// import { yupResolver } from '@hookform/resolvers/yup';

// Utils
import Swal from "sweetalert2";
// import { registerUser } from '@actions/users';

// import { registerRequest, setModalLogin, setModalRegister, setDropdownSidebar } from '@actions/auth';

// import { initiateSocket } from '../../../api/index'

const useRegister = () => {
  // const { signUpSchema } = useAuthSchema();
  const {
    reset,
    watch,
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm({ mode: "onChange" });
  // } = useForm({ resolver: yupResolver(signUpSchema), mode: 'onChange' });
  const dispatch = useDispatch();

  // Register User
  const onSubmit = async (payload: any) => {
    const buyer = {
      ...payload,
      name: payload.name.toLowerCase(),
      // birthday: new Date(payload.birthday).toLocaleDateString(),
      receiveEmails: Boolean(payload.receiveEmails),
    };

    console.log({ buyer });

    const { message, success, data } = await registerUser(buyer);

    if (success && data) {
      // dispatch(registerRequest(data));
      // dispatch(setModalRegister(false));
      // dispatch(setDropdownSidebar(false));
      // dispatch(setModalLogin(true));
      Swal.fire({
        icon: "success",
        title: `${message} !`,
        showConfirmButton: false,
        timer: 5000,
      });
    } else {
      reset();
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${message} !`,
        timer: 5000,
      });
    }
  };

  const handleRegister = () => {
    // dispatch(setModalRegister(false));
  };

  // useEffect(() => {
  //   const socket = initiateSocket()
  //   socket.emit('exist/email', watch('email'))
  //   socket.on('comfirm-exist/email', (user) => {
  //   })
  // }, [watch('email')])

  return {
    errors,
    isDirty,
    isValid,
    watch,
    register,
    onSubmit,
    handleSubmit,
    handleRegister,
  };
};

export default useRegister;
