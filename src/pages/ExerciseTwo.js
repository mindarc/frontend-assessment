import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Tab, Tabs } from "react-bootstrap";
import data from "../data/data.json"
import '../styles/components/exercise-two.scss';

export default function ExerciseTwo() {
  return (
    <div className="container mt-3">
      <div className="tabs">
        <Tabs variant="tabs" fill className="mb-2">
          {data.map((item, i) => (
            <Tab eventKey={`section-${i}`} title={item.title}>
              <div dangerouslySetInnerHTML={{__html: item.content}}></div>
            </Tab>
          ))}
        </Tabs>
      </div>

      <Accordion defaultActiveKey="section-0" className="is-mobile">
        {data.map((item, i) => (
          <AccordionItem eventKey={`section-${i}`}>
            <AccordionHeader>{item.title}</AccordionHeader>
            <AccordionBody>
              <div dangerouslySetInnerHTML={{__html: item.content}}></div>
            </AccordionBody>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}