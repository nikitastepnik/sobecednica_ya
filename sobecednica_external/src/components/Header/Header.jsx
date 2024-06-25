import './Header.css'
import {Link} from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {APP_NAME} from "../../constants/constStrValues";
import React from "react";

export function Header(props) {
    if (props.page === "pageStart") {
        return (
            <div className={"header-container"}>
                <div className={"header-text"}>
                    {<Link to={"/"} className={"header-title-link"}>{APP_NAME}</Link>}
                    <div className={"header-main-content"} id={"start-page"}>
                        <div className={"header-buttons"}>
                            <Link className={"header-buttons-link"} to={"login"}>
                                <div className={"header-button"} id={"sign-up"}>Вход</div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else if (props.page === "pageAuth") {
        return (
            <div className={"header-container"}>
                <div className={"header-text"}>
                    {<Link to={"/"} className={"header-title-link"}>{APP_NAME}</Link>}
                    <div className={"header-main-content"} id={"auth-page"}>
                        <div className={"header-buttons"}>
                            <Link className={"header-buttons-link"} to={"/"}>
                                <div className={"header-button"} id={"go-to-start-page-button"}>Главная</div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else if (props.page === "pageMain") {
        return (
            <div className={"header-container"}>
                <div className={"header-text"}>{<Link to={"main"}
                                                      className={"header-title-link"}>{APP_NAME}</Link>}</div>
                <div className={"header-main-content"} id={"main-page"}>
                    <div className={"header-buttons"} id={"header-button-main-page"}>
                    </div>
                    <div className={"user-info"}>
                        <Link className={"link-to-profile-page"} to={{
                            pathname: '/profile',
                        }}>
                            <div className={"user-content"}>
                                <AccountCircleIcon className={"icon-account"}></AccountCircleIcon>
                                <div className={"user-login"}>{props.user_login}</div>
                            </div>
                        </Link>
                    </div>
                    <div className={"header-buttons"} id={"header-button-main-page"}>
                        <Link className={"header-buttons-link"} to={"/"}>
                            <div className={"header-button"} id={"logout-button"} onClick={event => {
                                props.clickLogoutButton(event)
                            }}>Выйти
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

        )
    } else if (props.page === 'pageProfile') {
        return (
            <div className={"header-container"}>
                <div className={"header-text"}>
                    {<Link to={"main"} className={"header-title-link"}>{APP_NAME}</Link>}
                </div>
                <div className={"header-main-content"} id={"profile-page"}>
                    <div className={"header-buttons"} id={"header-buttons-profile-page"}>
                        <Link className={"header-buttons-link"} to={"/"}>
                            <div className={"header-button"} id={"go-to-main-page-button"}>Главная</div>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}