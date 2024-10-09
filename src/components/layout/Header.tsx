import { CgClose } from "react-icons/cg";
import { IoIosAdd } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";
import "../../styles/Header.css";

interface Props {
  children?: React.ReactNode;
}

const Header = ({ children }: Props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const showAddButton = location.pathname.includes("discount") || location.pathname.includes("item");

  return (
    <header className="header">
      <button type="button" className="close-button" onClick={() => navigate("/")}>
        <CgClose size={30} color="#c7c7c7" />
      </button>
      <div className="header-content-wrapper">{children}</div>
      {showAddButton && (
        <button type="button" className="add-button">
          <IoIosAdd size={30} color="#c7c7c7" />
        </button>
      )}
    </header>
  );
};

export default Header;
