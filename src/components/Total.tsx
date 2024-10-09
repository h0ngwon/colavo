import "../styles/Footer.css";
import Button from "./Button";

interface Props {
  total: number;
}

const Total = ({ total }: Props) => (
  <>
    <div className="total">
      <span>합계</span>
      <span className="total-price">{total.toLocaleString()}원</span>
    </div>
    <Button text="다음" />
  </>
);

export default Total;
