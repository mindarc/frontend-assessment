import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const Accordions = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    font: '500 0.875rem',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: '#3f51b5',
    color: 'white',
    fontWeight: '500',
    justifyContent: 'center',
    borderBottom: '1px solid rgb(220, 0, 78)',
    marginBottom: -1,
    textTransform: 'uppercase',
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

const createMarkup = (content) => {
  return { __html: content };
}

const ShowAccordions = (props) => {
  const [data] = useState(props.data || []);
  const [expanded, setExpanded] = useState('panel1');
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  const exit = {
    color: 'white',
    textTransform: 'uppercase',
    textDecoration: 'none',
    transition: 'fontSize .4s ease 0s',
    '&:hover': {
      color: 'golden',
      fontSize: '1rem',
    },
  };
  const nodeRef = React.useRef(null);

  const WrappedAccordions = React.forwardRef((props, ref) => {
    return <Accordions {...props} forwardedref={nodeRef} />;
  });

  const WrappedAccordionSummary = React.forwardRef((props, ref) => {
    return <AccordionSummary {...props} forwardedref={nodeRef} />;
  });

  const WrappedAccordionDetails = React.forwardRef((props, ref) => {
    return <AccordionDetails {...props} forwardedref={nodeRef} />;
  });


  return (
    <div>
      {data.map((item, i) => (
        <WrappedAccordions key={i} square expanded={expanded === i} onChange={handleChange(i)}>
          <WrappedAccordionSummary aria-controls={i} id={i}>
            <Typography ref={nodeRef}>{item.title}</Typography>
          </WrappedAccordionSummary>
          <WrappedAccordionDetails>
            <div>
              <div ref={nodeRef} dangerouslySetInnerHTML={createMarkup(item.content)} />
            </div>
          </WrappedAccordionDetails>
        </WrappedAccordions>
      ))}
      <WrappedAccordions key={data.length + 1} square>
        <WrappedAccordionSummary aria-controls={data.length + 1} id={data.length + 1}>
          <Link to="/">
            <Typography ref={nodeRef} style={exit}>Exit</Typography>
          </Link>
        </WrappedAccordionSummary>
      </WrappedAccordions>
    </div>
  );
}
export default ShowAccordions;