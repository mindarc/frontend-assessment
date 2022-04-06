import React from 'react';
import AccordionBootstrap from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';
import Data from "../../data.json"
import parse from "html-react-parser"
import "./Accordion.css"

const Accordion = (props) => {
  return (
    <div>
          <AccordionBootstrap className="accordion-container" defaultActiveKey={['Section 1']}>
              {
                Data.map((data) => {
                    return (
                      <AccordionBootstrap.Item eventKey={data.title}>
                        <AccordionBootstrap.Header>{data.title}</AccordionBootstrap.Header>
                        <AccordionBootstrap.Body>{parse(data.content)}</AccordionBootstrap.Body>
                      </AccordionBootstrap.Item>
                    ) 
                })
              }
          </AccordionBootstrap>
    </div>
  )
}

export default Accordion