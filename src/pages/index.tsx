// React
import Link from "next/link";
import Image from "next/image";
import type { NextPage } from "next";
import { useRouter } from "next/router";

// Styles
import styles from "@styles/Home.module.css";

// Components
import Layout from "@components/Layout";
import Carousel from "@components/Carousel";
import Parallax from "@components/Parallax";
import PrimaryButton from "@components/Buttons/primary.button";
import CategoriesInformation from "@components/CategoriesInformation";

// Images
import elementHero from "@images/element-hero.svg";
import heroImage from "@images/hero-image.svg";
import sneakersWater from "@images/sneakers-water.jpg";
import sneakersBasket from "@images/sneakers-basket.jpg";
import sneakersNike from "@images/sneakers-nike.jpg";
import highHeelShoes from "@images/high-heel-shoes.jpg";
import hatNike from "@images/hat-nike.jpg";
import bagBlack from "@images/bag-black.jpg";
import homeServices from "@images/home-services.svg";

const Home: NextPage = () => {
  const categoriesInformation = [
    {
      title: "Limpieza completa",
      description:
        " Realizamos una completa limpieza de tus tenis tanto como en el exterior como en el interior.",
      imageUrl: sneakersWater,
    },
    {
      title: "Limpieza completa",
      description:
        " Realizamos una completa limpieza de tus tenis tanto como en el exterior como en el interior.",
      imageUrl: hatNike,
    },
    {
      title: "Limpieza completa",
      description:
        " Realizamos una completa limpieza de tus tenis tanto como en el exterior como en el interior.",
      imageUrl: highHeelShoes,
    },
    {
      title: "Limpieza completa",
      description:
        " Realizamos una completa limpieza de tus tenis tanto como en el exterior como en el interior.",
      imageUrl: bagBlack,
    },
  ];

  const router = useRouter();

  return (
    <>
      <Layout
        title="Sneakers Cleanup - Restauración y Limpieza de zapatillas en Colombia."
        description="Encuentra el mejor personal especializado en la limpieza de zapatillas con productos especializados fabricados en Colombia."
      >
        {/* Hero Section */}
        <section
          className={`${styles.Home__hero} w-full bg-secondary relative`}
        >
          <div className="container flex w-full h-full items-center justify-center relative z-10 flex-col-reverse md:flex-row">
            <div className="w-full my-16 text-center md:text-left">
              <h2 className="max-w-[700px]font-text font-bold text-4xl md:text-5xl">
                Ofrecemos soluciones para cuidar aquello que te mueve.
              </h2>
              <p className="max-w-[700px] font-text my-8 ">
                Somos una empresa especializada en la limpieza y restauracion de
                sneakers. Tambien contamos con una linea de productos para el
                cuidado de tus tenis.
              </p>
              <div className="flex justify-center md:justify-start">
                <Link href="/services" passHref prefetch={false}>
                  <PrimaryButton
                    text="SERVICIOS"
                    onClick={() => router.push("/services")}
                  />
                </Link>
              </div>
            </div>
            <div className="relative min-h-[200px] w-full h-full mt-8">
              <Image src={heroImage} alt="Image build hero" layout="fill" />
            </div>
          </div>
          <div className="absolute w-full h-full top-0 z-0">
            <Image
              src={elementHero}
              alt="Element background hero"
              layout="fill"
            />
          </div>
        </section>

        {/* Categories information section */}

        <section className="bg-white text-black flex flex-wrap justify-center items-center py-36">
          {categoriesInformation.map((category, index) => (
            <CategoriesInformation key={index} {...category} />
          ))}
        </section>

        {/* Products section */}

        <section className="w-full h-auto min-h-[600px] bg-secondary  flex items-center justify-center relative flex-col md:flex-row">
          <div className="container w-full md:pl-[50px] lg:pl-[180px] p-14 md:p-24 text-center md:text-left">
            <h2 className={`max-w-[700px] font-text font-bold text-5xl`}>
              Nuestros productos de limpieza.
            </h2>
            <p className="max-w-[700px] font-text mt-8 mb-8">
              Encontraras productos especializados para la limpieza para tus
              tenis. Contamos con una gran variedad de productos para cada
              material o apliacion.{" "}
            </p>
            <div className="flex justify-center md:justify-start">
              <Link href="/products" passHref prefetch={false}>
                <PrimaryButton
                  text="Productos"
                  onClick={() => router.push("/products")}
                />
              </Link>
            </div>
          </div>
          <div className="relative w-full h-full min-h-[600px]">
            <Image
              src={sneakersNike}
              layout="fill"
              alt="Background Sneakers Nike"
              className="object-cover"
            />
          </div>
        </section>

        {/* More information section of the services */}

        <section className="w-full min-h-[600px] h-full bg-white">
          <div className="container flex items-center justify-center  w-full h-full flex-col md:flex-row py-24">
            <div className="relative  w-full min-h-[300px] h-full my-12">
              <Image src={homeServices} layout="fill" alt="" />
            </div>
            <div className="w-full text-center md:text-left">
              <h2 className="max-w-[700px] font-text font-bold text-5xl text-black">
                Restauramos toda clase de zapatillas.
              </h2>
              <p className="max-w-[700px] font-text mt-8 mb-8 text-black">
                Images, videos, PDFs and audio files are supported. Create math
                expressions and diagrams directly from the app. Take photos with
                the mobile app and save them to a note.
              </p>
              <div className="flex justify-center md:justify-start">
                <PrimaryButton
                  text="SERVICIOS"
                  onClick={() => router.push("/services")}
                />
              </div>
            </div>
          </div>
        </section>

        {/* What do our customers say? Carousel section */}

        <section className="bg-white w-full ">
          <div className="container flex flex-col py-20">
            <h2 className="font-bold text-5xl text-center text-black mb-20 ">
              Que dicen nuestros clientes
            </h2>
            <Carousel size={[1, 2, 3, 4]} />
          </div>
        </section>

        {/* Parallax discounts  */}

        <Parallax image={sneakersBasket}>
          <div className="flex flex-col items-center w-[600px]  relative text-center z-20">
            <h2 className="text-5xl font-bold mb-8 ">
              Recibe tu primer servicio Hoy
            </h2>
            <p className="mb-8 max-w-[380px] font-normal text-lg">
              Comience hoy, no gastes mas tiempo limpiando tus tenis. Ingresa
              este codigo en tu primer lavado y recibiras el
              <strong> 25% de descuento</strong>.
            </p>
            <div className="text-center mb-8">
              <PrimaryButton text="WELCOMECLEANER" onClick={() => {}} />
            </div>
            <p className="max-w-[300px] font-normal">
              Codigo de descuento valido hasta el 31 de diciembre{" "}
            </p>
          </div>
        </Parallax>
      </Layout>
    </>
  );
};

export default Home;
