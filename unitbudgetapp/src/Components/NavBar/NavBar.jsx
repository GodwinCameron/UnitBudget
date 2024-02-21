import React from "react";
import Styles from "./Styles.navBar.module.scss";

const NavBar = () => {
    return (
        <div className={Styles.main}>
            <div className={Styles.content}>
                UnitBudget
            </div>
        </div>
    );
}

export default NavBar;