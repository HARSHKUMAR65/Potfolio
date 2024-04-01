// import React from 'react'

import Banner from "./components/Banner"
import Cards from "./components/Cards"
import Expert from "./components/Expert"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Newsletter from "./components/Newsletter"
import Experience from "./components/Experience"

// function App() {
//   return (
//     <>
//     <Header/>
//     <Banner/>
//     <Expert/>
//     <Experience/>
//     <Newsletter/>
//     <Cards/>
//     <Footer/>
//     </>
//   )
// }

const App = () => {
  return (
    <div className="relative">
      <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover">
        <source src="BG1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10">
        <Header />
        <Banner />
        <Expert />
        <Experience />
        <Newsletter />
        <Cards />
        <Footer />
      </div>
    </div>
  );
};


export default App
