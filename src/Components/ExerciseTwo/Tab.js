
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Tabs from 'react-bootstrap/Tabs'
import parse from "html-react-parser"
import Data from "../../data.json"
import "./Tab.css"

const Tab = (props) => {
  return (
    <div className='tab-container'>
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
            {
                Data.map((data) => {
                    return <Tab className="tab--content" eventKey={data.title} title={data.title}> {parse(data.content)}</Tab>
                })
            }
        </Tabs>
    </div>
  )
}

export default Tab