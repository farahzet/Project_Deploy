import Header from "./components/Header"
import Form from "./components/Form"
import React, {components} from 'react'
import Button from "./components/Button"
import './Home.css'
import Article from "./components/Article"
import FormAccount from "./components/FormAccount"
import Caption from "./components/Caption"
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