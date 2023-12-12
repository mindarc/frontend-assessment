import './App.css';
import ContentTile from './components/contentTile/contentTile';
import DataReading from './components/dataReading/dataReading';
import Header from './components/header/header';

function App() {
  const contentTileArray = [1, 2, 3];

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
        <DataReading />
      </section>
    </>
  );
}

export default App;
