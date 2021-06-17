import React from 'react'
import {
  Container,
  Row,
  Col
} from "reactstrap";
import Card from "../components/Card";
import Banner from '../components/Banner';

const cards = [
  {
    imageUrl: 'http://via.placeholder.com/400x300',
    content: 'Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.'
  },
  {
    imageUrl: 'http://via.placeholder.com/400x300',
    content: 'form of a document or a typeface without relying on meaningful content.'
  },
  {
    imageUrl: 'http://via.placeholder.com/400x300',
    content: 'Lorem ipsum is a placeholder text commonly used to document or a typeface without relying on meaningful content.'
  }
]

const ExerciseOne = () => {
  return (
    <div className="exercise__one">
      <Banner
        title="Hello Developer"
        description="Lorem ipsum is a placeholder text commonly used to demonstrate the visual form"
        desktopImageUrl="http://via.placeholder.com/1920x650"
        mobileImageUrl="https://via.placeholder.com/600x600"
      />
      <Container className="exercise__one--body">
        <Row xs="1" md="3">
          {cards.map((card, index) => {
            return (
              <Col key={index}>
                <Card
                  imageUrl={card.imageUrl}
                  content={card.content}
                />
              </Col>
            )
          })}
        </Row>
      </Container>
    </div>
  );
}

export default ExerciseOne;