// React
import { useEffect, useState } from "react";
import Image from "next/image";

// Styles
import styles from "@styles/Carousel.module.css";

// Components
import SmallButton from "@components/Buttons/small.button";

// Images
import quote from "@icons/quote.svg";
import arrowIcon from "@icons/arrow.svg";
import quoteWhite from "@icons/quote-white.svg";
import sneakersWater from "@images/sneakers-water.jpg";

type CarouselProps = {
  size: string[] | number[];
};

const Carousel = ({ size }: CarouselProps) => {
  const [carouselWidth, setCarouselWidth] = useState(0);
  const [translateWidth, setTranslateWidth] = useState(0);
  const [stateCarousel, setStateCarousel] = useState(1);

  useEffect(() => {
    const handleSetCarouselWidth = (): void => {
      const d = document.getElementById("carousel-width");
      setTranslateWidth(0);

      if (d?.clientWidth) {
        if (d?.clientWidth / 3 >= 350 && size.length >= 3) {
          setStateCarousel(3);
          setCarouselWidth(d?.clientWidth / 3 - 27);
        } else if (d?.clientWidth / 2 >= 420 && size.length >= 2) {
          setStateCarousel(2);
          setCarouselWidth(d?.clientWidth / 2 - 20);
        } else {
          setStateCarousel(1);
          setCarouselWidth(d?.clientWidth);
        }
      }
    };
    handleSetCarouselWidth();
    window.addEventListener("resize", handleSetCarouselWidth);
  }, [size.length]);

  const handleScrollRigh = () => {
    let sum = carouselWidth + 40;

    let lenghtArr = size.length;

    setTranslateWidth((prev) => {
      let stateOne = lenghtArr - 1;
      let stateTwo = (lenghtArr - 1 * 10 + 8) * 2;
      let stateThree = (lenghtArr - 3) * 3;

      let value = stateOne;

      if (stateCarousel === 2) value = stateTwo;
      if (stateCarousel === 3) value = stateThree;

      if (
        ((carouselWidth + 40) * value) / stateCarousel !== translateWidth &&
        ((carouselWidth + 40) * value) / stateCarousel >= 0
      ) {
        return prev + sum;
      }
      return 0;
    });
  };

  const handleScrollLeft = () => {
    setTranslateWidth((prev) => {
      if (prev > 0) {
        return prev - carouselWidth - 40;
      }
      return 0;
    });
  };

  return (
    <div className={styles.Carousel}>
      {/* Arrow Buttons */}

      <div
        className={`absolute rotate-90 z-20 -left-2 md:-left-7 ${styles.Arrow_buttons}`}
      >
        <SmallButton onClick={handleScrollLeft}>
          <Image src={arrowIcon} alt="Arrow icon" layout="fill" />
        </SmallButton>
      </div>
      <div
        className={`absolute -rotate-90 z-20 -right-2 md:-right-7 ${styles.Arrow_buttons}`}
      >
        <SmallButton onClick={handleScrollRigh}>
          <Image src={arrowIcon} alt="Arrow icon" layout="fill" />
        </SmallButton>
      </div>

      <div className={styles.Carousel_external}>
        <div
          className={`text-left flex  items-center gap-10   ${styles.Carousel_internal}`}
          style={{ transform: `translateX(-${translateWidth}px)` }}
          id="carousel-width"
        >
          {size.map((n) => (
            <div
              key={n}
              className={`h-[460px]  py-16 px-10 relative flex items-center overflow-hidden bg-secondary hover:bg-white shadow-2xl flex-col rounded-xl hover:text-black cursor-pointer ${styles.Carousel__container_child} ${styles.Carousel_item} transition-all duration-500`}
              style={{ width: `${carouselWidth}px` }}
            >
              <div className="pb-12 border-b-1 border-gray-700">
                <div
                  className={`${styles.Carousel__quote_white} relative h-16 w-16 mb-8`}
                >
                  <Image src={quoteWhite} alt="Quote white" layout="fill" />
                </div>
                <div
                  className={`${styles.Carousel__quote_blue} relative h-16 w-16 mb-8`}
                >
                  <Image src={quote} alt="Quote blue" layout="fill" />
                </div>
                <p>
                  Sneakers Cleanup la mejor solucion para el cuidado y limpieza
                  de mis tenis. Usan productos especializados para cada
                  material.
                </p>
              </div>
              <div className="flex mt-12 w-full">
                <div className="relative h-16 w-16 mr-6">
                  <Image
                    src={sneakersWater}
                    alt="Profile photo Sneakers Cleanup"
                    layout="fill"
                    className="rounded-full"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Oberon Shaw, MCH</h4>
                  <p>Bogota, Colombia</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <div className={`flex justify-center`}>
        {size.map(() => (
          <button className="rounded-full bg-secondary w-3 h-3 m-1"></button>
        ))}
      </div> */}
    </div>
  );
};

export default Carousel;
