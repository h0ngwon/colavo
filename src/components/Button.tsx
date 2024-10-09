import "../styles/Button.css";

interface Props {
  text: string;
  onClick?: () => void;
  className?: "secondary" | "third" | "gray";
  children?: React.ReactNode;
}

const Button = ({ text, onClick, className, children }: Props) => {
  return (
    <button type="button" onClick={onClick} className={`button ${className}`}>
      <div>{children}</div>
      <span>{text}</span>
    </button>
  );
};

export default Button;
