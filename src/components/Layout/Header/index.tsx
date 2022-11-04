// React
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Styles
import styles from '@styles/Header.module.css';

// Components
import PrimaryButton from '@components/Buttons/primary.button';
import SecondaryButton from '@components/Buttons/secondary.button';

// Images
import sneakerCleanupLogo from '@logos/sneaker-cleanup.svg';

const Header = () => {
  const [menu, setMenu] = useState(false);

  return (
    <header className="bg-secondary h-24 w-full">
      {menu && (
        <div className="fixed w-full h-screen bg-secondary z-30">
          <div className="flex border-b-2 border-gray-600 pb-2 pr-3  items-center justify-between">
            <div className={`min-w-[160px] w-auto h-[70px] flex items-center cursor-pointer relative m-4`}>
              <Link href="/" passHref prefetch={false}>
                <Image src={sneakerCleanupLogo} alt="logo sneaker cleanup" layout="fill" className="min-w-[180px]" />
              </Link>
            </div>
            <div className="p-2 ">
              <button
                className="bg-primary rounded-lg w-12 h-12 font-body text-2xl relative flex justify-center items-center"
                onClick={() => setMenu(false)}
              >
                <div className={`${styles.cancel__container__btn_back} w-full h-full`}>
                  <div className={`${styles.cancel__lines_back} after:bg-secondary before:bg-secondary`} />
                </div>
              </button>
            </div>
          </div>

          <nav className="block">
            <ul className="flex flex-col justify-around ">
              <li className="font-body text-lg  border-b-2 border-gray-600 p-3">
                <Link href="/" className="font-body">
                  INICIO
                </Link>
              </li>
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
        </div>
      )}

      {/*  */}

      <div className="container h-full flex justify-between">
        <div className={`min-w-[160px] w-auto h-full flex items-center cursor-pointer relative`}>
          <Link href="/" passHref prefetch={false}>
            <Image src={sneakerCleanupLogo} alt="logo sneaker cleanup" layout="fill" className="min-w-[180px]" />
          </Link>
        </div>
        <div className="flex items-center justify-center">
          <nav className="p-4 hidden lg:block">
            <ul className="flex justify-around gap-6">
              <li className="font-body text-lg">
                <Link href="/" className="font-body">
                  INICIO
                </Link>
              </li>
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
          <div className="p-2 hidden md:block">
            <PrimaryButton text="Iniciar Sesion" />
          </div>
          <div className="p-2 hidden md:block">
            <SecondaryButton text="Registrate" />
          </div>
          <div className="p-2 lg:hidden">
            <button className="bg-primary rounded-lg w-12 h-12 font-body text-2xl" onClick={() => setMenu(true)}>
              {/* <Image src="" layout="fill" /> */}
              <div className={`${styles.header_logged__menu} flex-col w-full h-full flex justify-center items-center`}>
                <span className={`${styles.header_menu__lines} bg-secondary`} />
                <span className={`${styles.header_menu__lines} transited ease-in-out  duration-100 bg-secondary`} />
                <span className={`${styles.header_menu__lines} transited ease-in-out  duration-100 bg-secondary`} />
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
