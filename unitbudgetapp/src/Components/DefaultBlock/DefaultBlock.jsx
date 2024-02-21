import React from "react";
import Styles from "./Styles.defaultBlock.module.scss";

const DefaultBlock = (props) => {

    var title = props.title
    var content = props.content

    return (
        <div className={Styles.main}>
            <div className={Styles.heading}>
                <h4>{title}</h4>
            </div>
            <div className={content}>
                {content}
            </div>
        </div>
    );
}

export default DefaultBlock;