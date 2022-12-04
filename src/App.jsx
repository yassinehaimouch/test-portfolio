import Header from './sections/header/Header';
import Nav from './sections/navbar/Nav';
import About from './sections/about/About';
import Experience from './sections/experinece/Experinece';
import Services from './sections/services/Services';
import Testimonials from './sections/testimonials/Testimonials';
import Contact from './sections/contact/Contact';
import Footer from './sections/footer/Footer';
import Portfolio from './sections/portfolio/Portfolio';

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience/>
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default App