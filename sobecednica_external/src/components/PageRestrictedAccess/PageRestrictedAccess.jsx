import './PageRestrictedAccess.scss'
import {ClimbingBoxLoaderComponent} from "../ClimbingBoxLoaderComponent/ClimbingBoxLoaderComponent";
import React from "react";
import {ButtonSubmit} from "../ButtonSubmit";
import {Link} from "react-router-dom";

export function PageRestrictedAccess(props) {
    return (
        <div className={"restricted-component-container"}>
            <div className={"text-page-restricted-container"}>
                <div className={"additional-header-text-page-restricted"}>{'403'}</div>
                <div
                    className={"additional-header-text-smaller-page-restricted"}>{'Недостаточно прав для просмотра'}</div>
                <div className={"additional-header-text-smaller-page-restricted"}>{props.additionalText}</div>
            </div>
            <ClimbingBoxLoaderComponent></ClimbingBoxLoaderComponent>
            <div className={"submit-button-page-restricted-container"}>
                <Link className={"link-to-main-page"} to={"/main"}>
                    <ButtonSubmit text={"Главная"}></ButtonSubmit>
                </Link>
            </div>
        </div>
    )
}