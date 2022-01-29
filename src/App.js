import "./App.css";
import FAQsection from "./components/FAQs";
import Head from "./components/HeadSection";
import TopBlurb from "./components/TopBlurb";
import WaitWhat from "./components/WaitWhat";
import Peggy from "./components/Peggy";
// import Slideshow from "./components/Pictures";
import Slideshow2 from "./components/pics2";

function App() {
  return (
    <>
      <Head />
      <TopBlurb />
      {/* <Slideshow /> */}
      <Slideshow2 />
      <WaitWhat />
      <Peggy />
      <FAQsection />
    </>
  );
}

export default App;
