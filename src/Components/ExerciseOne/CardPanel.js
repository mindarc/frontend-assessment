import { Card, Button } from "react-bootstrap";
import React from "react";
import "./Card.css"

const CardPanel = (props) =>{
    return(
            <div className="card__item">
                <Card className="card--content" style={{width: '18rem'}}>
                    <Card.Img className="card--image" src="./images/contentImages.png"></Card.Img>
                    <Card.Title className="card--title">{props.title}</Card.Title>
                    <Card.Text className="card--text">{props.content}</Card.Text>
                    <button className="card-button">READ MORE</button>
                </Card>
            </div>
    );
}

export default CardPanel;