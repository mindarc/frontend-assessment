import './App.css'
import tabs from '../data/data.json'
import { Tabs, Tab, TabPanel, TabsWrapper, TabsContent } from './components/Tabs'
import { useState } from 'react'

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0)

  const handleClick = (e, value) => {
    setSelectedIndex(value)
  }

  return (
    <div className="content">
      <h1>Tabs</h1>
      <TabsWrapper>
        <Tabs selectedIndex={selectedIndex} onClick={handleClick}>
          {tabs.map((tab, index) => (
            <Tab key={index} value={index}>
              {tab.title}
            </Tab>
          ))}
        </Tabs>
        <TabsContent>
          {tabs.map((tab, index) => (
            <TabPanel key={index} value={index} selectedIndex={selectedIndex}>
              {tab.content}
            </TabPanel>
          ))}
        </TabsContent>
      </TabsWrapper>
    </div>
  )
}

export default App
