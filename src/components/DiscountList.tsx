import { useCallback } from "react";
import { FaCheck } from "react-icons/fa6";
import useFetchDiscount from "../hooks/useFetchDiscount";
import cartStore from "../store/cartStore";
import "../styles/Discount.css";
import { IDiscount } from "../types/types";

const DiscountList = () => {
  const discounts = useFetchDiscount();
  const { selectedDiscounts, addDiscount, removeDiscount } = cartStore();

  const isSelected = useCallback(
    (id: string) => selectedDiscounts.some((discount) => discount.id === id),
    [selectedDiscounts],
  );

  const handleClick = (id: string, discount: IDiscount) => {
    addDiscount({ ...discount, id });

    if (isSelected(id)) {
      removeDiscount(id);
    }
  };

  return (
    <ul className="discount-list">
      {Object.entries(discounts).map(([id, discount]) => (
        <li className="discount-list-item" key={id} onClick={() => handleClick(id, discount)}>
          <div className="discount-list-item-content">
            <span className="discount-name">{discount.name}</span>
            <span className="discount-rate">{Math.floor(discount.rate * 100)}%</span>
          </div>
          <div>{isSelected(id) && <FaCheck size={20} color="#9887ee" />}</div>
        </li>
      ))}
    </ul>
  );
};

export default DiscountList;
