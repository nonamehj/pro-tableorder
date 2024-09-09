import "./MenuListStyle.css";
import Items from "./Items";
import { useGlobalContext } from "../context";
import { useEffect, useRef } from "react";

const MenuList = () => {
  const { menus, isAddItemOpen } = useGlobalContext();
  const valueRef = useRef();

  useEffect(() => {
    if (valueRef.current) {
      valueRef.current.scrollTop = 0;
    }
  }, [menus]);
  return (
    <section
      className={`${isAddItemOpen ? "section show-section" : "section"}`}
      ref={valueRef}
    >
      <div className="menulist-container">
        <div className="menulist-center">
          {menus.map((item) => {
            return <Items key={item.id} {...item} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default MenuList;
