import './ClimbingBoxLoaderComponent.scss'
import React from "react";
import {ClimbingBoxLoader} from "react-spinners";

export function ClimbingBoxLoaderComponent() {
    return (
        <div className={"box-loader-container"}><ClimbingBoxLoader color={"#ec5f39"} size={80}></ClimbingBoxLoader>
        </div>
    )
}