import './App.css';
import React, {lazy, Suspense} from 'react';
import {PageStart} from "./pages/PageStart";
import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import {PageMain} from "./pages/PageMain";
import {GET_ACCOUNT_INFO_ENDPOINT, POST_LOGOUT_ENDPOINT} from "./constants/endpoints";
import {CREATED_CODE, OK_STATUS_CODE} from "./constants/codeStatuses";
import {ClipLoaderComponent} from "./components/ClipLoaderComponent";
import {AUTH_TYPE_REGISTRATION} from "./constants/authFormMsgs";


const PageAuth = lazy(() => import('./pages/PageAuth/PageAuth'));
const PageProfile = lazy(() => import('./pages/PageProfile/PageProfile'));


export class App extends React.Component {
    constructor(props) {
        super(props);
        this.checkAuth = this.checkAuth.bind(this)
        this.setNullItemLocalStorage = this.setNullItemLocalStorage.bind(this)
        this.logout = this.logout.bind(this)
        this.state = {
            is_user_logged_in: null,
            user_status: null,
            user_id: null,
            user_login: null,
            user_name: null,
            user_yandex_email: null,
            user_telegram: null,
            user_yandex_calendar_id: null,
            user_interviewed_subjects: null
        }
    }

    componentDidMount() {
        this.getUserInfo()
    }

    setNullItemLocalStorage(item) {
        window.localStorage.setItem(item, null)
    }

    getUserInfo() {
        fetch(GET_ACCOUNT_INFO_ENDPOINT, {
            method: "GET",
            credentials: 'include',
        }).then(response => {
            if (response.status === OK_STATUS_CODE) {
                response.json()
                    .then(data => {
                        this.setState({
                                user_id: data.id,
                                user_status: data.interviewer.status,
                                user_login: data.login,
                                user_name: data.interviewer.name,
                                user_yandex_email: data.interviewer.yandex_email,
                                user_telegram: data.interviewer.telegram,
                                user_yandex_calendar_id: data.interviewer.calendar_link,
                                user_interviewed_subjects: data.interviewer.interview_subjects
                            }, () => {
                                this.setState({
                                    is_user_logged_in: true
                                })
                            }
                        )
                    })
            } else {
                this.setState({
                    is_user_logged_in: false
                })
            }
        }).catch(err => {
            this.setState({
                is_user_logged_in: false
            })
            console.error(err)
        });

    }


    checkAuth(resStatus, authType) {
        if (authType === AUTH_TYPE_REGISTRATION) {
            this.getUserInfo()
        } else {
            if (Number(resStatus) === OK_STATUS_CODE || Number(resStatus) === CREATED_CODE) {
                this.getUserInfo()
            } else {
                this.setState(
                    {
                        is_user_logged_in: false
                    }
                )
            }
        }
    }

    logout() {
        this.setState(
            {
                is_user_logged_in: false
            }
        )
        window.localStorage.clear()
        window.sessionStorage.clear()
        fetch(POST_LOGOUT_ENDPOINT, {
            method: "POST",
            credentials: 'include'
        }).then(response => {

            }
        )
            .catch(err => console.log(err));
    }

    render() {
        return (
            <Router>
                <div className="App">
                    <main>
                        <Routes>
                            {
                                this.state.is_user_logged_in != null ? (
                                    this.state.is_user_logged_in ?
                                        (
                                            <>
                                                <Route path='main'
                                                       element={<PageMain
                                                           is_user_logged_in={this.state.is_user_logged_in}
                                                           user_login={this.state.user_login}
                                                           user_status={this.state.user_status}
                                                           user_yandex_email={this.state.user_yandex_email}
                                                           user_yandex_calendar_id={this.state.user_yandex_calendar_id}
                                                           logout={this.logout}
                                                       />}/>
                                                <Route path={'profile'}
                                                       element={
                                                           <Suspense fallback={
                                                               <ClipLoaderComponent></ClipLoaderComponent>}>
                                                               <PageProfile
                                                                   user_id={this.state.user_id}
                                                                   user_login={this.state.user_login}
                                                                   user_name={this.state.user_name}
                                                                   user_yandex_email={this.state.user_yandex_email}
                                                                   user_telegram={this.state.user_telegram}
                                                                   user_interviewed_subjects={this.state.user_interviewed_subjects}
                                                                   logout={this.logout}/>
                                                           </Suspense>
                                                       }/>
                                                <Route path='*' element={<Navigate to="main"/>}/>
                                            </>
                                        ) :
                                        (
                                            <>
                                                <Route path='login' element={
                                                    <Suspense><PageAuth
                                                        checkAuth={this.checkAuth}/>
                                                    </Suspense>
                                                }/>
                                                <Route path='main' element={<Navigate to="/"/>}/>
                                                <Route exact path='/'
                                                       element={<PageStart checkAuth={this.checkAuth}/>}/>
                                                <Route path='*' element={<PageStart checkAuth={this.checkAuth}/>}/>
                                            </>
                                        )
                                ) : null
                            }

                        </Routes>
                    </main>
                </div>
            </Router>
        )
    }
}

export default App;
