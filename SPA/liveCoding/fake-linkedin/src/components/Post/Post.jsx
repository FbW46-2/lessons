import React from "react";

export default function Post(props) {
  return (
    <div className="card m-3">
      <div className="card-body">
        <h5 className="card-title">{props.postData.title}</h5>
        <p className="card-text">{props.postData.body}</p>
      </div>
      <img src={props.postData.image} className="card-img-top" />
    </div>
  );
}
