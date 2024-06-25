import './CloackLoaderComponent.scss'
import React from "react";
import {PacmanLoader} from "react-spinners";

export function CloackLoaderComponent() {
    return (
        <div className={"box-loader-container"}><PacmanLoader color={"#ec5f39"} size={125}></PacmanLoader>
        </div>
    )
}