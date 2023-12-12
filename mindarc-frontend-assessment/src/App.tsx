import { useEffect, useState } from 'react';
import './App.css';
import ContentTile from './components/contentTile/contentTile';
import DataReading from './components/dataReading/dataReading';
import Header from './components/header/header';

function App() {
  const contentTileArray = [1, 2, 3];
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobile]);

  return (
    <>
      <header className="header">
        <Header />
      </header>

      <section className="content-tiles">
        {contentTileArray.map((_, i) => (
          <ContentTile key={i} />
        ))}
      </section>

      <section className="data-reading">
        <DataReading isMobile={isMobile} />
      </section>
    </>
  );
}

export default App;
