import "./ModalItemStyle.css";
import { useEffect, useState } from "react";
import { useGlobalContext } from "../context";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
const ModalItem = () => {
  const {
    isModalOpen,
    modalItem,
    addCoffeeSize,
    modalQuantity,
    addDrinkType,
    modalActionButton,
  } = useGlobalContext();
  const [value, setValue] = useState(0);
  const [selectDrinkOption, setSelectDrinkOption] = useState("");

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("modal-open");
      if (modalItem.length > 0) {
        const item = modalItem[0];
        const { drinkOption } = item;
        if (drinkOption.length === 1) {
          setSelectDrinkOption(drinkOption[0]);
        }
      }
    } else {
      setSelectDrinkOption("");
      setValue(0);
    }
    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [isModalOpen, modalItem]);

  return (
    <section className={`${isModalOpen ? "modal-section modal" : "modal"}`}>
      <div className="modal-container">
        {modalItem.map((item) => {
          const {
            id,
            img,
            category,
            title,
            coffeeSize,
            amount,
            shot,
            icecream,
            pearls,
            itemTotal,
            drinkOption,
          } = item;
          // let drinkType = drinkOption.length === 1 ? `${drinkOption[0]}` : "";

          return (
            <article key={id} className="modal-item">
              <div className="modal-menuItem">
                <img src={img} alt={`${category}-img`} className="single-img" />
                <div className="modal-title">
                  <h3>{title}</h3>
                  <span>{selectDrinkOption}</span>
                </div>
              </div>
              <div className="hot-iced">
                {drinkOption.map((drink) => {
                  return (
                    <button
                      key={drink}
                      name={drink}
                      className={`order-${drink}  active-${selectDrinkOption}`}
                      onClick={(e) => {
                        addDrinkType(e.target.name);
                        setSelectDrinkOption(e.target.name);
                      }}
                    >
                      {drink}
                    </button>
                  );
                })}
              </div>
              <div className="modal-info">
                <div className="coffee-row">
                  <h4>사이즈</h4>
                  <div className="btn-row">
                    {coffeeSize.map((coffee, index) => {
                      return (
                        <button
                          key={coffee}
                          className={`${
                            value === index
                              ? "coffee-size active-size"
                              : "coffee-size"
                          }`}
                          name={coffee}
                          onClick={(e) => {
                            addCoffeeSize(e.target.name);
                            setValue(index);
                          }}
                        >
                          {coffee}
                        </button>
                      );
                    })}
                  </div>
                </div>
                <div className="coffee-row">
                  <h4>수량</h4>
                  <div className="btn-row">
                    <button
                      className="minus"
                      onClick={() => modalQuantity("dec", "amount")}
                    >
                      <AiOutlineMinus />
                    </button>
                    <h3>{amount}</h3>
                    <button
                      className="plus"
                      onClick={() => modalQuantity("inc", "amount")}
                    >
                      <AiOutlinePlus />
                    </button>
                  </div>
                </div>
                <div className="coffee-row">
                  <div className="coffee-option">
                    <h4>샷 추가</h4>
                    <h5>+500원</h5>
                  </div>
                  <div className="btn-row">
                    <button
                      className="minus"
                      onClick={() => modalQuantity("dec", "shot")}
                    >
                      <AiOutlineMinus />
                    </button>
                    <h3>{shot}</h3>
                    <button
                      className="plus"
                      onClick={() => modalQuantity("inc", "shot")}
                    >
                      <AiOutlinePlus />
                    </button>
                  </div>
                </div>
                <div className="coffee-row">
                  <div className="coffee-option">
                    <h4>아이스크림 추가</h4>
                    <h5>+500원</h5>
                  </div>
                  <div className="btn-row">
                    <button
                      className="minus"
                      onClick={() => modalQuantity("dec", "icecream")}
                    >
                      <AiOutlineMinus />
                    </button>
                    <h3>{icecream}</h3>
                    <button
                      className="plus"
                      onClick={() => modalQuantity("inc", "icecream")}
                    >
                      <AiOutlinePlus />
                    </button>
                  </div>
                </div>
                <div className="coffee-row">
                  <div className="coffee-option">
                    <h4>펄 추가</h4>
                    <h5>+500원</h5>
                  </div>
                  <div className="btn-row">
                    <button
                      className="minus"
                      onClick={() => modalQuantity("dec", "pearls")}
                    >
                      <AiOutlineMinus />
                    </button>
                    <h3>{pearls}</h3>
                    <button
                      className="plus"
                      onClick={() => modalQuantity("inc", "pearls")}
                    >
                      <AiOutlinePlus />
                    </button>
                  </div>
                </div>
              </div>

              <div className="modal-price">
                <h3>가격 : {itemTotal}원</h3>
              </div>
            </article>
          );
        })}
        <div
          className="order-btn"
          // onClick={(e) => modalActionButton(e.target.name)}
        >
          <button
            name="cancel"
            className="order-close-btn"
            onClick={(e) => modalActionButton(e.target.name)}
          >
            취소
          </button>
          <button
            name="complete"
            className="order-select-btn"
            onClick={(e) => {
              modalActionButton(e.target.name);
            }}
            disabled={!selectDrinkOption}
          >
            선택완료
          </button>
        </div>
      </div>
    </section>
  );
};

export default ModalItem;
