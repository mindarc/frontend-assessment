import { Card } from './components/Card'
import { Hero } from './components/Hero'

function App() {
  const cardContent = [
    {
      image: 'https://via.placeholder.com/400x300',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      buttonLabel: 'Read More',
      buttonUrl: '/',
      buttonStyle: 'info' // primary, secondary, tertiary ...
    },
    {
      image: 'https://via.placeholder.com/400x300',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.',
      buttonLabel: 'Read More',
      buttonUrl: '/',
      buttonStyle: 'info' // primary, secondary, tertiary ...
    },
    {
      image: 'https://via.placeholder.com/400x300',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',
      buttonLabel: 'Read More',
      buttonUrl: '/',
      buttonStyle: 'info' // primary, secondary, tertiary, info, etc...
    }
  ]

  return (
    <main>
      <Hero
        desktopImage="https://via.placeholder.com/1920x650"
        mobileImage="https://via.placeholder.com/600x600"
        title="Hello Developer!"
        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit"
        className="text-white"
      />
      <section className="section">
        <div className="container">
          <div className="row mb-n4">
            {cardContent.length > 0 &&
              cardContent.map((card, index) => (
                <div className="col-12 col-md-4 mb-4" key={index}>
                  <Card
                    image={card.image}
                    description={card.description}
                    buttonStyle={card.buttonStyle}
                    buttonLabel={card.buttonLabel}
                    buttonUrl={card.buttonUrl}
                  />
                </div>
              ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
