import { useNavigate } from "react-router-dom";
import Button from "../Button";

interface Props {
  text: string;
}

const FooterContent = ({ text }: Props) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="selection">{text}</div>
      <Button text="완료" className="secondary" onClick={() => navigate("/")} />
    </>
  );
};

export default FooterContent;
