import "./UsersApi.scss";
import React, { useState, useEffect } from "react";

export default function UsersApi() {
  const [users, setUsers] = useState();
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <section className="UsersApi">
      <div className="Container">
        <h2>Users Api</h2>

        <div className="UsersApiItems">
          {users &&
            users.map((user, i) => (
              <div className="UserApiCard">
                <div>{user.email}</div>
                <div>{user.name}</div>
                <div>{user.address.street + " " + user.address.zipcode}</div>
                <div>{user.address.city}</div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

/**
 fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => console.log(json))
 */
