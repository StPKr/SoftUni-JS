import About from "./components/About";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Chocolate from "./components/Chocolate";
import Offer from "./components/Offer";
import Client from "./components/Client";
import Contact from "./components/Contact";
import Info from "./components/Info";
import Footer from "./components/Footer";

function App() {

  return (
    <>
      <div className="main_body_content">
        <div className="hero_area">
          <Header />
          <Slider />
        </div >

        <About />
        <Chocolate />
        <Offer />
        <Client />
        <Contact />
        <Info />
      </div >
      <Footer />
    </>
  )
}

export default App
