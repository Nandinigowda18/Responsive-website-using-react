import Hero from "./Components/Hero/Hero";
import Nav from "./Components/Navbar/Nav";
import Program from "./Components/Program/Program";
import Title from "./Components/Title/Title";
import About from "./Components/About/About";
import Campus from "./Components/Campus/Campus";
import Testimonials from "./Components/Testimonials/Testimonial";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";


function App(){
  return(
    <>
    <Nav></Nav>
    <Hero></Hero>
    {/* passing props to access title anywhwre and also we can give diff title and header we want */}
    <Title subtitle='our program ' title= 'what we offer'/>
 
 <Program></Program>
 <About></About>
 <Title subtitle='galary' title= 'Campus Photos'/>
 <Campus></Campus>
 <Title subtitle='testimonials' title= 'What Student Says'/>
 <Testimonials></Testimonials>
 <Title subtitle='get in touch' title= 'Contact Us'/>
 <Contact></Contact>
 <Footer></Footer>


    </>
  );
}

export default App
