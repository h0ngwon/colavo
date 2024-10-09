import { useCallback } from "react";
import { FaCheck } from "react-icons/fa";
import useFetchItems from "../hooks/useFetchItems";
import cartStore from "../store/cartStore";
import "../styles/Item.css";
import { IItem } from "../types/types";

const ItemList = () => {
  const items = useFetchItems();
  const { selectedItems, addItem, removeItem } = cartStore();

  const isSelected = useCallback((id: string) => selectedItems.some((item) => item.id === id), [selectedItems]); // 선택된 아이템인지 확인

  const handleClick = (id: string, item: IItem) => {
    // 아이템의 아이디가 있으면 선택된 아이템에서 제거, 없으면 선택된 아이템에 추가
    addItem({ ...item, id });

    if (isSelected(id)) {
      removeItem(id);
    }
  };

  return (
    <ul className="item-list">
      {Object.entries(items).map(([id, item]) => (
        <li className="item-list-item" key={id} onClick={() => handleClick(id, item)}>
          <div className="item-list-item-content">
            <span className="item-name">{item.name}</span>
            <span className="item-price">{item.price.toLocaleString()}원</span>
          </div>
          <div>{isSelected(id) && <FaCheck size={20} color="#9887ee" />}</div>
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
