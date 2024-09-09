import "./ItemsStyle.css";
import { useGlobalContext } from "../context";

const Items = ({ img, title, price, id, category }) => {
  const { isShowModal } = useGlobalContext();

  return (
    <article className="item-article" onClick={() => isShowModal(id, category)}>
      <div className="item-container">
        <div className="item-center">
          <img src={img} alt={title} className="item" />
          <div className="item-info">
            <p>{title}</p>
            <p>{price.toLocaleString()}원</p>
          </div>
          <div className="item-btn">
            <button className="itemAdd-btn">옵션선택</button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Items;
