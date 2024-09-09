import "./AddItemsStyle.css";
import { useGlobalContext } from "../context";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";
import { useState } from "react";

const AddItems = () => {
  const {
    isAddItemOpen,
    selectedItems,
    selectedItemRemove,
    selectedAllClear,
    selectedOrderItems,
    selectedAmount,
    total,
  } = useGlobalContext();
  const [moveValue, setMoveValue] = useState(0);

  const prevBtn = () => {
    let prev = moveValue - 1;
    return setMoveItems(prev);
  };
  const nextBtn = () => {
    let next = moveValue + 1;
    return setMoveItems(next);
  };
  const setMoveItems = (count) => {
    if (count < 0) {
      count = 0;
    } else {
      if (count > selectedItems.length - 1) {
        count = selectedItems.length - 1;
      }
    }
    return setMoveValue(count);
  };
  return (
    <>
      {isAddItemOpen && (
        <section className={`${isAddItemOpen ? "addItems" : ""}`}>
          <div className="addItems-container">
            <div className="addItems-center">
              <button className="addItem-move" onClick={prevBtn}>
                <FaChevronLeft />
              </button>
              <div className="addItem-list">
                {selectedItems.map((item, index) => {
                  const { img, title, amount, orderId } = item;
                  let position = "";
                  if (moveValue === index) {
                    position = "activeSlide";
                  }
                  if (index < moveValue) {
                    position = "lastSlide";
                  }
                  return (
                    <article
                      key={orderId}
                      className={`addItem-article ${position}`}
                    >
                      <button
                        className="addItem-remove"
                        onClick={() => selectedItemRemove(orderId)}
                      >
                        <FaTimes />
                      </button>
                      <div className="addItem-item">
                        <img src={img} alt={title} className="addItem-img" />
                      </div>
                      <p className="addItem-title">{title}</p>
                      <div className="addItem-btn">
                        <button onClick={() => selectedAmount(orderId, "dec")}>
                          <AiOutlineMinus />
                        </button>
                        <h3>{amount}</h3>
                        <button onClick={() => selectedAmount(orderId, "inc")}>
                          <AiOutlinePlus />
                        </button>
                      </div>
                    </article>
                  );
                })}
              </div>
              <button className="addItem-move" onClick={nextBtn}>
                <FaChevronRight />
              </button>
            </div>
            <article className="addItem-total">
              <div className="payment-summary">
                <span className="total-summary">
                  <p>총 결제 금액</p>
                  <h3>{total.toLocaleString()}원</h3>
                </span>
                <button className="btn-total-cancel" onClick={selectedAllClear}>
                  전체취소
                </button>
              </div>
              <button
                className="btn-confirm-order"
                onClick={selectedOrderItems}
              >
                주문확인
              </button>
            </article>
          </div>
        </section>
      )}
    </>
  );
};

export default AddItems;
