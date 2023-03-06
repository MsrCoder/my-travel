import React from "react";
import "../styles/cards.css"
import icon from "../images/pin_icon.svg"

export default function Cards(props) {

    return (
        <div>
            <div className="cards">
                <div>
                    <img src={props.data.imageUrl} className="cards__images" alt="fujimountain" />
                </div>
                <div className="cards__texts">
                    <img src={icon} className="pin__icon" alt="red pin icon" />
                    <span className="cards__location">{props.data.location}</span>
                    <span> <a href={props.data.googleMapsUrl} className="cards__mapsurl"> View on maps </a></span>
                    <span className="cards__title"><h1>{props.data.title}</h1></span>
                    <span><h5 className="cards__dates">{props.data.startDate + " - " + props.data.endDate} </h5></span>
                    <span><p className="cards__description">{props.data.description}</p></span>

                </div>
            </div>
            <hr />
        </div>
    )
}