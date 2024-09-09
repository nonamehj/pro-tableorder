import { useGlobalContext } from "../context";
import "./OrderDetailsStyle.css";
const OrderDetails = () => {
  const { isOrderDetails, itemsList, totalAmount, closeOrderDetails } =
    useGlobalContext();
  return (
    <section
      className={isOrderDetails ? "show-order-details" : "order-details"}
    >
      <div className="details-container">
        <h2>주문내역</h2>
        <div className="details-items-info">
          {itemsList.map((item) => {
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
              <article key={orderId} className="detail-item">
                <img src={img} alt={title} className="detail-img" />
                <div className="detail-item-info">
                  <div className="detail-item-title">
                    <h3>{title}</h3>
                    <span>{drinkType}</span>
                  </div>
                  <div className="detail-item-center">
                    <div className="detail-row">
                      <h3>사이즈</h3>
                      <p>{size}</p>
                    </div>
                    <div className="detail-row">
                      <h3>수량</h3>
                      <p>{amount}</p>
                    </div>
                    {shot && shot > 0 ? (
                      <div className="detail-row">
                        <h3>샷 추가</h3>
                        <p>{shot}</p>
                      </div>
                    ) : null}
                    {icecream && icecream > 0 ? (
                      <div className="detail-row">
                        <h3>아이스크림 추가</h3>
                        <p>{icecream}</p>
                      </div>
                    ) : null}
                    {pearls && pearls > 0 ? (
                      <div className="detail-row">
                        <h3>펄 추가</h3>
                        <p>{pearls}</p>
                      </div>
                    ) : null}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
        <div className="order-detail-price">
          <h3>총 금액: {totalAmount.toLocaleString()}원</h3>
          <button onClick={closeOrderDetails} className="order-detail-check">
            <h2>확인</h2>
          </button>
        </div>
      </div>
    </section>
  );
};

export default OrderDetails;
