import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useReducer,
} from "react";

import data from "./data";
import reducer from "./reducer";

const initialState = {
  menus: data,
  count: 0, //한 테이블의 구매 수량
  isAddItemOpen: false, //아이템 선택시 오픈
  isOrderDetails: false, // 주문내역
  isModalOpen: false, //옵션 선택 모달 오픈
  isSelectedOrderOpen: false, //선택된 아이템 확인 오픈
  isOrderCompleted: false, //선택된 아이템 최종 오픈
  modalItem: [], //모달 아이템 들어갈곳
  selectedItems: [], //주문시에 전체 아이템
  itemsList: [], //주문내역 아이템들
  total: 0, // 결제 전 선택했을대 가격
  totalAmount: 0, //주문내역에 총 가격
  orderId: 0, //아이디
  table: 1, //테이블 번호
};
const AppContext = createContext();
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const toggleCategories = useCallback((category) => {
    if (category === "전체") {
      dispatch({ type: "CATEGORY_BTN", payload: { category, data } });
    } else {
      let tempItem = data.filter((item) => item.category === category);
      dispatch({ type: "CATEGORY_BTN", payload: { category, tempItem } });
    }
  }, []);

  const isShowModal = useCallback((id, category) => {
    // let count = state.count + 1;
    dispatch({ type: "SHOW_MODAL", payload: { id, category } });
  }, []);
  // const isCloseModal = useCallback(() => {
  //   dispatch({ type: "CLOSE_MODAL" });
  // }, []);
  //hot 또는 iced 선택
  const addDrinkType = useCallback((drinkType) => {
    dispatch({ type: "MODAL_COFFEE_DRINKTYPE", payload: drinkType });
  }, []);
  const addCoffeeSize = useCallback((size) => {
    dispatch({ type: "MODAL_COFFEE_SIZE", payload: size });
  }, []);

  const modalQuantity = useCallback((type, addType) => {
    dispatch({ type: "MODAL_QUANTITY", payload: { type, addType } });
    // dispatch({ type: "TOTAL_ITEMS_PAYMENT" });
  }, []);

  const modalActionButton = useCallback(
    (type) => {
      let tempId = state.orderId + 1;
      dispatch({ type: "MODAL_ACTION_BUTTON", payload: { type, tempId } });
    },
    [state.orderId]
  );
  const selectedItemRemove = useCallback((orderId) => {
    dispatch({ type: "SELECTED_REMOVE", payload: orderId });
  }, []);
  const selectedAllClear = useCallback(() => {
    dispatch({ type: "SELECTED_ALL_CLEAR" });
  }, []);
  const selectedOrderItems = useCallback(() => {
    dispatch({ type: "SELECTED_ORDER_ITEMS" });
  }, []);
  /*선택된 아이템 주문내역*/
  const selectedBack = useCallback(() => {
    dispatch({ type: "SELECTED_BACK" });
  }, []);
  /*테스팅 */
  const selectedAmount = useCallback((id, type) => {
    dispatch({ type: "SELECTED_AMOUNT", payload: { id, type } });
  }, []);
  const orderCompleted = useCallback(() => {
    dispatch({ type: "ORDER_COMPLETED" });
  }, []);
  const finalCompletedOrder = useCallback(() => {
    dispatch({ type: "FINAL_COMPLETED_ORDER" });
  }, []);
  const showOrderDetails = useCallback(() => {
    dispatch({ type: "SHOW_ORDER_DETAILS" });
  }, []);
  const closeOrderDetails = useCallback(() => {
    dispatch({ type: "CLOSE_ORDER_DETAILS" });
  }, []);
  useEffect(() => {
    if (
      state.selectedItems.length > 0 &&
      state.selectedItems.itemTotal !== state.total
    ) {
      dispatch({ type: "TOTAL_ITEMS_PAYMENT" });
    }
  }, [state.selectedItems, state.total]);
  useEffect(() => {
    if (
      state.itemsList.length > 0 &&
      state.itemsList.itemTotal !== state.totalAmount
    ) {
      dispatch({ type: "TOTAL_ORDER_DETAILS_PAYMENT" });
    }
  }, [state.itemsList, state.totalAmount]);
  return (
    <AppContext.Provider
      value={{
        ...state,
        toggleCategories,
        isShowModal,
        addCoffeeSize,
        modalQuantity,
        addDrinkType,
        modalActionButton,
        selectedItemRemove,
        selectedAllClear,
        selectedOrderItems,
        selectedBack,
        selectedAmount,
        orderCompleted,
        finalCompletedOrder,
        showOrderDetails,
        closeOrderDetails,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);

export { AppContext, AppProvider };
