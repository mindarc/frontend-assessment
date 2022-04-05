import React from "react";
import Data from "../data.json"
import CardPanel from "./CardPanel";
import parse from "html-react-parser"
import "./Card.css"

const CardGrid = () => {
    return (
        <div className="card-section">
            {
                Data.map((val, data) => {
                    return <CardPanel title={val.title} content={parse(val.content)}/>
                })
            }
        </div>
    )
}

export default CardGrid;