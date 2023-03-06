import Navbar from "./components/Navbar";
import Herocontainer from "./components/Herocontainer";
import Support from "./components/Support";
import Services from "./components/Services";
import Platform from "./components/Platform";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
     < Navbar/>
     <Herocontainer/>
     <Support/>
     <Services/>
    <Platform/>
    <Pricing/>
    <div className='w-screen h-screen bg-white'> </div>
    <Footer />
    </div>
  );
}

export default App;
