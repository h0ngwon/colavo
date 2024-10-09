import Button from "../Button";

interface Props {
  text: string;
}

const FooterContent = ({ text }: Props) => (
  <>
    <div className="selection">{text}</div>
    <Button text="완료" className="secondary" />
  </>
);

export default FooterContent;
