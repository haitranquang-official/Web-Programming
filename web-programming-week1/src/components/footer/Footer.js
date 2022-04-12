import React from "react";
import AboutUs from "./aboutus/AboutUs";
import Map from "./map/MyMap";
import "./Footer.css"

export default function Footer() {
    return (
        <div className = "footer">
            <AboutUs />
            <Map />
        </div>
    )
}