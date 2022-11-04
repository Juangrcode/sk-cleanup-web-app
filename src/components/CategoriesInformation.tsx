// React
import Image, { StaticImageData } from 'next/image';

// Styles
import styles from '@styles/Home.module.css';

type CategoriesInformationType = {
  title: string;
  description: string;
  imageUrl: StaticImageData;
};

const CategoriesInformation = ({ title, description, imageUrl }: CategoriesInformationType): JSX.Element => {
  return (
    <div className="flex justify-center items-center flex-col p-10">
      <div className="relative rounded-t-full w-44 h-44">
        <Image
          src={imageUrl}
          layout="fill"
          alt="Category information image"
          className={`${styles.Border_image} rounded-full border-2 border-rose-500 object-cover`}
        />
      </div>
      <h3 className="max-w-text text-center mt-4 mb-2 font-bold">{title}</h3>
      <p className="max-w-text text-center">{description}</p>
    </div>
  );
};

export default CategoriesInformation;
