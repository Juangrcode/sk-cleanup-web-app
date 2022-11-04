type SecondaryButtonType = {
  text: string;
  onClick?: (event: React.SyntheticEvent) => void;
};

const SecondaryButton = ({ text, onClick }: SecondaryButtonType) => {
  return (
    <button
      className="bg-white text-black rounded-lg min-w-[160px] w-auto h-12 font-body text-2xl p-2"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default SecondaryButton;
