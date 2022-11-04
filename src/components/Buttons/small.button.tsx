// Styles
import styles from '@styles/Home.module.css';

type SmallButtonProps = {
  onClick: (event: React.SyntheticEvent) => void;
  children: React.ReactNode;
};

const SmallButton = ({ children, onClick }: SmallButtonProps) => (
  <button className="bg-primary rounded-lg w-10 h-10" onClick={onClick}>
    {children}
  </button>
);

export default SmallButton;
