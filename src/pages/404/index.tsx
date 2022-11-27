import Image from "next/image";

import notFound from "@assets/images/404-not-found.svg";
import PrimaryButton from "@components/Buttons/primary.button";
import { useRouter } from "next/router";

type Props = {};

const NotFound = ({}: Props): JSX.Element => {
  const router = useRouter();

  return (
    <div className="w-full h-screen bg-secondary">
      <div className="w-full h-full flex items-center justify-center container flex-col">
        <div className="relative w-full  h-full max-h-[400px]">
          <Image src={notFound} layout="fill" alt="Not Found page" />
        </div>
        <div className="m-10">
          <PrimaryButton
            text="Volver al inicio"
            onClick={() => router.push("/")}
          />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
