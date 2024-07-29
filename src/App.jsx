
import Header from "./Components/Header"
import Services from "./Components/Services"
import Certificates from "./Components/Certificates"
import PriceList from "./Components/PriceList"
import Footer from "./Components/Footer"
import AboutUs from "./Components/AboutUs"
import Form from "./Components/Form"
import Partners from "./Components/Partners"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function App() {
 

  return (
    <>
      <Header />
      {/* <Services /> */}
      <AboutUs />
      <Certificates />
      <PriceList />
      <Partners />
      <h2 className="section-title" id='cert' id='consultation' >Обратная связь</h2>

      <Form />
      <Footer />
    </>
  )
}

export default App
