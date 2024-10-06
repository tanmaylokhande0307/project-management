import clsx from "clsx";
import React from "react";

type Props = {
  name: string;
  buttonComponent?: any;
  isSmallText?: boolean;
};

function Header({ name, buttonComponent, isSmallText = false }: Props) {
  return (
    <div className="item-center mb-5 flex w-full justify-between">
      <h1
        className={clsx(
          isSmallText ? "text-lg" : "text-2xl",
          "font-semibold dark:text-white",
        )}
      >
        {name}
      </h1>
      {buttonComponent}
    </div>
  );
}

export default Header;
