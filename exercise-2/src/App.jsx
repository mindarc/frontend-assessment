import './App.css'
import data from '../data/data.json'
import { Tabs, Tab, TabPanel, TabsWrapper, TabsContent } from './components/Tabs'
import { useState } from 'react'
import { Accordion } from './components/Accordion'

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0)

  const handleClick = (e, value) => {
    setSelectedIndex(value)
  }

  return (
    <div className="content">
      <div className="for-desktop">
        <h1>Tabs</h1>
        <TabsWrapper>
          <Tabs selectedIndex={selectedIndex} onClick={handleClick}>
            {data.map((tab, index) => (
              <Tab key={index} value={index}>
                {tab.title}
              </Tab>
            ))}
          </Tabs>
          <TabsContent>
            {data.map((tab, index) => (
              <TabPanel key={index} value={index} selectedIndex={selectedIndex}>
                {tab.content}
              </TabPanel>
            ))}
          </TabsContent>
        </TabsWrapper>
      </div>
      <div className="for-mobile">
        <h1>Accordion</h1>
        <Accordion data={data} />
      </div>
    </div>
  )
}

export default App
