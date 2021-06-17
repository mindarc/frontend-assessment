import React, { useState } from 'react';
import { Card, CardBody, CardHeader, Collapse } from "reactstrap";

const Accordions = (props) => {
  const [data] = useState(props.data || []);
  const [openIndex, setOpenIndex] = useState(1);
  return (
    <React.Fragment>
      {data.map((item, index) => {
        const itemIndex = index + 1;
        const isOpen = openIndex === itemIndex;
        return (
          <Card >
            <CardHeader onClick={() => setOpenIndex(itemIndex)}>
              {item.title}
            </CardHeader>
            <Collapse isOpen={isOpen}>
              <CardBody>
                <div
                  dangerouslySetInnerHTML={{
                    __html: item.content
                  }}
                />
              </CardBody>
            </Collapse>
          </Card>
        )
      })}
    </React.Fragment>
  );
}

export default Accordions;
