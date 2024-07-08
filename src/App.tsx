import { useEffect, useState } from "react";
import TabComponent from "./components/TabComponent";
import BannerComponent from "./components/BannerComponent";
import { fetchData } from "./api/fetchData";
import "./styles/styles.scss";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData()
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      <BannerComponent />
      {data ? <TabComponent data={data} /> : <p>Loading data...</p>}
    </>
  );
}

export default App;
