import '../styles/components/_card.scss';
import { CardData } from "../data/CardData";
import { Col } from 'react-bootstrap';

export default function Card() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        {CardData.map((item, i) => i < 3 && (
          <Col sm={12} md={3} className="mt-5" key={i}>
            <div className="card">
              <img src={item.img} alt="" className="img-fluid rounded" />
              <div className="card__content">
                <p className="card__text">{item.text}</p>
                <a href={item.link} className="card__btn">READ MORE</a>
              </div>
            </div>
          </Col>
        ))}
      </div>
    </div>
  )
}