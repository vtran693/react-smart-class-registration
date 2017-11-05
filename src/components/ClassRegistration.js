import React, { Component } from 'react';
//import logo from './logo.svg';
//import './styles/home-style.css';
import {Button, Navbar, Dr} from 'react-bootstrap/lib';

class ClassRegistration extends Component{
    render () {
        return (
            <form>
                <p>
                    <label htmlFor = "studentName">Name: Viet Tran --- G-Number: G:12345678</label>
                </p>
                <p>
                    <label htmlFor = "classLevel">Class Level: Graduate --- Student Type: Part-time</label>
                </p>
                <p>
                    <label htmlFor = "major">MS Software Engineering -- Emphasis: Web Apps Design and Development</label>
                </p>
                <p style ={{textAlign: "center"}}>
                    <font size = "6">CLASS REGISTRATION AND SUGGESTIONS</font>
                </p>
                <p>
                    <font size = "4">We have analyzed your major and emphasis with completed courses<br/>
                    Since you are only a part-time student, we suggest taking a maximum 2 classes per semester<br/>
                    Below is our class suggestion for Fall 2017<br/>
                    </font>
                </p>
            </form>
        )
    }
}

export {ClassRegistration};