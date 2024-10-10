import { useLocation } from "react-router-dom";
import cartStore from "../../store/cartStore";
import "../../styles/Footer.css";
import Total from "../Total";
import FooterContent from "./FooterContent";

const Footer = () => {
  const { finalPrice } = cartStore();
  const location = useLocation();
  const isMainPage = location.pathname === "/";
  const isItemPage = location.pathname.includes("item");
  const isDiscountPage = location.pathname.includes("discount");
  const footerClass = isItemPage || isDiscountPage ? "footer-secondary" : "footer";

  return (
    <footer className={footerClass}>
      {isMainPage && <Total total={finalPrice} />}
      {isItemPage && <FooterContent text="아이템을 선택하세요(여러 개 선택가능)" />}
      {isDiscountPage && <FooterContent text="할인을 선택하세요(여러 개 선택가능)" />}
    </footer>
  );
};

export default Footer;
