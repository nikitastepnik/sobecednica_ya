import React from "react";
import './PageProfile.css'
import {Header} from "../../components/Header";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {ButtonSubmit} from "../../components/ButtonSubmit";
import {useLocation} from "react-router-dom";
import {BulletList} from "../../components/BulletList";
import TimeSlots from "../../components/TimeSlots/TimeSlots";
import {USER_TIME_SLOTS} from "../../constants/endpoints";
import {OK_STATUS_CODE} from "../../constants/codeStatuses";

class PageProfileClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user_time_slots: null
        }
    }

    componentDidMount() {
        this.getUserTimeSlots()
    }

    getUserTimeSlots() {
        let jsonData = JSON.stringify({'email': this.props.params.user_yandex_email})
        fetch(USER_TIME_SLOTS, {
            method: "POST",
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: jsonData
        }).then(response => {
            if (response.status === OK_STATUS_CODE) {
                response.json()
                    .then(data => {
                        this.setState({
                                user_time_slots: data
                            }
                        )
                    })
            }
        }).catch(err => {
            console.error(err)
        });
    }

    render() {
        return (
            <div className={"page-area-container"}>
                <Header page={"pageProfile"}></Header>
                <div className={"content-page-container-profile"}>
                    <div className={"user-data-container-inner"}>
                        <div className={"account-icon-profile-page"}><AccountCircleIcon></AccountCircleIcon>
                        </div>
                    </div>
                    <div className={"call-support-hint"}>
                        При обнаружении ошибки или наличии вопросов, заполните
                        <a className={"link-to-support-form-page-profile"}
                           href="https://forms.yandex.ru/cloud/6678aa68d04688ab8953d61a/"> форму </a>
                    </div>
                    <div className={"user-info-form-background"}>
                        <form className={"user-info-form"} action="" method="">
                            <div className={"additional-header-text-page-profile"}>
                                Учетные данные
                            </div>
                            <div className={"input-container"}>
                                <div className={"field-hint-page-profile"}>Логин</div>
                                <input type="text" id="login" className={"input-field-page-profile"}
                                       value={this.props.params.user_login} name={"login"}
                                       disabled={true}/>
                            </div>
                            <div className={"input-container"}>
                                <div className={"field-hint-page-profile"}>ФИО</div>
                                <input type="text" id="email" name={"email"}
                                       className={"input-field-page-profile"}
                                       value={this.props.params.user_name} disabled={true}/>
                            </div>
                            <div className={"input-container"}>
                                <div className={"field-hint-page-profile"}>Телеграм</div>
                                <input type="text" id="email" name={"email"}
                                       className={"input-field-page-profile"}
                                       value={"@" + this.props.params.user_telegram} disabled={true}/>
                            </div>
                            <div className={"input-container"}>
                                <div className={"field-hint-page-profile"}>Почта</div>
                                <input type="text" id="email" name={"email"}
                                       className={"input-field-page-profile"}
                                       value={this.props.params.user_yandex_email} disabled={true}/>
                            </div>
                            <div className={"input-container"}>
                                <div className={"field-hint-page-profile"}>Собеседуемые дисциплины:</div>
                                <BulletList elements={this.props.params.user_interviewed_subjects}></BulletList>
                            </div>
                        </form>
                        {(this.state.user_time_slots !== null) && (
                            JSON.stringify(this.state.user_time_slots) !== '{}'
                        ) && <TimeSlots user_time_slots={this.state.user_time_slots}></TimeSlots>
                        }

                    </div>
                    <div className={"submit-button-logout"} onClick={() => this.props.params.logout()}>
                        <ButtonSubmit text={"Выйти"}></ButtonSubmit></div>
                </div>
            </div>
        )
    }
}

const PageProfile = (props) => (
    <PageProfileClass params={props} location={useLocation()}/>
);

export default PageProfile