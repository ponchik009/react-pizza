import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

const Categories = React.memo(({ activeCategory, items, onCategoryClick }) => {
  // console.log("categoies render");

  return (
    <div className="categories">
      <ul>
        <li
          onClick={() => onCategoryClick(null)}
          className={activeCategory === null ? "active" : ""}
        >
          Все
        </li>
        {items &&
          items.map((category, index) => (
            <li
              onClick={() => onCategoryClick(index)}
              key={`${category}_${index}`}
              className={classNames({
                active: activeCategory === index,
              })}
            >
              {category}
            </li>
          ))}
      </ul>
    </div>
  );
});

Categories.propTypes = {
  activeCategory: PropTypes.number,
  items: PropTypes.arrayOf(PropTypes.string),
  onCategoryClick: PropTypes.func,
};

Categories.defaultProps = {
  activeCategory: null,
  items: [],
};

export default Categories;
