import './StartPageArea.css'
import React, {useEffect, useState} from "react";
import {ButtonSubmit} from "../ButtonSubmitStartPage";
import {SendApplicationModal} from "../SendApplicationModal";

export function StartPageArea({checkAuth}) {
    const [openForm, setOpenForm] = useState(false);
    const [schema, setSchema] = useState(null);
    useEffect(() => {
        checkAuth(1, "ree")
        const fetchSchema = async () => {
            try {
                const schemaData = await require('./reg_form_schema.json');
                setSchema(schemaData);
            } catch (error) {
                console.error(error);
            }
        };
        fetchSchema();
    }, []);

    return (
        <div className={"page-start-main-container"}>
            <div className="heading-start-title">
                <img className={"heading-start-title-img"}
                     src={require("./heading.png")} alt={"Собеседуйте лучших будущих специалистов!"}
                />
            </div>
            <div className={"submit-button-reg-start-page"}>
                <SendApplicationModal
                    schema={schema}
                    open={openForm}
                    onClose={() => setOpenForm(false)}
                    checkAuth={checkAuth}
                />
                <ButtonSubmit type={"button"} text={"Подать заявку в \"Собеседницу\""} submitAction={setOpenForm}>
                </ButtonSubmit></div>

        </div>
    )
}