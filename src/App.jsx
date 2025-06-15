import Banner from "./components/Banner"
import Expert from "./components/Expert"
import Newsletter from "./components/Newsletter"
import Experience from "./components/Experience"

const App = () => {
  return (
    <div className="relative">
      <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover">
        <source src="BG1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10">
        <Banner />
        <Expert />
        <Experience />
        <Newsletter />
      </div>
    </div>
  );
};


export default App
