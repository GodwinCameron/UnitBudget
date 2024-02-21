import React from "react";
import Styles from "./Styles.welcomeBlock.module.scss";

const WelcomeBlock = (props) => {

    const hideWelcomeBlock = () => {
        document.querySelector(`.${Styles.welcomeBlock} p`).innerHTML = "Lift off!";
        document.querySelector(`.${Styles.welcomeBlock} button`).style.display = "none";
        document.querySelector(`.${Styles.welcomeBlock}`).style.height = "0.1px";
        document.querySelector(`.${Styles.welcomeBlock}`).style.width = "0.1px";
        document.querySelector(`.${Styles.welcomeBlock}`).style.fontSize = "0.1px";
        document.querySelector(`.${Styles.welcomeBlock}`).style.marginTop = "0px";

        props.appStart[1](true);
    }

    return (<>
        <div className={Styles.welcomeBlock}><p>Hi There!</p> 
            <button onClick={hideWelcomeBlock}>Let's get started</button>
        </div>
    </>);
}

export default WelcomeBlock;