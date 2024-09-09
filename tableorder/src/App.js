import "./App.css";
import {
  Navbar,
  Category,
  MenuList,
  AddItems,
  ModalItem,
  SelectedOrderItem,
  OrderCompleted,
  OrderDetails,
} from "./components";
import { useGlobalContext } from "./context";

function App() {
  const { isAddItemOpen } = useGlobalContext();
  return (
    <div className={`${isAddItemOpen ? "main show-main" : "main"}`}>
      <Navbar />
      <Category />
      <MenuList />
      <AddItems />
      <ModalItem />
      <SelectedOrderItem />
      <OrderCompleted />
      <OrderDetails />
    </div>
  );
}

export default App;
