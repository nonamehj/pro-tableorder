import "./SelectedOrderItemStyle.css";
import { useGlobalContext } from "./../context";
const SelectedOrderItem = () => {
  const {
    isSelectedOrderOpen,
    selectedItems,
    total,
    selectedBack,
    orderCompleted,
  } = useGlobalContext();
  return (
    <section className={isSelectedOrderOpen ? "selected-items" : "order"}>
      <div className="order-container">
        <h2>주문내역</h2>
        <div className="selected-items-info">
          {/* <div className="order-items-center"> */}
          {selectedItems.map((item) => {
            const {
              title,
              orderId,
              img,
              icecream,
              amount,
              shot,
              drinkType,
              pearls,
              size,
            } = item;
            return (
              <article key={orderId} className="order-item">
                <img src={img} alt={title} className="order-img" />
                <div className="order-item-info">
                  <div className="order-item-title">
                    <h3>{title}</h3>
                    <span>{drinkType}</span>
                  </div>
                  <div className="order-item-center">
                    <div className="order-row">
                      <h3>사이즈</h3>
                      <p>{size}</p>
                    </div>
                    <div className="order-row">
                      <h3>수량</h3>
                      <p>{amount}</p>
                    </div>
                    {shot && shot > 0 ? (
                      <div className="order-row">
                        <h3>샷 추가</h3>
                        <p>{shot}</p>
                      </div>
                    ) : null}
                    {icecream && icecream > 0 ? (
                      <div className="order-row">
                        <h3>아이스크림 추가</h3>
                        <p>{icecream}</p>
                      </div>
                    ) : null}
                    {pearls && pearls > 0 ? (
                      <div className="order-row">
                        <h3>펄 추가</h3>
                        <p>{pearls}</p>
                      </div>
                    ) : null}
                  </div>
                </div>
              </article>
            );
          })}
          {/* </div> */}
        </div>
        <div className="selected-item-price">
          <h3>총 금액: {total.toLocaleString()}원</h3>
          <div className="selected-item-btn">
            <button onClick={selectedBack} className="selected-cancel">
              취소
            </button>
            <button className="selected-final" onClick={orderCompleted}>
              최종 주문
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelectedOrderItem;
