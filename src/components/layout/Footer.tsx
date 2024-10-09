import { useLocation } from "react-router-dom";
import "../../styles/Footer.css"; // Ensure you have a CSS file for styling
import Total from "../Total";
import FooterContent from "./FooterContent";

const Footer = () => {
  const location = useLocation();
  const isMainPage = location.pathname === "/";
  const isItemPage = location.pathname.includes("item");
  const isDiscountPage = location.pathname.includes("discount");
  const footerClass = isItemPage || isDiscountPage ? "footer-secondary" : "footer";

  return (
    <footer className={footerClass}>
      {isMainPage && <Total total={23124234} />}
      {isItemPage && <FooterContent text="아이템을 선택하세요(여러 개 선택가능)" />}
      {isDiscountPage && <FooterContent text="할인을 선택하세요(여러 개 선택가능)" />}
    </footer>
  );
};

export default Footer;
