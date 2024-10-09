import "../styles/Button.css";

interface Props {
  text: string;
  onClick?: () => void;
  className?: string;
}

const Button = ({ text, onClick, className }: Props) => {
  return (
    <button type="button" onClick={onClick} className={`button ${className}`}>
      {text}
    </button>
  );
};

export default Button;
