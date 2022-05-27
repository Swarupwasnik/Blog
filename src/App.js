import React,{Component}from 'react';
import "./style.css";
import Header from './components/Header';
import Banner from './components/Banner';
import Footer from "./components/Footer";
import Contact from './Pages/Contact';


export class App extends Component{
  render(){
    return(
      <div>
                <Header/>
              <Footer/>
              <Banner/>
              <Contact/>  


      </div>
  
    )
  }
}
export default App;