import About from './components/about/About'
import Contact from './components/contact/Contact'
import Experience from './components/Experience/Experience'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Portfolio from './components/portfolio/Portfolio'
import Services from './components/services/Services'
import Testimonials from './components/testimonials/Testimonials'




const App = () => {
    return ( 
        <>
            <Header/>
            <main>
                <Nav/>
                <About/>
                <Experience/>
                <Services/>
                <Portfolio/>
                <Testimonials/>
                <Contact/>
            </main>
            <Footer/>
        </>
    );
}
 
export default App;