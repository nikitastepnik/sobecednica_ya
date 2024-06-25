import './ClipLoaderComponent.scss'
import React from "react";
import {ClipLoader} from "react-spinners";

export function ClipLoaderComponent() {
    return (
        <div className={"clip-loader-container"}><ClipLoader color={"#36d7b7"}></ClipLoader></div>
    )
}
