import './App.css';
import HeroSection from './Components/HeroSection';
import Banana from './Components/Banana';
// Exercise 1 
import CardGrid from './Components/ExerciseOne/CardGrid';

// Exercise 2
import Tab from './Components/ExerciseTwo/Tab';
import Accordion from './Components/ExerciseTwo/Accordion';

function App() {
  const renderWidthCheck = () => {
    if (window.innerWidth <= 600){
      return <Accordion />
    }
    else {
      return <Tab />
    }
  }

  return (
    <div>
      <HeroSection />
      {renderWidthCheck()}
      {/* <CardGrid /> */}
      <Banana />
    </div>
  );
}

export default App;
