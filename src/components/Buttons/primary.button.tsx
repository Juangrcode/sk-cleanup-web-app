type PrimaryButtonProps = {
  text: string;
  onClick?: (event: React.SyntheticEvent) => void;
};

const PrimaryButton = ({ text, onClick }: PrimaryButtonProps): JSX.Element => {
  return (
    <button className="bg-primary rounded-lg min-w-[160px] w-auto h-12 font-body text-2xl p-2" onClick={onClick}>
      {text}
    </button>
  );
};

export default PrimaryButton;
