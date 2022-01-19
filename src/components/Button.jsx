import React from "react";
import classNames from "classnames";

const Button = ({ children, outline, onClick, className }) => {
  // const countOfRenders = React.useRef();

  // React.useEffect(() => {
  //   countOfRenders.current = 1;

  //   console.log(
  //     `Первый рендер. Имя кнопки: ${children}. Количество рендеров: ${countOfRenders.current}`
  //   );
  // }, []);

  // React.useEffect(() => {
  //   countOfRenders.current += 1;
  //   console.log(
  //     `UPDATE рендер. Имя кнопки: ${children}. Количество рендеров: ${countOfRenders.current}`
  //   );
  // });

  return (
    <button
      className={classNames("button", className, {
        "button--outline": outline,
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
