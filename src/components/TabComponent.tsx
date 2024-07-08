import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Accordion from "react-bootstrap/Accordion";
import { useEffect, useState } from "react";
import placeholder from "../assets/images/content.png";

interface ITabData {
  title: string;
  content: string;
}

interface IComponent {
  data: ITabData[];
}

const TabComponent = ({ data }: IComponent) => {
  const [expanded, setExpanded] = useState<boolean[]>(
    new Array(data.length).fill(false)
  );
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleExpand = (index: number) => {
    const newExpandedState = [...expanded];
    newExpandedState[index] = !expanded[index];
    setExpanded(newExpandedState);
  };

  const shouldExpand = (content: string) => {
    return content.split(/\s+/).length > 30;
  };

  return (
    <section className="tab-content container mx-auto px-3 pb-5">
      {screenWidth > 767 ? (
        <Tabs defaultActiveKey="0" className="mt-4">
          {data.map((item, index) => (
            <Tab key={index} eventKey={index.toString()} title={item.title}>
              <div className="container py-4">
                <div className="row">
                  <div className="col p-0">
                    <div className="col-4 border rounded shadow-sm py-4 px-3">
                      <img
                        src={placeholder}
                        alt="Placeholder"
                        className="figure-img img-fluid rounded"
                      />
                      <div className="tab-content--inner">
                        {expanded[index] || !shouldExpand(item.content) ? (
                          <>
                            <div
                              dangerouslySetInnerHTML={{ __html: item.content }}
                            />
                            {shouldExpand(item.content) && (
                              <button
                                className="d-flex justify-content-center mx-auto mt-2 font-bold py-2 px-3"
                                onClick={() => toggleExpand(index)}
                              >
                                {expanded[index] ? "READ LESS" : "READ MORE"}
                              </button>
                            )}
                          </>
                        ) : (
                          <>
                            <div
                              dangerouslySetInnerHTML={{
                                __html: `${item.content
                                  .split(/\s+/)
                                  .slice(0, 30)
                                  .join(" ")}...`,
                              }}
                            />
                            <button
                              className="d-flex justify-content-center mx-auto mt-2 font-bold py-2 px-3"
                              onClick={() => toggleExpand(index)}
                            >
                              READ MORE
                            </button>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Tab>
          ))}
        </Tabs>
      ) : (
        <Accordion className="mt-5 border rounded" defaultActiveKey="0">
          {data.map((item, index) => (
            <Accordion.Item key={index} eventKey={index.toString()}>
              <Accordion.Header>{item.title}</Accordion.Header>
              <Accordion.Body>
                <img
                  src={placeholder}
                  alt="Placeholder"
                  className="figure-img img-fluid rounded"
                />
                <div dangerouslySetInnerHTML={{ __html: item.content }} />
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      )}
    </section>
  );
};

export default TabComponent;
