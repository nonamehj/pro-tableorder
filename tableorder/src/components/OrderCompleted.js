import { useGlobalContext } from "../context";
import "./OrderCompletedStyle.css";
const OrderCompleted = () => {
  const { isOrderCompleted, finalCompletedOrder, table } = useGlobalContext();
  return (
    <section className={isOrderCompleted ? "completed-items" : "order"}>
      <div className="order-container">
        <h3 className="order-number">테이블번호 {table}</h3>
        <div className="completed-center">
          <h3>주문이 완료되었습니다.</h3>
        </div>
        <button className="complete-btn" onClick={finalCompletedOrder}>
          <h3>주문완료</h3>
        </button>
      </div>
    </section>
  );
};

export default OrderCompleted;
