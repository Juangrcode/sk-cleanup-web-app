// React
import Link from "next/link";
import Image from "next/image";

// Images
import sneakerCleanupLogo from "@logos/sneaker-cleanup.svg";
import colombiaIcon from "@icons/colombia-icon.svg";
import arrowIcon from "@icons/arrow.svg";
import facebookIcon from "@icons/facebook.svg";
import instagramIcon from "@icons/instagram.svg";
import linkedinIcon from "@icons/linkedin.svg";

import styles from "@styles/Footer.module.css";

const Footer = () => {
  const socialNetworks = [
    {
      title: "Facebook sneakers cleanup",
      image: facebookIcon,
      urlPath: "https://www.instagram.com/sk_cleanup/",
    },
    {
      title: "Instagram sneakers cleanup",
      image: instagramIcon,
      urlPath: "https://www.instagram.com/sk_cleanup/",
    },
    {
      title: "LinkeIn sneakers cleanup",
      image: linkedinIcon,
      urlPath: "https://www.instagram.com/sk_cleanup/",
    },
  ];

  return (
    <footer
      className={`bg-secondary w-full h-full min-h-[500px] ${styles.Footer}`}
    >
      <div className="container pt-[140px]">
        <div className="flex justify-between border-b-1 border-gray-500 pb-12 flex-col md:flex-row items-center md:items-stretch">
          <div className="max-w-[300px] w-full h-full flex flex-col cursor-pointer relative mb-14 text-center md:text-left items-center md:items-start">
            <div className="relative w-[170px] h-[70px]  mb-2">
              <Link href="/" passHref prefetch={false}>
                <Image
                  src={sneakerCleanupLogo}
                  alt="logo sneaker cleanup"
                  layout="fill"
                />
              </Link>
            </div>
            <p>
              Sneakers Cleanup es creado para brindar restauracion y limpieza a
              las zapatillas. Con productos especializados para cada material
              con diferente implementacion.
            </p>
          </div>
          <div className="flex flex-wrap justify-center">
            <div className="flex flex-col gap-3 items-center mb-12 mx-6">
              <h5 className="font-bold">Productos</h5>
              <Link href="/pricing" passHref prefetch={false}>
                <a className="hover:border-b-1">Precios</a>
              </Link>
              <Link href="/products" passHref prefetch={false}>
                <a className="hover:border-b-1">Productos</a>
              </Link>
              <Link href="/services" passHref prefetch={false}>
                <a className="hover:border-b-1">Servicios</a>
              </Link>
            </div>
            <div className="flex flex-col gap-3  items-center mb-12 mx-6">
              <h5 className="font-bold">Recursos</h5>
              <Link href="/blog" passHref prefetch={false}>
                <a className="hover:border-b-1">Blog</a>
              </Link>
              <Link href="/guides-and-tutorials" passHref prefetch={false}>
                <a className="hover:border-b-1">Guías y tutoriales</a>
              </Link>
              <Link href="/help" passHref prefetch={false}>
                <a className="hover:border-b-1">Centro de ayuda</a>
              </Link>
            </div>
            <div className="flex flex-col gap-3  items-center mb-12 mx-6">
              <h5 className="font-bold">Contacto</h5>
              <Link href="/contact" passHref prefetch={false}>
                <a className="hover:border-b-1">Contacto</a>
              </Link>
              <Link href="/" passHref prefetch={false}>
                <a className="hover:border-b-1">
                  sneakers.cleanup.inc@gmail.com
                </a>
              </Link>
            </div>
            <div className="flex flex-col gap-3  items-center mb-12 mx-6">
              <h5 className="font-bold">Compañia</h5>
              <Link href="/about" passHref prefetch={false}>
                <a className="hover:border-b-1">Acerca de</a>
              </Link>
              <Link href="/" passHref prefetch={false}>
                <a className="hover:border-b-1">Media</a>
              </Link>
              <Link href="/" passHref prefetch={false}>
                <a className="hover:border-b-1">Historias de clientes</a>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex justify-center md:justify-between flex-col md:flex-row mt-14 pb-8">
          <div className="flex items-center flex-col md:flex-row gap-8">
            <div className="flex items-center">
              <div className="relative w-8 h-8 mr-2">
                <Image src={colombiaIcon} alt="colombia icon" layout="fill" />
              </div>
              <p>Español</p>
              <div className="relative w-6 h-6">
                <Image src={arrowIcon} alt="arrow icon" layout="fill" />
              </div>
            </div>
            <Link href="/terms-and-privacy" passHref prefetch={false}>
              <a className="hover:border-b-1">Términos y privacidad</a>
            </Link>
            <Link href="/security" passHref prefetch={false}>
              <a className="hover:border-b-1">Seguridad</a>
            </Link>
            <Link href="/" passHref prefetch={false}>
              <a className="hover:border-b-1">Estado</a>
            </Link>
            <p>©2022 Snekers Cleanup inc.</p>
          </div>
          <div className="flex gap-4 justify-center my-8 md:m-0">
            {socialNetworks.map((network) => (
              <a
                key={network.title}
                href={network.urlPath}
                target="black"
                className="w-8 h-8"
              >
                <Image src={network.image} alt={network.title} layout="fill" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
