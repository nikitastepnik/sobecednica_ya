import React from 'react';
import {StartPageArea} from "../../components/StartPageArea";
import './PageStart.css'
import {Header} from "../../components/Header";

export class PageStart extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className={"page-area-container"}>
                <Header page="pageStart"></Header>
                <StartPageArea checkAuth={this.props.checkAuth}>
                </StartPageArea>
            </div>

        )
    }

}

