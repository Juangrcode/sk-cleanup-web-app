// Styles
import styles from "@styles/Home.module.css";

type SmallButtonProps = {
  onClick: (event: React.SyntheticEvent) => void;
  children: React.ReactNode;
};

const SmallButton = ({ children, onClick }: SmallButtonProps) => (
  <button
    className="bg-primary rounded-lg w-10 h-10 hover:scale-95 transition-all duration-500 relative"
    onClick={onClick}
  >
    {children}
  </button>
);

export default SmallButton;
