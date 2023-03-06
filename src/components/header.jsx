import React from "react"
import logo from "../images/header-logo.svg"
import "../styles/header.css"

export default function Header() {
    return (
        <div className="header">
            <div className="logo-container" >
                <img src={logo} className="header__logo" alt="header-logo" />
                <h1 className="header__title">My travel journal.</h1>
            </div>
        </div>

    )
}