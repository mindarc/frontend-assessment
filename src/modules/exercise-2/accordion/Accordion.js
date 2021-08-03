import React from 'react';
import DOMPurify from 'dompurify';
import { makeStyles } from '@material-ui/core/styles';
import _Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(() => ({
  accordionSummary: {
    backgroundColor: '#3c82c7',
    color: '#ffffff',
  },
  icon: {
    color: '#ffffff',
  },
}));

export default function Accordion({ data = [] }) {
  const classes = useStyles();
  const [index, setIndex] = React.useState(0);
  return (
    <div>
      {data.map((item, i) => (
        <_Accordion
          key={i}
          expanded={index === i}
          onChange={(event, isExpanded) => setIndex(isExpanded ? i : -1)}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            classes={{
              root: classes.accordionSummary,
              expandIcon: classes.icon,
            }}
          >
            {item.title}
          </AccordionSummary>
          <AccordionDetails>
            <div
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(item.content),
              }}
            ></div>
          </AccordionDetails>
        </_Accordion>
      ))}
    </div>
  );
}
