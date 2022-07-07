import React from "react";
import "./card_1.css";
import meal from "./meal-1.jpg";
// import "../../public/meal-1.jpg";

export const Card = ({ card }) => {
  return (
    <div className="main-tag">
      <div className="card">
        <img className="img" src={meal} alt="meal image" />
        {/* <img
          className="img"
          src={process.evn.PUBLIC_URL + "meal-1.jpg"}
          alt="meal image"
        /> */}
        <div className="card-text">
          <div className="meal-tags">
            {/* <span className="sm-heading tag--vegetarian">VEGETARIAN</span> */}
            <span className="sm-heading tag--vegetarian">{card.mealType}</span>
          </div>
          {/* <p className="card-title">Japanese Gyozas</p> */}
          <p className="card-title">{card.mealName}</p>
          <ul className="card-attribute">
            <li className="card-text-item">
              <ion-icon className="meal-icon" name="flame-outline"></ion-icon>
              <span>
                {/* <strong>650</strong> calories */}
                <strong>{card.Calories}</strong> calories
              </span>
            </li>
            <li className="card-text-item">
              <ion-icon
                className="meal-icon"
                name="restaurant-outline"
              ></ion-icon>
              <span>
                <strong>74</strong> NutriScore
              </span>
            </li>
            <li className="card-text-item">
              <ion-icon className="meal-icon" name="star-outline"></ion-icon>
              <span>
                <strong>4.9</strong> rating(537)
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Card;
