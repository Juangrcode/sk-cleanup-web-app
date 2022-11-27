import PrimaryButton from '@components/Buttons/primary.button';
import Layout from '@components/Layout';
import Link from 'next/link';

import styles from '@styles/Login.module.css';
import useLogin from '@hooks/useLogin';

const Login = () => {
  const { errors, isDirty, isValid, onSubmit, register, handleSubmit } = useLogin();

  const error: any = errors;

  console.log({ errors });

  return (
    <Layout
      title="Sneakers Cleanup - Restauración y Limpieza de zapatillas en Colombia."
      description="Encuentra el mejor personal especializado en la limpieza de zapatillas con productos especializados fabricados en Colombia."
    >
      <div className={styles.Login}>
        <div className="Login__container container flex justify-center items-center w-full h-full ">
          <div className="Card w-[500px] m-auto p-20 shadow-2xl text-center">
            <h2 className="text-3xl font-body p-8 text-black">INICIAR SESIÓN</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="flex justify-center items-center flex-col">
              <label htmlFor="email">
                {errors?.email && (
                  <p className="col-12 no-gutter text-start text-error letter_uppercase text-primary">
                    {error?.email?.message}
                  </p>
                )}
                <input
                  {...register('email', {
                    required: 'Correo es requerido.',
                    pattern: {
                      message: 'Correo es inválido.',
                      value: /[\w\._]{5,30}\+?[\w]{0,10}@[\w\.\-]{3,}\.\w{2,5}$/,
                    },
                  })}
                  name="email"
                  type="text"
                  placeholder="Correo *"
                  className={errors?.email?.message ? 'input-error' : ''}
                  // disabled={disabled}
                  // onFocus={handleFocus}
                  // onBlur={handleBlur}
                />
              </label>
              <label htmlFor="password" className="py-4">
                {errors?.password && (
                  <p className="col-12 no-gutter text-start text-error letter_uppercase text-primary">
                    {error?.password?.message}
                  </p>
                )}
                <input
                  {...register('password', {
                    required: 'Contraseña es requerido.',
                    minLength: {
                      message: 'La contraseña debe tener un minimo de 8 caracteres.',
                      value: 8,
                    },
                    pattern: {
                      message: 'Contraseña es inválido.',
                      value: /^[a-zA-Z0-9\S ]{8,64}$/,
                    },
                  })}
                  name="password"
                  type="password"
                  placeholder="Contraseña *"
                  className={errors?.password?.message ? 'input-error' : ''}
                  // disabled={disabled}
                  // onFocus={handleFocus}
                  // onBlur={handleBlur}
                />
              </label>
              <PrimaryButton
                text="Inicia sesión"
                type="submit"
                onClick={() => handleSubmit}
                disabled={!(isDirty && isValid)}
              />
            </form>
            <p className="pt-4 text-black">
              ¿No tienes cuenta?,
              <Link href="/register">
                <strong className="cursor-pointer"> Registrate</strong>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
