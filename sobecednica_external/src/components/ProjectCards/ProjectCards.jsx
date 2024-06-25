import './ProjectCards.css'
import React from "react";
import {PROJECTS_APPLY} from "../../constants/endpoints";
import {OK_STATUS_CODE} from "../../constants/codeStatuses";
import {PopUpWrapper} from "../PopUp/ToastPopUp";
import {PROJECT_APPLY_SUCCESS, SOMETHING_WENT_WRONG} from "../../constants/userMsgs/commonMsgs";

function sendUserApplication(projectId, user_yandex_email, updateUserProjects) {
    let jsonData = JSON.stringify({'interviewer': user_yandex_email, 'project': projectId})
    fetch(PROJECTS_APPLY, {
        method: "POST",
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
        body: jsonData,
    }).then(response => {
        if (response.status === OK_STATUS_CODE) {
            PopUpWrapper('success', PROJECT_APPLY_SUCCESS)
            updateUserProjects()
        } else {
            PopUpWrapper('error', SOMETHING_WENT_WRONG)
        }
    })
}

function getUserProjectsComponents(projectsInfo, user_yandex_email, updateUserProjects) {
    let result = [];
    let row = [];
    for (let i = 0; i < projectsInfo.length; i++) {
        const project = projectsInfo[i];
        let projectName = project.name;
        if (project.is_user_applied === false) {
            row.push(
                <div className={"project-card-block-background-active"}
                     id={project.id}
                     onClick={() => sendUserApplication(project.id, user_yandex_email, updateUserProjects)}>
                    <div className={"project-by-interviewer-status-container-active"}>
                        <div className={"by-interviewer-status"}>●Подать заявку</div>
                    </div>
                    <div className={"project-header-active"}>{projectName}</div>
                </div>
            );
        } else {
            row.push(
                <div className={"project-card-block-background-disable"} id={project.id}>
                    <div className={"project-by-interviewer-status-container-disable"}>
                        <div className={"by-interviewer-status"} id={"application_send"}>✓Заявка подана!</div>
                    </div>
                    <div className={"project-header-disable"}>{projectName}</div>
                </div>
            );
        }
        if ((i + 1) % 3 === 0 || i === projectsInfo.length - 1) {
            result.push(<div className="projects-row">{row}</div>);
            row = [];
        }
    }
    return result;
}


export function ProjectCards({user_projects, user_yandex_email, updateUserProjects}) {
    let userProjects = getUserProjectsComponents(user_projects, user_yandex_email, updateUserProjects)
    return (
        <div className="ya-projects-container">
            <h1>Доступные проекты</h1>
            <div className={"projects-list"}>
                {userProjects}
            </div>
        </div>
    )
}

