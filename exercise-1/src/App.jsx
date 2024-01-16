import { Hero } from './components/Hero'

function App() {
  return (
    <main>
      <Hero
        desktopImage="https://via.placeholder.com/1920x650"
        mobileImage="https://via.placeholder.com/600x600"
        title="Hello Developer!"
        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit"
        className="text-white"
      />
    </main>
  )
}

export default App
