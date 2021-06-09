import "./Card.scss";

function Card({ data }) {
  return (
    <div className="Card">
      <img src={data.img} alt="card image" />
      <p>{data.title}</p>
    </div>
  );
}

export default Card;
