import './ButtonSubmit.css'
import React from "react";

export function ButtonSubmit(props) {
    return (
        <div id={"SubmitButton"}>
            <div className={"text-button-submit"}>
                <input className={"input-submit-button"} type="submit" value={props.text}/>
            </div>
        </div>
    )
}