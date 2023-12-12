import './dataReading.css';
import data from '../../assets/data.json';
import { useEffect } from 'react';

const DataReading = () => {
  useEffect(() => {
    const targetFirstAccordion = document.getElementById('collapse0');
    targetFirstAccordion?.classList.add('show');
  }, []);

  return (
    <div className="accordion" id="accordionExample">
      {data.map((section, i) => {
        const title = section.title;
        const content = section.content;
        const count = String(i);

        return (
          <div className="accordion-item" key={i}>
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${count}`}
                aria-expanded="true"
                aria-controls={`collapse${count}`}>
                {title}
              </button>
            </h2>

            <div id={`collapse${count}`} className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body">{content}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DataReading;
