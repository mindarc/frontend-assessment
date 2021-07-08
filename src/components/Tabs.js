import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Link } from 'react-router-dom';

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  }
}));


const createMarkup = (content) => {
  return { __html: content };
}

const ShowTabs = (props) => {
  const classes = useStyles();
  const [data] = useState(props.data || []);
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
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

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          {data.map((item, i) => (
            <Tab key={i} label={item.title} {...a11yProps(i)} />
          ))}
          <Link to="/">
            <Tab key={data.length + 1} label="Exit" {...a11yProps(data.length + 1)} 
             style={exit}/>           
          </Link>
        </Tabs>
      </AppBar>
      {data.map((item, i) => (
        <TabPanel key={i} value={value} index={i}>
          <div dangerouslySetInnerHTML={createMarkup(item.content)} />
        </TabPanel>
      ))}

    </div>
  );
}
export default ShowTabs;
