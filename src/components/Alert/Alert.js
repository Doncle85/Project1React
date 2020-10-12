import React from "react";

const alert = (props) => {
        const mesClasseCss = `alert ${props.typeAlert}`
        return <div className={mesClasseCss} role="alert">
                {props.children}
        </div>

};

export default alert;

