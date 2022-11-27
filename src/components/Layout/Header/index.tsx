// React
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

// Styles
import styles from '@styles/Header.module.css';

// Components
import PrimaryButton from '@components/Buttons/primary.button';
import SecondaryButton from '@components/Buttons/secondary.button';
import SmallButton from '@components/Buttons/small.button';

// Images
import sneakerCleanupLogo from '@logos/sneaker-cleanup.svg';
import { connect, useDispatch } from 'react-redux';
import { logoutRequest } from '@actions/auth';
import useLocalStorage from '@hooks/useLocalStorage';

type Props = {
  user: any;
};

const Header = ({ user }: Props): JSX.Element => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [skCleanupLogged, setSkCleanupLogged] = useLocalStorage('skCleanupLogged', '');

  const [menu, setMenu] = useState(false);

  const handleLogout = () => {
    console.log('logout');
    dispatch(logoutRequest({ token: '', user: {} }));
    setSkCleanupLogged('');
    setMenu(false);
  };

  return (
    <header className="bg-secondary h-24 w-full">
      {/* Menu mobile */}

      {menu && (
        <div className="fixed w-full h-screen bg-secondary z-30 ">
          <div className="flex border-b-2 border-gray-600 pb-2 pr-3  items-center justify-between">
            <div className={`min-w-[160px] w-auto h-[70px] flex items-center cursor-pointer relative m-4`}>
              <Link href="/" passHref prefetch={false}>
                <Image src={sneakerCleanupLogo} alt="logo sneaker cleanup" layout="fill" className="min-w-[180px]" />
              </Link>
            </div>
            <div className="p-2 ">
              <SmallButton onClick={() => setMenu(false)}>
                <div className={`${styles.cancel__container__btn_back} w-full h-full`}>
                  <div className={`${styles.cancel__lines_back} after:bg-secondary before:bg-secondary`} />
                </div>
              </SmallButton>
            </div>
          </div>

          <nav className="block">
            <ul className="flex flex-col justify-around text-white">
              <li className="font-body text-lg  border-b-2 border-gray-600 p-3">
                <Link href="/" className="font-body">
                  INICIO
                </Link>
              </li>
              {!!user.id && user.role === 'admin' && (
                <li className="font-body text-lg border-b-2 border-gray-600 p-3">
                  <Link href="/dashboard">TABLERO</Link>
                </li>
              )}
              <li className="font-body text-lg border-b-2 border-gray-600 p-3">
                <Link href="/products">PRODUCTOS</Link>
              </li>
              <li className="font-body text-lg border-b-2 border-gray-600 p-3">
                <Link href="/services">SERVICIOS</Link>
              </li>
              <li className="font-body text-lg border-b-2 border-gray-600 p-3">
                <Link href="/contact">CONTACTANOS</Link>
              </li>
            </ul>
          </nav>
          <div className="h-full flex  justify-around p-8">
            {!user.id && (
              <>
                <div className="p-2">
                  <PrimaryButton text="Iniciar Sesión" onClick={() => router.push('/login')} />
                </div>
                <div className="p-2">
                  <SecondaryButton text="Registrate" onClick={() => router.push('/register')} />
                </div>
              </>
            )}
            {!!user.id && (
              <>
                <div className="p-2 text-xl font-bold uppercase">
                  {/* <PrimaryButton text="Cerrar Sesión" onClick={() => router.push('/login')} /> */}
                  <h3>{user.name}</h3>
                </div>
                <div className="p-2">
                  <SecondaryButton text="Cerrar Sesión" onClick={handleLogout} />
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Web  */}

      <div className="container h-full flex justify-between">
        <div className={`min-w-[160px] w-auto h-full flex items-center cursor-pointer relative`}>
          <Link href="/" passHref prefetch={false}>
            <Image src={sneakerCleanupLogo} alt="logo sneaker cleanup" layout="fill" className="min-w-[180px]" />
          </Link>
        </div>
        <div className="flex items-center justify-center">
          <nav className="p-4 hidden lg:block text-white">
            <ul className="flex justify-around gap-6">
              <li className="font-body text-lg">
                <Link href="/" className="font-body">
                  INICIO
                </Link>
              </li>
              {!!user.id && (
                <li className="font-body text-lg ">
                  <Link href="/dashboard">TABLERO</Link>
                </li>
              )}
              <li className="font-body text-lg">
                <Link href="/products">PRODUCTOS</Link>
              </li>
              <li className="font-body text-lg">
                <Link href="/services">SERVICIOS</Link>
              </li>
              <li className="font-body text-lg">
                <Link href="/contact">CONTACTANOS</Link>
              </li>
            </ul>
          </nav>
          {!user.id && (
            <>
              <div className="p-2 hidden md:block">
                <PrimaryButton text="Iniciar Sesión" onClick={() => router.push('/login')} />
              </div>
              <div className="p-2 hidden md:block">
                <SecondaryButton text="Registrate" onClick={() => router.push('/register')} />
              </div>
            </>
          )}
          {!!user.id && (
            <>
              <div className="p-2 hidden md:block text-xl font-bold uppercase">
                {/* <PrimaryButton text="Cerrar Sesión" onClick={() => router.push('/login')} /> */}
                <h3>{user.name}</h3>
              </div>
              <div className="p-2 hidden md:block">
                <SecondaryButton text="Cerrar Sesión" onClick={handleLogout} />
              </div>
            </>
          )}
          <div className="p-2 lg:hidden">
            <SmallButton onClick={() => setMenu(true)}>
              <div className={`${styles.header_logged__menu} flex-col w-full h-full flex justify-center items-center`}>
                <span className={`${styles.header_menu__lines} bg-secondary`} />
                <span className={`${styles.header_menu__lines} transited ease-in-out  duration-100 bg-secondary`} />
                <span className={`${styles.header_menu__lines} transited ease-in-out  duration-100 bg-secondary`} />
              </div>
            </SmallButton>
          </div>
        </div>
      </div>
    </header>
  );
};

const mapStateToProps = (state: any) => ({
  user: state.user,
  token: state.token,
});

export default connect(mapStateToProps, null)(Header);
