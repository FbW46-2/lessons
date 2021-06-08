import "./Card.scss";
import cardImg from "../../../images/card.png";

function Card() {
  return (
    <div className="Card">
      <img src={cardImg} alt="card image" />
      <p>Card</p>
    </div>
  );
}

export default Card;
