import React from "react";
import './PageMain.css'
import {Header} from "../../components/Header";
import {ProjectCards} from "../../components/ProjectCards";
import {ClimbingBoxLoaderComponent} from "../../components/ClimbingBoxLoaderComponent/ClimbingBoxLoaderComponent";
import {CloackLoaderComponent} from "../../components/CloackLoaderComponent/CloackLoaderComponent";
import BeatingHeart from "../../components/BeatingHeart/BeatingHeart";
import {USER_PROJECTS} from "../../constants/endpoints";
import {OK_STATUS_CODE} from "../../constants/codeStatuses";

export class PageMain extends React.PureComponent {
    constructor(props) {
        super(props);
        this.clickLogoutButton = this.clickLogoutButton.bind(this)
        this.state = {
            user_projects: null
        }
        this.getUserProjects = this.getUserProjects.bind(this)
    }

    clickLogoutButton() {
        this.props.logout()
    }

    componentDidMount() {
        this.getUserProjects()
    }

    getUserProjects() {
        let params = new URLSearchParams();
        params.append('user_email', this.props.user_yandex_email)
        fetch(USER_PROJECTS + '?' + params, {
            method: "GET",
            credentials: 'include',
        }).then(response => {
            if (response.status === OK_STATUS_CODE) {
                response.json()
                    .then(data => {
                        this.setState({
                                user_projects: data
                            }
                        )
                    })
            }
        }).catch(err => {
            console.error(err)
        });
    }


    render() {
        if (this.props.is_user_logged_in === null || this.props.is_user_logged_in === false || this.props.user_status === null) {
            return null;
        }
        return (
            <div className={"page-area-container-main-page"}>
                <Header page={"pageMain"} clickLogoutButton={this.clickLogoutButton}
                        user_login={this.props.user_login}></Header>
                {this.props.user_status === "onReview" && (
                    <div className={"content-page-container-main-page"}>
                        <div className={"content-page-on-review-status"}>
                            <h1>Ваша заявка на рассмотрении!</h1>
                            <h3>Ожидайте :)</h3>
                            <div className={"on-review-loader"}>
                                <ClimbingBoxLoaderComponent></ClimbingBoxLoaderComponent>
                            </div>
                        </div>
                    </div>
                )}
                {this.props.user_status === "Активен" && (
                    <div className={"content-page-container-main-page"}>
                        <div className="ya-calendar-header-container">
                            <h1>Назначенные собеседования</h1>
                            <div className={"ya-calendar-link-to-full-view-container"}>
                                <a className={"ya-calendar-link-to-full-view"}
                                   href={`https://calendar.yandex.ru/embed/week?&layer_ids=${this.props.user_yandex_calendar_id}&tz_id=Europe/Moscow&layer_names=Календарь собеседований`}>
                                    <img alt="new-tab" width="24" height="24" data-nimg="1"
                                         src="https://yastatic.net/s3/lyceum/web/d21c976e1a1e07aa/_next/static/media/new-tab.a5e4915e.svg"></img>
                                </a>
                            </div>
                        </div>
                        <iframe
                            title={"Календарь собеседований"}
                            src={`https://calendar.yandex.ru/embed/week?&layer_ids=${this.props.user_yandex_calendar_id}&tz_id=Europe/Moscow&layer_names=Календарь собеседований`}
                            className={"ya-calendar"}
                        ></iframe>
                        {(this.state.user_projects !== null) && (
                            this.state.user_projects !== []
                        ) && <ProjectCards user_projects={this.state.user_projects}
                                           user_yandex_email={this.props.user_yandex_email}
                                           updateUserProjects={this.getUserProjects}
                        >
                        </ProjectCards>
                        }
                    </div>
                )}
                {this.props.user_status === "Успешно" && (
                    <div className={"content-page-container-main-page"}>
                        <div className={"content-page-on-review-status"}>
                            <h1>Спасибо за сотрудничество!</h1>
                            <h3>Вы внесли огромный вклад в развитие будущих талантов!</h3>
                            <h4>Вы можете подать заявку через
                                <a className={"link-to-support-form"}
                                   href="https://forms.yandex.ru/cloud/6678aa68d04688ab8953d61a/"> форму </a>
                                для повторной ручной активации вашего аккаунта</h4>
                            <div className={"on-success-ended-loader"}>
                                <BeatingHeart></BeatingHeart>
                            </div>
                        </div>
                    </div>
                )}
                {this.props.user_status === "Отклонен" && (
                    <div className={"content-page-container-main-page"}>
                        <div className={"content-page-on-review-status"}>
                            <h1>Ваша заявка была отклонена! :(</h1>
                            <h2>Не расстраивайтесь! :)</h2>
                            <h4>Вероятно у нас нет сейчас потребности в ваших навыках, но в будущем все может
                                измениться!</h4>
                            <div className={"on-declined-loader"}>
                                <CloackLoaderComponent></CloackLoaderComponent>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}


