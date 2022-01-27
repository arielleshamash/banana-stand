import "./App.css";
import FAQsection from "./components/FAQs";
import Head from "./components/HeadSection";
import TopBlurb from "./components/TopBlurb";
import WaitWhat from "./components/WaitWhat";
import Peggy from "./components/Peggy";
import Slideshow from "./components/Pictures";

function App() {
  return (
    <>
      <Head />
      <TopBlurb />
      <Slideshow />
      <WaitWhat />
      <Peggy />
      <FAQsection />
    </>
  );
}

export default App;
