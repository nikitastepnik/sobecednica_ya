import './PageNotFound.scss'
import {ClimbingBoxLoaderComponent} from "../ClimbingBoxLoaderComponent/ClimbingBoxLoaderComponent";
import React from "react";
import {ButtonSubmit} from "../ButtonSubmit";
import {Link} from "react-router-dom";

export function PageNotFound(props) {
    return (
        <div className={"not-found-component-container"}>
            <div className={"text-page-not-found-container"}>
                <div className={"additional-header-text-page-not-found"}>{'404'}</div>
                <div
                    className={"additional-header-text-smaller-page-not-found"}>{'Запрашиваемая страница не найдена'}</div>
                <div className={"additional-header-text-smaller-page-not-found"}>{props.additionalText}</div>
            </div>
            <ClimbingBoxLoaderComponent></ClimbingBoxLoaderComponent>
            <div className={"submit-button-page-not-found-container"}>
                <Link className={"link-to-main-page"} to={"/main"}>
                    <ButtonSubmit text={"Главная"}></ButtonSubmit>
                </Link>
            </div>
        </div>
    )
}