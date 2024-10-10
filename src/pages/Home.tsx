import { IoIosAddCircle } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import CartList from "../components/CartList";
import "../styles/Home.css";


const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home-container">
      <div className="button-container">
        <Button className="gray" text="시술" onClick={() => navigate("/item")}>
          <IoIosAddCircle size={16} />
        </Button>
        <Button className="third" text="할인" onClick={() => navigate("/discount")}>
          <IoIosAddCircle size={16} />
        </Button>
      </div>
      <div className="content-container">
        <CartList />
      </div>
    </div>
  );
};

export default Home;
