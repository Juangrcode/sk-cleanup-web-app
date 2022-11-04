import styles from '../styles/Home.module.css';
import { StaticImageData } from 'next/image';

type ParallaxProps = {
  image: StaticImageData;
  children: React.ReactNode;
};

const Parallax = ({ image, children }: ParallaxProps) => {
  return (
    <div className={`${styles.parallax__container} relative w-full h-[600px] flex justify-center items-center`}>
      <div
        className={`${styles.parallax__container__image_background} absolute w-full h-full inset-0`}
        style={{
          backgroundImage: `url(${image})`,
        }}
      ></div>
      <div className="absolute w-full h-full inset-0 bg-black/70 z-10"></div>
      {children}
    </div>
  );
};

export default Parallax;
