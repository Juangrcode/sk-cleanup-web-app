import PrimaryButton from '@components/Buttons/primary.button';
import Layout from '@components/Layout';
import useDashboard from '@hooks/useDashboard';
import Link from 'next/link';

import styles from '@styles/Dashboard.module.css';
import { numberWithCommas } from '@utils/math';
import { useState } from 'react';
import Image from 'next/image';

import sneakerCleanupLogo from '@logos/sneaker-cleanup-complete.svg';
import sneakerCleanupGrayLogo from '@logos/sneaker-cleanup-grayscale.svg';

const Dashboard = (): JSX.Element => {
  const { errors, isDirty, isValid, watch, onSubmit, register, handleSubmit } = useDashboard();

  const error: any = errors;

  const [isPrint, setIsPrint] = useState(false);

  const printDiv = () => {
    setIsPrint(true);

    setTimeout(async () => {
      await window.print();
      await window.close();
      setIsPrint(false);
    }, 1000);
  };

  return (
    <>
      {!isPrint && (
        <Layout
          title="Sk Cleanup - Tablero administrativo"
          description="Encuentra el mejor personal especializado en la limpieza de zapatillas con productos especializados fabricados en Colombia."
        >
          <section className={styles.Dashboard}>
            <div className="text-black flex container w-full h-full">
              <div
                className={`Card w-[500px] m-auto p-20 shadow-2xl text-center  ${styles.print_area}`}
                id="print_area"
              >
                <div
                  className={`min-w-[160px] w-auto h-20 flex items-center cursor-pointer relative mb-8 bg-secondary`}
                >
                  <Image src={sneakerCleanupLogo} alt="logo sneaker cleanup" layout="fill" className="min-w-[180px]" />
                </div>
                <div className="flex justify-between text-black">
                  <h2 className="font-bold "># Orden: </h2> <p className="text-right">{watch('order')}</p>
                </div>
                <div className="flex justify-between text-black ">
                  <h2 className="font-bold">Nombre: </h2> <p className="text-right">{watch('name')}</p>
                </div>
                <div className="flex justify-between text-black ">
                  <h2 className="font-bold">Celular: </h2> <p className="text-right">{watch('phone')}</p>
                </div>
                <div className="flex justify-between text-black ">
                  <h2 className="font-bold">Descripción: </h2> <p className="text-right">{watch('description')}</p>
                </div>
                <div className="flex justify-between text-black ">
                  <h2 className="font-bold">Valor: </h2>{' '}
                  <p className="text-right">$ {watch('value') ? numberWithCommas(watch('value')) : 0}</p>
                </div>
                <div className="flex justify-between text-black ">
                  <h2 className="font-bold">Pago: </h2>{' '}
                  <p className="text-right">
                    $ {watch('payment') ? numberWithCommas(watch('payment')) : numberWithCommas(0)}
                  </p>
                </div>
                <div className="flex justify-between text-black ">
                  <h2 className="font-bold">Total: </h2>{' '}
                  <p className="text-right">
                    $ {watch('payment') ? numberWithCommas(watch('value') - watch('payment')) : 0}
                  </p>
                </div>
                <div className="mt-8">
                  <PrimaryButton onClick={printDiv} text="Imprimir" />
                </div>
              </div>
              <div className="Card w-[500px] m-auto p-20 shadow-2xl text-center">
                <h2 className="text-3xl font-body p-8 text-black">INGRESA LOS DATOS DEL RECIBO</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="flex justify-center items-center flex-col">
                  <label htmlFor="order" className="pb-4">
                    {errors?.order && (
                      <p className="col-12 no-gutter text-start text-error letter_uppercase text-primary">
                        {error?.order?.message}
                      </p>
                    )}
                    <input
                      {...register('order', {
                        required: 'Orden es requerido.',
                      })}
                      name="order"
                      type="text"
                      placeholder="Orden *"
                      className={errors?.order?.message ? 'input-error' : ''}
                    />
                  </label>
                  <label htmlFor="name" className="pb-4">
                    {errors?.name && (
                      <p className="col-12 no-gutter text-start text-error letter_uppercase text-primary">
                        {error?.name?.message}
                      </p>
                    )}
                    <input
                      {...register('name', {
                        required: 'Nombre del cliente es requerido.',
                      })}
                      name="name"
                      type="text"
                      placeholder="Nombre del cliente *"
                      className={error?.name?.message ? 'input-error' : ''}
                    />
                  </label>
                  <label htmlFor="phone" className="pb-4">
                    {errors?.phone && (
                      <p className="col-12 no-gutter text-start text-error letter_uppercase text-primary">
                        {error?.phone?.message}
                      </p>
                    )}
                    <input
                      {...register('phone', {
                        required: 'Teléfono celular es requerido.',
                      })}
                      name="phone"
                      type="text"
                      placeholder="Teléfono celular *"
                      className={errors?.phone?.message ? 'input-error' : ''}
                    />
                  </label>
                  <label htmlFor="description">
                    {errors?.description && (
                      <p className="col-12 no-gutter text-start text-error letter_uppercase text-primary">
                        {error?.description?.message}
                      </p>
                    )}
                    <input
                      {...register('description', {
                        required: 'Descripción de la venta es requerido.',
                        pattern: {
                          message: 'Descripción es inválido.',
                          value: /^[A-Ña-ñ0-9]+([\w\s][\\-]?)+$/,
                        },
                      })}
                      name="description"
                      type="text"
                      placeholder="Descripción de la venta *"
                      className={errors?.description?.message ? 'input-error' : ''}
                    />
                  </label>
                  <label htmlFor="value" className="pt-4">
                    {errors?.value && (
                      <p className="col-12 no-gutter text-start text-error letter_uppercase text-primary">
                        {error?.value?.message}
                      </p>
                    )}
                    <input
                      {...register('value', {
                        required: 'Valor de la venta es requerido.',
                        min: 500,
                        valueAsNumber: true,
                      })}
                      name="value"
                      type="number"
                      placeholder="Valor de la venta *"
                      className={errors?.value?.message ? 'input-error' : ''}
                    />
                  </label>
                  <label htmlFor="payment" className="py-4">
                    {errors?.payment && (
                      <p className="col-12 no-gutter text-start text-error letter_uppercase text-primary">
                        {error?.payment?.message}
                      </p>
                    )}
                    <input
                      {...register('payment', {
                        required: 'Pago es requerido.',
                        min: 500,
                        valueAsNumber: true,
                      })}
                      name="payment"
                      type="number"
                      placeholder="Pago *"
                      className={errors?.payment?.message ? 'input-error' : ''}
                    />
                  </label>

                  {/* <PrimaryButton
                    text="Registrar"
                    type="submit"
                    onClick={() => handleSubmit}
                    disabled={!(isDirty && isValid)}
                  /> */}
                </form>
              </div>
            </div>
          </section>
        </Layout>
      )}
      {isPrint && (
        <div className={`  ${styles.print_area}`} id="print_area">
          <div className={`min-w-[160px] w-auto h-14 flex items-center cursor-pointer relative`}>
            <Image src={sneakerCleanupGrayLogo} alt="logo sneaker cleanup" layout="fill" className="min-w-[180px]" />
          </div>
          <h2 className="font-bold text-xs text-black flex items-center  justify-center mb-8 mt-2 w-full">
            {new Date().toLocaleString()}{' '}
          </h2>
          <div className="flex justify-between text-black mb-2">
            <h2 className="font-bold text-sm"># Orden: </h2> <p className="text-right text-sm">{watch('order')}</p>
          </div>
          <div className="flex justify-between text-black mb-2 ">
            <h2 className="font-bold text-sm">Nombre: </h2> <p className="text-right text-sm">{watch('name')}</p>
          </div>
          <div className="flex justify-between text-black mb-2 ">
            <h2 className="font-bold text-sm">Celular: </h2> <p className="text-right text-sm">{watch('phone')}</p>
          </div>
          <div className="flex justify-between text-black mb-2 ">
            <h2 className="font-bold text-sm">Descripción: </h2>{' '}
            <p className="text-right text-sm">{watch('description')}</p>
          </div>
          <div className="flex justify-between text-black mb-2 ">
            <h2 className="font-bold text-sm">Valor: </h2>{' '}
            <p className="text-right text-sm">
              $ {watch('value') ? numberWithCommas(watch('value')) : numberWithCommas(0)}
            </p>
          </div>
          <div className="flex justify-between text-black mb-2 ">
            <h2 className="font-bold text-sm">Pago: </h2>{' '}
            <p className="text-right text-sm">
              $ {watch('payment') ? numberWithCommas(watch('payment')) : numberWithCommas(0)}
            </p>
          </div>
          <div className="flex justify-between text-black mb-2 ">
            <h2 className="font-bold text-sm">Total: </h2>{' '}
            <p className="text-right text-sm">
              $ {watch('value') ? numberWithCommas(watch('value') - watch('payment')) : 0}
            </p>
          </div>

          <div className="flex items-center justify-center flex-col text-center mt-8">
            <h2 className="font-bold text-xs text-black">©2022 Snekers Cleanup inc.</h2>
            <h2 className="font-bold text-xs text-black">+57 3045897777</h2>
            <h2 className="font-bold text-xs text-black">sneakers.cleanup.inc@gmail.com</h2>
            <h2 className="font-bold text-xs text-black mt-2">
              Autorizas el tratamiento de datos, aceptas la Política de Privacidad y los Términos y condiciones de
              sneakers cleanup.
            </h2>
            <h2 className="font-bold text-xs text-black">www.skcleanup/tyc</h2>
          </div>
        </div>
      )}
    </>
  );
};

export default Dashboard;
