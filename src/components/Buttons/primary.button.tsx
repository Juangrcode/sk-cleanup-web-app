type Props = {
  text: string;
  onClick: (event: React.SyntheticEvent) => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
};

const PrimaryButton = ({ text, onClick, type = 'button', disabled }: Props): JSX.Element => {
  return (
    <button
      className="bg-primary min-w-[140px] w-full font-body font-medium flex items-center justify-center hover:scale-95 transition-all duration-500 text-white"
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default PrimaryButton;
