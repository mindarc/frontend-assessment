import React from 'react'
import {
  Card,
  CardImg,
  CardText,
  CardHeader,
  CardBody,
  CardFooter,
  Button
} from "reactstrap";

const CustomCard = (props) => {
  return (
    <Card className="ccard">
      <CardHeader className="ccard__header">
        <CardImg
          src={props.imageUrl}
          alt="Card image cap"
        />
      </CardHeader>
      <CardBody>
        <CardText className="ccard__content">
          {props.content}
        </CardText>
      </CardBody>
      <CardFooter className="ccard__footer">
        <Button className="ccard__button">READ MORE</Button>
      </CardFooter>
    </Card>
  );
}

export default CustomCard;