import "./App.css";
import FAQsection from "./components/FAQs";
import Head from "./components/HeadSection";
import TopBlurb from "./components/TopBlurb";
import WaitWhat from "./components/WaitWhat";
import Peggy from "./components/Peggy";
import PictureGrid from "./components/Pictures";

function App() {
  return (
    <>
      <Head />
      <TopBlurb />
      <PictureGrid />
      <WaitWhat />
      <Peggy />
      <FAQsection />
    </>
  );
}

export default App;
