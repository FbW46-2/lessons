import "./Users.scss";
import React, { useState, useEffect } from "react";

const usersData = [
  {
    name: "Tommy",
    email: "tommy@gmail.cm",
  },
  {
    name: "Pilar",
    email: "pilar@gmail.cm",
  },
];

export default function Users() {
  const [users, setUsers] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [test, setTest] = useState(true);
  const [test_2, setTest_2] = useState(false);

  console.log("isAdmin ==> ", isAdmin);
  console.log("test ==> ", test);

  useEffect(() => {
    console.log("useEffect one time ==> Mounting");
    setUsers(usersData);
  }, []);

  useEffect(() => {
    console.log("useEffect every time ==> Update");
  });

  useEffect(() => {
    console.log("useEffect on isAdmin ==> Update");
  }, [isAdmin]);

  useEffect(() => {
    console.log("useEffect on test ==> Update");
  }, [test]);

  useEffect(() => {
    console.log("useEffect on test and isAdmin ==> Update");
  }, [test, isAdmin]);

  return (
    <section className="Users">
      <div className="Container">
        <h2>Users</h2>
        <button onClick={() => setIsAdmin(!isAdmin)}>IsAdmin</button>
        <button onClick={() => setTest(!test)}>Test</button>
        <button onClick={() => setTest_2(!test_2)}>Test 2</button>
        <div className="UsersItems">
          {users &&
            users.map((user, i) => (
              <div className="UserCard" key={i}>
                <div>Email: {user.email}</div>
                <div>{user.name}</div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
