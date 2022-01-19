import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import {
  Categories,
  SortPopup,
  PizzaBlock,
  PizzaLoadingBlock,
} from "../components";

import { addPizzaToCart } from "../redux/actions/cart";
import { setCategory, setSortBy } from "../redux/actions/filters";
import { fetchPizzas } from "../redux/actions/pizzas";

const categoryNames = [
  "Мясные",
  "Вегетарианские",
  "Гриль",
  "Острые",
  "Закрытые",
];
const sortItems = [
  { name: "популярности", type: "popular", order: "desc" },
  { name: "цене", type: "price", order: "desc" },
  { name: "алфавиту", type: "name", order: "asc" },
];

const Home = () => {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const { category, sortBy } = useSelector(({ filters }) => filters);
  const pizzasInCart = useSelector(({ cart }) => cart.items);

  React.useEffect(() => {
    dispatch(fetchPizzas(category, sortBy));
  }, [category, sortBy]);

  const onSelectCategory = React.useCallback(
    (categoryIndex) => dispatch(setCategory(categoryIndex)),
    []
  );

  const onSelectSortType = React.useCallback(
    (sortType) => dispatch(setSortBy(sortType)),
    []
  );

  const onAddPizzaToCart = React.useCallback(
    (pizza) => dispatch(addPizzaToCart(pizza)),
    []
  );

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategory={category}
          onCategoryClick={onSelectCategory}
          items={categoryNames}
        />
        <SortPopup
          activeSortType={sortBy.type}
          items={sortItems}
          onClickSortType={onSelectSortType}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? items.map((pizza) => (
              <PizzaBlock
                key={pizza.id}
                onAddPizza={onAddPizzaToCart}
                countInCart={
                  pizzasInCart[pizza.id] &&
                  pizzasInCart[pizza.id].items &&
                  pizzasInCart[pizza.id].items.length
                }
                {...pizza}
              />
            ))
          : Array(10)
              .fill(0)
              .map(() => <PizzaLoadingBlock key={uuidv4()} />)}
      </div>
    </div>
  );
};

export default Home;
