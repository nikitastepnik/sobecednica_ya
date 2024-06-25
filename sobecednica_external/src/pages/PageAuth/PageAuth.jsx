import './PageAuth.css'
import React from "react";

import {Header} from "../../components/Header";
import {AuthForm} from "../../components/AuthForm";

import {FAILED_STR_VALUE, WARNING_STR_VALUE,} from "../../constants/constStrValues";
import {POST_LOGIN_ENDPOINT} from "../../constants/endpoints";
import {PopUpWrapper} from "../../components/PopUp/ToastPopUp";
import {AUTH_TYPE_LOGIN, FAILED_LOGIN_OR_PASSWORD_MSG, WARNING_AUTH_MSG} from "../../constants/authFormMsgs";
import {SOMETHING_WENT_WRONG} from "../../constants/userMsgs/commonMsgs";
import {PLEASE_FILL_THIS_FIELD_MSG} from "../../constants/constUIMSgs/formHintsMsgs";
import {CREATED_CODE, OK_STATUS_CODE} from "../../constants/codeStatuses";

export default class PageAuth extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmitForm = this.handleSubmitForm.bind(this)
    }

    handleSubmitForm(event) {
        event.preventDefault()

        let login = event.target[0].value.trim()
        let password = event.target[1].value
        const data = new URLSearchParams();
        data.append('username', login) // 'username' is 'login' because of legacy causes
        data.append('password', password)
        if (login && password) {
            fetch(POST_LOGIN_ENDPOINT, {
                method: "POST",
                credentials: 'include',
                body: data,
            }).then(response => {
                if (response.status === OK_STATUS_CODE || response.status === CREATED_CODE) {
                    this.props.checkAuth(response.status, AUTH_TYPE_LOGIN)
                } else {
                    window.localStorage.setItem(AUTH_TYPE_LOGIN, FAILED_STR_VALUE)
                }
            }).then(() => {
                    if (window.localStorage.getItem(AUTH_TYPE_LOGIN) === FAILED_STR_VALUE) {
                        PopUpWrapper('error', FAILED_LOGIN_OR_PASSWORD_MSG).then(
                            () => window.localStorage.removeItem(AUTH_TYPE_LOGIN)
                        ).catch(
                            (err) => {
                                window.localStorage.removeItem(AUTH_TYPE_LOGIN)
                                PopUpWrapper('info', SOMETHING_WENT_WRONG)
                            }
                        )
                    } else if (window.localStorage.getItem(AUTH_TYPE_LOGIN) === WARNING_STR_VALUE) {
                        PopUpWrapper('warning', WARNING_AUTH_MSG).then(
                            () => {
                                window.localStorage.removeItem(AUTH_TYPE_LOGIN)
                            }
                        ).catch(
                            (err) => {
                                window.localStorage.removeItem(AUTH_TYPE_LOGIN)
                                PopUpWrapper('info', SOMETHING_WENT_WRONG)
                                console.log(err)
                            }
                        )
                    }
                }
            )
                .catch(err => {
                    PopUpWrapper('info', SOMETHING_WENT_WRONG)
                    console.log(err)
                });
        }
    }

    componentDidMount() {
        let inputFields = [...document.querySelectorAll('input')]
        for (let inputField of inputFields) {
            inputField.title = PLEASE_FILL_THIS_FIELD_MSG
        }
    }

    render() {
        return (
            <div className={"page-area-container"}>
                <Header page={"pageAuth"}></Header>
                <div className={"content-page-container"}>
                    <div className={"additional-header-text"}>Авторизация</div>
                    <AuthForm submitForm={this.handleSubmitForm}></AuthForm>
                </div>
            </div>
        )
    }

}
