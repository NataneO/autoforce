
import Home from '../../common/components/Home/Home';
import Header from '../../common/components/Header/Header';
import AboutUs from '../../common/components/AboutUs/AboutUs';
import OurVision from '../../common/components/OurVision/OurVision';
import Products from '../../common/components/Products/Products';
import WhosFollowing from '../../common/components/WhosFollowing/WhosFollowing';
import Press from '../../common/components/Press/Press';
import Footer from '../../common/components/footer/footer';
import Testimonials from '../../common/components/Testimonials/Testimonials';
import Contact from '../../common/components/Contact/Contact';



export default function LandingPage() {
    return (

        <>
        <Header/>
        <Home/>
        <AboutUs/>
        <OurVision/>
        <Products/>
        <WhosFollowing/>
        <Press/>
        <Contact/>
        <Testimonials/>
        <Footer/>
        </>
    )
}