import "./NavbarStyle.css";
import logo from "../image/cafeLogo.png";
import { useGlobalContext } from "../context";

const Navbar = () => {
  const { itemsList, showOrderDetails } = useGlobalContext();
  return (
    <nav>
      <div className="nav-container">
        <div className="nav-center">
          <img src={logo} alt="cafe-logo" className="cafe-logo" />
          <h3>cong-cafe</h3>
        </div>
        <div
          className={`${
            itemsList.length > 0
              ? "item-details show-item-details"
              : "item-details"
          }`}
        >
          <button onClick={showOrderDetails}>주문내역</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
