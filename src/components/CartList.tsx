import { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import cartStore from "../store/cartStore";
import modalStore from "../store/modalStore";
import "../styles/Cart.css";
import "../styles/Modal.css";
import { IItem } from "../types/types";
import Modal from "./Modal";

const CartList = () => {
  const { selectedItems, selectedDiscounts, removeItem, updateQuantity } = cartStore();
  const { isModalOpen, openModal, closeModal } = modalStore();
  const [selectedItem, setSelectedItem] = useState<IItem | null>(null);
  const [quantity, setQuantity] = useState(0);

  const handleQuantityChange = () => {
    if (selectedItem) {
      updateQuantity(selectedItem.id, quantity);
      closeModal();
    }
  };

  const handleDelete = () => {
    if (selectedItem) {
      removeItem(selectedItem.id);
      closeModal();
    }
  };

  const handleOpenModal = (item: IItem) => {
    setSelectedItem(item);
    setQuantity(item.count);
    openModal();
  };

  return (
    <div className="cart-container">
      <ul className="cart-list-container">
        {selectedItems.map((item) => (
          <li key={item.id} className="cart-list-item-container">
            <div className="cart-list-item">
              <span>{item.name}</span>
              <span className="cart-list-item-price">{item.price.toLocaleString()}원</span>
            </div>
            <div className="cart-list-item-count" onClick={() => handleOpenModal(item)}>
              <span>{item.count}</span>
              <FaChevronDown size={20} color="#a6a6a6" />
            </div>
          </li>
        ))}
      </ul>

      <ul className="cart-list-container">
        {selectedDiscounts.map((discount) => (
          <li key={discount.id} className="cart-list-item-container">
            <div className="cart-list-item">
              <span>{discount.name}</span>
              <span className="cart-list-item-price">{Math.round(discount.rate * 100)}%</span>
            </div>
          </li>
        ))}
      </ul>

      <Modal isOpen={isModalOpen}>
        {selectedItem && (
          <>
            <h3>{selectedItem.name}</h3>
            <div className="modal-quantity-container">
              <input
                type="range"
                min="1"
                max="10"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
              />
              <span>{quantity}</span>
            </div>
            <div className="modal-button-container">
              <button onClick={handleDelete}>삭제</button>
              <button onClick={handleQuantityChange}>완료</button>
            </div>
          </>
        )}
      </Modal>
    </div>
  );
};

export default CartList;
