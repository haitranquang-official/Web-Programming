import React from "react";
import './Header.css'
import Navbar from "./navbar/Navbar";

export default function Header() {
    return (
        <div className="header">
            <p>PRIDE OF HANOI</p>
            <Navbar />
        </div>
    )
}