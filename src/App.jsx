import Banner from "./components/Banner";
import Blog from "./components/Blog";
import TabsOrAccordion from "./components/TabAccordion/TabsAccordion";

function App() {
  return (
    <>
      <Banner />
      <Blog />
      <TabsOrAccordion />
      <div class="container mb-5">
        <b>
          Explain why the result of `('b' + 'a' + + 'a' + 'a').toLowerCase()` is
          `banana`.{" "}
        </b>{" "}
        <br />
        Anwer: converting the string into number resulting into NAN which is why
        the result is ba NAN a plus lowercase method equal "banna"
      </div>
    </>
  );
}

export default App;
