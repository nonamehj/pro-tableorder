import React, { useState } from "react";
import "./CategoryStyle.css";
import data from "../data";
import { useGlobalContext } from "../context";
const allCategories = ["전체", ...new Set(data.map((item) => item.category))];

const Category = () => {
  const { toggleCategories } = useGlobalContext();
  const [menuValue, setMenuValue] = useState(0);
  return (
    <aside>
      <div className="sidebar-container">
        <h3 className="category-title">메뉴</h3>
        {allCategories.map((category, index) => {
          let position = "";
          if (menuValue === index) {
            position = "active";
          }
          return (
            <button
              key={category}
              className={`filter-btn ${position}`}
              onClick={() => {
                toggleCategories(category);
                setMenuValue(index);
              }}
            >
              {category}
            </button>
          );
        })}
      </div>
    </aside>
  );
};

export default Category;
