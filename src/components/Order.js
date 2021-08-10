import React, { useState } from "react";
import burritoImg from "../images/burrito-bowl.jpg";
import Side from "./Side";

function Order(props) {
  let item = props.orders[0];
  const [isClicked, setIsClicked] = useState(false);
  // const [sides, setSides] = useState([]);

  function handleClick() {
    setIsClicked(!isClicked);
  }

  return (
    <div className="ui centered raised card">
      <div className="image">
        <img src={burritoImg} alt="burrito bowl" />
      </div>
      <div className="content">
        <b>Protein:</b>
        <br />
        {item.protein.length > 0 ? item.protein.join(", ") : "None"}
        <br />
        <b>Fillings:</b>
        <br />
        {item.fillings.length > 0 ? item.fillings.join(", ") : "None"}
        <br />
        <b>Toppings:</b>
        <br />
        {item.toppings.length > 0 ? item.toppings.join(", ") : "None"}
        <br />
      </div>
      <div className="extra content">
        {item.sides.length > 0 ? (
          <button className="ui button small" onClick={handleClick}>
            View Sides
          </button>
        ) : (
          <p>No sides</p>
        )}

        {/* this is just a shortcut to writing state.isClicked ? <Side sides={props.sides} /> : null */}
        {isClicked && <Side sides={item.sides} />}
      </div>
    </div>
  );
}

export default Order;
