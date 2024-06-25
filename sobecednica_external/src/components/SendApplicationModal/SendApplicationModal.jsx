import {Button, Dialog, DialogActions, DialogContent, DialogTitle} from "@mui/material";
import React, {Suspense, useState} from "react";
import './SendApplicationModal.scss'
import {ClipLoaderComponent} from "../ClipLoaderComponent";
import swal from "sweetalert";
import Form from '@rjsf/mui';
import validator from "@rjsf/validator-ajv8";
import {convertFormDataToJson} from "../../utils/convertUtils/convertFormDataToJson";
import {POST_REGISTER_INTERVIEWER_ENDPOINT} from "../../constants/endpoints";
import {CREATED_CODE} from "../../constants/codeStatuses";
import {ACCOUNT_CREATED, SOMETHING_WENT_WRONG} from "../../constants/userMsgs/commonMsgs";
import {AUTH_TYPE_REGISTRATION} from "../../constants/authFormMsgs";


const dialogActionStyle = {p: '1.25rem', gap: '0.15rem'}


export function SendApplicationModal({
                                         schema,
                                         open,
                                         onClose,
                                         checkAuth,
                                     }) {
    const [responseStatus, setResponseStatus] = useState(null);
    const [isSubmitButtonDisabled, setSubmitButtonDisabled] = useState(false);

    function handleClickOnSubmitButton() {
        setSubmitButtonDisabled(true);
        setTimeout(() => {
            setSubmitButtonDisabled(false);
        }, 3500)
    }

    async function handleSubmit(jsonData) {
        fetch(POST_REGISTER_INTERVIEWER_ENDPOINT, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: jsonData
        }).then(
            response => {
                if (response.status === CREATED_CODE) {
                    swal(
                        ACCOUNT_CREATED
                    )
                    setResponseStatus(response.status)
                    checkAuth(responseStatus, AUTH_TYPE_REGISTRATION)
                } else {
                    swal(SOMETHING_WENT_WRONG, {
                            icon: "error",
                        }
                    )
                    setResponseStatus(response.status)
                }
            }
        ).catch(err => {
            swal(SOMETHING_WENT_WRONG, {
                    icon: "error",
                }
            )
            console.log(err)
        })
    }

    return (
        <Dialog open={open}>
            <DialogTitle className={"create-record-dialog-title"} textAlign="center">
                Заявка в "Собеседницу"
            </DialogTitle>
            <DialogContent>
                <Suspense fallback={<ClipLoaderComponent></ClipLoaderComponent>}>
                    <Form id={"send-application-form"} schema={schema} validator={validator}
                          showErrorList={"false"}
                          onSubmit={
                              async (data, event) => {
                                  handleClickOnSubmitButton()
                                  let jsonFormatData = convertFormDataToJson(data.formData)
                                  await handleSubmit(jsonFormatData)
                              }
                          }
                    >
                        <></>
                    </Form>
                </Suspense>
            </DialogContent>
            <DialogActions sx={dialogActionStyle}>
                <Button onClick={() => {
                    onClose()
                }
                }>Отменить</Button>
                <label htmlFor={"form-add-entry-id"} tabIndex="0">
                    <Button
                        style={{
                            backgroundColor: "#ec5f39",
                        }}
                        type={"submit"}
                        form={"send-application-form"}
                        variant="contained"
                        disabled={isSubmitButtonDisabled}
                    >Подать заявку
                    </Button>
                </label>
            </DialogActions>
        </Dialog>
    );
}

