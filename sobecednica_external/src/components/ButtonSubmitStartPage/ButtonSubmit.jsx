import './ButtonSubmit.css'
import React from "react";


export function ButtonSubmit(props) {
    return (
        <div id={"SubmitButtonStartPage"}>
            <div className={"text-button-submit-start-page"}>
                <input className={"input-submit-button-start-page"} type="submit" value={props.text}
                       onClick={() => props.submitAction(true)}
                />
            </div>
        </div>
    )
}