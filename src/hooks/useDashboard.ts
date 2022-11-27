// Redux
import { useDispatch } from "react-redux";

import { registerUser } from "@services/auth";

// Hooks
import { useForm } from "react-hook-form";

// Utils
import Swal from "sweetalert2";
import { useEffect } from "react";

const useDashboard = () => {
  const {
    reset,
    watch,
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
    getValues,
  } = useForm({ mode: "onChange" });
  const dispatch = useDispatch();

  const onSubmit = async (payload: any) => {
    const buyer = {
      ...payload,
    };

    console.log({ buyer });

    const { message, success, data } = await registerUser(buyer);

    if (success && data) {
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

  const handleRegister = () => {};

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

export default useDashboard;
