import React, {components} from 'react'
import './Home.css'
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import ContactUs from "./components/ContactUs"
import Footer from "./components/Footer"


function Home(){
    return(
        <>
        {/* <div>
            <img src={bootstrap_logo} className="logo" alt="Bootstrap logo"/>
        </div> */}
            {/* <Header/> */}
            {/* <Article/> */}
            {/* <FormAccount/> */}
            {/* <Form/> */}
            {/* <Button/> */}
            {/* {/* <Navbar/> *} */}

            <Navbar/>
            <Hero/>
            <ContactUs/>
            <Footer/>
            
    
        </>
    )
}

// class Home extends Component{
    
    
// }

export default Home