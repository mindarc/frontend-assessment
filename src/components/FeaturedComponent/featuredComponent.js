import { useEffect, useState } from "react"
import data from "../../data.json";
import Accordion from 'react-bootstrap/Accordion';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import parse from "html-react-parser";
import { Container } from "react-bootstrap";
import image from "../../assets/images/content.png"

function Featured() {
    const [screenSize, setScreenSize] = useState(window.innerWidth)
    useEffect(() => {
        function handleWidth() {
            setScreenSize(window.innerWidth)
        }
        window.addEventListener("resize", handleWidth)
        return () => {
            window.removeEventListener("resize", handleWidth)
        }
    }, [])

    return (
        <section className="featured mx-auto mb-5">
            <Container>
            {screenSize > 767 ?
                <Tabs
                defaultActiveKey="Section 1"
                id="item-tab"
                className="my-4 pt-3"
                >
                {data.map((tab, id) => (    
                    <Tab key={id} className="col-12 col-md-4 p-4 text-center border rounded" eventKey={tab.title} title={tab.title}>
                        <img className="mb-3" src={image} alt={tab.title} /> 
                        <>{parse(tab.content)}</>
                        <div className="mt-4 pb-2">
                            <a className="featured__read-more-btn py-2 px-3 text-uppercase font-weight-bold" href="#read-more">Read More</a>
                        </div>
                    </Tab>    
                ))}
                </Tabs>
            :
                <Accordion className="mt-5 border rounded" defaultActiveKey="Section 1">
                    {data.map((tab, id) => {
                        return (
                        <Accordion.Item key={id} eventKey={tab.title}>
                            <Accordion.Header className="card-header p-0 pb-2">{tab.title}</Accordion.Header>
                            <Accordion.Body className="p-3">
                                <>{parse(tab.content)}</>
                            </Accordion.Body>
                        </Accordion.Item>
                        )})}
                </Accordion> 
            }
            </Container>
        </section>
    )
}

export default Featured