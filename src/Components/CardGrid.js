import React from "react";
import Data from "../data.json"
import CardPanel from "./CardPanel";
import parse from "html-react-parser"
import "./Card.css"

const CardGrid = () => {
    return (
        <div className="card-section">
            {
                Data.map((data) => {
                    return <CardPanel title={data.title} content={parse(data.content)}/>
                })
            }
        </div>
    )
}

export default CardGrid;