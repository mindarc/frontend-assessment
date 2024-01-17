import { useEffect, useRef, useState } from 'react'

function AccordionItem({ data, onclick, isExpanded }) {
  const accordionItemRef = useRef()
  useEffect(() => {
    if (isExpanded)
      accordionItemRef.current.style.height = accordionItemRef.current.scrollHeight + 'px'
  }, [isExpanded])

  return (
    <div className={`accordion__item${isExpanded ? ' active' : ''}`} onClick={onclick}>
      <button className="accordion__toggle">{data.title}</button>
      <div
        ref={accordionItemRef}
        className="accordion__content"
        style={isExpanded ? { height: accordionItemRef.current?.scrollHeight } : { height: '0px' }}
      >
        <div
          className="accordion__content-inner"
          dangerouslySetInnerHTML={{ __html: data.content }}
        ></div>
      </div>
    </div>
  )
}

export function Accordion({ data }) {
  const [activeIndex, setActiveIndex] = useState(0)

  const handleItemClick = (index) => {
    setActiveIndex((prevActiveIndex) => (prevActiveIndex !== index ? index : null))
  }

  return (
    <div className="accordion">
      {data.map((accordion, index) => (
        <AccordionItem
          key={index}
          data={accordion}
          isExpanded={activeIndex === index}
          onclick={() => handleItemClick(index)}
        />
      ))}
    </div>
  )
}
