import { Outlet, useLocation } from "react-router-dom";
import "../../styles/Layout.css";
import Footer from "./Footer";
import Header from "./Header";
import HeaderContent from "./HeaderContent";

const headerTitles = {
  item: "시술메뉴",
  discount: "할인",
} as const;

const Layout = () => {
  const location = useLocation();
  const path = location.pathname;
  const title = headerTitles[path.includes("item") ? "item" : "discount"];

  return (
    <>
      <div className="container">
        <Header>{path === "/" ? <HeaderContent title="임홍원" showDate /> : <HeaderContent title={title} />}</Header>
        <main className="content-container">
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
