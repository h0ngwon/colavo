import "../../styles/Footer.css"; // Ensure you have a CSS file for styling

interface Props {
  total: number;
  buttonText: string;
}

const Footer = ({ total, buttonText }: Props) => {
  return (
    <footer className="footer">
      <div className="total">
        <span>합계</span>
        <span className="total-price">{total.toLocaleString()}원</span>
      </div>
      <button className="next-button">{buttonText}</button>
    </footer>
  );
};

export default Footer;
