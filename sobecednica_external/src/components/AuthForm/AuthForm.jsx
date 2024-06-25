import './AuthForm.css'
import {ButtonSubmit} from "../ButtonSubmit";
import React from "react";
import {Link} from "react-router-dom";
import {PLEASE_FILL_THIS_FIELD_MSG} from "../../constants/constUIMSgs/formHintsMsgs";
import {showHidePassword} from "../../utils/formUtils/passwordUtils";


export function AuthForm(props) {

    return (
        <>
            <div className={"auth-form-background"}>
                <form className={"auth-form"} action="" method="POST"
                      onInput={e => e.target.setCustomValidity('')}
                      onInvalid={e => e.target.setCustomValidity(PLEASE_FILL_THIS_FIELD_MSG)}
                      onSubmit={(event) => {
                          props.submitForm(event)
                      }
                      }>
                    <div className={"input-container"}>
                        <div className={"field-hint"}>Логин</div>
                        <input type="text" autoComplete="on" id="login" name={"login"} required/>
                    </div>
                    <div className={"input-container password"}>
                        <div className={"field-hint"}>Пароль</div>
                        <input type="password" autoComplete="on" id="password-input" name={"password"} required/>
                        <div className="password-control" onClick={
                            (target) => {
                                showHidePassword(target.target)
                            }
                        }></div>
                    </div>
                    <div className={"submit-button-auth"}>
                        <ButtonSubmit text={"Войти"}></ButtonSubmit></div>
                </form>
            </div>
            <div className={"auth-hint-form"}>
                <div>Не зарегистрированы?</div>
                <div><Link className={"auth-hint-form-link"} to={"/registration"}>Подайте заявку.</Link></div>
            </div>
        </>
    )
}