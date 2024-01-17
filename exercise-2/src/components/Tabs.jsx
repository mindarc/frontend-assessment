export function Tab({ onClick, children, className }) {
  return (
    <button role="tab" onClick={onClick} className={className}>
      {children}
    </button>
  )
}

export function Tabs({ selectedIndex, onClick, children }) {
  return (
    <ul role="tablist" className="tab__menu list">
      {children.map((child) => {
        const { children, value } = child.props
        const handleClick = (event) => {
          onClick(event, value)
        }
        return (
          <li key={value}>
            <Tab
              onClick={handleClick}
              className={`tab__menu-btn${selectedIndex === value ? ' active' : ''}`}
            >
              {children}
            </Tab>
          </li>
        )
      })}
    </ul>
  )
}

export function TabPanel({ children, selectedIndex, value }) {
  return (
    <div
      role="tabpanel"
      dangerouslySetInnerHTML={{ __html: children }}
      className={`fade tab__content-inner${selectedIndex === value ? ' active ' : ''}`}
    ></div>
  )
}

export function TabsWrapper({ children }) {
  return <div className="tab-wrapper">{children}</div>
}

export function TabsContent({ children }) {
  return <div className="tab__content">{children}</div>
}
