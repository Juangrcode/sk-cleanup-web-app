type Props = {
  text: string;
  onClick: (event: React.SyntheticEvent) => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

const SecondaryButton = ({
  text,
  onClick,
  type = "button",
  disabled,
}: Props) => {
  return (
    <button
      className="bg-white text-black min-w-[140px] w-full font-body flex items-center justify-center hover:scale-95 transition-all duration-500"
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default SecondaryButton;
