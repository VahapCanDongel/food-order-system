import Categories from "@/components/Categories";
import Extras from "@/components/Extras";
import Foods from "@/components/Foods";
import { useState } from "react";

export default function Dashboard() {
  const [category_visbility, setCategoryVisibility] = useState(false);
  const [food_visbility, setFoodVisibility] = useState(false);
  const [extra_visbility, setExtraVisibility] = useState(false);

  const categoriesClick = () => {
    setCategoryVisibility(true);
    setExtraVisibility(false);
    setFoodVisibility(false);
    console.log(category_visbility, food_visbility, extra_visbility);
  };
  const foodsClick = () => {
    setCategoryVisibility(false);
    setExtraVisibility(false);
    setFoodVisibility(true);
  };
  const extrasClick = () => {
    setCategoryVisibility(false);
    setExtraVisibility(true);
    setFoodVisibility(false);
  };

  return (
    <div className="w-full h-screen flex">
      {/* Navigation */}
      <div className="flex flex-col w-[10%] h-full  border-r-[2px] border-teal-400 justify-evenly items-center">
        <button
          className="text-xl rounded-md text-white p-2 w-[150px] text-center bg-teal-400"
          onClick={categoriesClick}
        >
          Categories
        </button>
        <button
          className="text-xl rounded-md text-white p-2 w-[150px] text-center bg-teal-400"
          onClick={foodsClick}
        >
          Foods
        </button>
        <button
          className="text-xl rounded-md text-white p-2 w-[150px] text-center bg-teal-400"
          onClick={extrasClick}
        >
          Extras
        </button>
      </div>

      {category_visbility && <Categories />}
      {food_visbility && <Foods />}
      {extra_visbility && <Extras />}

      {(() => {
        if (
          category_visbility == false &&
          food_visbility == false &&
          extra_visbility == false
        ) {
          return (
            <div className="w-full h-full flex justify-center items-center text-xl">
              No option selected.
            </div>
          );
        }
      })()}
    </div>
  );
}
