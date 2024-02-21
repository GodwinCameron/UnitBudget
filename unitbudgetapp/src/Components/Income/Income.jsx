import React, { useEffect, useState } from "react";
import Styles from "./Styles.income.module.scss";

const Income = (props) => {
  var title = props.title;
  const [Earners, setEarners] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    var pastedUsers = localStorage.getItem("users");
    var parsedUsers = JSON.parse(pastedUsers);
    if (parsedUsers === null) {
      setUsers([]);
    } else {
      setUsers(parsedUsers);
    }
  }, []);

  const handleAdd = (e) => {
    e.preventDefault();
    if (e.target[1].value === "" || e.target[2].value === "") {
      alert("Please fill in all fields");
      return;
    } else {
      console.log("Earner Added!");
      var pastedUsers = localStorage.getItem("users");
      var parsedUsers = JSON.parse(pastedUsers);
      if (parsedUsers === null) {
        parsedUsers = [];
      }
      var userAmount = parsedUsers.length;
      var user = {
        id: userAmount,
        type: e.target[0].value,
        name: e.target[1].value,
        amount: e.target[2].value,
      };
      parsedUsers.push(user);
      localStorage.setItem("users", JSON.stringify(parsedUsers));
      setUsers(parsedUsers);

      e.target[0].value = "Member";
      e.target[1].value = "";
      e.target[2].value = "";
    }
  };

  useEffect(() => {
    var pastedUsers = localStorage.getItem("users");
    var users = JSON.parse(pastedUsers);
    if (users === null) {
      setEarners([]);
    } else {
      setEarners(users);
    }
  }, [users]);

  const getUsers = () => {
    var pastedUsers = localStorage.getItem("users");
    var users = JSON.parse(pastedUsers);
    if (users === null) {
      return [];
    }
    console.log(users);
  };

  const handleClear = () => {
    localStorage.removeItem("users");
    setEarners([]);
  };

  return (
    <div className={Styles.main}>
      <button onClick={handleClear} className={Styles.last}>
        Reset
      </button>
      <form onSubmit={handleAdd} className={Styles.addForm}>
        <select className={Styles.input}>
          <option>Member</option>
          <option>Member</option>
          <option>Member</option>
          <option>Member</option>
          <option>Member</option>
        </select>
        <input className={Styles.input} type="text" placeholder="Member Name" />
        <input className={Styles.input} type="number" placeholder="0.00" />
        <button className={Styles.input}>Add</button>
      </form>
      <div className={Styles.earnersSection}>
        {Array.isArray(Earners) &&
          Earners.map((earner) => {
            return (
              <div className={Styles.earner} key={earner.id}>
                <div className={Styles.item}>
                  <p>
                    {earner.id + 1}. {earner.name}
                  </p>
                </div>
                <div className={Styles.last}>
                  <p>R {parseInt(earner.amount).toLocaleString()}.00</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Income;
