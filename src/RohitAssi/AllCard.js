import React, { useState } from "react";
import Card from "./Card";

export const AllCard = () => {
  const [cards, setCard] = useState([
    { mealType: "Vegetarian", mealName: "Vada-Paw", Calories: "100" },
    { mealType: "Non-Vegetarian", mealName: "Rawan-Thali", Calories: "4000" },
  ]);
  const card1 = [1, 2, 3, 4];
  return (
    <div>
      {cards.length > 0
        ? cards.map((item) => <Card card={item} />)
        : "No Item in Card"}
    </div>
  );
};

export default AllCard;
