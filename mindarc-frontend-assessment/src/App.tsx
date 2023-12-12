// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import './App.css';
import ContentTile from './components/contentTile/contentTile';
import Header from './components/header/header';

function App() {
  const contentTileArray = [1, 2, 3];

  return (
    <>
      <header className="header">
        <Header />
      </header>

      <body className="body">
        {contentTileArray.map((_, i) => (
          <ContentTile key={i} />
        ))}
      </body>
    </>
  );
}

export default App;
