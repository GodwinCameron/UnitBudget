import React from "react";
import Styles from "./Styles.totals.module.scss";

const Totals = (props) => {
    // check if local storage is empty

    if (localStorage.getItem("users") === null) {
        return (
            <div className={Styles.main}>
                <h2>R 0</h2>
                Total income before tax
            </div>
        );
    }
    else {

  var users = localStorage.getItem("users");
  var parsedUsers = JSON.parse(users);

  var totalIncomBeforeTax = 0;

  for (var i = 0; i < parsedUsers.length; i++) {
    totalIncomBeforeTax += parseFloat(parsedUsers[i].amount);
  }

  return (
    <div className={Styles.main}>
      {totalIncomBeforeTax > 0 ? <h2>R {totalIncomBeforeTax}</h2> : null}
      Total income before tax
    </div>
  );
    }
};

export default Totals;
